---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Rails App Templates
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  SSBmaW5hbGx5IGdvdCBhcm91bmQgdG8gY3JlYXRpbmcgYSBydWJ5IGFwcCB0
  ZW1wbGF0ZS4gT2YgY291cnNlIG15IHJlY2VudCBydWJ5IHdvcmsgaXMgbm90
  IGNlbnRlcmVkIGFyb3VuZCBjcmVhdGluZyBuZXcgYXBwcyBidXQgSSdtIHN0
  aWxsIGdsYWQgSSBkaWQgaXQuIFdpbGwgc2F2ZSBteSBzb21lIHRpbWUhDQo=
wordpress_id: 141
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0xNDE=
date: 2009-04-17 10:45:33.000000000 -07:00
categories:
- Computers
tags:
- Code
- Ruby
- Ruby on Rails
comments: []
---
I finally got around to creating a ruby app template. Of course my recent ruby work is not centered around creating new apps but I'm still glad I did it. Will save my some time!

You can read more about <a href="http://m.onkey.org/2008/12/4/rails-templates">app templates</a> or what a <a href="http://railscasts.com/episodes/148-app-templates-in-rails-2-3">great screencast</a> about them at other places. I don't want to just repeat what others have already said but basically I created one so far and put it up on my <a href="http://github.com/Kelsin/rails-templates/tree/master">github account</a>.

The one question I have is about running this on a server without the haml gem already installed. I don't really want it to try and install the gem in my home directory so we'll see how that works out next time I have to do it. For now on my current linode it sets up a new rails project pretty nicely for my needs.

The one other interesting aspect of my template is my config system that I just wrote. It's only two lines and it's heavily stealing from other blogs. I never really had a good app config system and I don't really want to use a plugin so I quickly wrote my own. It basically supports one config file (config/config.yml) and lets you setup default settings and then override / add to the defaults with per environment settings as well. For my wow raiding site this is working pretty well.

Here is the initializer file (config/initializers/config.rb):

<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
<span style="color: #9B703F;">CONFIG</span> = <span style="color: #9B703F;">YAML</span>.load_file(<span style="color: #8F9D6A;">"</span><span style="color: #7587A6;">#{RAILS_ROOT}</span><span style="color: #8F9D6A;">/config/config.yml"</span>) || {}
<span style="color: #9B703F;">CONFIG</span> = (<span style="color: #9B703F;">CONFIG</span>[<span style="color: #8F9D6A;">'default'</span>] || {}).symbolize_keys.merge((<span style="color: #9B703F;">CONFIG</span>[<span style="color: #9B703F;">RAILS_ENV</span>] || {}).symbolize_keys)
</pre>

And my config.yml file from my raid site. This site uses a development environment (all defaults) and then two different production environments since I run the site for two different guilds. You can see how the "dota" environment inherits the auth setting while the "cod" environment adds a forum setting that I use when using phpbb authentication.

<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
<span style="color: #7587A6;">default</span>:
  <span style="color: #7587A6;">guild</span>: Your Guild
  <span style="color: #7587A6;">auth</span>: login

<span style="color: #7587A6;">cod</span>:
  <span style="color: #7587A6;">guild</span>: Cake or Death
  <span style="color: #7587A6;">forum</span>: http://forum.cakeordeath-guild.com
  <span style="color: #7587A6;">auth</span>: phpbb

<span style="color: #7587A6;">dota</span>:
  <span style="color: #7587A6;">guild</span>: Daughters of the Alliance
</pre>

Pretty simple and now I don't even have to do anything to new rails projects to use it!
