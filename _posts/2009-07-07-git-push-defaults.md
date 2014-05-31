---
layout: post
title: Git Push Defaults
date: 2009-07-07 08:34:06.000000000 -07:00
tags:
  - git
---
Recently I've began working locally on my macbook and have installed <a href="http://git-scm.com/">git 1.6</a> from the <a href="http://code.google.com/p/git-osx-installer/downloads/list?can=3">binary package</a>. I haven't noticed anything different from my work servers (v1.5) and my new 1.6 locally except for push defaults. Git likes showing this huge warning about how you can change the way push works now. It does the same thing as it has done previously, just with a giant message about how you can change it if you want.

I found more information about this here: <a href="http://pivotallabs.com/users/alex/blog/articles/883-git-config-push-default-matching">git config push.default matching</a>

After reading that helpful post I decided to set my git config globally:
<pre style="color: #F8F8F8; background-color: #000000; padding: 5px; overflow: auto;">
git config --global push.default tracking
</pre>

If anyone knows more about this stuff I'd love to hear opinions about tracking vs current. Basically I've pushed things I haven't wanted to push yet with the default "matching" option. I like most git operations to only function on my current branch (especially when dealing with pushing). Current seems to provide that but it will push the current branch to "a branch of the same name" according to the <a href="http://www.kernel.org/pub/software/scm/git/docs/git-config.html">man page of git-config</a>. Tracking says it pushes the current branch "to its upstream branch" which seems more correct to me since I might have tracking branches with different names. I'm hoping that git will complain if I call git push with no arguments on a branch that isn't tracking a remote branch.
