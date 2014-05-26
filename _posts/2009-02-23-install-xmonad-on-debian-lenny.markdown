---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Install Xmonad on Debian Lenny
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  SSB3YW50IHRvIGluc3RhbGwgYSBuZXdlciB2ZXJzaW9uIG9mIFhtb25hZCB0
  aGFuIHBhY2thZ2VkIHdpdGggRGViaWFuIExlbm55IG9uIG15IExlbm55IHN5
  c3RlbXMgaW4gdGhlIGNsZWFuZXN0IHdheSBwb3NzaWJsZS4gVGhhdCdzIHRo
  ZSBnb2FsLiBMdWNraWx5IGV2ZW4gdGhvdWdoIEkgdHJpZWQgYSBCVU5DSCBv
  ZiB0aGluZ3MgdG9kYXkgdGhlIHNpbXBsZXN0IGFuc3dlciB3YXMgdGhlIGJl
  c3QuIEkganVzdCB3aXNoIEkgdHJpZWQgaXQgZmlyc3Qh
wordpress_id: 57
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD01Nw==
date: 2009-02-23 22:36:07.000000000 -08:00
categories:
- Computers
tags:
- Linux
- Debian
- Xmonad
- Xmobar
- Haskell
comments:
- id: 2
  author: Rob
  author_email: !binary |-
    Y29tbWVudEByb2Jyd28uc2VudC5jb20=
  author_url: !binary ""
  date: !binary |-
    MjAwOS0wMi0yNCAwNTozMDoyMiAtMDgwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yNCAxMDozMDoyMiAtMDgwMA==
  content: ! "Thanks for the info. Alas, I think you may have omitted a required package.
    I get the following error:\r\n\r\n[1 of 8] Compiling XMonad.StackSet  ( XMonad/StackSet.hs,
    dist/build/XMonad/StackSet.o )\r\n\r\nIn file included from /tmp/ghc9080_0/ghc9080_0.hc:5:0:
    \r\n\r\n/home/me/.cabal/lib/X11-1.4.5/ghc-6.8.2/include/HsAllKeysyms.h:4:25:\r\n
    \    error: HsX11Config.h: No such file or directory\r\ncabal: Error: some packages
    failed to install:\r\nxmonad-0.8.1 failed during the building phase. The exception
    was:\r\nexit: ExitFailure 1"
- id: 4
  author: Kelsin
  author_email: !binary |-
    a2Vsc2luQHZhbGVmb3IuY29t
  author_url: !binary |-
    aHR0cDovL2tlbHNpbi5uZXQ=
  date: !binary |-
    MjAwOS0wMi0yNCAwOTo0MzoxOSAtMDgwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yNCAxNDo0MzoxOSAtMDgwMA==
  content: ! "@Rob: I could be very wrong, but I believe that is a file that comes
    from the configure stage. I just did a full updatedb on my system and tried to
    find that file and don&rsquo;t have it either. I would try:\r\n\r\ncabal update\r\ncabal
    install &ndash;reinstall X11\r\ncabal install &ndash;reinstall xmonad\r\n\r\nto
    see if that solves anything. My system I installed on wasn&rsquo;t a pristine
    Lenny system, but I hadn&rsquo;t installed any Haskell packages yet. It does look
    like a Haskell related file thought due to the Hs which makes me think that it
    doesn&rsquo;t come from a Debian package.\r\n\r\nI do have to admit I don&rsquo;t
    know much Haskell at all (esp dealing with GHC and cabal). My best pointer (if
    reinstalling X11 and xmonad don&rsquo;t work) would be to ask in #xmonad on irc.
    If you do get an answer feel free to comment here for future readers :)"
- id: 2035
  author: Truck
  author_email: !binary |-
    dHJ1Y2tub3RyZWFsQG1haWxpbmF0b3IuY29t
  author_url: !binary ""
  date: !binary |-
    MjAwOS0wNi0yMyAxNToyMTozMiAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0yMyAyMDoyMTozMiAtMDcwMA==
  content: ! 'Having tried this now on 2 ppc debian boxes, I can state that the error
    Rob saw can be reproduced 100% of the time on debian ppc ):'
