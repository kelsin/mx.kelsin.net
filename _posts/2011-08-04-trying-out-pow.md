---
layout: post
title: Trying out POW
tags:
- development
- pow
- rails
status: publish
type: post
published: true
meta: {}
---

So this morning I realized how annoying it is that I need to run 3 different
rails apps for work (probably will be more in the future) and have about 3
freelance projects going at any given time. I hate having to start each rails
server constantly. I've actually written a bunch of bash code in order to make
this process easier. Sick of it.

Enter [POW](http://pow.cx/)!

Suddenly I have my apps running all the time (technically POW starts and stops
them as needed so sometimes there is launch lag but who cares!).  Now all my
apps are all available at handy urls without me having to worry about starting
up thin with strange ports and what not.

I did run into an
[issue when installing while using iTerm2](https://github.com/37signals/pow/issues/143#issuecomment-1726905)
but using Terminal.app solved this.

So far this is running nicely and I'm eager to see how it holds up to common
use!
