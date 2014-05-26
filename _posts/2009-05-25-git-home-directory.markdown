---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Git Home Directory
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  VGhpcyBpcyBqdXN0IGEgcXVpY2t5IGJ1dCBJIGhhZCB0byBzZXR1cCBhIG5l
  dyBsYXB0b3AgYW5kIHJlbWVtYmVyZWQgaG93IGVhc3kgaXQgaXMgdG8gaW5z
  dGFsbCBhIG5ldyBnaXQgaG9tZSBkaXJlY3RvcnkgaW50byBhIGNsZWFuIE1h
  YyBPUyBYIGhvbWUgZGlyZWN0b3J5Lg==
wordpress_id: 173
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0xNzM=
date: 2009-05-25 23:12:18.000000000 -07:00
categories:
- Computers
tags:
- Apple
- Git
comments: []
---
This is just a quicky but I had to setup a new laptop and remembered how easy it is to install a new git home directory into a clean Mac OS X home directory. I'm using the Mac OS X git binaries gotten from&nbsp;<a title="Git Mac Binaries" href="http://code.google.com/p/git-osx-installer/downloads/list?can=3" target="_blank">http://code.google.com/p/git-osx-installer/downloads/list?can=3</a> (also linked from the main git site).

From my home directory on the new mac:
<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">git init
git remote add origin username@repo
git config branch.master.remote origin
git config branch.master.merge refs/heads/master
git pull</pre>
Obviously replace the username@repo with your home directory repository. For me I get no conflicts at the moment. Not sure what would happen if there are conflicts, but it's nice that git just adds the new files and any files that are the same just stay. Pretty awesome.
