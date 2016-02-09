---
layout: post
title: Git SVN Recovery
tags:
  - git
---

Recently at work I had to checkout a repository that I was previously syncing to
an SVN repo. It turns out the SVN history is kept in the commits so I just
needed a way to convince git-svn that the current master branch was in fact
linked to the SVN repo's head.

```
[svn-remote "svn"]
    url = http://host/svn/base
    fetch = path/to/trunk:refs/remotes/trunk
```

First I had to add the above snippet to my `.git/config` file in the repo. This
tells git-svn where to pull from. Next I told it what trunk currently was by
placing the sha hash of the current master branch into the svn trunk ref:

```sh
cat .git/refs/heads/master > .git/refs/remotes/trunk
```

At this point just running `git svn fetch` works again and git-svn has been
happily working since!
