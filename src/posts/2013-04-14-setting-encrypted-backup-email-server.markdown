---
layout: post
title: "Setting encrypted backup Email server"
date: 2013-04-14T13:34:00+02:00
author: ajgon
cover: "../images/covers/setting-encrypted-backup-email-server.jpg"
categories: Administration
path: /blog/setting-encrypted-backup-email-server
---

There is a popular Internet saying that people are divided into two groups -
those who make backups, and those who will. I strongly believe into that,
that's why despite that I trust my mailserver setup completely, I still want to
keep them in some other safe place. Probably somewhere, where somebody else
takes care of everything :) That's why I chose
[ZOHO MAIL](http://mail.zoho.com/) as my backup server.

<!--more-->

Mostly for three reasons:

* They have IMAP
* They have enough space for free
* They also provide a nice webmail

So my next task was to configure postfix in a way, that it will deliver all the
messages as it does currently, but also forward them to zoho.com. Of course I
wasn't THAT crazy, to send my private emails over the Internet as they are, so
I also needed some kind of encryption before that. It appeared that somebody
had the same problem, and there is a tool for that called
[gpg-mailgate](http://code.google.com/p/gpg-mailgate/). Unfortunately it's a
very unfinished application, and lots of things doesn't work (multipart
messages support, attachmenets encryption, extra email encryption and so on),
so I needed to do
[a little bit of extra hacking](https://github.com/ajgon/gpg-mailgate). And I
strongly recommend you, to use my version if you thinking about encrypting your
email out of the box. Ok, that's for the beginning - let's do some
configuration!

## Setting gpg

First thing is to install and configure a gpg account. I strongly recommend to
not to use your gpg keys (if you already have some), but create new, clean key.
Also, we need a new user in the file system for postfix to handle key support.
Lastly, gpg-mailgate comes with a Python library, which also needs to be
installed.

Install GPG:

```bash
apt-get install gpg
```

Create a gpg user and give him the key (don't forget to disable the password,
and set trust to ultimate - otherwise tour scripts will stop to ask about
confirmation - and eventually fail):

```bash
useradd -s /bin/false -d /var/gpg -M gpgmap
mkdir -p /var/gpg/.gnupg
chown -R gpgmap /var/gpg
chmod 700 /var/gpg/.gnupg
sudo -u gpgmap /usr/bin/gpg --gen-key --homedir=/var/gpg/.gnupg
sudo -u gpgmap gpg --edit-key your@key.email.com trust quit
```

## Setting gpg-mailgate

Install GnuPG Python library, and gpg-mailgate itself:

```bash
cd /root
git clone https://github.com/ajgon/gpg-mailgate.git
cd gpg-mailgate
cp -R GnuPG /usr/lib/python2.6
cp gpg-mailgate.py /usr/local/bin/gpg-mailgate.py
cp gpg-mailgate.conf.sample /etc/gpg-mailgate.conf
```

Config file is pretty explanatory - what you have to change is "domains"
parameter (put only domains, which you want to receive encrypted messages),
keyhome (set to `/var/gpg/.gnupg`) and keymap (map all the emails which should
receive encrypted content there - follow the hint in file). So all in all your
config file should look similar to this:

`/etc/gpg-mailgate.conf`
```ini
[default]
add_header = yes
domains = zoho.com

[gpg]
keyhome = /var/gpg/.gnupg

[logging]
file = /tmp/gpg-mailgate.log

[relay]
host = 127.0.0.1
port = 10028

[keymap]
email.which.will.receive.encrypted.content@zoho.com = 123456789ABCDEF
```

## Setting postfix

The last thing is postfix configuration which is (surprisingly) really easy,
just activate content filter in `main.cf` and add relay to `master.cf`. One
last thing is to add `X-GPG-*` headers to tell the script, which extra email
addresses we want to deliver messages encrypted. Normally gpg-mailgate encrypts
only messages to addresses that are configured in gpg-mailgate.conf file and
available in To/Cc/Bcc headers of original message. Unfortunatelly, we are
using a totally different zoho.com email intended only for backups - it will
never appear in original message headers, because it's not the recipient. To
make it appear - simply add `X-GPG-Encrypt-Cc` header to your message. So, the
configuration will present as follows:

`/etc/postfix/main.cf`
```bash
# gpg
header_checks = regexp:/etc/postfix/header_checks
content_filter = gpg-mailgate
```

`/etc/postfix/header_checks`
```txt
/^From: .*/ PREPEND X-GPG-Encrypt-Cc: email.which.will.receive.encrypted.content@zoho.com
```

`/etc/postfix/master.cf`
```bash
# gpg-mailgate
gpg-mailgate    unix    -       n       n       -       -       pipe
  flags= user=gpgmap argv=/usr/local/bin/gpg-mailgate.py

127.0.0.1:10028 inet    n       -       n       -       10      smtpd
        -o content_filter=
        -o receive_override_options=no_unknown_recipient_checks,no_header_body_checks
        -o smtpd_helo_restrictions=
        -o smtpd_client_restrictions=
        -o smtpd_sender_restrictions=
        -o smtpd_recipient_restrictions=permit_mynetworks,reject
        -o mynetworks=127.0.0.0/8
        -o smtpd_authorized_xforward_hosts=127.0.0.0/8
```

Don't forget to create `header_checks.db` and restart postfix.

```bash
postmap header_checks
/etc/init.d/postfix restart
```

And that's pretty much everything. Send yourself an email, and enjoy your new,
shiny and secure backup :)

### Sources

* [http://ultramegaman.wordpress.com/tag/gpg-mailgate/](http://ultramegaman.wordpress.com/tag/gpg-mailgate/)
