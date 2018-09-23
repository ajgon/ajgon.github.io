webpackJsonp([0x91a4778c8fda],{505:function(a,s){a.exports={data:{allShareJson:{edges:[{node:{id:"2f0a723b-2772-40bf-9edc-70dd70337f10",slug:"facebook",name:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=%POSTURL%;display=popup",width:626,height:457}},{node:{id:"f5678f7f-ae05-444a-af1a-1167a30d0cce",slug:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&amp;url=%POSTURL%&amp;title=",width:600,height:450}},{node:{id:"4cbf0a18-d389-4583-98ac-501e59f1be18",slug:"twitter",name:"Twitter",url:"https://twitter.com/share?url=%POSTURL%&amp;text=",width:500,height:550}}]},markdownRemark:{html:'<p>I was always prefering "stay in the shadows" policy in terms of email address.\nI have two secondary emails (for spam I want to read, and for spam I want to be\nsent into oblivion i.e. for "Register NOW to download this 2KB file" sites). My\nprimary e-mail was well guarded and given only to living people. Until one\ncompany decided to show it to the whole world by putting it into WHOIS database\nfor my domain. Before I reacted, it was too late. And my little mail server\nneeded one more extension.</p>\n<!--more-->\n<p>I wanted to integrate it somehow with my existing configuration - so, when\nmessage is parsed by spam filter, it needs to be filtered further by sieve.\nThanks to that, I can have full control over spam and even categorize it (yeah,\nI\'m a picky bastard ;)). Thankfully\n<a href="https://spamassassin.apache.org/">SpamAssassin</a> can do this, so I didn\'t have\nto look further. I also decided to inlcude\n<a href="https://sourceforge.net/apps/trac/pyzor/">Pyzor</a>,\n<a href="https://razor.sourceforge.net/">Razor</a> and\n<a href="https://www.dcc-servers.net/dcc/">DCC</a>. No mercy!</p>\n<h2>Installing packets</h2>\n<p>But first - necessary packets. Thankfully, debian has everything out of box,\nexcept DCC.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">apt-get</span> <span class="token function">install</span> spamc spamassassin pyzor razor</code></pre>\n      </div>\n<p>Next is DCC, which has to be build manually:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">groupadd</span> dcc\n<span class="token function">useradd</span> -g dcc -s /bin/false -d /var/dcc dcc\n<span class="token function">wget</span> http://www.dcc-servers.net/dcc/source/dcc-dccproc.tar.Z\n<span class="token function">tar</span> xzvf dcc-dccproc.tar.Z\n<span class="token function">cd</span> dcc-dccproc-1.3.142\n./configure --with-uid<span class="token operator">=</span>dcc\n<span class="token function">make</span>\n<span class="token function">make</span> <span class="token function">install</span>\n<span class="token function">chown</span> -R dcc:dcc /var/dcc\n<span class="token function">ln</span> -s /var/dcc/libexec/dccifd /usr/local/bin/dccif</code></pre>\n      </div>\n<h2>Setting up SpamAssassin</h2>\n<p>The next step is to configure <code class="language-text">spamd</code> to run as a daemon:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">groupdd spamd\n<span class="token function">useradd</span> -g spamd -s /bin/false -d /var/lib/spamassassin spamd\n<span class="token function">mkdir</span> -p /var/lib/spamassassin\n<span class="token function">chown</span> spamd:spamd /var/lib/spamassassin -R</code></pre>\n      </div>\n<p><code class="language-text">/etc/default/spamassassin</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Spamassassin home</span>\nSAHOME<span class="token operator">=</span><span class="token string">"/var/lib/spamassassin"</span>\n\n<span class="token comment"># Where imap stores user emails</span>\nUSERACCOUNTS<span class="token operator">=</span><span class="token string">"/home/vmail"</span>\n\n<span class="token comment"># Change to one to enable spamd</span>\nENABLED<span class="token operator">=</span>1\n\n<span class="token comment"># Options</span>\n<span class="token comment"># See man spamd for possible options. The -d option is automatically added.</span>\n\n<span class="token comment"># SpamAssassin uses a preforking model, so be careful! You need to</span>\n<span class="token comment"># make sure --max-children is not set to anything higher than 5,</span>\n<span class="token comment"># unless you know what you\'re doing.</span>\n<span class="token comment"># For -A use the IP address of spamc client (probably IP of primary interface)</span>\nOPTIONS<span class="token operator">=</span><span class="token string">"--create-prefs -x --max-children 3 --username spamd --helper-home-dir <span class="token variable">${SAHOME}</span> -s <span class="token variable">${SAHOME}</span>/spamd.log --virtual-config-dir=<span class="token variable">${USERACCOUNTS}</span>/%l@%d/spamassassin -A 192.168.1.1"</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>The <code class="language-text">virtual-config-dir</code> allows us to have separate user preferences and bayes\ndatabases for each virtual user. The next thing is to edit\n<code class="language-text">/etc/spamassassin/local.cf</code> file:</p>\n<p><code class="language-text">/etc/spamassassin/local.cf</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>\n<span class="token comment"># Save spam messages as a message/rfc822 MIME attachment instead of</span>\n<span class="token comment"># modifying the original message (0: off, 2: use text/plain instead)</span>\nreport_safe 0\n<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>\n\nuse_dcc 1\ndcc_path /usr/local/bin/dccproc\n\nuse_pyzor 1\npyzor_path /usr/bin/pyzor\n\nuse_razor2 1\nrazor_config /etc/razor/razor-agent.conf</code></pre>\n      </div>\n<p>Afterwards, edit <code class="language-text">/etc/spamassassin/v310.pre</code> and check that the DCC, Razor and\nPyzor plugins are enabled (DCC is disabled by default). After that, the only\nthing left is to update SA databases and start it:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">sa-update --no-gpg\n/etc/init.d/spamassassin start</code></pre>\n      </div>\n<h2>Setting up postfix transport</h2>\n<p>From the postfix side all you have to do is change transport (I suggest to\ncreate a new one - then, when something goes wrong you can easily switch back\nto old working configuration) or <code class="language-text">mailbox_command</code>. For transport, the magic\nline looks like this:</p>\n<p><code class="language-text">/etc/postfix/master.cf</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">dovecot-spam   unix  -       n       n       -       -       pipe\n    flags<span class="token operator">=</span>DRhu user<span class="token operator">=</span>vmail:vmail argv<span class="token operator">=</span>/usr/bin/spamc -u <span class="token variable">${recipient}</span> -e /usr/lib/dovecot/deliver -d <span class="token variable">${recipient}</span></code></pre>\n      </div>\n<p>And this is the line I\'ve been looking for. SpamAssassin takes message, pushes\nit through his intestines, adds headers, and output is pushed further to\n<code class="language-text">deliver</code> command. From that point, it can be taken by Sieve. To make this\nwork, don\'t forget to change the transport!</p>\n<p><code class="language-text">/etc/postfix/main.cf</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">mailbox_transport <span class="token operator">=</span> dovecot-spam</code></pre>\n      </div>\n<p>Restart postfix:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">/etc/init.d/postfix restart</code></pre>\n      </div>\n<h2>And finally... Sieve</h2>\n<p>After all of that, all you have to do is configure Sieve. For example like that\n(<em>Junk</em> is a folder which Thunderbird traditionally uses for spam, you can\nchange it of course):</p>\n<p><code class="language-text">.dovecot.sieve</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">if</span> header :contains <span class="token string">"X-Spam-Flag"</span> <span class="token punctuation">[</span><span class="token string">"YES"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> fileinto <span class="token string">"Junk"</span><span class="token punctuation">;</span> stop<span class="token punctuation">;</span> <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>To test it, just send an email to protected account and look into the headers.\nYou should see a SpamAssassin magic added there. To test filtering, use\n<a href="https://spamassassin.apache.org/gtube/">GTUBE</a> message format - your email\nshould land in Junk.</p>\n<h2>Conclusion</h2>\n<p>I think this configuration will suit my needs. Probably it will get some\nadjustments over time (like intelligent filters in SA and so on), and - when I\nstart to trust it fully - instead of moving into the Junk all spam will be\ndeleted. But for now, everything works like a charm :) If you experience any\nproblems, first look into <code class="language-text">/var/lib/spamassassin/spamd.log</code> file - there is big\nchance, that you\'ll find your answers there.</p>\n<h3>Sources</h3>\n<ul>\n<li><a href="https://ailoo.net/2009/11/integrate-spamassassin-into-postfix-dovecot/">https://ailoo.net/2009/11/integrate-spamassassin-into-postfix-dovecot/</a></li>\n</ul>',excerpt:'I was always prefering "stay in the shadows" policy in terms of email address.\nI have two secondary emails (for spam I want to read, and for…',frontmatter:{title:"Adding a little bit of SpamAssassin into Postfix, Dovecot, Sieve soup",date:"July 21, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABhy8rDIP/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIQESH/2gAIAQEAAQUCrSL4Nn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAQQtH/2gAIAQEABj8Clx//xAAdEAEAAgEFAQAAAAAAAAAAAAABABExEEFRgaHh/9oACAEBAAE/IWrLOXcvH3RaMCloIrv7KWf/2gAMAwEAAgADAAAAEIsv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QR//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQXGR8P/aAAgBAQABPxBggQubYkMbYDfRpfl9Yi7Mr6E8g7cs5M5VU5w4qrn/2Q==",aspectRatio:1.3329831932773109,src:"/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-75c44.jpg",srcSet:"/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-d1f5d.jpg 250w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-6d1fa.jpg 500w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-75c44.jpg 1000w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-5b543.jpg 1269w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},path:"/blog/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup",author:"Igor Rzegocki"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-ecc6c084027e68b8c111.js.map