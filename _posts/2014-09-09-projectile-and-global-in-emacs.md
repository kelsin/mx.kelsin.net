---
layout: post
title: Projectile and Global in Emacs
image: http://kelsin.smugmug.com/Blog/i-sHgJ6XK/0/O/emacs.png
tags:
  - emacs
  - programming
---

Today I started using my Mac at work for java programming. When moving from
windows to mac I also wanted to ditch IntelliJ and start using Emacs for java
programming. This will definitely require a bunch of custom Emacs helpers in
order to help navigate large projects.

## Projectile

One of the first things I needed to find was a project manager that allowed me
to search only files in a certain project. I want to be able to grep from the
project root and open files from the project root. It looks like
[projectile](https://github.com/bbatsov/projectile) solves both problems!

## Global

Along with projectile comes [GNU Global](http://www.gnu.org/software/global/)
support! Getting this just involved installing ctags and global:

~~~ bash
brew install ctags
brew install global --with-exuberant-ctags
~~~

Then I added the [ggtags](https://github.com/leoliu/ggtags) project to emacs
(via [Cask](https://github.com/cask/cask) as normal), and added ggtags-mode to
my java config:

~~~ lisp
(add-hook 'java-mode-hook (lambda ()
                            (ggtags-mode 1)
                            (setq c-basic-offset 4
                                  tab-width 4
                                  indent-tabs-mode t)))
~~~

Now when I visit a java file I can generate (or regenerate) my tag file with
`C-c p R`. Once that is done I can navigate tags via
[normal tags commands](https://www.gnu.org/software/emacs/manual/html_node/emacs/Tags.html)
in Emacs as well as special ggtags commands that make use of global's extra
features!
