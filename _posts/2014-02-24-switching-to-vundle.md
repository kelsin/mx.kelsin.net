---
layout: post
title: Switching to Vundle
redirect_from: /switching-to-vundle/
tags:
  - vim
  - programming
---

After only a couple of days I did start finding git submodules annoying
(again... who knew?). In order to get them out of my configs I've moved over
from [pathogen](https://github.com/tpope/vim-pathogen "Link:
https://github.com/tpope/vim-pathogen") to
[Vundle](https://github.com/gmarik/Vundle.vim "Link:
https://github.com/gmarik/Vundle.vim").  Pathogen lets all of your plugins
behave like Mac Apps and line in their own little folders, instead of coexisting
with other vim files in a single vim runtime folder (normally `~/.vim`). Vundle
takes this same approach but manages the git cloneing and updating of these
plugins. So instead of autoloading whatever is in a folder, you define what
plugins you want and are then able to install/update them from inside git.

Example .vimrc
==============

Here is a relevant example from my current .vimrc:

``` vim
{% raw %}" Runtime Path and Vundle {{{
" Use Vim defaults instead of trying for Vi compatibility
set nocompatible

" Adding runtimepath for windows so we can use .vim instead of _vim
if !exists("g:loaded_runtime")
  set runtimepath=~/.vim,$VIMRUNTIME,~/.vim/bundle/vundle,~/.vim/after
  let g:loaded_runtime = 1
endif

" Needed while loading bundles
filetype off

" Load vundle code call vundle#rc()

" Let vundle manage itself
Bundle 'gmarik/vundle'

" Bundles {{{
" Plugins
Bundle 'tpope/vim-fugitive'
Bundle 'tpope/vim-rails'

" Gui Plugins
if has("gui_running")
  Bundle 'bling/vim-airline'
endif
" }}}

filetype plugin indent on
" }}}{% endraw %}
```

Line 3 and 12 need to be set in order for Vundle to properly install
bundles. After any `:Bundle` commands you can turn filetype back on like I
do on line 31.

Lines 6-9 are part of my windows setup. I want vim to use `~/.vim` on
windows instead of `~/_vim` so I need to specify my runtimepath here in
the form that I want it. You can see that I load my home directory, then
any system plugins, then vundle, and finally my after directory (for
overriding plugins).

Line 15 is what initializes vundle and lines 18-28 are me specifying
what plugins I want. Since all of my plugins are installed from github
it's very easy to specify them in this way. I even only load airline if
I'm in gui mode (line 26).

First time install
==================

After clearing out my .vim/bundle folder I cloned the vundle repo:

``` bash
git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle
```

After this I opened up vim and ran the `:BundleInstall` command which then
checked out all of my plugins for me. When I want to update later on I can just
run `:BundleInstall`!

If I want to remove a plugin I just remove the line from my .vimrc and
then run `:BundleClean`

I did commit vundle itself to my home directory repo so I don't need to git
clone it on every new install. For my work computer tomorrow I will just update
my home directory and then run `:BundleInstall` from inside of vim.

Easy!
