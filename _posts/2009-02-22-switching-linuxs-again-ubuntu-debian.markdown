---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: ! 'Switching Linux''s Again: Ubuntu -> Debian'
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  SnVzdCBzd2l0Y2hlZCBteSBjb21wYW55IGxhcHRvcCBmcm9tIFVidW50dSB0
  byBEZWJpYW4uIEkgc3dpdGNoIExpbnV4J3MgYSBsb3QuIFJpZ2h0IG5vdyBJ
  J20gZG9pbmcgaXQgY2F1c2UgSSByYW4gaW50byBzb21lIG5hc3R5IGJ1Zydz
  IG9uIFVidW50dS4=
wordpress_id: 23
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0yMw==
date: 2009-02-22 23:49:46.000000000 -08:00
categories:
- Computers
tags:
- Linux
- Ubuntu
- Debian
- Xmonad
- Emacs
comments:
- id: 2797
  author: patrick
  author_email: !binary |-
    anVkZHB3ckBnbWFpbC5jb20=
  author_url: !binary ""
  date: !binary |-
    MjAwOS0wOC0yMSAxMzowNzo1NSAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0wOC0yMSAxODowNzo1NSAtMDcwMA==
  content: Wow, great looking emacs theme-- can I ask the name?
- id: 2798
  author: Kelsin
  author_email: !binary |-
    a2Vsc2luQHZhbGVmb3IuY29t
  author_url: !binary |-
    aHR0cDovL2tlbHNpbi5uZXQ=
  date: !binary |-
    MjAwOS0wOC0yMSAxMzoxNTo0NSAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0wOC0yMSAxODoxNTo0NSAtMDcwMA==
  content: ! "At that point I was just using a theme from the color-theme library:\r\n\r\nGit
    hub commit page:\r\nhttp://github.com/Kelsin/configs/tree/33aaee85e12251d4cd79c4052f1f07910649e601/.emacs.d/init.el\r\n\r\nThese
    were the lines in my init.el\r\n;; Color Theme Package\r\n;; http://download.gna.org/color-theme/\r\n(require
    'color-theme)\r\n(color-theme-charcoal-black)\r\n"
---
Just switched my company laptop from <a title="Ubuntu Linux" href="http://www.ubuntu.com/">Ubuntu</a> to <a title="Debian GNU/Linux" href="http://www.debian.org/">Debian</a>. I switch Linux's a lot. Right now I'm doing it cause I ran into some nasty bug's on Ubuntu. I'm sure I will be installing Ubuntu on lots of machines soon anyway, especially in April.

<a title="Drcox Desktop 02-22-2009" href="http://blog.kelsin.net/wp-content/uploads/2009/02/drcox-2009-02-22-desktop.png"><img class="size-thumbnail wp-image-31 alignright" style="margin: 5px;" title="Drcox Desktop 02-22-2009" src="http://blog.kelsin.net/wp-content/uploads/2009/02/drcox-2009-02-22-desktop-150x150.png" alt="My work laptop's desktop as of 02-22-2009" width="150" height="150" /></a>The first bug came when I first installed Intrepid. I ran into the <a title="Ubuntu Intrepid Kernel Bug" href="https://bugs.launchpad.net/ubuntu/intrepid/+source/linux/+bug/286285">bug</a> where the kernel fills my logs with errors from the wireless driver. Having your root partition fill up does some weird things. Around this point I installed Hardy again to get on a more stable platform. I recently tried to update to Intrepid again (this bug was solved in a recent kernel) but ran into other issues. Just small ones.

Then I read the Lenny release announcement on Valentines day, so that set this in motion. I can't read release notes without wanting to install something.

My work laptop is a Lenovo (IBM) Thinkpad X61s. I love this machine for work and the install went smoothly. I havn't had trouble with installing Linux in a long time. I did hit <a title="Bug in ncmpc (Debian)" href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=497359">this bug</a> with ncmpc, but I normally disable ipv6 anyway. A quick edit of /etc/modprobe.d/aliases and /etc/hosts to comment out ipv6 stuff and I'm all set. I really want to get into Debian packaging so I might use Lenny as a reason to do so. I've already told myself that I will stick to stable software as much as possible for work, and use my home Desktop and Laptop to experiment with different software.

<a href="http://blog.kelsin.net/wp-content/uploads/2009/02/drcox-2009-02-22-emacs.png"><img class="size-thumbnail wp-image-32 alignright" style="margin: 5px;" title="Drcox Emacs 02-22-2009" src="http://blog.kelsin.net/wp-content/uploads/2009/02/drcox-2009-02-22-emacs-150x150.png" alt="Drcox Emacs 02-22-2009" width="150" height="150" /></a>I'm using my compiled <a title="Xmonad Windows Manager" href="http://xmonad.org/">xmonad</a> from my home directory at the moment (Had cabal install everything in .cabal on Ubuntu) but when I get ghc running again I will post about it.

After that I've installed the <a title="Debian Emacs Snapshot" href="http://emacs.orebokech.com/">sid version of emacs</a> (along with <a title="Debian Package: ttf-bitstream-vera" href="http://packages.debian.org/lenny/ttf-bitstream-vera">ttf-bitstream-vera</a>, <a title="Debian Package: haskell-mode" href="http://packages.debian.org/lenny/haskell-mode">haskell-mode</a>, <a title="Debian Package: ruby-elisp" href="http://packages.debian.org/lenny/ruby-elisp">ruby-elisp</a> and <a title="Debian Package: emacs-goodies-el" href="http://packages.debian.org/lenny/emacs-goodies-el">emacs-goodies-el</a>) so that I can use emacs 23 (I rely on a lot of features from 23, the least of which is nice fonts!). I've also installed <a title="Debian Package: MPD" href="http://packages.debian.org/lenny/mpd">mpd</a> (with <a title="Debian Package: Mpc" href="http://packages.debian.org/lenny/mpc">mpc</a>, <a title="Debian Package: Sonata" href="http://packages.debian.org/lenny/sonata">sonata</a> and <a title="Debian Package: Ncmpc" href="http://packages.debian.org/lenny/ncmpc">ncmpc</a>, my xmonad config relies on this). My XMonad key bindings for audio keys work again (they didn't on Intrepid, just simple windows manager keybindings that run mpc).

The one other thing I had to do to get my system back was make sure option "XkbOptions" "ctrl:nocaps" was in the keyboard driver section of the xorg.conf file. Can't live with my Caps-Lock key not being another Left-Control!
