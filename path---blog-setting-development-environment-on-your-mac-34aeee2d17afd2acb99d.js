webpackJsonp([38701429629100],{508:function(a,e){a.exports={data:{allShareJson:{edges:[{node:{id:"2f0a723b-2772-40bf-9edc-70dd70337f10",slug:"facebook",name:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=%POSTURL%;display=popup",width:626,height:457}},{node:{id:"f5678f7f-ae05-444a-af1a-1167a30d0cce",slug:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&amp;url=%POSTURL%&amp;title=",width:600,height:450}},{node:{id:"4cbf0a18-d389-4583-98ac-501e59f1be18",slug:"twitter",name:"Twitter",url:"https://twitter.com/share?url=%POSTURL%&amp;text=",width:500,height:550}}]},markdownRemark:{html:'<p>Recently I bought an\n<a href="https://www.anandtech.com/show/4253/the-crucial-m4-micron-c400-ssd-review">awesome piece of hardware</a>\nto my MacBook Pro. Unfortunatelly\n<a href="https://www.ifixit.com/Guide/Installing-MacBook-Pro-13-Inch-Unibody-Early-2011-Hard-Drive-Replacement/5119/1">to install it</a>,\nI had to remove my old HDD and all system files with it as well. So for that\noccasion I made myself double gift (Christmas are earlier this year ;)) and\nalso bought a <a href="https://www.apple.com/osx/">new OS</a>. After smooth installation,\n<a href="https://bit.ly/1HWbY6S">some tweaks</a>\nand <a href="https://bit.ly/2omWcLS">huge performance boost</a>\nI started setting my developer environment once again - nice and clean.</p>\n<!--more-->\n<h2>Installing developer "must-have" applications</h2>\n<p>Firstly, two most important things are a terminal emulator - in my case, it is\n<a href="https://www.iterm2.com/#/section/home">iTerm2</a>, and\n<a href="https://developer.apple.com/technologies/tools/">XCode</a> with\n<a href="https://stackoverflow.com/questions/9329243/xcode-4-4-command-line-tools">command line tools</a>.\nNext thing is of course package manager. After alot of nasty fighting and bad\nexperiences with <a href="https://www.macports.org/">macports</a> I switched to\n<a href="https://mxcl.github.com/homebrew/">Homebrew</a> and I love it. To install it,\nsimply type:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">ruby <span class="token operator">&lt;</span><span class="token punctuation">(</span>curl -fsSkL raw.github.com/mxcl/homebrew/go<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>After installing it, i suggest to type <code class="language-text">brew doctor</code> and follow the\ninstructions if something unexpected occurs. However, in clean\nMountain Lion+XCode+command line tools installation I didn\'t get any warnings,\nso you shouldn\'t as well.</p>\n<p>Next important thing is <a href="https://git-scm.com/">git</a>. Even if you don\'t plan to\nuse it (but I strongly recommend this tool), install it, because a lot of\nsoftware depends on it these days. Especially if you are a Ruby developer.\nSo just type:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">brew <span class="token function">install</span> <span class="token function">git</span></code></pre>\n      </div>\n<p>and you\'re set. Another thing, which I really like is\n<a href="https://www.zsh.org/">Z Shell</a> with it\'s excellent extension\n<a href="https://github.com/robbyrussell/oh-my-zsh">oh-my-zsh</a>. Words can\'t describe\nhow awesome it is, so watch\n<a href="https://www.youtube.com/watch?v=m07MiM6rmMc">this video</a>, and then type:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh <span class="token operator">|</span> sh</code></pre>\n      </div>\n<h2>Installing dnsmasq and nginx</h2>\n<p>The next step is installing <a href="https://nginx.org/">nginx</a>, which is a great\nalternative to <a href="https://www.apache.org/">apache</a>.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">brew <span class="token function">install</span> nginx\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /usr/local/etc/nginx /etc/nginx</code></pre>\n      </div>\n<p>As for configuration, take look at my\n<a href="https://github.com/ajgon/DeeDee/tree/master/etc/nginx">DeeDee project nginx configuration files</a></p>\n<ul>\n<li>they are really good starting point for configuring your nginx. However, if\nyou are lazy, just take and copy <code class="language-text">wordpress</code> and <code class="language-text">php</code> files from <code class="language-text">extra/lang</code>\ndirectory (on DeeDee github) to <code class="language-text">/usr/local/etc/nginx</code> (this is where your\nnginx configuration files lives) and add following section at the bottom\n(before the last closing bracket) of the <code class="language-text">nginx.conf</code> file:</li>\n</ul>\n<p><code class="language-text">/usr/local/etc/nginx/nginx.conf</code></p>\n<div class="gatsby-highlight" data-language="txt">\n      <pre class="language-txt"><code class="language-txt">server {\n    server_name ~^(www.)?(?&lt;project&gt;[^.]+).php.dev;\n    # This is the path, where your projects lives.\n    # $project is domain part but as well directory.\n    # So something.php.dev will take files from /Users/yourname/Projects/something/public\n    root /Users/yourname/Projects/$project/public;\n    error_log logs/php.dev.error_log info;\n    index index.html index.php;\n    include php;\n}\n\nserver {\n    server_name ~^(www.)?(?&lt;project&gt;[^.]+).wp.dev;\n    # This is the path, where your projects lives.\n    # $project is domain part but as well directory.\n    # So something.wp.dev will take files from /Users/yourname/Projects/something/public\n    root /Users/yourname/Projects/$project/public;\n    error_log logs/wp.dev.error_log info;\n    index index.html index.php;\n    include php;\n    include wordpress;\n}</code></pre>\n      </div>\n<p>Now type <code class="language-text">sudo /usr/local/sbin/nginx -t</code> - if eveyrhing is okay, you should see\na proper message.</p>\n<p>Next thing we need to do is to make those wp.dev and php.dev domains work. To\ndo this, install <a href="https://bit.ly/1XAorA4">dnsmasq</a>:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">brew <span class="token function">install</span> dnsmasq\n<span class="token function">cp</span> <span class="token variable"><span class="token variable">$(</span>brew --prefix dnsmasq<span class="token variable">)</span></span>/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf\n<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable"><span class="token variable">$(</span>brew --prefix dnsmasq<span class="token variable">)</span></span>/homebrew.mxcl.dnsmasq.plist /Library/LaunchDaemons</code></pre>\n      </div>\n<p>Now edit newly created <code class="language-text">dnsmasq.conf</code> file and add:\n<code class="language-text">/usr/local/etc/dnsmasq.conf</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">address<span class="token operator">=</span>/.dev/127.0.0.1</code></pre>\n      </div>\n<p>Last thing left, is setting a nameserver to 127.0.0.1 in your Network prefpane,\nas shown below.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dnsmasq-318ee9833ffeb62a6ec7f4b88878e911-cdf66.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 670px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 86.86567164179105%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsSAAALEgHS3X78AAAB+UlEQVQ4y6VT226bQBTk/z+kz3UjRU2bulIMtWKcyGCHm23YGwssYINx32K7AzSRY0VRpY5WhwN75lyWWW1uPT5ZU9f1fN/3PM89w2RyP51OvQ5uZwkhjDFKKec8CAJtNNLH47Gu66NL6IZhnH+HP5/PkcJxHFQyTVNjjC9XIeqEYVgUhVIqTdMsy1Sm8jwv3iLtkCQJwhCvCcFFDMgkSQmlnr+8u9MN3Vgu1y1Wa+yG61DG0nGe0DOYUkqkwAgaF4KSaBV4NFrHMYsFEyzCigURnKBD27Yty0K3SBVFEemAmdvKseC/HoJP149XN7PbL+bwm/3zdjG8mf34aumGy2OJLtFYWW72+33TNLsOmAi5NCnYg5d9t/ZDu7ky68F9PZhUg0n9ebK7NtWuaU6n0/F4PL1FVVUtmTOqys3FZh+82e23VQ3ncDhc8F/InCX59vl4Opyt50MbUVQg7z6szFlabN+tXNb/Q/7HypgJc/213erIzfnMr7ggV+8fWP27qj88bYH/LRXOjCeKyoyIJGSSp4UqaybzJM2qF2w79D7028uzRRhFuFaO484Xi9nM9v0gohRqjTr0quovEyz8lgIy3iFWKKbssNm0tijwQb0i7wA9Q+TtNZASttU2iUJGCdSPLMjHef8E2qA+Di+9A4WjMq4HmsHMfwCjopxXX62e9AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="dnsmasq configuration"\n        title=""\n        src="/static/dnsmasq-318ee9833ffeb62a6ec7f4b88878e911-cdf66.png"\n        srcset="/static/dnsmasq-318ee9833ffeb62a6ec7f4b88878e911-1ff52.png 200w,\n/static/dnsmasq-318ee9833ffeb62a6ec7f4b88878e911-c0f6e.png 400w,\n/static/dnsmasq-318ee9833ffeb62a6ec7f4b88878e911-cdf66.png 670w"\n        sizes="(max-width: 670px) 100vw, 670px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>From now on all <code class="language-text">*.dev</code> domains will be translated to <code class="language-text">127.0.0.1</code> and from there\nall <code class="language-text">wp.dev</code> and <code class="language-text">php.dev</code> domains will be handled by nginx. Good stuff.</p>\n<h2>Installing PHP-FPM and MySQL</h2>\n<p>Unlike apache, nginx doesn\'t have a native PHP module, so we have to help\nourselves with FastCGI extension. Thankfully there is a great wrapper for\nPHPcgi called PHP-FPM. Not only it sets all the hard work for us, but it also\nwatches PHP for unexpected crashes (well.. yeah, it\'s PHP after all) and\nrestarts it immediately - so it saves our time. Unfortunately, brew doesn\'t\ncontain PHP recipes out of box, so we need\n<a href="https://github.com/josegonzalez/homebrew-php">a little help</a>. To install PHP:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">brew tap homebrew/dupes\nbrew tap josegonzalez/homebrew-php\nbrew <span class="token function">install</span> php54 --with-mysql --with-fpm --with-intl <span class="token comment"># you can add --with-pgsql if you are using it</span></code></pre>\n      </div>\n<p>Installing MySQL is a little bit complicated:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">brew <span class="token function">install</span> mysql\nunset TMPDIR\nmysql_install_db --verbose --user<span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">whoami</span><span class="token variable">`</span></span> --basedir<span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span>brew --prefix mysql<span class="token variable">)</span></span>"</span> --datadir<span class="token operator">=</span>/usr/local/var/mysql --tmpdir<span class="token operator">=</span>/tmp\nmysql.server start\n/usr/local/opt/mysql/bin/mysqladmin -u root password <span class="token string">\'\'</span>\n/usr/local/opt/mysql/bin/mysqladmin -u root -h localhost password <span class="token string">\'\'</span></code></pre>\n      </div>\n<h2>Putting everything together</h2>\n<p>As you may noticed, all this stuff won\'t start automatically. I think it\'s a\ngood approach, because when I use my mac for normal stuff, I don\'t want any\nunnecessary resources consumed. So to tie all of this together, I have a simple\nscript which will launch or disable all the services on demand. Just create\n(and make executable) <code class="language-text">/usr/local/bin/dev&lt;</code> file with following contents:</p>\n<p><code class="language-text">/usr/local/bin/dev</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/bash</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span>$<span class="token comment"># -lt 1 ]; then</span>\n    <span class="token keyword">echo</span> <span class="token string">"Usage: <span class="token variable">$0</span> on|off"</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token operator">=</span> <span class="token string">\'on\'</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token variable"><span class="token variable">$(</span>brew --prefix php54<span class="token variable">)</span></span>/sbin/php-fpm --fpm-config /usr/local/etc/php/5.4/php-fpm.conf 2<span class="token operator">></span> /dev/null <span class="token operator">&amp;</span>\n        <span class="token function">sudo</span> /usr/local/sbin/nginx\n        mysql.server start <span class="token operator">></span> /dev/null\n    <span class="token keyword">else</span>\n        <span class="token function">killall</span> php-fpm 2<span class="token operator">></span> /dev/null\n        <span class="token function">sudo</span> <span class="token function">killall</span> nginx 2<span class="token operator">></span> /dev/null\n        mysql.server stop 2<span class="token operator">></span> /dev/null\n    <span class="token keyword">fi</span>\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<p>Now when you need to enter "development mode" simply type <code class="language-text">dev on</code> and to quit\n<code class="language-text">dev off</code>.</p>\n<h2>Conclusion</h2>\n<p>Well, that\'s all! I hope you will enjoy this simple environment as much as\nI do :).</p>',excerpt:"Recently I bought an\n awesome piece of hardware \nto my MacBook Pro. Unfortunatelly\n to install it ,\nI had to remove my old HDD and all…",frontmatter:{title:"Setting development environment on your Mac",date:"September 22, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABopKZlI58l//EABoQAQADAAMAAAAAAAAAAAAAAAEAAgMEERL/2gAIAQEAAQUC2WekldBM9Eb8l7dbT//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAEBECISJBgZH/2gAIAQEABj8CxPiuT1o0VApb/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAMUFhcYH/2gAIAQEAAT8hmFTnKFWTBKN+YSy9GChHnIVqemb/2gAMAwEAAgADAAAAECjv/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8QR//EABYRAQEBAAAAAAAAAAAAAAAAAAAhQf/aAAgBAgEBPxDFf//EAB0QAQEAAgIDAQAAAAAAAAAAAAERAEEhMVFxkaH/2gAIAQEAAT8QkRQNb4/ZckYLq6fRj9B5EmAkfytM7Mii9m5WmWow+Gf/2Q==",aspectRatio:1.499267935578331,src:"/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-75c44.jpg",srcSet:"/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-d1f5d.jpg 250w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-6d1fa.jpg 500w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-75c44.jpg 1000w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},path:"/blog/setting-development-environment-on-your-mac",author:"Igor Rzegocki"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-setting-development-environment-on-your-mac-34aeee2d17afd2acb99d.js.map