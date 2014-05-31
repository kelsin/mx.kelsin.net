---
layout: post
title: Installing Arch in Virtual Box as a dev environment
redirect_from: /installing-arch-in-virtual-box-as-a-dev-environment/
tags:
  - windows
  - linux
---

Might be trying to move to a linux VM for most of my development at work. More
to come in future blog posts about what has gone wrong with my setups during the
past few weeks. For now I decided to figure out how hard it would be to get a
new setup up and running at home. It was pretty easy so I will be trying this
tomorrow at work. I'm using VirtualBox (since it's quick and easy) and have
choosen Arch linux since I want this machine to be small and lightening fast.

[![Arch Linux in a VM](http://kelsin.smugmug.com/Blog/i-B5VgQ2w/0/Th/arch-Th.png "Arch Linux in a VM")](http://kelsin.smugmug.com/Blog/i-B5VgQ2w/0/L/arch-L.png)

Most of the install was painless (I'm used to installing bare bones linux
boxes). I did my normal sudo, ssh and git setup immediately and then set to work
checking out my home directory:

``` bash
# First install git
sudo pacman -S git

# Now init a new repo in ~/
cd
git init .

# Check any .bash scripts for new ideas that you might want, and then remove them

# Now checkout
git pull
git checkout master

# If there are any other conflicts solve them

# After edit the main config and add "rebase = true" to the [branch "master"] section
# This happens automatically IF my ~/.gitconfig is on the system when you init :)
vi .git/config
```

Installing Vim and Emacs from the package management was easy. I also just
installed Java, Maven and Tomcat the normal ways (into \~/opt, my shell startup
scripts already handle dealing with them once installed).  I use chromium as a
browser. The couple of weird things I ran into are detailed below:

``` bash
# Packages that I've installed while setting up my new system

# During install
base
base-devel
grub

# System config
openssh
wget
git
tk
subversion

# VirtualBox
virtualbox-guest-utils

# X11
xorg-server
xorg-server-utils
xorg-xinit
xorg-utils
ttf-dejavu
xcompmgr
transset-df
xmonad
xmonad-contrib
xmobar
feh
slim
archlinux-themes-slim
chromium

# Terminal
xterm
tmux

# Editors
emacs
gvim

# Custom Installs

# AUR Packages
freetype2-infinality

# Cask
curl -fsSkL https://raw.github.com/cask/cask/master/go | python
cd .emacs.d
cask install

# Rbenv
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
```

X Startup
=========

I already had my xstartup scripts in `~/.xinitrc`. It turns out that now most
display managers will either read `~/.xsession` (which is already symlinked in
my configs repo) or will run `~/.xprofile` before launching the chosen windows
manager. I reworked my `~/.xinitrc` script to source my current `~/.xprofile`:

``` bash
# VirtualBox Guest?
if [ -x /usr/bin/VBoxClient-all ]; then
  /usr/bin/VBoxClient-all
fi

# Multi Monitors
xrandr --output VBOX0 --auto --output VBOX1 --auto --right-of VBOX0

# ENV Variables
export PATH="$HOME/.cabal/bin:$HOME/bin:$PATH"

# X Settings
xrdb -load ~/.Xresources
xsetroot -cursor_name left_ptr
xmodmap ~/.Xmodmap

# No Beep
xset b 0

# Hide Mouse Pointer
unclutter -idle 2 -jitter 10 &

# Background
sh ~/.fehbg

# Urxvt daemon
urxvtd -q -o -f

# XCompmgr
xcompmgr -n &
```

I currently have LightDM, LXDM, Slim and GDM installed at home. It seems like
Slim is the nicest. Small, easy config file, and looks to be easy to theme. Will
create a Blizzard theme at work!

XMonad
======

My old xmonad setup worked perfectly. I turned off some xmobar stuff that
doesn't matter (since this is a VM and not a laptop). No more trayer, no more
mpd status, no more battery/fan status. My
[current config is on github](https://github.com/Kelsin/configs/blob/master/.xmonad/xmonad.hs).

Fonts
=====

Turns out that getting pretty fonts is a lot easier than it used to be.  I
follow arch wiki instructions for
[Infinality](https://wiki.archlinux.org/index.php/Font_Configuration#Infinality).
Installed easy from AUR and looks great with default settings so I'm not even
going to mess with it!

``` bash
# https://aur.archlinux.org/packages/freetype2-infinality/
cd ~/src/aur
tar -xzvf ~/Downloads/freetype2-infinality.tar.gz
cd freetype2-infinality
makepkg -s
sudo pacman -U freetype2-infinality-2.4.12-2-x86_64.pkg.tar.xz
```

URXVT
=====

Most users seem to prefer urxvt over xterm for many reasons. I used to use it a
long time ago as well. This time when I installed it I was not happy with the
font rendering at all. Something looked off with character widths. Fortunately
there is a
[AUR version](https://aur.archlinux.org/packages/rxvt-unicode-patched/) of the
build in arch that fixes this!

``` bash
# https://aur.archlinux.org/packages/rxvt-unicode-patched/
cd ~/src/aur
tar -xzvf ~/Downloads/rxvt-unicode-patched.tar.gz
cd rxvt-unicode-patched
makepkg -s
sudo pacman -U rxvt-unicode-patched-9.19-1-x86_64.pkg.tar.xz
```

Currently however xterm feels faster... so it's very possible that I ditch urxvt
for xterm very soon.
