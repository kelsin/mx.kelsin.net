---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Git Ignoring already committed (tracked) files
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  SSB1c2UgPGEgaHJlZj0iaHR0cDovL3phZ2Fka2Eudm0uYnl0ZW1hcmsuY28u
  dWsvbWFnaXQvIj5tYWdpdDwvYT4gb24gPGEgaHJlZj0iaHR0cDovL3d3dy5n
  bnUub3JnL3NvZnR3YXJlL2VtYWNzLyI+ZW1hY3M8L2E+IHRvIGRvIG15IGdp
  dCBtYW5hZ2VtZW50IGFuZCBJIGhhdGUgc2VlaW5nIHRoYXQgdGhpcyBjb250
  cm9sbGVyIGhhcyBhIGNoYW5nZSBpbiBpdCAoc2FtZSB3aXRoIHVzaW5nICJn
  aXQtc3RhdHVzIikuIEkgZG9uJ3Qgd2FudCB0byBhY2NpZGVudGFsbHkgY29t
  bWl0IHRoaXMgY2hhbmdlIGVpdGhlci4gVGhlIHNpbXBsZSBhbnN3ZXIgdG8g
  dGhpcyBpcyB0byB0ZWxsIGdpdCB0byBtYXJrIHRoaXMgZmlsZSBhcyAibm90
  IGNoYW5nZWQi
wordpress_id: 211
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0yMTE=
date: 2009-08-05 12:12:42.000000000 -07:00
categories:
- Computers
tags:
- Code
- Git
comments: []
---
In my current local development environment for work I don't have access to our authentication mechanism. Our rails site uses a cookie from our main site. In order to ignore this I commonly edit my controllers with a line like:

<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
<span style="color: #7587A6;">self</span>.current_user = <span style="color: #9B703F;">User</span>.find(5)
</pre>

(This is just a snippet and doesn't include the code that allows for the current_user method, this post is NOT about authentication in rails). This allows me to just work on features without having to do some complicated cookie copying and other stuff I'd rather not mess with.

I use <a href="http://zagadka.vm.bytemark.co.uk/magit/">magit</a> on <a href="http://www.gnu.org/software/emacs/">emacs</a> to do my git management and I hate seeing that this controller has a change in it (same with using "git-status"). I don't want to accidentally commit this change either. The simple answer to this is to tell git to mark this file as "not changed". I found <a href="http://readystate4.com/2009/05/21/git-ignore-changes-in-a-working-tree-file">this post</a> that told me about this feature. This feature exists in order to help people with slow filesystems but it works great for this use as well:

<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
git update-index --assume-unchanged path/to/file</pre>

Now the files don't show up in any status commands or when I commit with "git commit -a". These files will cause git to gracefully error when merging in a branch that changes these files (so you can manually handle it) and it will remove this flag if you manually "git add" these individual files.

The problem I ran into is that I want an easy way to check what files are setup like this. I couldn't find a git command to do this already so I added these aliases:

<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
[alias]
    marked-unchanged = !git ls-files -v | grep ^[a-z]
    mu = !git ls-files -v | grep ^[a-z]
</pre>

Now both "git marked-unchanged" and "git mu" show me a list of files that are set this way so I don't forget. I want to add magit commands to show this and set this as well but that will be another day and another post.

