---
layout: post
title: Instant PhpBB3 Speed Improvements
date: 2009-10-02 18:48:37.000000000 -07:00
tags:
  - servers
  - php
---
Recently at work we've installed a php accelerator onto one of our php apps. We were having load problems on the box (<a href="http://moodle.org/">Moodle</a> installs) and the accelerator helped solve the problem. This got me thinking and I decided to install an accelerator on my <a href="http://www.linode.com/index.cfm">Linode</a> in order to speed up my <a href="http://forums.cakeordeath-guild.com">World of Warcraft guild forums</a> (a <a href="http://www.phpbb.com/">phpbb3</a> install)

After doing some reading I decided to try out <a href="http://xcache.lighttpd.net/">Xcache</a>. I don't have ANY opinions on which accelerator is better (this isn't the one we chose at work for Moodle). I chose this one for the SOLE reason that Debian Lenny had it in the repository. Installing it was DEAD simple:

<pre style="color: #F6F3E8; background-color: #000000; padding: 5px; overflow: auto;">
sudo aptitude install php5-xcache
sudo /etc/init.d/apache2 restart</pre>

Can't get any simpler. Now my phpbb forum pages load INSTANTLY. It's absolutely amazing and awesome.

This is making me want to move this blog over to the <a href="http://www.linode.com/index.cfm">Linode</a> very fast!
