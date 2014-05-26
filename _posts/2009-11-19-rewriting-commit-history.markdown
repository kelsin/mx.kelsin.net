---
layout: !binary |-
  cG9zdA==
status: !binary |-
  cHVibGlzaA==
published: true
title: Rewriting Commit History
author: !binary |-
  S2Vsc2lu
author_login: !binary |-
  YWRtaW4=
author_email: !binary |-
  a2Vsc2luQHZhbGVmb3IuY29t
author_url: !binary |-
  aHR0cDovL2tlbHNpbi5uZXQ=
excerpt: !binary |-
  UmVjZW50bHkgYXQgd29yayBJIHdhcyB3b3JraW5nIG9uIGEgc21hbGwgYnVn
  IGZpeCBnaXQgYnJhbmNoIHRoYXQgaGFkIE1BTlkgc21hbGwgY29tbWl0cyBk
  b2luZyByZWxhdGl2ZWx5IHRoZSBzYW1lIHRoaW5nLiBJIHJlYWxseSB3YW50
  ZWQgdG8gZ28gdGhyb3VnaCBhbmQgY2xlYW4gdXAgdGhlIGNvbW1pdCBtZXNz
  YWdlcyB0byBtYWtlIHRoZW0gdW5pZm9ybSBhbmQgYWN0dWFsbHkgbmVlZGVk
  IHRvIGNoYW5nZSBzb21lIG9mIHRoZSBjb21taXRzIHRvby4=
wordpress_id: 229
wordpress_url: !binary |-
  aHR0cDovL2Jsb2cua2Vsc2luLm5ldC8/cD0yMjk=
date: 2009-11-19 10:05:10.000000000 -08:00
categories:
- Computers
tags:
- Git
comments: []
---
Recently at work I was working on a small bug fix git branch that had MANY small commits doing relatively the same thing. I really wanted to go through and clean up the commit messages to make them uniform and actually needed to change some of the commits too.

By google searching I found this <a href="http://stackoverflow.com/questions/179123/how-do-i-edit-an-incorrect-commit-message-in-git">stack overflow question</a> that gave me my answer. <a href="http://stackoverflow.com/users/9410/aristotle-pagaltzis">This user</a> wrote about how using rebase --interactive can be used to specify any number of commits to edit. You basically call <code>git rebase --interactive COMMIT</code> where <code>COMMIT</code> can be <code>HEAD^</code> to just do one commit, or any SHA1 or branch reference as normal. Git will open your <code>$EDITOR</code> with a file listens all commits in question. You can then edit this temporary file to tell git what commits to let you edit and which ones to drop completely or merge into the commit above them (which you can do manually via edit as well). Then git will play through your commits that you've said you want to edit one at a time, and drop you into a shell to let you do anything you want. Sometimes you want to edit just the commit message so you just <code>git commit --amend</code> and change the message. Other times you want to undo the last two commits and redo them <code>git reset HEAD^^</code> and then edit and commit again.

Also just to remember this (recently discussed at work as well):

	<ul>
<li><code>git reset HEAD^</code> undoes the last commit and places changes as changes in the working tree.</li>

	<li><code>git reset --hard HEAD^</code> removes the commit changes completely (not form the git data store, but completely from your working tree at least)</li>

	<li><code>git reset --soft HEAD^</code> puts the changes into a "staged" state. This makes it east to add to a commit while you have many other edited files in your tree (Maybe even more changes to a changed file that you don't want to add into this commit)</li></ul>


