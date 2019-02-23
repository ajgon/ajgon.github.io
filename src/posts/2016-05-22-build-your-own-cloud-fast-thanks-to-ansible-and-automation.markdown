---
id: a306aa91-c90e-4cdb-a411-1245ac18cdad
layout: post
title: "Build Your Own Cloud Fast, Thanks to Ansible and Automation"
date: 2016-05-22T11:43:06+02:00
author: Igor Rzegocki
cover: "../images/covers/build-your-own-cloud-fast-thanks-to-ansible-and-automation.png"
tags:
 - administration
path: /blog/build-your-own-cloud-fast-thanks-to-ansible-and-automation/
---

Last year I wrote an [article about installing custom linux distro on Raspberry Pi 2](/blog/installing-custom-linux-on-raspberry-pi-2).
Since then I configured it as my personal cloud, with [email daemon](https://bit.ly/2LGNWiS),
[dropbox alternative](https://owncloud.org/), [webmail](https://roundcube.net/),
[backup system](https://bit.ly/2qrPX8W) and some other tools. However it appeared, that
configuration like that is a real SDCard killer (tons of small files), and in a past year
I had to replace it twice, each time redoing the whole configure &amp; install again.

This was always a real time consuming [PITA](https://www.netlingo.com/word/pita.php), so
I decided to automate the whole process, thus the [self-hosted-mailserver](https://github.com/ajgon/self-hosted-mailserver)
project was born.

I wrote it with "Keep it simple and secure" principle in mind. As it will be
used exclusively by the owner, I assumed he would use most recent versions of
software and dropped all legacy protocols (like SSL, TLS < 1.2 etc.).

## Preparation

First of all, you need ansible.

```bash
brew install ansible
```

Also if you haven't done it already, add your public SSH key file to authorized keys
of the root user on your Raspberry (or any other server) and set `PermitRootLogin`
to `true` (don't worry though, those scripts will take care of this security risk later on
and disable it).

```bash
export MACHINE_IP=<machine IP>
ssh root@${MACHINE_IP} 'mkdir /root/.ssh && chmod 700 /root/.ssh && touch /root/.ssh/authorized_keys && chmod 600 /root/.ssh/authorized_keys'
scp ~/.ssh/id_rsa.pub root@${MACHINE_IP}:/root/.ssh/authorized_keys
```

### Setting up GPG

If you want to use external backups, you need to install GPG on the server
(this bases on assumption, to NEVER store any private data remotely without encrypting
them first). Also, you need a GPG key (you can skip next step if you have one already).

#### Creating a GPG key

Refer to [GPG documentation](https://www.gnupg.org/documentation/) for more examples,
but in general all you have to do is invoke `gpg --gen-key` and answer its questions. Choose RSA,
4096 bits size, and never expiring key. Then export it and store it somewhere safe.
You will need it in a minute. Also take a note o the Key-Id property.

```bash
brew install gpg
gpg --gen-key
gpg --export -a -r email@used.to.create.key.com > raspberry.public
gpg --export-secret-key -a -r email@used.to.create.key.com > raspberry.private
gpg --list-keys | grep -B1 'ajgon@irgon.com' | grep pub | sed 's/.*\/\(.*\)\ .*/\1/'
# *The last command returns your Key-Id, note it somewhere as well.
```

## Configuration

To make those scripts work, you need to set some of user-based variables (like passwords, emails etc.).
Those variables are stored in `roles/*/vars/main.yml` files.

### roles/base/vars/main.yml

This one is pretty straightforward. The cloud uses MySQL as a database of choice, for email configuration,
web applications etc. Here you need to set up a mysql `root` user password. If you don't plan to ever use it
just type:

```bash
echo "mysql_root_password: \"$(pwgen 30 1)\"" > roles/base/vars/main.yml
```

### roles/duplicity/vars/main.yml

[Duplicity](https://duplicity.nongnu.org/) is a tool for automated backups.
It is known that all people can be divided into two groups: those who have never lost important data
and those who regularly perform data backups. This task, encrypts all the important
data (emails, owncloud files etc.) and stores them on WebDav-based remote (personally
I use [box.com](https://box.com)).

Here (besides the WebDav host, username and password) you need to put the GPG Key-Id which you
noted earlier, under the `encrypt_key` property.

Also, there is a VERY important parameter called `cache_directory`. For Raspberry it is crucial
to set it to somewhere outside of the microSD card - otherwise you will kill it pretty quick
(as I did... twice, before noticing this out).

If you don't want to set up the duplicity (or plan to do it later manually), just remove
this task from `main.yml` file which lives in root directory of the project.

### roles/maildb/vars/main.yml

First important service of our cloud - the mailserver. Since many things needs to be configured,
this file is most complicated. So let's go through it line by line.

* `postmaster_email` - Basically a local email which will receive all the mailer-daemon failure
  messages. Don't use some bizzare e-mail you never check here, since those messages are pretty
  important (your email may never reach the recipient, and you will never notice it if you don't
  check those warnings)
* `username`, `password` and `database` - Since whole accounts setup is stored in RDBMS, you need
  to put its credentials here. Don't use the root! You would probably never use this account,
  so it is save, to put some auto-generated random characters password here.
* `domains` - An array of domains you wish to serve in your server. Each item is a hash, consiting
  following keys:
  * `name` - the name of the domain (without user), i.e. for `user@example.com` it will be `example.com`.
  * `primary` - `yes` or `no`. A primary domain (in those scripts context) is a domain you wish to receive
    [Z-Push](https://z-push.org/) notifications from. If you configure only one domain (most common case),
    set it to true.
  * `users` - an array of email/password hashes which will become user accounts. Configure "real" accounts
    here only. There is a separate section for aliases.
    * `email` - user email - it's domain must match the domain name configured for this group, i.e.
      for given example, `user@example.com` is valid, while `user@example2.com` is not. If you wish
      to have different domains, configure separate `domains` groups for them.
    * `password` - a password for user email.
  * `aliases` - here you can configure aliases of the emails.
    * `from` - the name of the alias (full email). It must match the `domains` name (like user email).
    * `to` - destination email. This one can be any valid email (doesn't have to match the domain criteria)

### roles/owncloud/vars/main.yml` and `roles/roundcube/vars/main.yml

Configuration for both roundcube and owncloud is pretty straightforwrd. Remember, to use separate RDBMS
credentials for each one, and use non-admin user with ownCloud.

### roles/postfix/vars/main.yml

Here you can configure [a relay](https://en.wikipedia.org/wiki/Open_mail_relay). This is pretty useful
if your IP is on some kind of blacklist (which is typical for most Internet providers). Here you can
set up a non-blacklisted relay server which will process your email and deliver it to the destination.
This isn't a good option when it comes to privacy, but sometimes - the only one you might have.

### roles/nginx/vars/main.yml

As I mentioned - those scripts are written with security in mind. One of the features is
[HPKP](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning) enabled in a webserver - so you need provide
a SHA256 sum here of alternate SSL key (the primary will be calculated for you by the scripts).
HPKP is pretty broad topic, but you can [start here](https://scotthelme.co.uk/hpkp-http-public-key-pinning/)
if you need more details.

### roles/security/vars/main.yml

A configuration for all security related data. Currently it's just username, password and public key for
"user" account (as you should never login directly via root).

Also you can set here an email for all security-related reports. This email should live outside of the
server (for example on gmail or any other provider). The reason for this is, that when machine gets compromised
the local emails may be altered or broken. Of course, nothing prevents an attacker to disable this external
reporting as well, but at least you have this one extra layer of protection. It is also a good idea to set up
filtering rules on this external account, to send those messages back to your usual email. Thanks to that, you
will see them without accessing the external, while keeping them backed up there.

The last setting here is `strong_primes`. If you are setting your server on a strong machine (i.e. powerful
dedicated server etc.), you can set it to `true` and call it a day (and skip the rest of this paragraph).
However if you use some weak microcomputer (like Pi), it's better idea to set it to false and create those
primes manually on better machine (like your laptop). Otherwise your ansible deployment can take hours if not days.

#### Creating primes manually

First of all, take look on commands you need to invoke:

```bash
cat roles/*/tasks/main.yml | grep -B1 'when: security.strong_primes' | grep shell
```

You need to slightly alter them, as they normally invoked on remote environment, and use filepaths typical for there
(i.e. `/etc/ssh`). The simplest solution is to rename `/etc` to `/tmp` and fire them up with this context.
So for example:

```bash
mkdir /tmp/ssh /tmp/ssl
ssh-keygen -G /tmp/ssh/moduli.all -b 4096 && ssh-keygen -T /tmp/ssh/moduli.safe -f /tmp/ssh/moduli.all && mv /tmp/ssh/moduli.safe /tmp/ssh/moduli && rm /tmp/ssh/moduli.all
rm /tmp/ssh/ssh_host_*key* && ssh-keygen -t ed25519 -f /tmp/ssh/ssh_host_ed25519_key < /dev/null && ssh-keygen -t rsa -b 4096 -f /tmp/ssh/ssh_host_rsa_key < /dev/null && chmod 600 /tmp/ssh/ssh_host_*key"
openssl dhparam -out /tmp/ssl/dhparams.pem 4096
```

After some time, you will end up with `/tmp/ssh` and `/tmp/ssl` directories with proper keys. Just copy
them to the corresponding `/etc` directories on the server and you're set.

### SSL keys

Since all communication would (and should) be handled via SSL, you need to create proper certificates.
The easiest solution are [self signed ones](https://www.akadia.com/services/ssh_test_certificate.html),
but I strongly encourage you to use [StartSSL](https://www.startssl.com/) or
[Let's Encrypt](https://letsencrypt.org/) and issue yourself a valid, properly recognized certificate.

After you do this, it's pretty strightforward - put the private key to `roles/ssl/templates/private-this-machine.pem`
and the certificate chain to `roles/ssl/templates/certs-this-machine.pem`.

### roles/ddclient/templates/ddclient.conf.j2

[ddclient](https://sourceforge.net/p/ddclient/wiki/Home/) is a nice Perl script used to update dynamic DNS
entries for accounts on Dynamic DNS Network Service Provider. Thanks to it, if you have a dynamic IP
you can assign a domain to it, and keep it in sync any time when your IP changes. It supports
many providers, and I also included a Cloudflare patch. The template itself is pretty explanatory, but you
can also refer to the [ddclient documentation](https://sourceforge.net/p/ddclient/wiki/Home/#configuration).
If you don't want to use this feature (or have a Static IP), just remove `ddclient` from the main `main.yml` file.

## Deploy

Phew! After all this configuration, you are ready to deploy. First, you need to set an
[Ansible Inventory](https://docs.ansible.com/ansible/intro_inventory.html) files. Since we set our public
key as authorized on the remote host, all we have to put in this file is:

```ini
[local]
1.2.3.4 ansible_ssh_user=root
```

where `1.2.3.4` is remote IP of your machine obviously. And then, we can fire it up!

```bash
ansible-playbook -s -i ansible-inventory main.yml
```

Hopefully everything go well, and you will end up with your self-hosted, automated cloud.

### Post-deploy

We still have one thing to do - install gpg and import our keys, to make duplicity actually work. So put your
private and public key on the server, and invoke (on remote):

```bash
apt-get install gnupg
gpg --import raspberry.public
gpg --allow-secret-key-import --import raspberry.private
gpg --list-keys --fingerprint --with-colons | sed -E -n -e 's/^fpr:::::::::([0-9A-F]+):$/\1:6:/p' | gpg --import-ownertrust
```

## Conclusion

Well, that was a lot of configuration. Thankfully, you have to do this only once. After that, just archive all those files,
encrypt and store them somewhere safe. If you ever need to redo those steps again, almost everything would be ready and
prepared, and firing up a new instance will be as simple as typing a few commands.