- id: 2036
  author: Truck
  author_email: !binary |-
    dHJ1Y2tub3RyZWFsQG1haWxpbmF0b3IuY29t
  author_url: !binary ""
  date: !binary |-
    MjAwOS0wNi0yMyAxNToyOTowMCAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0yMyAyMDoyOTowMCAtMDcwMA==
  content: xmobar breaks with the same error.  I will get to the bottom of this somehow...
    stay tuned, as I like your solution and it is well written.
- id: 4926
  author: Token Mathematician
  author_email: !binary |-
    dG9rZW5tYXRoZW1hdGljaWFuQGdtYWlsLmNvbQ==
  author_url: !binary ""
  date: !binary |-
    MjAxMC0wMS0wNCAxNDozMToyNyAtMDgwMA==
  date_gmt: !binary |-
    MjAxMC0wMS0wNCAxOTozMToyNyAtMDgwMA==
  content: Any word on a solution?
- id: 6006
  author: Anonymous Coward
  author_email: !binary |-
    bm9AdGhhbmtzLm5ldA==
  author_url: !binary ""
  date: !binary |-
    MjAxMC0wNy0yNCAxMjoxMjowNSAtMDcwMA==
  date_gmt: !binary |-
    MjAxMC0wNy0yNCAxNzoxMjowNSAtMDcwMA==
  content: On my system (Debian Lenny) I had to install libghc6-time-dev to get cabal-install-0.8.2
    to get past the bootstrap.sh phase. Withouth that library it was complaining about
    missing dependancy time-1.1.*
---
I want to install a newer version of <a title="Xmonad Tiling Windows Manager" href="http://xmonad.org/">Xmonad</a> than packaged with Debian Lenny on my Lenny systems in the cleanest way possible. I tried a bunch of things today and it turned out that the solution is really simple.

It turns out that the Haskell cabal-install program solved all of my problems:
<ol>
	<li>It can install it's packages into my home directory. Binaries in ~/.cabal/bin and all libraries needed.</li>
	<li>These libraries take precedence over system installed ghc libraries.</li>
	<li>No non-stable packages are needed at all.</li>
	<li>Installs the most recent versions of xmonad, xmonad-contrib and xmobar and any libraries they need.</li>
	<li>Cabal-install itself builds with the version of ghc in Debian Lenny (this wasn't the case in previous releases and Ubuntu Hardy).</li>
</ol>
This procedure installs the newest released version of Xmonad in my home directory along with all required libraries, xmonad-contrib and xmobar. My steps I used are as follows (Please check versions for cabal-install so that the wget command is correct):
<pre style="color: #bebebe; background-color: #262626; padding: 5px;"><span style="color: #add8e6;"># </span><span style="color: #add8e6;">First install ghc and the dev libraries that cabal-install needs
</span>sudo aptitude install ghc libghc6-network-dev libghc6-mtl-dev zlib1g-dev

<span style="color: #add8e6;"># </span><span style="color: #add8e6;">Goto a temp dir and download cabal
</span><span style="color: #7fffd4;">cd</span> ~/tmp
wget http://hackage.haskell.org/packages/archive/cabal-install/0.6.2/cabal-install-0.6.2.tar.gz
tar -xzvf cabal-install-0.6.2.tar.gz
<span style="color: #7fffd4;">cd</span> cabal-install-0.6.2

<span style="color: #add8e6;"># </span><span style="color: #add8e6;">Now run the bootstrap.sh script (as your user)
</span>./bootstrap.sh

<span style="color: #add8e6;"># </span><span style="color: #add8e6;">Make sure to add ~/.cabal/bin to your patch
</span><span style="color: #add8e6;"># </span><span style="color: #add8e6;">I do this via this next line in my .bashrc
</span><span style="color: #7fffd4;">export</span> <span style="color: #40e0d0; font-weight: bold;">PATH</span>=<span style="color: #87cefa;">"$HOME/.cabal/bin:$PATH"</span>

<span style="color: #add8e6;"># </span><span style="color: #add8e6;">Some needed libraries to build Xmonad and Xmobar
</span>sudo aptitude install libx11-dev libxft-dev

<span style="color: #add8e6;"># </span><span style="color: #add8e6;">Now we install xmonad!
</span>cabal update
cabal install xmonad
cabal install xmonad-contrib
cabal install xmobar</pre>
I'm extremely happy with this setup. All of my non-packaged files are in my home directory safely away from my Debian Stable system. This is due to cabal install being able to seemlessly install into ~/.cabal which really does work great. I'm very excited for this tool to be included in ghc soon!
