---
layout: post
title: Global GitIgnore
redirect_from: /global-gitignore/
tags:
  - git
---

A couple of days ago I used the
[github guide](https://help.github.com/articles/ignoring-files) to setup a
global git ignore file. Today I realized that it wasn't working at work.  The
command version of git config used an absolute path to the file when using a \~
relative file works perfectly fine.
