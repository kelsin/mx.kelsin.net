---
layout: post
title: Install Xmonad on Debian Lenny
date: 2009-02-23 22:36:07.000000000 -08:00
tags:
  - servers
  - haskell
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
