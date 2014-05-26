---
layout: post
title: Heroku Config Variables
tags:
- git
- heroku
- rails
category: programming
---

Deploying on [Heroku](http://www.heroku.com) is such a breeze! I love the way
they take care of my database.yml file so I can just keep a
[clean version](https://github.com/Kelsin/lilyladder/blob/master/config/database.yml)
in my open source repo!

I still needed a way to hide my cookie secret token. It turns out a great way to
do this is
[config variables](http://devcenter.heroku.com/articles/config-vars). Now I can
have a very clean version of this file in
[git](https://github.com/Kelsin/lilyladder/blob/master/config/initializers/secret_token.rb)
and still host on heroku or anywhere else pretty easily!
