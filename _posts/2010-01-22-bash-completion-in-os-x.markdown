---
layout: post
title: Bash Completion in OS X
date: 2010-01-22 12:13:53.000000000 -08:00
tags:
  - bash
---
I realized today that I don't have bash completion turned on in OS X. A quick search for the file I'm used to in Ubuntu (/etc/bash_completion) didn't turn up anything. I quickly found that bash_completion is available in mac ports (which I use a lot). I quickly ran "sudo port install bash_completion". The text that was printed after the install advised me to put a line into my start files which I added into <a href="http://git.kelsin.net/?p=configs.git;a=blob_plain;f=.bashrc;hb=HEAD">my bashrc</a>. Now bash completion works great.

An easy way to check if you do have bash completion turned on is to try and autocomplete a directory name after typing cd on the prompt. For example, in my ~/Documents folder I had one file and one directory starting with M. If I type "cd M" and hit tab I will see the file and the folder if I don't have completion and only the folder if I do.
