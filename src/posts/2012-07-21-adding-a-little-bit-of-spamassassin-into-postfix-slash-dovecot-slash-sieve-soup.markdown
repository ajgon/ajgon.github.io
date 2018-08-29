---
layout: post
title: "Adding a little bit of SpamAssassin into Postfix/Dovecot/Sieve soup"
date: 2012-07-21T12:16:00+02:00
author: ajgon
cover: "../images/covers/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup.jpg"
categories: Administration
path: /blog/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup
---

I was always prefering "stay in the shadows" policy in terms of email address.
I have two secondary emails (for spam I want to read, and for spam I want to be
sent into oblivion i.e. for "Register NOW to download this 2KB file" sites). My
primary e-mail was well guarded and given only to living people. Until one
company decided to show it to the whole world by putting it into WHOIS database
for my domain. Before I reacted, it was too late. And my little mail server
needed one more extension.

<!--more-->

I wanted to integrate it somehow with my existing configuration - so, when
message is parsed by spam filter, it needs to be filtered further by sieve.
Thanks to that, I can have full control over spam and even categorize it (yeah,
I'm a picky bastard ;)). Thankfully
[SpamAssassin](http://spamassassin.apache.org/) can do this, so I didn't have
to look further. I also decided to inlcude
[Pyzor](http://sourceforge.net/apps/trac/pyzor/),
[Razor](http://razor.sourceforge.net/) and
[DCC](http://www.dcc-servers.net/dcc/). No mercy!

## Installing packets

But first - necessary packets. Thankfully, debian has everything out of box,
except DCC.

```bash
apt-get install spamc spamassassin pyzor razor
```

Next is DCC, which has to be build manually:

```bash
groupadd dcc
useradd -g dcc -s /bin/false -d /var/dcc dcc
wget http://www.dcc-servers.net/dcc/source/dcc-dccproc.tar.Z
tar xzvf dcc-dccproc.tar.Z
cd dcc-dccproc-1.3.142
./configure --with-uid=dcc
make
make install
chown -R dcc:dcc /var/dcc
ln -s /var/dcc/libexec/dccifd /usr/local/bin/dccif
```

## Setting up SpamAssassin

The next step is to configure `spamd` to run as a daemon:

```bash
groupdd spamd
useradd -g spamd -s /bin/false -d /var/lib/spamassassin spamd
mkdir -p /var/lib/spamassassin
chown spamd:spamd /var/lib/spamassassin -R
```

`/etc/default/spamassassin`
```bash
# Spamassassin home
SAHOME="/var/lib/spamassassin"

# Where imap stores user emails
USERACCOUNTS="/home/vmail"

# Change to one to enable spamd
ENABLED=1

# Options
# See man spamd for possible options. The -d option is automatically added.

# SpamAssassin uses a preforking model, so be careful! You need to
# make sure --max-children is not set to anything higher than 5,
# unless you know what you're doing.
# For -A use the IP address of spamc client (probably IP of primary interface)
OPTIONS="--create-prefs -x --max-children 3 --username spamd --helper-home-dir ${SAHOME} -s ${SAHOME}/spamd.log --virtual-config-dir=${USERACCOUNTS}/%l@%d/spamassassin -A 192.168.1.1"

[...]
```

The `virtual-config-dir` allows us to have separate user preferences and bayes
databases for each virtual user. The next thing is to edit
`/etc/spamassassin/local.cf` file:

`/etc/spamassassin/local.cf`
```bash
[...]
# Save spam messages as a message/rfc822 MIME attachment instead of
# modifying the original message (0: off, 2: use text/plain instead)
report_safe 0
[...]

use_dcc 1
dcc_path /usr/local/bin/dccproc

use_pyzor 1
pyzor_path /usr/bin/pyzor

use_razor2 1
razor_config /etc/razor/razor-agent.conf
```

Afterwards, edit `/etc/spamassassin/v310.pre` and check that the DCC, Razor and
Pyzor plugins are enabled (DCC is disabled by default). After that, the only
thing left is to update SA databases and start it:

```bash
sa-update --no-gpg
/etc/init.d/spamassassin start
```

## Setting up postfix transport

From the postfix side all you have to do is change transport (I suggest to
create a new one - then, when something goes wrong you can easily switch back
to old working configuration) or `mailbox_command`. For transport, the magic
line looks like this:

`/etc/postfix/master.cf`
```bash
dovecot-spam   unix  -       n       n       -       -       pipe
    flags=DRhu user=vmail:vmail argv=/usr/bin/spamc -u ${recipient} -e /usr/lib/dovecot/deliver -d ${recipient}
```

And this is the line I've been looking for. SpamAssassin takes message, pushes
it through his intestines, adds headers, and output is pushed further to
`deliver` command. From that point, it can be taken by Sieve. To make this
work, don't forget to change the transport!

`/etc/postfix/main.cf`
```bash
mailbox_transport = dovecot-spam
```

Restart postfix:

```bash
/etc/init.d/postfix restart
```

## And finally... Sieve

After all of that, all you have to do is configure Sieve. For example like that
(_Junk_ is a folder which Thunderbird traditionally uses for spam, you can
change it of course):

`.dovecot.sieve`
```bash
if header :contains "X-Spam-Flag" ["YES"] { fileinto "Junk"; stop; }
```

To test it, just send an email to protected account and look into the headers.
You should see a SpamAssassin magic added there. To test filtering, use
[GTUBE](http://spamassassin.apache.org/gtube/) message format - your email
should land in Junk.

## Conclusion

I think this configuration will suit my needs. Probably it will get some
adjustments over time (like intelligent filters in SA and so on), and - when I
start to trust it fully - instead of moving into the Junk all spam will be
deleted. But for now, everything works like a charm :) If you experience any
problems, first look into `/var/lib/spamassassin/spamd.log` file - there is big
chance, that you'll find your answers there.

### Sources

* [http://ailoo.net/2009/11/integrate-spamassassin-into-postfix-dovecot/](http://ailoo.net/2009/11/integrate-spamassassin-into-postfix-dovecot/)
