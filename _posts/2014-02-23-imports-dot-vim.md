---
layout: post
title: Imports.vim
redirect_from: /imports-dot-vim/
tags:
  - vim
  - java
  - programming
---

This project is NOT ready for full publication yet... it's also not totally
tested by me yet, but I want to write about how it works and how I learned
enough vimscript to make it work.

This project is availabe (in it's alpha state) at
[https://github.com/Kelsin/vim-imports](https://github.com/Kelsin/vim-imports)

It uses another project that I'm working on that generates a .classtags file
full of all classes that your java project has access
to: [https://github.com/Kelsin/classtags-maven-plugin](https://github.com/Kelsin/classtags-maven-plugin)

Motivation
==========

Last week I started using vim for Java work. It's a light week of work right now
so I was able to ease into it. The \#1 thing that annoyed me was dealing with
**imports**. I'm used to automatic import handling in both Eclipse and IntelliJ.

***Note:*** The cynic in me says that this means Java is a stupid language;
there is a huge feature that's annoying to deal with by hand but fully capable
of being automated by programs...

What Works Right Now
====================

Currently I have 5 commands exposed. One is just a combination of two
others:

- **ImportsDeleteUnused** - This goes over all imports in my current file. For
    each import it searches the rest of the file for the class name. If the
    class name doesn't appear it assumes this import is not used and removes the
    import line. This will work like 99% percent of the time and was easy to
    implement.
- **ImportsSort** - This takes an option string like `java,javax,net,org,com`
    and sorts all imports into groups of lines.  First all `java.\*` imports
    will be listed followed by a blank line.  Then all `javax.\*` imports, etc.
- **ImportsOrganize** - This just calls the first two commands together.
- **ImportsFind** - This uses my other
    [classtags project](https://github.com/Kelsin/classtags-maven-plugin). It
    grabs the word under the cursor and tries to find a import line using it.
    If found it assumes we're good and just lets you know (via an echo) what
    line the import is on. If it didn't find an import line then it assumes we
    need to find an import and add it. It opens up a copy of the .classtags file
    and searches it for the class name that it found under the cursor. If it
    finds 0 results it tells you that. If it finds 1 it just adds an import. If
    it finds more than one it lets you select an import.
- **ImportsOpenJavadoc** - This command doesn't quite belong with the rest but
    it's hopefully going to be useful. Basically it finds the work under the
    cursor and then finds the import for that class. If it's a java or javax
    import than we open up the Oracle javadocs for the class that's imported. If
    not it tries to find the javadoc in your target/site/apidocs folder
    (configurable). This will be used to open up the javadoc for classes that
    I'm using. It also works if you use it on an import line. I'm still figuring
    out what I want to do for javadocs. Most likely I'll be moving to a
    different method since I also want to look up non-java javadocs from
    dependencies in my project.

What's next?
============

I'm going to use this during work this week. If it proves helpful I'm
hoping to keep cleaning it up and adding some documentation (including a
proper vim help file that includes more than a figlet title). If there
is any part of it that doesn't work perfectly I hope to iterate on it.

Concerns
========

I'm most concerned about the javadoc implementation. Most likely this will move
to another plugin eventually to keep things clean and separate. The main issue
(as I stated above) is that I want to automatically look up **ALL**
javadoc... but all javadoc isn't available.  Sometimes it's on the
web. Sometimes I can get maven to get the javadoc (if the authors of the maven
project deployed it). Sometimes it's only available if I download the code and
javadoc it myself (if they used javadoc comments) and sometimes it's just not
available at all. This is an annoying issue that I don't have a good solution
for yet. I'm going to see how it plays out at work and go from there. This is my
biggest worry about moving away from IntelliJ. I'm hoping tags and normal
autocomplete will be enough, but we'll just have to see and iterate!
