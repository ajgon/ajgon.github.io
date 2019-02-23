---
id: ab3d929b-4fb1-4452-bd81-37846947bee9
layout: post
title: "25 awesome tools every developer should have"
date: 2013-11-13T11:09:37+02:00
author: Igor Rzegocki
cover: "../images/covers/25-awesome-tools-every-developer-should-have.jpg"
tags:
  - workflow
path: /blog/25-awesome-tools-every-developer-should-have/
---

<blockquote>
    This is a repost of my [original post](https://x-team.com/2013/11/25-awesome-tools-every-developer-should-have/) on [X-Team](https://x-team.com/) blog. I'm putting it here for consistency.
</blockquote>

<!-- more -->

Most developers have a list somewhere (sometimes just in their heads) of favorite applications they use every day. In X-Team, every hero has his own list as well, and I'd like to share with you the most common tools on those lists.

## [iTerm](https://www.iterm2.com/)
![iTerm](../images/upload/iTerm.png)

Like it or not, terminal is the most important developer tool. It makes doing a lot of tasks way easier and faster than GUI. As somebody said: "GUI makes easy tasks trivial, and hard tasks impossible to make." So learn to love your terminal, and it'll thank you later.

## [homebrew](https://brew.sh/)
![homebrew](../images/upload/brew.png)

A package manager for OSX. Think of it as [`apt-get`](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) for Mac. It was written by the guys who had enough of MacPorts and decided to do it better. And they did - brew shines everywhere where MacPorts fails, starting from logical directory structure, through simple packaging system (everything is git based) to great simplicity of the tool itself.

## [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
![oh-my-zsh](../images/upload/oh-my-zsh.png)

A very nice addition to zsh shell - it comes bundled with a ton of helpful functions, helpers, plugins and themes. Want to see your current git branch in your shell prompt? You got it. RVM version? No problem. Weather? You bet. And still, it has ZShell under it, so it comes along with a nice path completion, history browsing and ton of other stuff.

## [ack](https://beyondgrep.com/)
![ack](../images/upload/ack.png)

This is how grep would look like if it was created 20 years later; a great, blazing fast tool for finding contents of the file. And it is written with developers in mind, which means (for example), you can narrow results of the search only to the source files of the language you prefer. Or ignore VCS files. Or use regular expressions out of the box. This is a find-in-file Swiss Army Knife.

## [rvm](https://rvm.io/)
![rvm](../images/upload/rvm.png)

A tool no Ruby developer can live without. RVM is a command-line gadget which allows you to easily install, manage, and work with multiple Ruby environments from interpreters to sets of gems. Recently, Ruby experienced a thing called "fragmentation hell." There are two major versions of it, two major versions of its biggest framework (Hey! Rails! I'm talking about you!), and a lot of concurrent gems. RVM helps you to catch up with all of that, and manage Ruby/Rails projects more efficiently.

## [Grunt](https://gruntjs.com/)
![Grunt](../images/upload/grunt.png)

This is a tool that our front-end guys love. It's a JavaScript task runner. It takes all the repeatable tasks off your shoulders. Thanks to its huge plugins database, it can minify CSS/JS files, compress images, compile LESS/SASS scripts, lint your source and even set a live-preview server for you. All in an easy-to-use JavaScript environment.

## [Alfred 2](https://www.alfredapp.com/)
![Alfred 2](../images/upload/alfred.png)

Alfred is a task launcher, designed to find files and operate on them quickly and easily. The application itself doesn't differ much from Spotlight, and careful reader may ask, what is the advantage of it.

That's where [Powerpack](https://www.alfredapp.com/powerpack/) kicks in. It enables things called "workflows." And workflows are huge advantage - think of them as Alfred on steroids. They are community written extensions which allows the base app to do almost everything. And there are [hundreds](https://bit.ly/2NB2AdD) of them. Below is the short list of the ones we are using in X-Team.

### [Can I Use...](https://github.com/willfarrell/alfred-caniuse-workflow)
![Can I Use...](../images/upload/alfred-caniuse.png)

Full [caniuse.com](https://caniuse.com/) database under your fingertips. No extra browsing needed.

### [Colors](https://github.com/TylerEich/Alfred-Extras/tree/master/Source/Colors)
![Colors](../images/upload/alfred-colors.png)

Great tool for front-end developers. It converts colors between RGB, HSL and hexadecimal format. But the true power is the integration with color picker. By simply typing `#` it allows you to choose any pixel from your desktop, and then Colors will automatically return hex/rgb/hsl values for it, ready to be copied or pasted.

### [Dash](https://github.com/willfarrell/alfred-dash-workflow)
![Dash](../images/upload/alfred-dash.png)

Allows you to browse [Dash](https://kapeli.com/dash) docsets database way faster. More about Dash, below.

### [Data URI Scheme](https://github.com/ajgon/alfred2-datauri)
![Data URI Scheme](../images/upload/alfred-datauri.png)

Another front-end dev tool. It can convert any given file to its representation in base64 data uri scheme. And for image and vector files it also does compression on the fly.

### [Flush DNS cache](https://github.com/cdraeger/alfred2-flushdns-workflow)
![Flush DNS cache](../images/upload/alfred-flush.png)

Mac OS X can be very stubborn sometimes when it comes to adding new entries to `/etc/hosts`. This little extension is an excellent solution.

### [HTML Entity Lookup](https://github.com/ajgon/alfred2-html-entity-lookup)
![HTML Entity Lookup](../images/upload/alfred-entity.png)

Alfred version of Remy's Sharp [excellent tool](https://leftlogic.com/projects/entity-lookup/) - it allows the user to quickly find the entity based on how it looks.

### [iOS Simulator Kit](https://github.com/superkam/iOS_Simulator_Kit)
![iOS Simulator Kit](../images/upload/alfred-ios.png)

For some reason, Alfred and Spotlight search results don't include iOS Simulator application in their results. With this workflow - it's not an issue anymore. Also, you can choose with device you wish to emulate from the very beginning.

### [Strip clipboard](https://github.com/DavidStaron/alfred-workflow-stripClipboardFormatting)
![Strip clipboard](../images/upload/alfred-sclip.png)

This is one of the tools, that when installed - you can't live without them. It strips all the formatting from the clipboard content, leaving only raw text inside.

### [Source Tree](https://github.com/zhaocai/alfred2-sourcetree-workflow)
![Source Tree](../images/upload/alfred-stree.png)

As the name suggests - it's a workflow for SourceTree application. It lists all the repositories and allows you to view them in Source Tree or in Finder.

### [TimeZones](https://www.alfredforum.com/topic/491-timezones-a-world-clock-script-filter-updated-to-v161/)
![TimeZones](../images/upload/alfred-tz.png)

X-Team is spread around the globe. Most of the projects are handled simultaneously by developers from different timezones. This extension is a great tool to check if someone on the team is awake yet :)

### [VirtualBox Control](https://www.dropbox.com/s/51pyuuj051pydn2/VirtualBox.alfredworkflow)
![VirtualBox Control](../images/upload/alfred-vm.png)

Very useful extension for a QA team. They usually have a few VMs configured (mostly for IE8, IE9 and IE10) - and with this extension they can manage them faster.

## [Sublime Text](https://www.sublimetext.com/) [2](https://www.sublimetext.com/2) (or [3](https://www.sublimetext.com/3))
![Sublime Text](../images/upload/sublime.png)

This is the editor of choice for most X-Team developers, and for [a lot of other people too](https://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/). It is not language-oriented, like most of the IDEs, but it's irreplaceable when it comes to using multiple syntaxes.

And since most of web developers constantly switch between HTML, CSS, JavaScript and PHP/Ruby - Sublime shines. Oh! And it's written in Python so it's blazing fast (yes, Java, I'm talking to you...). But the real power of ST are the plugins - they are for almost everything, so if you invest some time at the beginning - you will end with the editor tailored exactly for your needs. And that's a field, where no other editor (except of vim and emacs of course) can compete. Here is an excerpt of the long list of plugins, which X-devs use:


* [Package Control](https://sublime.wbond.net/) (a must have!)
* [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile)
* [ApplySyntax](https://github.com/facelessuser/ApplySyntax)
* [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
* [CSSComb](https://github.com/csscomb/CSScomb-for-Sublime)
* [DocBlockr](https://github.com/Warin/Sublime/tree/master/DocBlockr)
* [EditorConfig](https://github.com/sindresorhus/editorconfig-sublime)
* [Emmet](https://github.com/sergeche/emmet-sublime)
* [GitGutter](https://github.com/jisaacks/GitGutter)
* [Phpcs](https://github.com/benmatselby/sublime-phpcs)
* [Prefixr](https://wbond.net/sublime_packages/prefixr)
* [Sidebar Enchancements](https://github.com/titoBouzout/SideBarEnhancements)
* [SublimeCodeIntel](https://sublimecodeintel.github.io/SublimeCodeIntel/)
* [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter)

... and many more.

## [Dash](https://kapeli.com/dash)
![Dash](../images/upload/dash.png)

A very nice tool which can be a lifesaver on a plane, bus or any place where you want to work that has no Internet available. It's  an offline documentation database. Simply download docsets you need, and you're good to go. Integrates nicely with Alfred and Sublime Text, as mentioned earlier.

## [Divvy](https://mizage.com/divvy/)
![Divvy](../images/upload/divvy.png)

A simple click and drag window manager. Very useful on iMacs, which have a huge working space and you can confortably work with many windows on one desktop. It is also a very simple application, which does exactly what it's designed for very well - aligning windows, and assigning shortcuts for them.

## [FontPrep](https://bit.ly/2LHGpkd)
![FontPrep](../images/upload/fontprep.png)

Drag your font into it, click export and you will end up with your font converted to four of the most used formats on the web (otf, ttf, woff and eot) and a CSS file with @font-face directives. Beautiful.

## [ImageOptim](https://imageoptim.com/)
![ImageOptim](../images/upload/imageoptim.png)

Image files generated by graphics programs (such as Photoshop or GIMP), can be huge. The reason is that they add alot of unnecessary data and they handle color and alpha management poorly.

**ImageOptim** is a solution for that - it comes bundled with many image-optimization tools (like pngcrush for PNG or jpegtran for JPG), compresses an image with each of them, and returns the best result. It saves 30-40% of image space on average - which is a huge improvement, especially today, for graphically overloaded sites.

## [Marked](https://bit.ly/2PluIl5)
![Marked](../images/upload/marked.png)

MarkDown documents viewer. Great, when you need to edit a *.md file in your favorite editor (for example Sublime Text, with which it integrates smoothly) and see the live preview.

## [SourceTree](https://www.sourcetreeapp.com/)
![SourceTree](../images/upload/sourcetree.png)

There are to ways of using git. Conservatives use terminal. New-age programmers use GUI tools. And the most popular GUI for git in our company is SourceTree.

Why? It's free and it supports gpg commits signing, which is vital in our environment. It also has what all good, modern VCS GUI should have, like branch view, diff view, git flow and interactive rebase.

## Wrap-up

While it is intelligent to choose multiple tools for speeding up the development process, it's essential for you to avoid embracing all of them. The act will not only burden your system, but also create confusion and you may discover not using most of them.

If you've got better tools, please share them with us! Also do share with us your secret tips on organizing your development more efficiently.
