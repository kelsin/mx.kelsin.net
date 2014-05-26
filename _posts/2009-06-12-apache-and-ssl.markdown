---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Apache and SSL
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
wordpress_id: 185
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0xODU=
date: 2009-06-12 20:48:00.000000000 -07:00
categories:
- Computers
tags:
- Linux
- Ubuntu
- Debian
- Server
comments: []
---
I'm going to be moving my mail to my linode soon (basically want to stop using GMail for most things) and in the process I'm learning about setting up webmail. To do this properly I did want to get my apache set up using a self-signed certificate. Clearly I don't need my personal server to be signed by a CA since it's only for me, I just don't want people sniffing packets.

I used the following two links to do this. The guide is great and worked flawlessly for me!

<a href="http://www.tc.umn.edu/~brams006/selfsign.html">http://www.tc.umn.edu/~brams006/selfsign.html</a>
<a href="http://www.tc.umn.edu/~brams006/selfsign_ubuntu.html">http://www.tc.umn.edu/~brams006/selfsign_ubuntu.html</a>
