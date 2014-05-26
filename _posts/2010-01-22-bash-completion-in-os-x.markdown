---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Bash Completion in OS X
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  SSByZWFsaXplZCB0b2RheSB0aGF0IEkgZG9uJ3QgaGF2ZSBiYXNoIGNvbXBs
  ZXRpb24gdHVybmVkIG9uIGluIE9TIFguIEEgcXVpY2sgc2VhcmNoIGZvciB0
  aGUgZmlsZSBJJ20gdXNlZCB0byBpbiBVYnVudHUgKC9ldGMvYmFzaF9jb21w
  bGV0aW9uKSBkaWRuJ3QgdHVybiB1cCBhbnl0aGluZy4gSSBxdWlja2x5IGZv
  dW5kIHRoYXQgYmFzaF9jb21wbGV0aW9uIGlzIGF2YWlsYWJsZSBpbiBtYWMg
  cG9ydHMgKHdoaWNoIEkgdXNlIGEgbG90KS4=
wordpress_id: 236
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0yMzY=
date: 2010-01-22 12:13:53.000000000 -08:00
categories:
- Computers
tags:
- Bash
- Apple
- OS X
comments:
- id: 6008
  author: Gerald
  author_email: !binary |-
    Z2VyYWxkQHNjaG5laWRyLmRl
  author_url: !binary ""
  date: !binary |-
    MjAxMC0wOS0xNyAxOToxNToyNyAtMDcwMA==
  date_gmt: !binary |-
    MjAxMC0wOS0xOCAwMDoxNToyNyAtMDcwMA==
  content: Good hint, but in my MacOS installation with MacPorts 1.9.1 the package
    name is "bash-completion", not "bash_completion".<br>So the actuall command to
    install it was "sudo port install bash-completion".
---
I realized today that I don't have bash completion turned on in OS X. A quick search for the file I'm used to in Ubuntu (/etc/bash_completion) didn't turn up anything. I quickly found that bash_completion is available in mac ports (which I use a lot). I quickly ran "sudo port install bash_completion". The text that was printed after the install advised me to put a line into my start files which I added into <a href="http://git.kelsin.net/?p=configs.git;a=blob_plain;f=.bashrc;hb=HEAD">my bashrc</a>. Now bash completion works great.

An easy way to check if you do have bash completion turned on is to try and autocomplete a directory name after typing cd on the prompt. For example, in my ~/Documents folder I had one file and one directory starting with M. If I type "cd M" and hit tab I will see the file and the folder if I don't have completion and only the folder if I do.
