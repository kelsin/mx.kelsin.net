---
layout: post
title: Slow Firefox - High Xorg CPU usage - Debian and Ubuntu - SOLVED
date: 2009-02-24 11:14:42.000000000 -08:00
tags:
  - servers
---
So the past few days I've noticed Firefox (Iceweasel actually) being incredibly slow. I don't know if it's more than it was on Ubuntu or not, but it was slow. I've also always felt that gtk apps were a bit slow on this machine but never really bothered to understand why.

Today I got fed up with Firefox and decided to go on a Google hunt and solve the problem.
<ol>
	<li>Tried iceweasel (Debian's rebranded Firefox) with -safe-mode. Nothing</li>
	<li>Tried iceweasel with a new profile (mv ~/.mozilla ~/.mozilla-old). Nothing</li>
	<li>Googled bug reports that told me to change about:config settings. Mainly looked like these were for different issues but I tried them anyway.</li>
	<li>Finally I found <a title="Firefox slow bug report" href="https://bugs.launchpad.net/firefox/+bug/38131">this bug</a> report that mentioned changed some AccelMethod lines in xorg. WORKED</li>
</ol>
What worked for me was adding one line to my xorg.conf. The rest is still autoconfigured, I just added the AccelMethod line:

<pre style="color: #bebebe; background-color: #262626; padding: 5px; overflow: auto;">
<span style="color: #40e0d0; font-weight: bold;">Section</span> <span style="color: #87cefa;">"Device"</span>
    <span style="color: #40e0d0; font-weight: bold;">Identifier</span>  <span style="color: #87cefa;">"Configured Video Device"</span>
    <span style="color: #40e0d0; font-weight: bold;">Option</span> <span style="color: #87cefa;">"AccelMethod"</span> <span style="color: #87cefa;">"XAA"</span>
<span style="color: #40e0d0; font-weight: bold;">EndSection</span>
</pre>

My guess is that this problem comes from Xorg's new autoconfig that's been in the most recent versions of Debian and Ubuntu. I think that with the intel driver (i810) it's not able to tell that it should use AccelMethod "XAA". Using XAA could also be a step back in some different ways. Glxgears STILL only shows 170 fps for me (I know, this is pretty bad, but it's my work machine), but all GTK apps are so much faster I feel like I'm on a new computer. Xmonad finally feels super speedy (as it should!)

Again this worked for me, and I have NO idea what else this change means. Try it at your own risk if you're on a Intel card with a weird, very-slow Firefox.
