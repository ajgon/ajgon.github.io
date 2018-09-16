webpackJsonp([0xd10a3c154599],{514:function(n,s){n.exports={data:{allShareJson:{edges:[{node:{id:"2f0a723b-2772-40bf-9edc-70dd70337f10",slug:"facebook",name:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=%POSTURL%;display=popup",width:626,height:457}},{node:{id:"f5678f7f-ae05-444a-af1a-1167a30d0cce",slug:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&amp;url=%POSTURL%&amp;title=",width:600,height:450}},{node:{id:"4cbf0a18-d389-4583-98ac-501e59f1be18",slug:"twitter",name:"Twitter",url:"https://twitter.com/share?url=%POSTURL%&amp;text=",width:500,height:550}}]},markdownRemark:{html:'<p>I am big fan of TV series. There were times (mostly in college), when I watched them almost continuously. Recently I got tired of laptop screen, and moved to <a href="https://www.samsung.com/uk/consumer/tv-audio-video/televisions/hd-tvs/UE32H5500AKXXU">something bigger</a>. I also had a spare Raspberry PI, so naturally the conslusion came - why not connect them together, and create a genuine Mediacenter.</p>\n<!--more-->\n<h2>Prerequisites</h2>\n<p>If you plan to build a HTPC here are some general guidelines regarding hardware:</p>\n<ul>\n<li>make sure, that TV supports <a href="https://en.wikipedia.org/wiki/HDMI#CEC">HDMI CEC</a></li>\n<li>you have a proper HDMI cable, with CEC pins</li>\n<li>if you plan to use WiFi on Raspberry, it\'s a good idea to use dongle with external antenna and 5GHz support (I strongly recommend <a href="https://www.edimax.com/edimax/merchandise/merchandise_detail/data/edimax/global/wireless_adapters_ac600_dual-band/ew-7811uac">this one</a>)</li>\n<li>and last but not least, use a reliable power source for your PI (2A is a must)</li>\n</ul>\n<p>With this setup, you should be able to enjoy a nice and smooth media experience.</p>\n<h2>Installing OSMC</h2>\n<p>But first things first, you need to install OSMC on a SD Card. This is the simplest part - just go to <a href="https://osmc.tv/download/">OSMC Downloads section</a> and choose an installer for your operating system. Then just fire it up, and follow the instructions. The installator will ask you for (in order):</p>\n<ul>\n<li>Language and device</li>\n<li>OSMC version (choose the most recent, obviously)</li>\n<li>Destination (SD card)</li>\n<li>Network configuration (if you\'re using WiFi, it\'s a good idea to pass your SSID/password here, this will allow to SSH to the machine after bootup, which can be lifesaver during troubleshooting)</li>\n<li>and last but not least, the device which you wish to install OSMC on (make sure it\'s connected, and select it from the list)</li>\n</ul>\n<p>After successful installation, put the SD Card into your Raspberry, plug it in to the TV and boot it up. OSMC would finalize installation (which should take approx 5-10 mins) a greet you up with the "First Launch Wizard". Here you can do the initial settings like: Language, Timezone, Hostname, accept the License Agreement, and choose the default skin (the rest of this guide will relate to the default "OSMC" skin).</p>\n<h2>Basic extensions</h2>\n<p>Guys from OSMC did a pretty decent job, and pre-installed a lot of useful ones already. However, there are some extra few which I find pretty useful. I will describe each extension in sentence or two, note where you can find it in the settings, and provide options which I use and which you can base on as a good start.</p>\n<h3>Kodi File Cleaner</h3>\n<p>This little fella would remove any video files, which you already watched. If you don\'t plan to use external HDD and rely only on SD-Card - this could be a life saver.</p>\n<ul>\n<li>Available in: Add-Ons => Program => Kodi File Cleaner</li>\n<li>\n<p>Settings</p>\n<ul>\n<li>Actions => Cleaning type: Delete permanently</li>\n<li>Actions => Clean movies: true</li>\n<li>Actions => Clean TV shows: true</li>\n<li>Actions => Also delete empty folders: true</li>\n<li>Actions => Also clean related files with similar names (e.g. subtitles): true</li>\n<li>Frequency => Run as a service: true</li>\n</ul>\n</li>\n</ul>\n<h3>Super Favourites</h3>\n<p>I like this one, mostly for its ability of importing/exporting Kodi favorites. Also, if you tend to favorite remote source like YouTube Channels (I often do) - this one would refresh them every time they are accessed. Internal Kodi Favorites has problems with that.</p>\n<ul>\n<li>Available in: Add-Ons => Program => Super Favourites</li>\n</ul>\n<h3>Subtitles</h3>\n<p>No rocket-science here, <code class="language-text">OpenSubtitles.org</code> in my opinion is a must. As a Pole I also use and recommend the <code class="language-text">Napiprojekt.pl</code>, but bear in mind, that this contain polish subtitles only.</p>\n<ul>\n<li>Available in: Add-Ons => Subtitles => Napiprojekt.pl</li>\n<li>Available in: Add-Ons => Subtitles => OpenSubtitles.org</li>\n</ul>\n<h3>Watchdog</h3>\n<p>Very useful addon. It scans your library directories for new videos, and adds them automatically to library. Life-saver if you have some scripts which downloads TV Series automatically.</p>\n<ul>\n<li>\n<p>Available in: Add-Ons => Services => Watchdog</p>\n<ul>\n<li>General => Remove from library when files are removed: true</li>\n<li>General => Clean on startup: true</li>\n<li>General => Scan on startup: true</li>\n<li>Advanced => Method for local sources: Polling (if you use some network file system like SMB or NFS) or Auto (if you store files locally)</li>\n<li>Advanced => Removal method: Remove the deleted video only</li>\n</ul>\n</li>\n</ul>\n<h3>YouTube, Vimeo etc.</h3>\n<p>Also no-brainers, and selection is a matter of your taste. Personally I only use the YouTube and TED Talks.</p>\n<ul>\n<li>Available in: Add-Ons => Video add-ons => Ted Talks</li>\n<li>Available in: Add-Ons => Video add-ons => Vimeo</li>\n<li>Available in: Add-Ons => Video add-ons => YouTube</li>\n</ul>\n<h2>Settings</h2>\n<p>After installation of basic extensions it is a good idea to tune up some settings. First of all - set the panels to "Expert" mode. Then, set them up as you prefer. Below, is a short list of options, which I usually change:</p>\n<ul>\n<li>Apperance => Skin => GUI sounds: Skin built-in</li>\n<li>Apperance => International => Region: Central Europe</li>\n<li>Apperance => File lists => Allow file renaming and deletion: true</li>\n<li>Video => Library => Select first unwatched TV show season / episode: Always</li>\n<li>Video => Library => Update library on startup: true</li>\n<li>Video => Playback => Play next video automatically: true</li>\n<li>Video => Acceleration => Allow hardware acceleration - OMX: true</li>\n<li>Video => Subtiltes => Preferred subtitle language: Polish</li>\n<li>Video => Subtitles => Font to user for text subtitles => Character set: Central Europe (Windows)</li>\n<li>Video => Subtitles => Languages to download subtitles for: English, Polish</li>\n<li>Video => Subtitles => Default TV show service: Napiprojekt.pl</li>\n<li>Video => Subtitles => Default movie service: Opensubtitles.org</li>\n<li>System => Input devices => Peripherals => CEC Adapter => Pause playback when switching to another source</li>\n</ul>\n<h2>Configuring the Remote Control</h2>\n<p>If you have proper HDMI cable and TV supporting CEC, your remote should "just work" with the OSMC. However, it\'s very unlikely that you\'ll be happy with default configuration. For example, in my case - the "Back" button was displaying context menu, instead of going back. To fix this, first thing you need to find out is what each button on the remote maps to in Kodi. There is a <a href="https://forum.kodi.tv/showthread.php?tid=139145&#x26;pid=1285390#pid1285390">great thread</a> providing step-by-step instruction, but in a nutsheel, you need to SSH to your OSMC machine and create a <code class="language-text">.kodi/userdata/keymaps/remote.xml</code> file with <a href="https://gist.github.com/ajgon/59a73b8b8e236e30ab33">given contents</a>.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> -o ~/.kodi/userdata/keymaps/remote.xml https://gist.githubusercontent.com/ajgon/59a73b8b8e236e30ab33/raw/d9fbf3c20edbff85d71b99b47d202d8a0ab1a8d9/remote.xml</code></pre>\n      </div>\n<p>After that, restart OSMC, and click every button on your remote. They shouldn\'t do anything except displaying a notification with the button name in Kodi. Note them down, you would need them in a second.</p>\n<p>Next copy the default <code class="language-text">remote.xml</code> file over the current one, and start configuriation!</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">cp</span> /usr/share/kodi/system/keymaps/remote.xml ~/.kodi/userdata/keymaps/remote.xml</code></pre>\n      </div>\n<p>The file is pretty self-explanatory. The XML node name is they key name you noted minute ago, and the value is either <a href="https://kodi.wiki/view/Action_IDs">Kodi Action</a> or <a href="https://kodi.wiki/view/List_of_built-in_functions">Kodi Function</a>. For reference, you <a href="https://gist.github.com/ajgon/17e7553a599669f39694/revisions?diff=split">can check the diff</a> between my config (for Samsung Remote) and default one.</p>\n<h2>OSD Auto-hide</h2>\n<p>Discovering that, was a big suprise for me. At the time of writing this post there is no easy way to auto-hide OSD. When you display it - it will remain on screen until you "unclick" it away. However, you can fix this behavior with a little hack.</p>\n<p>First of all, you need to download and install a Titan skin helper service - either from <a href="https://kodi.wiki/view/Add-on:Titan_skin_helper_service">Kodi Repository</a>, or from its <a href="https://github.com/marcelveldt/script.skin.helper.service/releases">GitHub Page</a>. This neat tool adds many extra options for skin makers, and one of them is <a href="https://github.com/marcelveldt/script.skin.helper.service/blob/master/resources/lib/ListItemMonitor.py#L81">AutoCloseVideoOSD property</a>. All you need to do, is to add it to the current skin. If you\'re using OSMC Skin, the easiest way is to edit its <code class="language-text">Startup.xml</code> file, and add it as <code class="language-text">&lt;onload&gt;</code> property.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">sed</span> -i<span class="token string">\'~\'</span> <span class="token string">\'s@&lt;/window>@        &lt;onload>Skin.SetString(SkinHelper.AutoCloseVideoOSD, 4)&lt;/onload>\\n&lt;/window>@\'</span> /usr/share/kodi/addons/skin.osmc/16x9/Startup.xml</code></pre>\n      </div>\n<p>where <code class="language-text">4</code> is time in seconds you wish to OSD appear on screen, before fading out.</p>\n<h2>Buffering</h2>\n<p>If you plan to use some remote data-storage (NAS, another Pi with HDD, or any tool involving remote file system) it\'s a good idea to increase buffer size of the video player. Don\'t set it too large though, since it will occupy <a href="https://kodi.wiki/view/HOW-TO:Modify_the_video_cache">3 times more RAM than the value set</a> (so if you set it to 100M it will occupy 300M of RAM, etc.). For Raspberry Pi 2 with its 1GB RAM, a safe value is approx. 150MB. And it should be more than sufficient, even for 1080p videos. Increasing buffer size is quite simple - just create a <code class="language-text">.kodi/userdata/advancedsettings.xml</code> file on your OSMC, and fill it as below (altering <code class="language-text">cachemembuffersize</code> to your needs).</p>\n<p><code class="language-text">.kodi/userdata/advancedsettings.xml</code></p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>advancedsettings</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>network</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>buffermode</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>buffermode</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cachemembuffersize</span><span class="token punctuation">></span></span>157286400<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cachemembuffersize</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>readbufferfactor</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>readbufferfactor</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>network</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>advancedsettings</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2>Stop video play when TV is turned off</h2>\n<p>Another feature which is not available in Kodi. You can either shutdown or suspend (not possible on Pi) your machine. You can\'t just stop video and leave machine "as is". Unfortunatelly, there is no easy fix without recompiling half of the Kodi, so the only acceptable solution I found out, is to ping SmartTV and see when it goes to sleep (which means it would stop sending ping response). I\'m aware that this solution isn\'t perfect, but it\'s the best I have at the moment.</p>\n<p>Whole idea is actually pretty simple - just create a script <code class="language-text">/usr/local/bin/ping-tv.sh</code> and fill with content below (don\'t forget to put your TV IP there).</p>\n<p><code class="language-text">/usr/local/bin/ping-tv.sh</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/bash</span>\nTVIP<span class="token operator">=</span><span class="token operator">&lt;</span>IP of your TV<span class="token operator">></span>\n\ncount<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">ping</span> -c 1 -W 1 $TVIP <span class="token operator">|</span> <span class="token function">grep</span> from <span class="token operator">|</span> <span class="token function">wc</span> -l <span class="token variable">)</span></span>\ntvon<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">cat</span> /tmp/tvon <span class="token variable">)</span></span>\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> -eq 0 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$tvon</span> -eq 1 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        xbmc-send -a <span class="token string">\'PlayerControl(Stop)\'</span>\n    <span class="token keyword">fi</span>\n    <span class="token keyword">echo</span> -n 0 <span class="token operator">></span> /tmp/tvon\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> -n 1 <span class="token operator">></span> /tmp/tvon\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<p>Now, all it\'s left, is adding this script to the cron. Unfortunatelly, cron cannot launch tasks more often than a minute. And losing up to a minute for script to actually notice that TV is switched off - is unacceptable. However, there is another neat trick under my sleeve - using <code class="language-text">sleep</code>. So fire up <code class="language-text">crontab -e</code> and fill it with:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">* * * * * /usr/local/bin/ping-tv.sh\n* * * * * <span class="token function">sleep</span> 10 <span class="token operator">&amp;&amp;</span> /usr/local/bin/ping-tv.sh\n* * * * * <span class="token function">sleep</span> 20 <span class="token operator">&amp;&amp;</span> /usr/local/bin/ping-tv.sh\n* * * * * <span class="token function">sleep</span> 30 <span class="token operator">&amp;&amp;</span> /usr/local/bin/ping-tv.sh\n* * * * * <span class="token function">sleep</span> 40 <span class="token operator">&amp;&amp;</span> /usr/local/bin/ping-tv.sh\n* * * * * <span class="token function">sleep</span> 50 <span class="token operator">&amp;&amp;</span> /usr/local/bin/ping-tv.sh</code></pre>\n      </div>\n<p>This would force cron to start 6 processes, each one waiting different time before actually pinging the TV. In the end, the maximum waiting time would be shorten to 10 seconds, which is acceptable in my opinion (you can always add more entries following that pattern).</p>\n<h2>TV Shows</h2>\n<p>Ok, let\'s make it perfectly clear - I\'m not responsible if DEA, FBI, KGB or HGW knock to your door one day. <strong class="warning">This is for informational purposes only</strong>. If your country provides a legal alternative like Hulu or Netflix, you should definitely consider it. If not (or you don\'t care), continue reading.</p>\n<p>The simplest approach, is just manually installing torrent client, and download desired shows as they premiere. But what if I told you that you can automate this process to the level where all new shows gets downloaded and categorized automatically, gets their subtitles downloaded, and finally, they\'re added to the Kodi Library? And all of that wihout single click (after some configuration of course)?</p>\n<p>Interested? Continue... :)</p>\n<h3>Transmission</h3>\n<p>First thing you need is a torrent client. I strongly recommend <a href="https://www.transmissionbt.com/">Transmission</a> since it does its job pretty well, and provides a nice web interface. Since we don\'t need GUI, we can narrow down the installotion to three packages:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">apt-get</span> <span class="token function">install</span> transmission-cli transmission-common transmission-daemon</code></pre>\n      </div>\n<p>If you like, you can also install Kodi Transmission Add-On (under: <em>Add-Ons => Program => Transmission</em>), which will provide you a very basic GUI directly from Kodi interface.</p>\n<p>Next, you need to do the configuration. All options are stored in <code class="language-text">/etc/transmission-daemon/settings.json</code>. Since, those settings are very individual, I won\'t provide any examples. Instead, I will direct you to <a href="https://trac.transmissionbt.com/wiki/EditConfigFiles">Transmission settings.json file documenatation</a>. When you finish them up, <strong>don\'t restart the daemon</strong>! You will lose all the changes (don\'t ask). Instead run:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">invoke-rc.d transmission-daemon reload</code></pre>\n      </div>\n<h3>RSS Feed</h3>\n<p>First thing you need, is the data source of new premieres. The easiest solution is an RSS channel - in this example I will use <a href="https://showrss.info/">showrss.info</a>, since they\'re doing exactly that.</p>\n<p>Whole process is rather simple - create an account, add all the shows you wish to be noted on, and create a feed URL on <a href="https://showrss.info/?cs=feeds">Feeds</a> page. Put this URL somewhere, you will need it in a minute.</p>\n<h3>Subliminal</h3>\n<p>Next thing, is some tool which will download subtitles for you. I strongly recommend <a href="https://subliminal.readthedocs.org/en/latest/">Subliminal</a>, since it\'s easy to use and supports many providers.</p>\n<p>Subliminal is a python package. However OSMC doesn\'t come with any python package managing tool (which is understandable). In my personal opinion, the easiest one to use is <a href="https://pip.pypa.io/en/stable/">pip</a>, so let\'s install it:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">apt-get</span> <span class="token function">install</span> python-pip</code></pre>\n      </div>\n<p>Next, install latest stable version of subliminal. Do it from <code class="language-text">osmc</code> user, not from <code class="language-text">root</code>! There is no need for polluting the system userspace, and thanks to that, all the files will be stored in one, easy-to-wipe-out directory.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">pip <span class="token function">install</span> --user subliminal</code></pre>\n      </div>\n<p>Also local userspace means, you need to add its path to your <code class="language-text">$PATH</code> env.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">echo</span> <span class="token string">\'export PATH="<span class="token variable">$HOME</span>/.local/bin:<span class="token variable">$PATH</span>"\'</span> <span class="token operator">>></span> ~/.bashrc\n<span class="token function">source</span> ~/.bashrc</code></pre>\n      </div>\n<p>If you don\'t want to use <code class="language-text">napiprojekt</code> provider, you\'re done. If you do, read next section.</p>\n<h4>Subliminal - napiprojekt</h4>\n<p>At the time of writing this article, napiprojekt support for subliminal was in beta stage, and was not included in pip repository. The easiest way to check if napiprojekt is enabled, is to check the list of supported providers:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">subliminal download --help <span class="token operator">|</span> <span class="token function">grep</span> provider\n<span class="token comment">#  -p, --provider [addic7ed|opensubtitles|podnapisi|thesubdb|tvsubtitles]</span></code></pre>\n      </div>\n<p>If napiprojekt is listed, you can skip this step.</p>\n<p>Otherwise download the freshest development version (if you don\'t have a git, invoke <code class="language-text">sudo apt-get install git</code>) and install it:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone --depth<span class="token operator">=</span>1 -b develop https://github.com/Diaoul/subliminal.git ~/subliminal\n<span class="token function">cd</span> ~/subliminal\npython setup.py <span class="token function">install</span> --user\n<span class="token function">cd</span> ~\n<span class="token function">rm</span> -rf ~/subliminal</code></pre>\n      </div>\n<p>Now napiprojekt should be displayed as available provider:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">subliminal download --help <span class="token operator">|</span> <span class="token function">grep</span> provider\n<span class="token comment">#  -p, --provider [addic7ed|napiprojekt|opensubtitles|podnapisi|thesubdb|tvsubtitles]</span></code></pre>\n      </div>\n<h3>FlexGet</h3>\n<p>And now... the biggest star. A tool, which glue all this stuff together: <a href="https://flexget.com/">FlexGet</a>. When properly configured, will parse showrss.info RSS feed, add all new shows to the transmission queue, after finished download move them to proper directory, and finally fetch subtitles. It will also keep an eye on shows which does not have subtitles when downloaded (very common situation for freshest episodes), and try to fetch them when they appear.</p>\n<h4>FlexGet - Installation</h4>\n<p>No rocket science here (remember - <code class="language-text">osmc</code> user, not <code class="language-text">root</code>):</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">pip <span class="token function">install</span> --user flexget\npip <span class="token function">install</span> --user transmissionrpc</code></pre>\n      </div>\n<p>The second package is necessary for all FlexGet transmission-related plugins.</p>\n<h4>FlexGet - napiprojekt</h4>\n<p>If you wish to use napiprojekt and <a href="https://flexget.com/wiki/Plugins/subliminal">subliminal plugin</a>, you need to monkey patch it (however, you can safely skip this step, despite the fact you will use subliminal - see below). Also before applying the patch, check the <code class="language-text">PROVIDERS</code> constant in <code class="language-text">~/.local/lib/python2.7/site-packages/flexget/plugins/output/subtitles_subliminal.py</code> file. At the time of writing this article <code class="language-text">napiprojekt</code> wasn\'t there, so if it\'s absent, do:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">sed</span> -i<span class="token string">\'~\'</span> <span class="token string">"s@\'opensubtitles\',@\'opensubtitles\',\\n    \'napiprojekt\',@"</span> ~/.local/lib/python2.7/site-packages/flexget/plugins/output/subtitles_subliminal.py</code></pre>\n      </div>\n<h4>FlexGet - configuration</h4>\n<p>The most important step - we need to tell FlexGet what to do, what to fetch and where to put it. You should really, REALLY read the <a href="https://flexget.com/wiki/Configuration">FlexGet Configuration documenatation</a> so you know what you\'re doing. After that, you can use this template for a good start (put it to <code class="language-text">~/.flexget/config.yml</code>):</p>\n<p><code class="language-text">~/.flexget/config.yml</code></p>\n<div class="gatsby-highlight" data-language="yaml">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">tasks</span><span class="token punctuation">:</span>\n  <span class="token key atrule">download-tv-shows</span><span class="token punctuation">:</span>\n    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">10</span>\n    <span class="token key atrule">rss</span><span class="token punctuation">:</span>\n      <span class="token key atrule">url</span><span class="token punctuation">:</span> &lt;showrss_url<span class="token punctuation">></span>\n    <span class="token key atrule">all_series</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">transmission</span><span class="token punctuation">:</span>\n      <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost\n      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9091</span>\n      <span class="token key atrule">username</span><span class="token punctuation">:</span> &lt;transmission_username<span class="token punctuation">></span>\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> &lt;transmission_password<span class="token punctuation">></span>\n      <span class="token key atrule">main_file_only</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">download</span><span class="token punctuation">:</span> &lt;finished_downloads_path<span class="token punctuation">></span>\n  <span class="token key atrule">sort-tv-shows</span><span class="token punctuation">:</span>\n    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">20</span>\n    <span class="token key atrule">disable</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> retry_failed\n    <span class="token key atrule">metainfo_series</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">thetvdb_lookup</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">require_field</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>series_name<span class="token punctuation">,</span> series_id<span class="token punctuation">,</span> series_season<span class="token punctuation">,</span> tvdb_series_name<span class="token punctuation">]</span>\n    <span class="token key atrule">find</span><span class="token punctuation">:</span>\n      <span class="token key atrule">path</span><span class="token punctuation">:</span> &lt;finished_downloads_path<span class="token punctuation">></span>\n      <span class="token key atrule">regexp</span><span class="token punctuation">:</span> <span class="token string">\'.*\\.(avi|mkv|mp4)$\'</span>\n      <span class="token key atrule">recursive</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">accept_all</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">exists_series</span><span class="token punctuation">:</span> &lt;tv_shows_path<span class="token punctuation">></span>\n    <span class="token key atrule">move</span><span class="token punctuation">:</span>\n      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">"&lt;tv_shows_path>/{{tvdb_series_name}}"</span>\n      <span class="token key atrule">filename</span><span class="token punctuation">:</span> <span class="token string">"{{tvdb_series_name}}.{{tvdb_ep_id}}{% if tvdb_ep_name|default(False) %} - {{ tvdb_ep_name }} {% endif %}"</span>\n      <span class="token key atrule">along</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> srt\n  <span class="token key atrule">download-subtitles</span><span class="token punctuation">:</span>\n    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">30</span>\n    <span class="token key atrule">filesystem</span><span class="token punctuation">:</span> /etc/gss/mech.d/\n    <span class="token key atrule">disable</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> seen\n    <span class="token key atrule">accept_all</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">exec</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> ls <span class="token punctuation">-</span>1R "&lt;tv_shows_path<span class="token punctuation">></span>" <span class="token punctuation">|</span> grep \'\\.S0\' <span class="token punctuation">|</span> sed <span class="token punctuation">-</span>r \'s@(\\.pl)<span class="token punctuation">?</span>\\<span class="token punctuation">...</span>.$@@g\' <span class="token punctuation">|</span> sort <span class="token punctuation">|</span> uniq <span class="token punctuation">-</span>c <span class="token punctuation">|</span> grep \'^\\s<span class="token important">*1</span>\' <span class="token punctuation">|</span> sed \'s@^\\s<span class="token important">*1</span>\\s*@@g\' <span class="token punctuation">|</span> awk <span class="token punctuation">-</span>F<span class="token comment"># \'{ print "find \\"&lt;tv_shows_path>\\" -name \\"" $1 "\\"*" }\' > /tmp/go</span>\n      <span class="token punctuation">-</span> chmod +x /tmp/go\n      <span class="token punctuation">-</span> /tmp/go <span class="token punctuation">|</span> awk <span class="token punctuation">-</span>F"<span class="token comment">###" \'{ print "\\"" $1 "\\"" }\' | tr \'\\n\' \' \' | xargs /home/osmc/.local/bin/subliminal download -l pl -p napiprojekt -p opensubtitles</span>\n  <span class="token key atrule">clean-up</span><span class="token punctuation">:</span>\n    <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">40</span>\n    <span class="token key atrule">no_entries_ok</span><span class="token punctuation">:</span> yes\n    <span class="token key atrule">clean_transmission</span><span class="token punctuation">:</span>\n      <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost\n      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9091</span>\n      <span class="token key atrule">username</span><span class="token punctuation">:</span> &lt;transmission_username<span class="token punctuation">></span>\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> &lt;transmission_password<span class="token punctuation">></span>\n      <span class="token key atrule">min_ratio</span><span class="token punctuation">:</span> <span class="token number">0</span>\n      <span class="token key atrule">finished_for</span><span class="token punctuation">:</span> 1 hours</code></pre>\n      </div>\n<ul>\n<li><em>showrss_url</em> - the URL of your ShowRSS feed</li>\n<li><em>finished<em>downloads</em>path</em> - the path, where files finished by transmission would land</li>\n<li><em>tv<em>shows</em>path</em> - the path, where files processed by FlexGet would be moved</li>\n<li><em>transmission_username</em>, <em>transmission_password</em> - pretty self-explanatory</li>\n</ul>\n<p>So what this scripts does?</p>\n<ul>\n<li><code class="language-text">download-tv-shows</code> - checks ShowRSS feed for new shows, and if found - adds them to tranmission.</li>\n<li><code class="language-text">sort-tv-shows</code> - checks transmission downloads directory for new shows. If found, moves them to tv shows directory, and tries to determine proper show and episode name in file path. So <code class="language-text">GreatShow.S01E03.720p.h264.PROPER.mkv</code> from tranmission downloads would become <code class="language-text">GreatShow/GreatShow.S01E03 - Episode Name.mkv</code>.</li>\n<li><code class="language-text">download-subtitles</code> - this task is pretty bizzare, I can tell. I tried to use <a href="https://flexget.com/wiki/Plugins/subliminal">subliminal plugin</a> for this example, however it never worked as expected. Instead, I used the bash script which looks for all files without corresponding <code class="language-text">*.srt</code>s and fires subliminal on them.</li>\n<li><code class="language-text">clean-up</code> - pretty obvious - clean transmission queue when file is finished processing.</li>\n</ul>\n<h4>FlexGet - cron</h4>\n<p>FlexGet itself is not a service, it needs to be run periodically. Thankfully this can be solved with a single line in crontab.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">*/30 * * * * /home/osmc/.local/bin/flexget --cron execute</code></pre>\n      </div>\n<p>I think 30-minutes is a very safe time-window - Your FlexGet scripts shouldn\'t overlap.</p>\n<h2>Conclusion</h2>\n<p>Phew! That was the long one! I\'m aware, that some things are not as easy as they should be, but trust me - it\'s worth the effort. Kodi can be a pretty powerful tool if you give it a chance, and in return it will pay you back with a Media Center you will find hard to take your eyes off.</p>',
excerpt:"I am big fan of TV series. There were times (mostly in college), when I watched them almost continuously. Recently I got tired of laptop…",frontmatter:{title:"Turn your Raspberry Pi to powerful HTPC with OSMC",date:"December 10, 2015",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQozz3P7U8SARwH8Juz5QyJ5OCeOFBfNJkQ8nSABpRPqWiJhcLxcJegQCTDLLVVmpDQGRaJ+VC0sEHTTeTQptPWetH6vzpna/vu++7z/e0HiJhfYPq3KPNHvPxTuHgMvjrhTxaq76Sq7MsXhlKXbAlh1yxifSDueozcetpo9Tdax6RGL6Jx1reHANHiiXjxFFw6FSaOLs/s8R/t1Pm2Lg6magbiNbZkbe9LQecUZg2j1gjc/aTB4scJElOPoupRqNUFiBM/BIkTKHXkz30fSu+jsQLPvVnVnzaErOZoiymisAT1kDEss4xLzRPcTYmOxPVujGuNExAmjpuZw+n84cru4d1sRRotgFSu2vlZPnjPpxLdVyHanhugJYpbg01tdKOJkpkoicEDaZ2Y1glAS5WO7IF59QBbYgXTO8JAXhws1Lk3eoWmeFVLslpp56uxNlpmpGQGCjf4EPUIpLRDymGuAZBhBekKj2GvxEuCF3ui2DfJ+DbmyjoEinhtM8NT0nw5rHWhBgrWuTG9B+HS6oAVQzCHRW9ZJFOGM+X6TEWWKvXMfO2L5HT0ZmdbMMKTx+oUmqt9oIESazlJSggvSlDcEKJxwcphAF0rSz6wXKuW9xzPip7nRd9s3kFnOkYYY0dMahoTGGmxloR0LhnhRgnfv3BeSwJotoxvVbBPZVtyd3xu2x9dDwVWaC9z2z5/3TYjvxmG9R5QeyZlhOc/RjQkdG0EgN/vS7bYlm12erWYjKYXwsz8w/RcIOnon+zqnpBb/IiRwgl3A+HGz7HeC7U6OXmGwXclea5MFve/lNj8m49rU6/X51Y2Agvz/eGB3hCHpWa6qd0n05P42cM+WDV6Lrn8BRgL1HDSd7wOAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-8cfe2.png",srcSet:"/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-130b9.png 250w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-489bc.png 500w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-8cfe2.png 1000w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-ba8eb.png 1500w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-60abc.png 1920w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},path:"/blog/turn-your-raspberry-pi-to-powerful-htpc-with-osmc",author:"Igor Rzegocki"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-turn-your-raspberry-pi-to-powerful-htpc-with-osmc-a5acb00f898ea950ecb5.js.map