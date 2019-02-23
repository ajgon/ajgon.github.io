---
id: 86585931-0df6-43eb-bf25-e41387b5adf4
layout: post
title: "Setting secure, cloud-based backup system using git and box.com"
date: 2012-10-14T12:57:00+02:00
author: Igor Rzegocki
cover: "../images/covers/setting-secure-cloud-based-backup-system-using-git-and-box-com.jpg"
tags:
  - administration
path: /blog/setting-secure-cloud-based-backup-system-using-git-and-box-com/
---

After giving up my [spying e-mail provider](https://gmail.com/), and moving
everything to my own [DeeDee server](https://github.com/ajgon/DeeDee), I moved
smoothly from one paranoia to another. Ok, my e-mail is not read anymore by
anyone except me, but on the other hand it's on an ATOM machine staying in my
room. Which unfortunatelly, is not fire, burglar, lightning and UFO protected.
So idea of backups was born. Firstly, I was using an external drive, which I
was keeping in the same room, most of the time even attached to the machine.
But I thought, that it is still
[not a best solution](https://www.youtube.com/watch?v=U4oB28ksiIo#t=286s). So I
started swinging in the clouds.

<!--more-->

And immediately faced some problems:

* They are expensive, and free solutions have very limited capacity,
* They are external service, so distrust paranoia is getting back (in my case
  at least :))
* Most of them doesn't have any "normal" protocol to handle files, and they are
  basing on a web interface and they "one and only true" client

All of those three problems are unacceptable and needed to be solved if I
wanted to even think about clouds.

So I did some research, and found [box.com](https://www.box.com/) - in my
opinion, the best solution out there. Why? Because it solves cases one and
three for me. It offers 50GB of storage (ALOT more than I need, all my emails
and server-related files are approx. 8GB summarized), and they are supporting
WebDAV protocol. Which means that fuse and davfs comes to play. The second
problem is actually pretty easy to solve as well - just use encryption
(I use GPG).

The next thing was snapshots. They had to be diff-based - that for sure. At the
beginning I tried to use rsync. It was nightmare. Sure, it had this
`compare-dest` option, and after many hours of VooDoo magic I was able to set
it properly, but still I was unhappy with it. Mostly, because it didn't handle
file removal very well (if some files were removed in a new snapshot, they
simply weren't included, so I didn't have any information about that, so when I
restore the backup, I will have all the files in a newest versions - removed as
well). And then it hit me - why not use some VCS? After 0.2 seconds of
wondering, I chose git, because I love it. The next question is -  how to put
all of this together?

## Setting davfs for box.com

This step is pretty simple, just install it, add your box.com credentials to
`/etc/davfs2/secrets`, set `use_locks` to `0` and add proper line to
`/etc/fstab`. Then just mount it. So:

```bash
echo "https://www.box.com/dav    login@email.com     my_box_com_password" >> /etc/davfs2/secrets
sed -i'' -r 's/#?\s*use_locks\s+0/use_locks 1/g' /etc/davfs2/davfs2.conf
mkdir /mnt/Box
echo "https://www.box.com/dav /mnt/Box davfs rw,noauto 0 0" >> /etc/fstab
mount /mnt/Box
```

If everything went smooth, you will have access to your box.com account via
filesystem. Pretty neat.

## Setting git-based backup

Firstly you need to set initial repository and backup files. Then encrypt them
and copy to box.com. Here is how I do it:

```bash
cd /
export MACHINE=DeeDee
mkdir -p /home/Backup/${MACHINE}
mkdir -p /mnt/Box/Backups/patches
ln -s /home/Backup/${MACHINE} /.git
git init
git add -A etc root home some/other/important/dirs
git commit -m "Initial"
git gc # compress repository
tar -cf /home/Backup/${MACHINE}.initial.tar /home/Backup/${MACHINE}/*
gpg -e -r my.key@email.com /home/Backup/${MACHINE}.initial.tar
# box.com has maximum file limit so split files to lesser chunks
split --bytes=99m /home/Backup/${MACHINE}.initial.tar.gpg /home/Backup/${MACHINE}.initial.tar.
mv /home/Backup/DeeDee.${MACHINE}.tar.?? /mnt/Box/Backups
```

If you have alot of files, some of them may not be copied in a first time - in
this initial deploy, make sure that all the files are moved to box.com!

After that all we need is a daily-snapshot deploy script

```bash
export NOW=`date -I`
export MACHINE=DeeDee
cd /
git add -A
git commit -m "${NOW}" -a
git format-patch -1 --stdout > /home/Backup/${MACHINE}.${NOW}.patch
gpg -e -r your@key.email /home/Backup/${MACHINE}.${NOW}.patch
split --bytes=50m /home/Backup/${MACHINE}.${NOW}.patch.gpg /home/Backup/${MACHINE}.${NOW}.patch.
mv /home/Backup/${MACHINE}.${NOW}.patch.?? /mnt/Box/Backups/patches
```

Now all you need to do is put this script to some file, and add it to cron:

```txt
0 3 * * * /backup
```

## Restoring backup

This is pretty simple. First, fetch all the `*.initial.*` files to some
directory, then merge them, decrypt and unpack.

```bash
mkdir -p /home/Restore/.git
cd /home/Restore/.git
cp /mnt/Box/Backups/*.initial.* .
cat *.initial.* > Backup.initial.tar
tar -xf Backup.initial.tar
rm -rf Backup.initial.tar
```

Now you need to apply the patches:

```bash
cd /home/Restore
cp /mnt/Box/Backups/patches/* .
for i in *.patch.aa; do mv ${i} `echo ${i} | sed -r 's/.aa$//'`; done
# Don't forget to concatenate splitted patches, so for example:
cat Backup.2012-10-14.patch.* > Backup.2012-10.14.patch
git apply *.patch
```

And the last thing is simply to restore repo to it's current state:
```bash
git reset --hard master
```

And voilla, everything is back!

## Conclusion

Is simple... I sincerely hope, that you will have better sleep with this
solution applied. I have :). And if not, you can always extend it to another
good-space, webdav supporting clouds. I didn't find anything as good as
box.com, but if you do - please, let me know!
