---
id: f4cf8477-a1cf-4749-a8e9-a519eeba2d34
layout: post
title: "How to make gnupg2 to fall in love with Docker"
date: 2017-04-03T22:19:00+02:00
author: Igor Rzegocki
cover: "../images/covers/how-to-make-gnupg2-to-fall-in-love-with-docker.png"
tags:
 - administration
path: /blog/how-to-make-gnupg2-to-fall-in-love-with-docker/
---

While developing my [new replacement](https://www.github.com/wombatapp) of [self-hosted-mailserver](https://github.com/ajgon/self-hosted-mailserver),
I noticed a funny problem - I couldn't make gnupg2 to work
with docker non-interactively. At first, the problem was with an import:

```bash
$ gpg --import "/tmp/private.key"
Step 1/4 : FROM alpine
 ---> 4a415e366388
Step 2/4 : RUN apk add --no-cache wget gnupg
 ---> Using cache
 ---> 724679f224aa
Step 3/4 : ADD private.key /tmp/
 ---> Using cache
 ---> 49c8b89aecc7
Step 4/4 : RUN gpg --import /tmp/private.key
 ---> Running in 9a45499d851f
gpg: directory '/root/.gnupg' created
gpg: new configuration file '/root/.gnupg/dirmngr.conf' created
gpg: new configuration file '/root/.gnupg/gpg.conf' created
gpg: keybox '/root/.gnupg/pubring.kbx' created
gpg: /root/.gnupg/trustdb.gpg: trustdb created
gpg: key A7AD7E10789C6F1E: public key "testete <test@example.com>" imported
gpg: key A7AD7E10789C6F1E/F7886F60959E549E: error sending to agent: Not a tty
gpg: Total number processed: 1
gpg:               imported: 1
gpg:       secret keys read: 1
The command '/bin/sh -c gpg --import /tmp/private.key' returned a non-zero code: 2
```

You may notice `error sending to agent: Not a tty` error. This one was actually easy, there is `--batch` parameter
which forces gnupg2 to work in non-interactive mode:

```bash
$ gpg --batch --import "/tmp/private.key"
Step 1/4 : FROM alpine
 ---> 4a415e366388
Step 2/4 : RUN apk add --no-cache wget gnupg
 ---> Using cache
 ---> 724679f224aa
Step 3/4 : ADD private.key /tmp/
 ---> Using cache
 ---> 49c8b89aecc7
Step 4/4 : RUN gpg --batch --import /tmp/private.key
 ---> Running in 986fd9ae42c0
gpg: directory '/root/.gnupg' created
gpg: new configuration file '/root/.gnupg/dirmngr.conf' created
gpg: new configuration file '/root/.gnupg/gpg.conf' created
gpg: keybox '/root/.gnupg/pubring.kbx' created
gpg: /root/.gnupg/trustdb.gpg: trustdb created
gpg: key A7AD7E10789C6F1E: public key "testete <test@example.com>" imported
gpg: key A7AD7E10789C6F1E: secret key imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg:       secret keys read: 1
gpg:   secret keys imported: 1
 ---> ba9639723f2c
Removing intermediate container 986fd9ae42c0
Successfully built ba9639723f2c
```

But the bigger problem arrives, when we try to decrypt something with a password protected key
(to make codeblocks readable, I will only paste things which changed):

```bash
$ gpg -r test@example.com -d "/tmp/file.gpg" > "/tmp/file"
Step 5/6 : ADD file.gpg /tmp/
 ---> 434115276622
Removing intermediate container 0ee978044580
Step 6/6 : RUN gpg -r test@example.com -d /tmp/file.gpg > /tmp/file
 ---> Running in a254a182e0f0
gpg: encrypted with 2048-bit RSA key, ID F7886F60959E549E, created 2017-04-03
      "testete <test@example.com>"
gpg: public key decryption failed: Not a tty
gpg: decryption failed: No secret key
The command '/bin/sh -c gpg -r test@example.com -d /tmp/file.gpg > /tmp/file' returned a non-zero code: 2
```

Well, the most obvious thing to do is to add `--batch` again and hope this helps:

```bash
$ gpg --batch -r test@example.com -d "/tmp/file.gpg" > "/tmp/file"
Step 6/6 : RUN gpg --batch -r test@example.com -d /tmp/file.gpg > /tmp/file
 ---> Running in 66de260f1bf4
gpg: encrypted with 2048-bit RSA key, ID F7886F60959E549E, created 2017-04-03
      "testete <test@example.com>"
gpg: public key decryption failed: Not a tty
gpg: decryption failed: No secret key
The command '/bin/sh -c gpg --batch -r test@example.com -d /tmp/file.gpg > /tmp/file' returned a non-zero code: 2
```

Still the same error! But why? Wasn't `--batch` supposed to run gnupg2 in non-interactive mode? Well,
actually it was, and it did. But still it didn't know a password - I needed some way to pass it through. Thankfully,
gnupg2 supports an `PASSPHRASE` environmental variable:

```
$ PASSPHRASE="key-password" gpg --batch -r test@example.com -d "/tmp/file.gpg" > "/tmp/file"
Step 6/7 : ENV PASSPHRASE key-password
 ---> Running in 306b5791abcb
 ---> 0a3bc0bc1d76
Removing intermediate container 306b5791abcb
Step 7/7 : RUN gpg --batch -r test@example.com -d /tmp/file.gpg > /tmp/file
 ---> Running in 9311634f162b
gpg: encrypted with 2048-bit RSA key, ID F7886F60959E549E, created 2017-04-03
      "testete <test@example.com>"
gpg: public key decryption failed: Not a tty
gpg: decryption failed: No secret key
The command '/bin/sh -c gpg --batch -r test@example.com -d /tmp/file.gpg > /tmp/file' returned a non-zero code: 2
```

At this point I was puzzled - clearly something was still missing. There is a `GPG_TTY` env variable, but it won't
help much - passing it to a terminal when we can't provide user input does not bode well for success. And then it
hit me: it's not a gnupg2 which asks for a password - it's the pinentry application handled by the `gpg-agent` which
kicks in in a process. Unfortunately disabling a `gpg-agent` was not an option, as it's tightly integrated into
gnupg2 for some reason. Another possible thing was replacing the pinentry program to something else - but it was also
dead end. Every `pinetry` program which I found, required me to entry the password at some point.

Finally, after hours of googling and ripping my last hairs out, I found some post which was describing a
`--pinentry-mode loopback` option for gnupg2. Basically what it does, it wires password entering back to gnupg2.
Unfortunatelly it still needs to be provided (`PASSPHRASE` didn't work), but I felt I was close.

And it happened to be true. There is another parameter to gnupg2 `--command-fd` which expects a list of commands,
passed via given input. The input is identified by the number, so `--command-fd 0` meant STDIN. All which was left,
was passing the password AGAIN, this time via the pipe.

Eventually I ended up with this nice, and simple command:

```bash
echo "key-password" | PASSPHRASE="key-password" gpg --batch \
--pinentry-mode loopback --command-fd 0 -r test@example.com \
-d /tmp/file.gpg > /tmp/file
```

And voilla! It worked!

```bash
$ echo "key-password" | PASSPHRASE="key-password" gpg --batch --pinentry-mode loopback --command-fd 0 -r test@example.com -d "/tmp/file.gpg" > "/tmp/file"
Step 6/8 : ENV PASSPHRASE key-password
 ---> Using cache
 ---> 0a3bc0bc1d76
Step 7/8 : RUN echo "key-password" | gpg --batch --pinentry-mode loopback --command-fd 0 -r test@example.com -d /tmp/file.gpg > /tmp/file
 ---> Using cache
 ---> 0b7caaabda65
Step 8/8 : RUN cat /tmp/file
 ---> Running in 598331a9ea4e
test
 ---> d14ea6fe5958
Removing intermediate container 598331a9ea4e
Successfully built d14ea6fe5958
```

The drawback is that those switches were introduced in GPG 2.1, so you're going to need a fairly fresh version of
the app. But hey! We're talking cryptography here - you SHOULD use the most recent software available!

P.S. As a bonus, here is the full command for duplicity, for those folks, who want to build encrypted backups
in Docker containers:

```bash
echo "key-password" | PASSPHRASE="key-password" duplicity \
--gpg-options "--pinentry-mode loopback --command-fd 0" \
--encrypt-key "KEY-ID" /backup/source protocol://host/backup/destination
```
