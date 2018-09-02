webpackJsonp([38764020085454],{504:function(a,n){a.exports={data:{allShareJson:{edges:[{node:{id:"2f0a723b-2772-40bf-9edc-70dd70337f10",slug:"facebook",name:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=%POSTURL%;display=popup",width:626,height:457}},{node:{id:"f5678f7f-ae05-444a-af1a-1167a30d0cce",slug:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&amp;url=%POSTURL%&amp;title=",width:600,height:450}},{node:{id:"4cbf0a18-d389-4583-98ac-501e59f1be18",slug:"twitter",name:"Twitter",url:"https://twitter.com/share?url=%POSTURL%&amp;text=",width:500,height:550}}]},markdownRemark:{html:'<p>One of the nicest, yet badly documented features in new MUAs is email servers autodiscovering. When you type your e-mail address in configuration window, modern MUA is trying to determine what IMAP/POP3 servers are, and how to connect to them. To do so, they assume, that your email contains a server domain name. A nice assumption, but often not relevant (google apps is a good example here). Thankfully, there is also another way - asking an original server on a specially configured domain what those parameters are.</p>\n<!-- more -->\n<p>In a perfect world, there would one standard for that - in our world however, there are two: <code class="language-text">autoconfig</code> (Mozilla favored) and <code class="language-text">autodiscover</code> (Microsoft promoted). So we have to to set them together - thankfully both are based on simple XML files, so it\'s not a big deal.</p>\n<h2>autoconfig (Mozilla Thunderbird)</h2>\n<p>This one is (im my opinion) is more clean and advanced. To use it, just make your webserver to return below XML file on <code class="language-text">autoconfig.</code> subdomain. So (for example) if you have email <code class="language-text">myname@mydomain.com</code> - <code class="language-text">autoconfig.mydomain.com</code> should return:</p>\n<p><code class="language-text">autoconfig.xml</code></p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clientConfig</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1.1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>emailProvider</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mydomain.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>domain</span><span class="token punctuation">></span></span>mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>domain</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>displayName</span><span class="token punctuation">></span></span>Mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>displayName</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>displayShortName</span><span class="token punctuation">></span></span>Mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>displayShortName</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>incomingServer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pop3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hostname</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hostname</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>995<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>socketType</span><span class="token punctuation">></span></span>SSL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>socketType</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authentication</span><span class="token punctuation">></span></span>password-cleartext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authentication</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">></span></span>%EMAILADDRESS%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pop3</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>leaveMessagesOnServer</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>leaveMessagesOnServer</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>downloadOnBiff</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>downloadOnBiff</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>daysToLeaveMessagesOnServer</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>daysToLeaveMessagesOnServer</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pop3</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>incomingServer</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>incomingServer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>imap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hostname</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hostname</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>993<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>socketType</span><span class="token punctuation">></span></span>SSL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>socketType</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authentication</span><span class="token punctuation">></span></span>password-cleartext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authentication</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">></span></span>%EMAILADDRESS%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>incomingServer</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outgoingServer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smtp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hostname</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hostname</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>587<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>socketType</span><span class="token punctuation">></span></span>STARTTLS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>socketType</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authentication</span><span class="token punctuation">></span></span>password-cleartext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authentication</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">></span></span>%EMAILADDRESS%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outgoingServer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>emailProvider</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>clientConfig</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>If you have an email server on a different domain than your email account, simply add redirect to your httpd server. For example in nginx:</p>\n<p><code class="language-text">/etc/nginx.conf</code></p>\n<div class="gatsby-highlight" data-language="txt">\n      <pre class="language-txt"><code class="language-txt">server {\n    server_name autoconfig.myotherdomain.com;\n    rewrite ^.* https://mydomain.com/config-v1.1.xml permanent;\n}</code></pre>\n      </div>\n<p>And that\'s it! From now on, your email will be automatically discovered by Thunderbird.</p>\n<h2>autodiscover (Microsoft Outlook)</h2>\n<p>Procedure is very similar here. You just have to set <code class="language-text">autodiscover.</code> domain, and XML file is slightly different. So, for example <code class="language-text">autodiscover.mydomain.com</code> should return:</p>\n<p><code class="language-text">autodiscover.xml</code></p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autodiscover</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Response</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schemas.microsoft.com/exchange/autodiscover/outlook/responseschema/2006a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Account</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccountType</span><span class="token punctuation">></span></span>email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccountType</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Action</span><span class="token punctuation">></span></span>settings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Action</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Protocol</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Type</span><span class="token punctuation">></span></span>POP3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Type</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Server</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Server</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Port</span><span class="token punctuation">></span></span>995<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Port</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DomainRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DomainRequired</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SPA</span><span class="token punctuation">></span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SPA</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SSL</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SSL</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AuthRequired</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Protocol</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Protocol</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Type</span><span class="token punctuation">></span></span>IMAP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Type</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Server</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Server</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Port</span><span class="token punctuation">></span></span>993<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Port</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DomainRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DomainRequired</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SPA</span><span class="token punctuation">></span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SPA</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SSL</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SSL</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AuthRequired</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Protocol</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Protocol</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Type</span><span class="token punctuation">></span></span>SMTP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Type</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Server</span><span class="token punctuation">></span></span>mail.mydomain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Server</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Port</span><span class="token punctuation">></span></span>587<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Port</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DomainRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DomainRequired</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SPA</span><span class="token punctuation">></span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SPA</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SSL</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SSL</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthRequired</span><span class="token punctuation">></span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AuthRequired</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UsePOPAuth</span><span class="token punctuation">></span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UsePOPAuth</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SMTPLast</span><span class="token punctuation">></span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SMTPLast</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Protocol</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Account</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Response</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Autodiscover</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>And again, if your email domain differs from server domain, add proper redirect:</p>\n<p><code class="language-text">/etc/nginx.conf</code></p>\n<div class="gatsby-highlight" data-language="txt">\n      <pre class="language-txt"><code class="language-txt">server {\n    server_name autodiscover.myotherdomain.com;\n    rewrite ^.* https://mydomain.com/autodiscover.xml permanent;\n}</code></pre>\n      </div>\n<p>And that\'s it! Enjoy your new, shiny, auto-configuring E-mail!</p>\n<h3>Sources</h3>\n<ul>\n<li><a href="bugtracker.ispconfig.org/index.php?do=details&#x26;task_id=2152">bugtracker.ispconfig.org/index.php?do=details&#x26;task_id=2152</a></li>\n</ul>',excerpt:"One of the nicest, yet badly documented features in new MUAs is email servers autodiscovering. When you type your e-mail address in…",id:"/Users/ajgon/Projects/rzegocki-pl/src/posts/2013-10-28-adding-email-server-autoconfig-and-autodiscover.markdown absPath of file >>> MarkdownRemark",frontmatter:{title:"Adding Email server autoconfig and autodiscover",date:"October 28, 2013",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFGyKC8jLP/xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAwQUEv/aAAgBAQABBQLJshj1vXW89mM9LSmf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERECEiMTJBYf/aAAgBAQAGPwLFa7HZSvNnBOkpEwf/xAAbEAACAwEBAQAAAAAAAAAAAAABEQAhMUFRcf/aAAgBAQABPyELayqGfIDCwoP3ICIG0XAoO95ExSw9n//aAAwDAQACAAMAAAAQcM//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKhj/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQIBAT8Qqv/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExUWGBsfD/2gAIAQEAAT8Qj9AqahwS8uLmbCJ+HfrAwrNCzo1L5wZ3QXr6fWKgloFT8uDK0UDhn//Z",aspectRatio:1.499267935578331,src:"/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-75c44.jpg",srcSet:"/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-d1f5d.jpg 250w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-6d1fa.jpg 500w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-75c44.jpg 1000w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},path:"/blog/adding-email-server-autoconfig-and-autodiscover",author:"Igor Rzegocki"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-adding-email-server-autoconfig-and-autodiscover-fe3a86717b312cadf7a9.js.map