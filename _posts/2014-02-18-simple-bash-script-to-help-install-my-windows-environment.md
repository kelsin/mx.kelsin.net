---
layout: post
title: Simple bash script to help install my windows environment
redirect_from: /simple-bash-script-to-help-install-my-windows-environment/
tags:
  - windows
  - programing
---

Today I made a quick bash script to automate a lot of what I talked about
[yesterday](http://mx.kelsin.net/installing-vim-and-a-sane-environment-in-windows).
You can always find the most recent version of this file in my
[configs repo](https://github.com/Kelsin/configs/blob/master/bin/setup-windows)
but the first draft is also saved to a gist for this blog post.

This is for me to run after I've installed git and gotten my home
directory and git bash running. It will do the following:

-   Install ctags into `~/opt`
-   Checkout the powerline fonts into `~/opt` so that I can install them
    easily
-   Install ConsoleZ into `~/opt`
-   Download the vim installer and run it
-   Install the latest version of ConsoleZ/2 settings from my configs
    repo to the proper AppData location

This script comes with no warranty. Please use it carefully. I can't be
held responsible if it does something horrible to your computer. It was
made as a quick timesaver for me to setup new windows boxes for myself
and nothing more.
