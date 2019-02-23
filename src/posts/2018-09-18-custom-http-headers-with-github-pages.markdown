---
id: bc6b6976-bf96-431d-bf56-81d34082cb6e
layout: post
title: "Custom HTTP headers with GitHub pages"
date: 2018-09-14T17:06:00+02:00
author: Igor Rzegocki
cover: "../images/covers/custom-http-headers-with-github-pages.png"
tags:
  - administration
path: /blog/custom-http-headers-with-github-pages/
---

At some point when I was developing [my new homepage](/) I ran into an issue with GitHub Pages. What I wanted, was to follow security best practices, and serve [OWASP recommended Security Headers](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers). Unfortunatelly, it looks like [GitHub Pages does not support setting anything like this](https://stackoverflow.com/questions/14798589/github-pages-http-headers), which is kinda dissapointing. But hey! We are re developers, and we love to solve problems!

And sure I did - with a help of a small chunk of third party services.

## Prerequisites

To make this work you would need:

* A custom domain name - it is not mandatory, but strongly recommended - otherwise you would end up with `*.herokuapp.com` url to your page. You can get one for free at [dot.tk](http://www.dot.tk/) however I strongly encourage you to buy proper one - it's not that expensive, and looks way better.
* [Cloudflare account](https://dash.cloudflare.com/sign-up) - it's only necessary when you want to use a custom domain, otherwise you can skip it. Their free plan is excellent, covers all our needs and as bonus, provides free SSL out of the box.
* [Heroku account](https://signup.heroku.com/) - this is where all the magic happens.
* [UptimeRobot account](https://uptimerobot.com/signUp) - or pingdom, or any other service which checks if your site is alive in short time intervals. It's not mandatory, but helps us avoid some heroku limitations.
* [GitHub account](https://github.com/join) - obviously.

## A guide

### Step 1: Create your GitHub page

This is pretty obvious, as this is the whole point of this guide. Create a page and deploy it to GitHub. Don't forget to [configure the custom domain](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/) on GitHub side. Few things to remember:

* The configured domain should be YOUR domain, not heroku or github.
* *Important!* This setup needs to use a `CNAME` record set for heroku app, which can't be set on a root domain. Which means, we need GitHub to force redirection to that record. I'm using `www.` in this example, which means, you should set the domain on GitHub side to `www.your-custom-domain.com`.
* Don't worry about DNS settings yet.
* If you don't want to use a custom domain, then you need o set it up to `name-of-your-heroku-app.herokuapp.com`.

### Step 2: Create the custom HTTP reverse proxy on heroku

This is the place where we add our custom headers. We'll leverage the power of [heroku custom buildpacks](https://devcenter.heroku.com/articles/buildpack-api). What we need, is a nginx reverse proxy with one purpose only - route all traffic back and forth to our GitHub page, and append extra information (which are our headers) to response.

Fortunatelly, I already did most of the work and [created a buildpack](https://github.com/ajgon/github-proxy-buildpack) just for that. All you need to do is add it to your app and properly configure it. Let's do this!

#### Create a heroku app

You need a [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and configured. If you have never used heroku before, please refer to the documentation on how to do this. On OSX it's as easy as:

```bash
brew install heroku/brew/heroku && heroku login
```

After that you need to create a custom heroku app (the most basic one is free of charge) and attach custom buildpack to it.

The buildpack would do all the job for you, however, to trigger it, some "application" needs to be deployed. It doesn't really matter what you put there, as the buildpack would never reach it. So add a file, push it to heroku and you're good to go.

```bash
mkdir my-heroku-app && cd my-heroku-app
git init
heroku apps:create --buildpack https://github.com/ajgon/github-proxy-buildpack <name-of-your-heroku-app>
touch .keep
git add -A && git commit -m 'Initial commit'
heroku git:remote --app name-of-your-heroku-app
git push heroku master
```

#### Configure GitHub page URL

First of all, you need to tell the buildpack, where to route the whole traffic. You can do this by setting `ROUTE_TO_URL` environment variable. You can even use a path here, so you can have a root domain pointing to custom GitHub project - you don't have to create `login.github.io` one!

```bash
heroku config:set ROUTE_TO_URL=https://my-github-name.github.io/my-project
# or just
heroku config:set ROUTE_TO_URL=https://my-github-name.github.io
```

#### Configure headers

The most sane configuration of the headers is [already included in the buildpack](https://github.com/ajgon/github-proxy-buildpack/blob/master/config/nginx.conf.erb#L62), however you can customize it any way you like, using the environment variables. The format is `HTTP_YOUR_HEADER_UNDERSCORED`. For example: `X-Frame-Options` becomes `HTTP_X_FRAME_OPTIONS`. You can set it, using the following command:

```bash
heroku config:set HTTP_X_FRAME_OPTIONS=deny --app <name-of-your-heroku-app>
```

#### Configure CSP nonce

There is also a CSP nonce rewrite support included, which is based on this [excellent article by Scott Helme](https://scotthelme.co.uk/csp-nonce-support-in-nginx/), however, configuring it is slightly more complicated.

First of all you need to name the "ID" of your nonce. This is a string which will be replaced in your HTML output by the actual nonce generated by nginx.

```bash
heroku config:set CSP_NONCE_ID="**CSP_NONCE**"
```

The actual CSP nonce will be held by nginx in `$cspNonce` variable. Which means, you need to use this variable, when you set a CSP header:

```bash
heroku config:set HTTP_CONTENT_SECURITY_POLICY="default-src 'self'; script-src 'self' 'nonce-$cspNonce';"
```

Lastly, you need add the "ID" string as a nonce to all the `<script />` tags in your HTML:

```html
<script nonce="**CSP_NONCE**">alert('Hello World!!!');</script>
```

#### Sprinkle on top

As a bonus, you can tell the buildpack, to completely hide the custom GitHub headers in response, to completely disguise your site. Nice!

```bash
heroku config:set HIDE_GITHUB_HEADERS=1 --app <name-of-your-heroku-app>
```

#### Attaching domain to heroku

Last thing you need to do, is tell heroku load balancer to attach your appllication to your domain, by invoking:

```bash
heroku domains:add your-custom-domain.com --app name-of-your-heroku-app
```

This feature is completely free, however heroku requires you to confirm your credit card (without charging it). You can do this in [heroku billing section](https://dashboard.heroku.com/account/billing). The good news is, the card information doesn't have to be there all the time. Which means, you can verify your card, add a domain and then remove it from the system.

#### Testing the setup

After setting all necessary data, test your setup to check the headers and response:

```bash
curl -I https://name-of-your-heroku-app.herokuapp.com/ # to check headers
curl https://name-of-your-heroku-app.herokuapp.com/ # to see if page responds correctly
```

### Step 3: Glue heroku with your domain using cloudflare

Technically you can do this with your DNS provider and completely skip this step. However Cloudflare provides SSL certificate, and powerful CDN free of charge. I don't see any reason why you shouldn't use it.

#### DNS

First, go to DNS section, and set up the records as following:

| Type | Name | Value | TTL | Status |
|---|---|---|---|---|
| A | your-custom-domain.com | 185.199.110.153 | Automatic | pass through CF |
| CNAME | www | name-of-your-heroku-app.herokuapp.com | Automatic | pass through CF |

The IP above may change, but you should use [one of the GitHub pages IPs for A records](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider).

#### Crypto

Here you can set up your SSL settings for the certificate provided by Cloudflare. You can configure it as you like, but my recommendation is:

* *SSL:* Full
* *Always use HTTPS:* On
* *HTTP Strict Transport Security (HSTS):* You can leave it disabled and rely on the heroku App, or customize it here (it would take precedence)
* *Minimum TLS Version:* 1.2 - there is no reason to serve the deprecated ones, unless you need to support some very old browsers.
* *Opportunistic Encryption:* On
* *TLS 1.3:* Enabled

#### Testing the domain

If you did everything correctly, you should be able to visit your domain and see your custom headers:

```bash
curl -I https://www.your-custom-domain.com/ # to check the headers
curl https://www.your-custom-domain.com/ # to see if page responds correctly
```

I strongly recommend visiting [securityheaders.com](https://securityheaders.com) service as well, which can validate your setup and point out any broken or missing parts.

### Step 4: Keeping heroku alive

One disadvantage of free heroku applications is [they are put to sleep when inactive](https://devcenter.heroku.com/articles/free-dyno-hours). However, if you wish to use heroku for this purpose only - you can keep the application alive all the time. To do that, you simply need to ping it at least once in 30 minutes.

This can be achieved by using one of the page monitoring services. Personally I use UptimeRobot, but if you have or like the other one - that's fine as long as you fit this time window.

## Conclusion

As you can see, the whole process is somehow cumbersome, but if you manage to follow it, your GitHub page can get any HTTP header you like, along with the secure ones (`Access-Control-Allow-Origin` anyone? :-)). I'm personally using this setup for [my homepage](https://securityheaders.com/?q=www.rzegocki.pl&followRedirects=on) and never experienced any troubles.

And that's it - enjoy your free, SSL-supported GitHub page with custom domain and all the security headers!
