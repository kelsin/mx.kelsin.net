---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Nxml for ERB
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  QmVpbmcgdW5zYXRpc2ZpZWQgd2l0aCBtb3N0IGVyYiBzb2x1dGlvbnMgaW4g
  RW1hY3MgSSd2ZSBiZWVuIHVzaW5nIG54bWwtbW9kZSBmb3IgZWRpdGluZyBl
  cmIgYW5kIGp1c3QgZGVhbGluZyB3aXRoIGl0IGNvbXBsYWluaW5nIGFib3V0
  IGVyYiBzZWN0aW9ucy4gSSBsb3ZlIG54bWwtbW9kZSBmb3IgeG1sL2h0bWwg
  aW4gZ2VuZXJhbCBhbmQgZG9uJ3QgbGlrZSBkb2luZyBhbnkgZWRpdGluZyB3
  aXRob3V0IGl0Lg==
wordpress_id: 202
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0yMDI=
date: 2009-07-08 08:16:46.000000000 -07:00
categories:
- Computers
tags:
- Emacs
- Ruby on Rails
comments: []
---
Being unsatisfied with most erb solutions in Emacs I've been using <a href="http://www.thaiopensource.com/nxml-mode/">nxml-mode</a> for editing erb and just dealing with it complaining about erb sections. I love nxml-mode for xml/html in general and don't like doing any editing without it.

I've tried using MMM or MoMaMu or whatever it's called that's included with nxhtml mode and it just doesn't do it for me. YA-Snippet with Nxml mode is plenty for me.

Recently I found a blog post that makes sense to try out: <a href="http://platypope.org/blog/2006/9/1/more-valid-than-you">More Valid Than You</a>

Since I compiled Emacs custom for Mac OS X (If I haven't blogged about that I need to!) it was easy to apply that patch to my source tree and compile it.

This at least makes Nxml-mode not hi-light every erb section as invalid. It still chokes sometimes but it's much better. If I move to anything else I'll blog about it :)
