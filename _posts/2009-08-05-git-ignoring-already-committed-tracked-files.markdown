---
layout: post
title: Git Ignoring already committed (tracked) files
date: 2009-08-05 12:12:42.000000000 -07:00
tags:
  - git
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

