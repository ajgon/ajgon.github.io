---
id: 35b53ac0-d5a5-4321-82b4-ad81a08f8e44
layout: post
title: "Setting server-side mail filtering with sieve and dovecot"
date: 2012-07-16T11:43:00+02:00
author: Igor Rzegocki
cover: "../images/covers/setting-server-side-mail-filtering-with-sieve-and-dovecot.jpg"
tags:
  - administration
path: /blog/setting-server-side-mail-filtering-with-sieve-and-dovecot
---

Leaving GMail was of the best decisions for my mail I made recently. But also a
most problematic one. I needed to set all the MTA architecture myself. I tested
many solutions out there and finally ended with postfix + dovecot
configuration.  It appears that this is most stable and unproblematic one (at
least for now).

<!--more-->

The next feature I really missed is Gmail Server-Side mail filtering. I've got
a bunch of machines that access my mail server (computers, phones etc.) and I
receive lots emails from lists, friends and organizations every day. Setting
filtering for all of that once, was a big pain. Setting it multiple times on
all the machines, and then be consistent about it was enormous P.I.T.A. So I
started looking for solution for that problem and found
[Sieve](https://bit.ly/2LHCioh) (and its
[dovecot plugin](https://wiki.dovecot.org/LDA/Sieve)).

Ok, so how to do it? Firstly, as for dovecot 1.2.x, sieve was completely
rewritten as a new plugin. It can be obtained from
[rename-it.nl website](https://bit.ly/2MC58eS). At the time of
writing this post, there is no `*.deb` package in repositories, so I have to
build it manually. I also had to install `dovecot-dev` package, because of
sieve configurator, which needs a `dovecot-config` file.

```bash
wget http://www.rename-it.nl/dovecot/1.2/dovecot-1.2-sieve-0.1.19.tar.gz
tar -xzvf dovecot-1.2-sieve-0.1.19.tar.gz
cd dovecot-1.2-sieve-0.1.19
./configure --with-dovecot=/usr/lib/dovecot/ --prefix=/usr
make
sudo make install
```

After that, it was a time to enable sieve plugin in dovecot.
`/etc/dovecot/dovecot.conf`
```bash
protocol lda {
    ...
    # Support for dynamically loadable plugins. mail_plugins is a space separated
    # list of plugins to load.
    mail_plugins = sieve # ... other plugins like quota
    # add those directives when you expect problems - huge time saver!
    debug = yes
    log_path = /var/log/dovecot-lda.log
    info_log_path = /var/log/dovecot-lda.log
}
```

There is a possibility to make some adjustments for plugin itself (filters
paths and so on), but I didn't find it necessary. However, if you want to - you
can check them on
[LDA/Sieve documentation page](https://wiki.dovecot.org/LDA/Sieve/Dovecot).
After that, just restart postfix and everything is set.

The last step is setting all the filters properly. They should be stored in
`~/.dovecot.sieve` (if you use `mailbox_command`) or in
`/home/vmail/user@domain/.dovecot.sieve` (if you use `mailbox_transport`).
Sieve uses it's own [pseudo-language](https://www.ietf.org/rfc/rfc5228.txt) for
filtering, but below is a part of my file which should provide a
[good example](https://wiki.dovecot.org/LDA/Sieve/) for start:

`.dovecot.sieve`
```bash
# Require plugin for moving messages (fileinto) and vacation responder (vacation)
require ["fileinto", "vacation"];

# Move all mails with "List-Id" equal to "users-pl.lists.rootnode.net" to rzegocki_pl/lists IMAP directory
if header :contains "List-Id" "users-pl.lists.rootnode.net" { fileinto "rzegocki_pl.lists"; stop; }

# If messages are not from a list (most of the lists sets mail header "Precedence" either to "list" or "bulk") then send a vacation email
if not header :contains "Precedence" ["bulk","list"] {
    vacation :days 7 :addresses ["igor@email1.com", "igor@email2.com"] :subject "Vacation 15.07 - 22.07" " ..... "
}

# Move all messages from my father to one directory
if anyof (
    address :is "sender" "steven@email1.com",
    address :is "sender" "steven@email2.com",
    address :is "sender" "steven@email3.com") {
        fileinto "rzegocki_pl.private.steven"; stop;
    }
```
It took me some time to set everything up (mostly because of lack of
documentation and multiple domain problems), but the final effect is awesome,
and confirms that own server is an really, really great idea :)
