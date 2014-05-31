---
layout: post
title: Setting up Cygwin
tags:
  - windows
  - programming
---

This weekend I tried to change over my computer from using msys (git and bash)
as my main environment to trying out cygwin. So far so good. I'm also planning
on setting up emacs as my main editor. I have not yet decided whether I'm going
to use a native build of emacs, a cygwin build that uses the w32 native widgets,
or a full cygwin/X environment.

Initial Setup
=============

I decided to use the 64 bit version of cygwin since I couldn't find any packages
missing from the 64 package list that I would need. I ran the setup program and
installed a base system. Unfortunately I immediately had some weird issues. It
turns out that if you have a `$HOME` environment variable setup in windows
(`%HOME%` I guess is the proper way to say that?) cygwin uses that instead of
it's default. I had to edit my cygwin environment `/etc/passwd` file to set my
home directory to `/home/kelsin` so that I wasn't using my msys home directly. I
now don't have a `%HOME%` set in windows anymore.

I did decide to do two odd things with my base install. First I
installed [apt-cyg](https://code.google.com/p/apt-cyg/) using the
directions on their site. So far it's been easy to use and I love not
having to run the setup program just to install new packages.

The second choice was to use cygwinports to get a newer version of git than the
base cygwin install provides. Normally I hate adding new repos so early in the
 process of installing a new system... but I really need git \> 1.7.10 to help
out with my config scripts. One weird thing is that neither build of git
includes the
[git-prompt.sh](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh)
file. I have since added it to
[my configs repo](https://github.com/Kelsin/configs/blob/master/.git-prompt.sh)
and
[load it if needed in my prompt script](https://github.com/Kelsin/configs/blob/master/.bash.d/50.prompt#L1).

I'm also using [these
aliases](http://odoepner.wordpress.com/2012/12/06/install-cygwin-and-cygwinports-packages-using-apt-cyg/)
to make installing from cygwin or cygwinports really easy.

TMux
====

I'm extremely happy to report that I followed all of the
[directions that I found the other day](http://java.ociweb.com/mark/programming/tmuxInCygwin.html)
without ANY problems. Tmux appears to be running with no problems. I'm also
happy that those directions involve NO scary patches at all. Both ncurses and
libevent are present in the cygwin list of packages however, so at working I'm
going to see if just installing tmux without installing the other two packages
by hand works. If not maybe I can submit fixes for those packages?

I have another post about installing Tmux at work while using the cygwin
versions of libevent and ncurses: http://mx.kelsin.net/2014-03-03-install-tmux-in-cygwin/
