---
layout: post
title: Installing Vim and a Sane Environment in Windows
redirect_from: /installing-vim-and-a-sane-environment-in-windows/
tags:
  - vim
  - windows
---

This first post will be about everything I had to install to get
[Vim](http://www.vim.org/) working in windows. If you try this out and
run into any issues please let me know so I can fix things. I never know
what I've installed years ago that ends up helping something out. It
should also go without saying that in linux I use the default package
manager for all of this. On a mac I use [homebrew](http://brew.sh/).
Both are much simpler since a sane terminal is already installed.

This post will go into installing [git](http://git-scm.com/), a [sane
terminal](https://github.com/cbucher/console),
[vim](http://www.vim.org/) and some
[helper](http://ctags.sourceforge.net/) programs. I'm going to leave my
[.vimrc](https://github.com/Kelsin/configs/blob/master/.vimrc) settings
and the plugins I'm using for certain languages for future posts.

Some things I tried that didn't work out...
===========================================

Chocolatey
----------

I've tried [Chocolatey](http://chocolatey.org/) twice now... it's
probably due to my lack of understanding of Powershell and windows
command line but everytime I've run into problems. Packages can
currently overwrite batch files for each other resulting in ctags not
working. When I tried to install some programs it ended up failing. Many
packages in Chocolately seem to just be wrappers allowing you to
download and silently install using the normal windows installer. No
thanks. I haven't found any other package manager for windows that I
like.

What I would like is something to install command line programs with an
emphasis on using the bash that comes with git. Many of the issues that
I end up with in windows is programs that expect the cmd.exe environment
while I'm running them from bash.

256 Colors and Proper Ansi Colors
---------------------------------

I've also given up on getting 256 colors working in windows. I've tried
both [Console2](http://sourceforge.net/projects/console/),
[ConsoleZ](https://github.com/cbucher/console) and
[ConEmu](https://code.google.com/p/conemu-maximus5/) and can't get 256
colors working in any of them (despite finding [good
docs](https://code.google.com/p/conemu-maximus5/wiki/Xterm256Colors)
that should help with ConEmu).

It would also appear that the ansi color id's of numbers in all of these
programs don't match up with what vim thinks they should be. If I
install a solarized color scheme to make the 16 terminal colors work
properly in bash, command line vim's solarized color scheme doesn't look
right. If I change the colors to make vim look correct then the terminal
(hand coded ansi colors) don't look right. Something is fishy here and I
just don't have the time or energy to solve it. My terminal vim (using
16 colors and the solarized pallette) works perfectly with my prompt on
both mac and linux. I can also use a 256 color mode in both and it works
flawlessly. I'm not going to bother getting it working in windows. I
want to be using a single gvim instance most of the time anyway.

Font
====

I'm currently using Deja Vu Sans Mono from this [github
repo](https://github.com/Lokaltog/powerline-fonts). These fonts have
some extra characters added to them that my vim config uses (will be
further explained in a future blog post). I clone the repo and then just
double click the four Deja Vu fonts and click the "Install" button to
install them.

Vim
===

Luckily installing Vim was incredibly easy. You can download the install
from the [main vim download page](http://www.vim.org/download.php#pc).
Once you run it it will install Vim in your Program Files directory and
also gives you nice explorer context menus (that I'm hoping to not use
in favor of bash).

I'm going to explain my `.vimrc` in a future post, but for now I want to point
out that I do use `.vim` as my vim folder even in windows. This is hidden in
bash (which I use) and it maintains consistency between my windows machine and
my other systems. This requires setting the runtimepath at the top of my
`.vimrc` file:

I like to be able to edit my `.vimrc` and reload it so I have to wrap this
section in load protection so that we don't reset the runtimepath after
some other plugins get to edit it.

Git and Bash
============

The windows git installer from the [main git home
page](http://git-scm.com/) includes a small selection of unix tools from
[MSys](http://www.mingw.org/wiki/MSYS). It includes bash, openssh, and
many others. This has proven to be a pretty reliable way to get a unix
feel on windows. All of my config files are made to work in linux, on my
mac and in the bash included with git. To install just download the
installer and run it!

We will be running bash from a terminal program that we install next. As
a side note, the normal ssh-keygen program is also included so creating
ssh keys for github is incredibly easy. You can mostly follow [github's
guide](https://help.github.com/articles/generating-ssh-keys).

Terminal
========

Right now I'm torn between
[Console2](http://sourceforge.net/projects/console/) and
[ConsoleZ](https://github.com/cbucher/console). ConsoleZ is a fork from
Console2 with it's code up on github which I really like so I'm using it
for now. I grabbed the latest amd64 release from the [downloads
page](https://github.com/cbucher/console/wiki/Downloads) and put the
downloaded folder in `C:\Program Files\ConsoleZ`. I then right clicked
on the Console.exe program and pinned it to the start menu. Set the
shortcut key to T (Ctrl-Alt-T) and ran it.

Once in Console you can get to the settings by right clicking anywhere
in the terminal window and selecting Edit and then Settings. The main
thing you want to do it [setup Console to run git's
bash](http://code.logos.com/blog/2011/06/git_bash_in_console2.html).

[My config file is available in my github repo](https://github.com/Kelsin/configs/blob/master/.console.xml)
but to use it you have to rename it "console.xml" and put it in
`C:\Users\kelsin\AppData\Roaming\Console`. I also have an icon linked that
you'll need to fix in the settings window after copying the file. I find it
easiest to edit some settings in Console (making sure to check the "Save
settings to user directory" box) and make sure I can find the file before
replacing it. Make sure Console is closed before you replace the file so that it
doesn't get overwritten by the running process. Currently console vim doesn't
color perfectly (as I mentioned above) but since it works well on all other
OS's, I'm just going to live with it for now. My bash prompt does look good with
my current color scheme and that's what I'll be seeing most of.

CTags
=====

I grab the windows build of ctags right from [their main
website](http://ctags.sourceforge.net/) and I stick it in
`C:\home\kelsin\opt\ctags58` and I make sure to add this to my path
(see below).

Environment Setup
=================

I check out my [configs git repo](https://github.com/Kelsin/configs) to
`C:\home\kelsin` (which I created). In order to make sure git bash
uses this as my home directory I set my `HOME` environment variables (in
windows settings) to this directory. I do by this by hitting Windows Key
+ Pause/Break to pull up the control panel system pane. I think click "Advanced
system settings" in the side menu. I then click on the "Environment Variables"
button and either edit or create a user variable named `HOME` and set it to
`C:\home\kelsin`.

I setup my PATH variable in bash by using a custom function. This
function only adds an item to my path if the directory exists and if the
item isn't already in my path. This helps me keep the same bash config
for many systems without worrying if I have everything installed the
same on each system. Regardless of how you do it you want to make sure
that the vim install location is in your bash path:

Once vim is in my path I can create an alias so that I can use "e" as a
command to edit any file in the one gvim instance already running:\

Conclusion
==========

Not everything is working perfectly... but gvim does look very pretty
and handles unicode perfectly. Bash works and I can alias away! My
set-title bash helpers do work with Console which is nice. I'd much
rather be using [Tmux](http://tmux.sourceforge.net/) to handle my
terminals, but I can live with tabs while in windows (for now).

I'll write some more posts over the next few days. The first few posts
will be about generic `.vimrc` settings and what I prefer. Once I use vim
for a few weeks for Java editing I'll make some posts fully about that.
I will also get a post up this week about my Java environment in general
since (despite using an IDE) I've been pretty happy with it.
