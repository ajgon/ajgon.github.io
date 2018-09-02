webpackJsonp([0xb3ae4cf485ea],{511:function(e,s){e.exports={data:{allShareJson:{edges:[{node:{id:"2f0a723b-2772-40bf-9edc-70dd70337f10",slug:"facebook",name:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=%POSTURL%;display=popup",width:626,height:457}},{node:{id:"f5678f7f-ae05-444a-af1a-1167a30d0cce",slug:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&amp;url=%POSTURL%&amp;title=",width:600,height:450}},{node:{id:"4cbf0a18-d389-4583-98ac-501e59f1be18",slug:"twitter",name:"Twitter",url:"https://twitter.com/share?url=%POSTURL%&amp;text=",width:500,height:550}}]},markdownRemark:{html:'<p>Leaving GMail was of the best decisions for my mail I made recently. But also a\nmost problematic one. I needed to set all the MTA architecture myself. I tested\nmany solutions out there and finally ended with postfix + dovecot\nconfiguration.  It appears that this is most stable and unproblematic one (at\nleast for now).</p>\n<!--more-->\n<p>The next feature I really missed is Gmail Server-Side mail filtering. I\'ve got\na bunch of machines that access my mail server (computers, phones etc.) and I\nreceive lots emails from lists, friends and organizations every day. Setting\nfiltering for all of that once, was a big pain. Setting it multiple times on\nall the machines, and then be consistent about it was enormous P.I.T.A. So I\nstarted looking for solution for that problem and found\n<a href="https://bit.ly/2LHCioh">Sieve</a> (and its\n<a href="https://wiki.dovecot.org/LDA/Sieve">dovecot plugin</a>).</p>\n<p>Ok, so how to do it? Firstly, as for dovecot 1.2.x, sieve was completely\nrewritten as a new plugin. It can be obtained from\n<a href="https://bit.ly/2MC58eS">rename-it.nl website</a>. At the time of\nwriting this post, there is no <code class="language-text">*.deb</code> package in repositories, so I have to\nbuild it manually. I also had to install <code class="language-text">dovecot-dev</code> package, because of\nsieve configurator, which needs a <code class="language-text">dovecot-config</code> file.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">wget</span> http://www.rename-it.nl/dovecot/1.2/dovecot-1.2-sieve-0.1.19.tar.gz\n<span class="token function">tar</span> -xzvf dovecot-1.2-sieve-0.1.19.tar.gz\n<span class="token function">cd</span> dovecot-1.2-sieve-0.1.19\n./configure --with-dovecot<span class="token operator">=</span>/usr/lib/dovecot/ --prefix<span class="token operator">=</span>/usr\n<span class="token function">make</span>\n<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></code></pre>\n      </div>\n<p>After that, it was a time to enable sieve plugin in dovecot.\n<code class="language-text">/etc/dovecot/dovecot.conf</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">protocol lda <span class="token punctuation">{</span>\n    <span class="token punctuation">..</span>.\n    <span class="token comment"># Support for dynamically loadable plugins. mail_plugins is a space separated</span>\n    <span class="token comment"># list of plugins to load.</span>\n    mail_plugins <span class="token operator">=</span> sieve <span class="token comment"># ... other plugins like quota</span>\n    <span class="token comment"># add those directives when you expect problems - huge time saver!</span>\n    debug <span class="token operator">=</span> <span class="token function">yes</span>\n    log_path <span class="token operator">=</span> /var/log/dovecot-lda.log\n    info_log_path <span class="token operator">=</span> /var/log/dovecot-lda.log\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>There is a possibility to make some adjustments for plugin itself (filters\npaths and so on), but I didn\'t find it necessary. However, if you want to - you\ncan check them on\n<a href="https://wiki.dovecot.org/LDA/Sieve/Dovecot">LDA/Sieve documentation page</a>.\nAfter that, just restart postfix and everything is set.</p>\n<p>The last step is setting all the filters properly. They should be stored in\n<code class="language-text">~/.dovecot.sieve</code> (if you use <code class="language-text">mailbox_command</code>) or in\n<code class="language-text">/home/vmail/user@domain/.dovecot.sieve</code> (if you use <code class="language-text">mailbox_transport</code>).\nSieve uses it\'s own <a href="https://www.ietf.org/rfc/rfc5228.txt">pseudo-language</a> for\nfiltering, but below is a part of my file which should provide a\n<a href="https://wiki.dovecot.org/LDA/Sieve/">good example</a> for start:</p>\n<p><code class="language-text">.dovecot.sieve</code></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Require plugin for moving messages (fileinto) and vacation responder (vacation)</span>\nrequire <span class="token punctuation">[</span><span class="token string">"fileinto"</span>, <span class="token string">"vacation"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment"># Move all mails with "List-Id" equal to "users-pl.lists.rootnode.net" to rzegocki_pl/lists IMAP directory</span>\n<span class="token keyword">if</span> header :contains <span class="token string">"List-Id"</span> <span class="token string">"users-pl.lists.rootnode.net"</span> <span class="token punctuation">{</span> fileinto <span class="token string">"rzegocki_pl.lists"</span><span class="token punctuation">;</span> stop<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment"># If messages are not from a list (most of the lists sets mail header "Precedence" either to "list" or "bulk") then send a vacation email</span>\n<span class="token keyword">if</span> not header :contains <span class="token string">"Precedence"</span> <span class="token punctuation">[</span><span class="token string">"bulk"</span>,<span class="token string">"list"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    vacation :days 7 :addresses <span class="token punctuation">[</span><span class="token string">"igor@email1.com"</span>, <span class="token string">"igor@email2.com"</span><span class="token punctuation">]</span> :subject <span class="token string">"Vacation 15.07 - 22.07"</span> <span class="token string">" ..... "</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># Move all messages from my father to one directory</span>\n<span class="token keyword">if</span> anyof <span class="token punctuation">(</span>\n    address :is <span class="token string">"sender"</span> <span class="token string">"steven@email1.com"</span>,\n    address :is <span class="token string">"sender"</span> <span class="token string">"steven@email2.com"</span>,\n    address :is <span class="token string">"sender"</span> <span class="token string">"steven@email3.com"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fileinto <span class="token string">"rzegocki_pl.private.steven"</span><span class="token punctuation">;</span> stop<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It took me some time to set everything up (mostly because of lack of\ndocumentation and multiple domain problems), but the final effect is awesome,\nand confirms that own server is an really, really great idea :)</p>',excerpt:"Leaving GMail was of the best decisions for my mail I made recently. But also a\nmost problematic one. I needed to set all the MTA…",id:"/Users/ajgon/Projects/rzegocki-pl/src/posts/2012-07-16-setting-server-side-mail-filtering-with-sieve-and-dovecot.markdown absPath of file >>> MarkdownRemark",frontmatter:{title:"Setting server-side mail filtering with sieve and dovecot",date:"July 16, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABVZPUKoweP//EABoQAQEAAgMAAAAAAAAAAAAAAAEAAhIDETH/2gAIAQEAAQUC2G2y6bjBkS9v/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABoQAQACAwEAAAAAAAAAAAAAABEBEAACITH/2gAIAQEABj8CIInDlGoL5f8A/8QAGxAAAwACAwAAAAAAAAAAAAAAAAEhEUFRYeH/2gAIAQEAAT8hUbySFmy6TGpkJHgKg9j/2gAMAwEAAgADAAAAEOg//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QprCD/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Qg//EAB0QAQACAgIDAAAAAAAAAAAAAAEAIRFBMXFhgZH/2gAIAQEAAT8QRCVvKno1ADSA5HtWNLryCmiHY39iosJ41FQVmf/Z",aspectRatio:1.2412121212121212,src:"/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-75c44.jpg",srcSet:"/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-d1f5d.jpg 250w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-6d1fa.jpg 500w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-75c44.jpg 1000w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},path:"/blog/setting-server-side-mail-filtering-with-sieve-and-dovecot",author:"Igor Rzegocki"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-setting-server-side-mail-filtering-with-sieve-and-dovecot-639868a47871026cecac.js.map