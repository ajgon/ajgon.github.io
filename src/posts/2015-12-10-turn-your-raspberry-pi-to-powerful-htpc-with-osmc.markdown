---
id: 97a11075-4624-46b6-a691-5e1f5d828c77
layout: post
title: "Turn your Raspberry Pi to powerful HTPC with OSMC"
date: 2015-12-10T22:15:00+02:00
author: Igor Rzegocki
cover: "../images/covers/turn-your-raspberry-pi-to-powerful-htpc-with-osmc.png"
tags:
 - lifehacking
path: /blog/turn-your-raspberry-pi-to-powerful-htpc-with-osmc/
---

I am big fan of TV series. There were times (mostly in college), when I watched them almost continuously. Recently I got tired of laptop screen, and moved to [something bigger](https://www.samsung.com/uk/consumer/tv-audio-video/televisions/hd-tvs/UE32H5500AKXXU). I also had a spare Raspberry PI, so naturally the conslusion came - why not connect them together, and create a genuine Mediacenter.

<!--more-->

## Prerequisites

If you plan to build a HTPC here are some general guidelines regarding hardware:

* make sure, that TV supports [HDMI CEC](https://en.wikipedia.org/wiki/HDMI#CEC)
* you have a proper HDMI cable, with CEC pins
* if you plan to use WiFi on Raspberry, it's a good idea to use dongle with external antenna and 5GHz support (I strongly recommend [this one](https://www.edimax.com/edimax/merchandise/merchandise_detail/data/edimax/global/wireless_adapters_ac600_dual-band/ew-7811uac))
* and last but not least, use a reliable power source for your PI (2A is a must)

With this setup, you should be able to enjoy a nice and smooth media experience.

## Installing OSMC

But first things first, you need to install OSMC on a SD Card. This is the simplest part - just go to [OSMC Downloads section](https://osmc.tv/download/) and choose an installer for your operating system. Then just fire it up, and follow the instructions. The installator will ask you for (in order):

* Language and device
* OSMC version (choose the most recent, obviously)
* Destination (SD card)
* Network configuration (if you're using WiFi, it's a good idea to pass your SSID/password here, this will allow to SSH to the machine after bootup, which can be lifesaver during troubleshooting)
* and last but not least, the device which you wish to install OSMC on (make sure it's connected, and select it from the list)

After successful installation, put the SD Card into your Raspberry, plug it in to the TV and boot it up. OSMC would finalize installation (which should take approx 5-10 mins) a greet you up with the "First Launch Wizard". Here you can do the initial settings like: Language, Timezone, Hostname, accept the License Agreement, and choose the default skin (the rest of this guide will relate to the default "OSMC" skin).

## Basic extensions

Guys from OSMC did a pretty decent job, and pre-installed a lot of useful ones already. However, there are some extra few which I find pretty useful. I will describe each extension in sentence or two, note where you can find it in the settings, and provide options which I use and which you can base on as a good start.

### Kodi File Cleaner

This little fella would remove any video files, which you already watched. If you don't plan to use external HDD and rely only on SD-Card - this could be a life saver.

* Available in: Add-Ons => Program => Kodi File Cleaner
* Settings
    * Actions => Cleaning type: Delete permanently
    * Actions => Clean movies: true
    * Actions => Clean TV shows: true
    * Actions => Also delete empty folders: true
    * Actions => Also clean related files with similar names (e.g. subtitles): true
    * Frequency => Run as a service: true

### Super Favourites

I like this one, mostly for its ability of importing/exporting Kodi favorites. Also, if you tend to favorite remote source like YouTube Channels (I often do) - this one would refresh them every time they are accessed. Internal Kodi Favorites has problems with that.

* Available in: Add-Ons => Program => Super Favourites

### Subtitles

No rocket-science here, `OpenSubtitles.org` in my opinion is a must. As a Pole I also use and recommend the `Napiprojekt.pl`, but bear in mind, that this contain polish subtitles only.

* Available in: Add-Ons => Subtitles => Napiprojekt.pl
* Available in: Add-Ons => Subtitles => OpenSubtitles.org

### Watchdog

Very useful addon. It scans your library directories for new videos, and adds them automatically to library. Life-saver if you have some scripts which downloads TV Series automatically.

* Available in: Add-Ons => Services => Watchdog
    * General => Remove from library when files are removed: true
    * General => Clean on startup: true
    * General => Scan on startup: true
    * Advanced => Method for local sources: Polling (if you use some network file system like SMB or NFS) or Auto (if you store files locally)
    * Advanced => Removal method: Remove the deleted video only

### YouTube, Vimeo etc.

Also no-brainers, and selection is a matter of your taste. Personally I only use the YouTube and TED Talks.

* Available in: Add-Ons => Video add-ons => Ted Talks
* Available in: Add-Ons => Video add-ons => Vimeo
* Available in: Add-Ons => Video add-ons => YouTube

## Settings

After installation of basic extensions it is a good idea to tune up some settings. First of all - set the panels to "Expert" mode. Then, set them up as you prefer. Below, is a short list of options, which I usually change:

* Apperance => Skin => GUI sounds: Skin built-in
* Apperance => International => Region: Central Europe
* Apperance => File lists => Allow file renaming and deletion: true
* Video => Library => Select first unwatched TV show season / episode: Always
* Video => Library => Update library on startup: true
* Video => Playback => Play next video automatically: true
* Video => Acceleration => Allow hardware acceleration - OMX: true
* Video => Subtiltes => Preferred subtitle language: Polish
* Video => Subtitles => Font to user for text subtitles => Character set: Central Europe (Windows)
* Video => Subtitles => Languages to download subtitles for: English, Polish
* Video => Subtitles => Default TV show service: Napiprojekt.pl
* Video => Subtitles => Default movie service: Opensubtitles.org
* System => Input devices => Peripherals => CEC Adapter => Pause playback when switching to another source

## Configuring the Remote Control

If you have proper HDMI cable and TV supporting CEC, your remote should "just work" with the OSMC. However, it's very unlikely that you'll be happy with default configuration. For example, in my case - the "Back" button was displaying context menu, instead of going back. To fix this, first thing you need to find out is what each button on the remote maps to in Kodi. There is a [great thread](https://forum.kodi.tv/showthread.php?tid=139145&pid=1285390#pid1285390) providing step-by-step instruction, but in a nutsheel, you need to SSH to your OSMC machine and create a `.kodi/userdata/keymaps/remote.xml` file with [given contents](https://gist.github.com/ajgon/59a73b8b8e236e30ab33).

```bash
curl -o ~/.kodi/userdata/keymaps/remote.xml https://gist.githubusercontent.com/ajgon/59a73b8b8e236e30ab33/raw/d9fbf3c20edbff85d71b99b47d202d8a0ab1a8d9/remote.xml
```

After that, restart OSMC, and click every button on your remote. They shouldn't do anything except displaying a notification with the button name in Kodi. Note them down, you would need them in a second.

Next copy the default `remote.xml` file over the current one, and start configuriation!

```bash
cp /usr/share/kodi/system/keymaps/remote.xml ~/.kodi/userdata/keymaps/remote.xml
```

The file is pretty self-explanatory. The XML node name is they key name you noted minute ago, and the value is either [Kodi Action](https://kodi.wiki/view/Action_IDs) or [Kodi Function](https://kodi.wiki/view/List_of_built-in_functions). For reference, you [can check the diff](https://gist.github.com/ajgon/17e7553a599669f39694/revisions?diff=split) between my config (for Samsung Remote) and default one.

## OSD Auto-hide

Discovering that, was a big suprise for me. At the time of writing this post there is no easy way to auto-hide OSD. When you display it - it will remain on screen until you "unclick" it away. However, you can fix this behavior with a little hack.

First of all, you need to download and install a Titan skin helper service - either from [Kodi Repository](https://kodi.wiki/view/Add-on:Titan_skin_helper_service), or from its [GitHub Page](https://github.com/marcelveldt/script.skin.helper.service/releases). This neat tool adds many extra options for skin makers, and one of them is [AutoCloseVideoOSD property](https://github.com/marcelveldt/script.skin.helper.service/blob/master/resources/lib/ListItemMonitor.py#L81). All you need to do, is to add it to the current skin. If you're using OSMC Skin, the easiest way is to edit its `Startup.xml` file, and add it as `<onload>` property.

```bash
sed -i'~' 's@</window>@        <onload>Skin.SetString(SkinHelper.AutoCloseVideoOSD, 4)</onload>\n</window>@' /usr/share/kodi/addons/skin.osmc/16x9/Startup.xml
```

where `4` is time in seconds you wish to OSD appear on screen, before fading out.

## Buffering

If you plan to use some remote data-storage (NAS, another Pi with HDD, or any tool involving remote file system) it's a good idea to increase buffer size of the video player. Don't set it too large though, since it will occupy [3 times more RAM than the value set](https://kodi.wiki/view/HOW-TO:Modify_the_video_cache) (so if you set it to 100M it will occupy 300M of RAM, etc.). For Raspberry Pi 2 with its 1GB RAM, a safe value is approx. 150MB. And it should be more than sufficient, even for 1080p videos. Increasing buffer size is quite simple - just create a `.kodi/userdata/advancedsettings.xml` file on your OSMC, and fill it as below (altering `cachemembuffersize` to your needs).

`.kodi/userdata/advancedsettings.xml`
```xml
<advancedsettings>
  <network>
    <buffermode>1</buffermode>
    <cachemembuffersize>157286400</cachemembuffersize>
    <readbufferfactor>10</readbufferfactor>
  </network>
</advancedsettings>
```

## Stop video play when TV is turned off

Another feature which is not available in Kodi. You can either shutdown or suspend (not possible on Pi) your machine. You can't just stop video and leave machine "as is". Unfortunatelly, there is no easy fix without recompiling half of the Kodi, so the only acceptable solution I found out, is to ping SmartTV and see when it goes to sleep (which means it would stop sending ping response). I'm aware that this solution isn't perfect, but it's the best I have at the moment.

Whole idea is actually pretty simple - just create a script `/usr/local/bin/ping-tv.sh` and fill with content below (don't forget to put your TV IP there).

`/usr/local/bin/ping-tv.sh`
```bash
#!/bin/bash
TVIP=<IP of your TV>

count=$( ping -c 1 -W 1 $TVIP | grep from | wc -l )
tvon=$( cat /tmp/tvon )

if [ $count -eq 0 ]; then
    if [ $tvon -eq 1 ]; then
        xbmc-send -a 'PlayerControl(Stop)'
    fi
    echo -n 0 > /tmp/tvon
else
    echo -n 1 > /tmp/tvon
fi

```

Now, all it's left, is adding this script to the cron. Unfortunatelly, cron cannot launch tasks more often than a minute. And losing up to a minute for script to actually notice that TV is switched off - is unacceptable. However, there is another neat trick under my sleeve - using `sleep`. So fire up `crontab -e` and fill it with:

```bash
* * * * * /usr/local/bin/ping-tv.sh
* * * * * sleep 10 && /usr/local/bin/ping-tv.sh
* * * * * sleep 20 && /usr/local/bin/ping-tv.sh
* * * * * sleep 30 && /usr/local/bin/ping-tv.sh
* * * * * sleep 40 && /usr/local/bin/ping-tv.sh
* * * * * sleep 50 && /usr/local/bin/ping-tv.sh
```

This would force cron to start 6 processes, each one waiting different time before actually pinging the TV. In the end, the maximum waiting time would be shorten to 10 seconds, which is acceptable in my opinion (you can always add more entries following that pattern).

## TV Shows

Ok, let's make it perfectly clear - I'm not responsible if DEA, FBI, KGB or HGW knock to your door one day. <strong class="warning">This is for informational purposes only</strong>. If your country provides a legal alternative like Hulu or Netflix, you should definitely consider it. If not (or you don't care), continue reading.

The simplest approach, is just manually installing torrent client, and download desired shows as they premiere. But what if I told you that you can automate this process to the level where all new shows gets downloaded and categorized automatically, gets their subtitles downloaded, and finally, they're added to the Kodi Library? And all of that wihout single click (after some configuration of course)?

Interested? Continue... :)

### Transmission

First thing you need is a torrent client. I strongly recommend [Transmission](https://www.transmissionbt.com/) since it does its job pretty well, and provides a nice web interface. Since we don't need GUI, we can narrow down the installotion to three packages:

```bash
apt-get install transmission-cli transmission-common transmission-daemon
```

If you like, you can also install Kodi Transmission Add-On (under: *Add-Ons => Program => Transmission*), which will provide you a very basic GUI directly from Kodi interface.

Next, you need to do the configuration. All options are stored in `/etc/transmission-daemon/settings.json`. Since, those settings are very individual, I won't provide any examples. Instead, I will direct you to [Transmission settings.json file documenatation](https://trac.transmissionbt.com/wiki/EditConfigFiles). When you finish them up, **don't restart the daemon**! You will lose all the changes (don't ask). Instead run:

```bash
invoke-rc.d transmission-daemon reload
```

### RSS Feed

First thing you need, is the data source of new premieres. The easiest solution is an RSS channel - in this example I will use [showrss.info](https://showrss.info/), since they're doing exactly that.

Whole process is rather simple - create an account, add all the shows you wish to be noted on, and create a feed URL on [Feeds](https://showrss.info/?cs=feeds) page. Put this URL somewhere, you will need it in a minute.

### Subliminal

Next thing, is some tool which will download subtitles for you. I strongly recommend [Subliminal](https://subliminal.readthedocs.org/en/latest/), since it's easy to use and supports many providers.

Subliminal is a python package. However OSMC doesn't come with any python package managing tool (which is understandable). In my personal opinion, the easiest one to use is [pip](https://pip.pypa.io/en/stable/), so let's install it:

```bash
apt-get install python-pip
```

Next, install latest stable version of subliminal. Do it from `osmc` user, not from `root`! There is no need for polluting the system userspace, and thanks to that, all the files will be stored in one, easy-to-wipe-out directory.

```bash
pip install --user subliminal
```

Also local userspace means, you need to add its path to your `$PATH` env.

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

If you don't want to use `napiprojekt` provider, you're done. If you do, read next section.

#### Subliminal - napiprojekt

At the time of writing this article, napiprojekt support for subliminal was in beta stage, and was not included in pip repository. The easiest way to check if napiprojekt is enabled, is to check the list of supported providers:

```bash
subliminal download --help | grep provider
#  -p, --provider [addic7ed|opensubtitles|podnapisi|thesubdb|tvsubtitles]
```

If napiprojekt is listed, you can skip this step.

Otherwise download the freshest development version (if you don't have a git, invoke `sudo apt-get install git`) and install it:

```bash
git clone --depth=1 -b develop https://github.com/Diaoul/subliminal.git ~/subliminal
cd ~/subliminal
python setup.py install --user
cd ~
rm -rf ~/subliminal
```

Now napiprojekt should be displayed as available provider:

```bash
subliminal download --help | grep provider
#  -p, --provider [addic7ed|napiprojekt|opensubtitles|podnapisi|thesubdb|tvsubtitles]
```

### FlexGet

And now... the biggest star. A tool, which glue all this stuff together: [FlexGet](https://flexget.com/). When properly configured, will parse showrss.info RSS feed, add all new shows to the transmission queue, after finished download move them to proper directory, and finally fetch subtitles. It will also keep an eye on shows which does not have subtitles when downloaded (very common situation for freshest episodes), and try to fetch them when they appear.

#### FlexGet - Installation

No rocket science here (remember - `osmc` user, not `root`):

```bash
pip install --user flexget
pip install --user transmissionrpc
```

The second package is necessary for all FlexGet transmission-related plugins.

#### FlexGet - napiprojekt

If you wish to use napiprojekt and [subliminal plugin](https://flexget.com/wiki/Plugins/subliminal), you need to monkey patch it (however, you can safely skip this step, despite the fact you will use subliminal - see below). Also before applying the patch, check the `PROVIDERS` constant in `~/.local/lib/python2.7/site-packages/flexget/plugins/output/subtitles_subliminal.py` file. At the time of writing this article `napiprojekt` wasn't there, so if it's absent, do:

```bash
sed -i'~' "s@'opensubtitles',@'opensubtitles',\n    'napiprojekt',@" ~/.local/lib/python2.7/site-packages/flexget/plugins/output/subtitles_subliminal.py
```

#### FlexGet - configuration

The most important step - we need to tell FlexGet what to do, what to fetch and where to put it. You should really, REALLY read the [FlexGet Configuration documenatation](https://flexget.com/wiki/Configuration) so you know what you're doing. After that, you can use this template for a good start (put it to `~/.flexget/config.yml`):

`~/.flexget/config.yml`
```yaml
tasks:
  download-tv-shows:
    priority: 10
    rss:
      url: <showrss_url>
    all_series: yes
    transmission:
      host: localhost
      port: 9091
      username: <transmission_username>
      password: <transmission_password>
      main_file_only: yes
    download: <finished_downloads_path>
  sort-tv-shows:
    priority: 20
    disable:
      - retry_failed
    metainfo_series: yes
    thetvdb_lookup: yes
    require_field: [series_name, series_id, series_season, tvdb_series_name]
    find:
      path: <finished_downloads_path>
      regexp: '.*\.(avi|mkv|mp4)$'
      recursive: yes
    accept_all: yes
    exists_series: <tv_shows_path>
    move:
      to: "<tv_shows_path>/{{tvdb_series_name}}"
      filename: "{{tvdb_series_name}}.{{tvdb_ep_id}}{% if tvdb_ep_name|default(False) %} - {{ tvdb_ep_name }} {% endif %}"
      along:
        - srt
  download-subtitles:
    priority: 30
    filesystem: /etc/gss/mech.d/
    disable:
      - seen
    accept_all: yes
    exec:
      - ls -1R "<tv_shows_path>" | grep '\.S0' | sed -r 's@(\.pl)?\....$@@g' | sort | uniq -c | grep '^\s*1' | sed 's@^\s*1\s*@@g' | awk -F# '{ print "find \"<tv_shows_path>\" -name \"" $1 "\"*" }' > /tmp/go
      - chmod +x /tmp/go
      - /tmp/go | awk -F"###" '{ print "\"" $1 "\"" }' | tr '\n' ' ' | xargs /home/osmc/.local/bin/subliminal download -l pl -p napiprojekt -p opensubtitles
  clean-up:
    priority: 40
    no_entries_ok: yes
    clean_transmission:
      host: localhost
      port: 9091
      username: <transmission_username>
      password: <transmission_password>
      min_ratio: 0
      finished_for: 1 hours
```

* *showrss_url* - the URL of your ShowRSS feed
* *finished_downloads_path* - the path, where files finished by transmission would land
* *tv_shows_path* - the path, where files processed by FlexGet would be moved
* *transmission_username*, *transmission_password* - pretty self-explanatory

So what this scripts does?

* `download-tv-shows` - checks ShowRSS feed for new shows, and if found - adds them to tranmission.
* `sort-tv-shows` - checks transmission downloads directory for new shows. If found, moves them to tv shows directory, and tries to determine proper show and episode name in file path. So `GreatShow.S01E03.720p.h264.PROPER.mkv` from tranmission downloads would become `GreatShow/GreatShow.S01E03 - Episode Name.mkv`.
* `download-subtitles` - this task is pretty bizzare, I can tell. I tried to use [subliminal plugin](https://flexget.com/wiki/Plugins/subliminal) for this example, however it never worked as expected. Instead, I used the bash script which looks for all files without corresponding `*.srt`s and fires subliminal on them.
* `clean-up` - pretty obvious - clean transmission queue when file is finished processing.

#### FlexGet - cron

FlexGet itself is not a service, it needs to be run periodically. Thankfully this can be solved with a single line in crontab.

```bash
*/30 * * * * /home/osmc/.local/bin/flexget --cron execute
```

I think 30-minutes is a very safe time-window - Your FlexGet scripts shouldn't overlap.

## Conclusion

Phew! That was the long one! I'm aware, that some things are not as easy as they should be, but trust me - it's worth the effort. Kodi can be a pretty powerful tool if you give it a chance, and in return it will pay you back with a Media Center you will find hard to take your eyes off.
