---
layout: post
title: Javadoc in Emacs
tags:
- emacs
- java
- javadoc
category: programming
---

I recently wanted an easier way to look up Java class documentation from Emacs
and found this project: [Javadoc-Help](http://javadochelp.sourceforge.net/)

Works great. You add localtions (local or remote) with generated Javadoc and
then this code will open up the page in your browser.

Installation was easy. I added the one .el file to my
[.emacs.d/lisp](https://github.com/Kelsin/configs/tree/master/.emacs.d/lisp)
directory and then added the following lines:

{% highlight common-lisp %}
;; Javadoc Help
(autoload 'javadoc-lookup       "javadoc-help" "Look up Java class in Javadoc."   t)
(autoload 'javadoc-help         "javadoc-help" "Open up the Javadoc-help menu."   t)
(autoload 'javadoc-set-predefined-urls  "javadoc-help" "Set pre-defined urls."    t)
(global-set-key [f8] 'javadoc-lookup)
(global-set-key [(shift f8)] 'javadoc-help)
{% endhighlight %}

This way I can use F8 (which is currently the Starcraft II random dice icon!) to
look up Javadoc classes or go to the interface to add more locations. Perfect!
