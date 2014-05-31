---
layout: post
title: Git Home Directory
tags:
- git
---

I'm installing some dev stuff onto my windows box and finally want to document
how to get a new home directory installed:

``` bash
git init
git remote add origin git@github.com:Kelsin/configs.git
git fetch
git branch master origin/master
git checkout master
```

This will warn you about any files that conflict, once you remove them the
checkout works and your home directory configs are installed :)
