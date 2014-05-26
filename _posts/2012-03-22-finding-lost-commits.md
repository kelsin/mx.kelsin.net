---
layout: post
title: Finding lost commits
tags:
- git
category: programming
---

{% highlight sh %}
git fsck --full --no-reflogs | grep commit
{% endhighlight %}

If you delete a branch you can still find those hanging commits and rescue them!
