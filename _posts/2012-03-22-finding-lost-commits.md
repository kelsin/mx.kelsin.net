---
layout: post
title: Finding lost commits
tags:
- git
---

``` bash
git fsck --full --no-reflogs | grep commit
```

If you delete a branch you can still find those hanging commits and rescue them!
