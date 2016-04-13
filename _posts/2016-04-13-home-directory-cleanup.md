---
layout: post
title: Home Directory Cleanup
tags:
  - programming
---

I started looking into organizing my `.zshrc` which ended up taking me down a
rabbit hole of crazy projects and dotfile repos. The result is the fact that I
definitely want to redo my config repo. Here are my goals:

1. Have my standard setup for Mac OSX available with a bootstrap script.
2. Use zsh as my main shell with working emacs and vim configs.
3. Have my dotfiles easily shareable and organized in a github repo.
4. Allow only pieces of my dotfiles to be installed so I can keep old config
   without installing it on new machines or servers.
5. Do not git my entire home directory like I have been doing.
6. Have a lightweight bash setup for use on servers and have it be easy to
   install.
7. No windows support at all anymore.

What have I done so far?

1. Zsh config is done using [zplug](https://github.com/b4b4r07/zplug) as a
   plugin manager.
2. Current configs repo is cleaned up with all old and windows-based config
   removed.
3. Vim config is updated using [vim-plug](https://github.com/junegunn/vim-plug)
4. Both zsh config and
   [vim config](https://github.com/junegunn/vim-plug/wiki/faq#automatic-installation)
   only need their main rc files (`.zshrc` and `.vimrc`). They will install
   their own plugin managers and plugins on startup.
5. `.Brewfile` and `.Gemfile` created with default packages that I want
   installed.

TODO:

1. Work out a way to have a global npm package list available (`package.json` in
   my dotfiles repo?). Once this is done move my `Brewfile` and `Gemfile` into
   my dotfiles repo.
2. Make sure my emacs cask setup is bootstrappable from just my dotfiles.
3. Write a script that will update my system (half done). This includes updating
   to the latest stable ruby and node in my main shell, install gems and npm
   packages into them, fully updating brew packages, updating emacs and vim
   packages, and running apple software updates.
4. Figure out a dotfiles symlinking system (custom or
   [GNU Stow](http://www.gnu.org/software/stow/)) and figure out a bootstrap
   script.

My current plan is to have a dotfiles repo with global package lists in it (for
gems, npm packages, and brews) that includes a bootstrap script that I can curl
in order to install. Everything that will be installed into a home directory
will be in directories based on use case and I will use GNU Stow to install
them.

Will try to get that working tomorrow!
