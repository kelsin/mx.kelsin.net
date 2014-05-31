---
layout: post
title: Install Cask and Pallet to manage Emacs Packages
redirect_from: /install-cask-and-pallet-to-manage-emacs-packages/
tags:
  - emacs
  - programming
---

The
[package management](http://batsov.com/articles/2012/02/19/package-management-in-emacs-the-good-the-bad-and-the-ugly/)
that is built into emacs has gotten a lot better over the past few years (While
I've been away) and the [Melpa repository](http://melpa.milkbox.net/#/) of
packages is outstanding.  Tonight I decided to take the next step and use some
packages that help organize and keep my packages up to
date: [Cask](https://github.com/cask/cask) and
[Pallet](https://github.com/rdallasgray/pallet). You can see a commit of my
changes on
[github](https://github.com/Kelsin/configs/commit/6376b84248431473914d624d7ceb630817b8340e).

Cask allows you to have a file that specifies emacs packages and will install
them for you. This is like the [bundler](http://bundler.io/) project for ruby
gems. Pallet takes this one step further and makes it so that when you install
or remove a package directly in emacs, the Cask file is updated
automatically. This makes for a perfect setup and allowed me to remove a bunch
of lines from my init.el file. Next time I load my emacs config on a new
computer I do need to install cask... but luckily after that all of my packages
will install for me automatically.

When I got to work and needed to setup my environment it was a matter of the
following shell commands:

``` bash
# Update my config
git pull

# Install Cask
curl -fsSkL https://raw.github.com/cask/cask/master/go | python

# Make sure cask is in your path
#
# Since it was in my updated config files,
# I just needed to open a new terminal and then:
cd .emacs.d/
cask install
```
