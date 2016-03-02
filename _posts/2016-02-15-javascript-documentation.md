---
layout: post
title: Javascript Documentation
tags:
  - programming
  - javascript
---

Recently I started a (low-key) open source project to take javascript projects
and build documentation homepages out of them.

This started due to me not being happy with the current solutions. I'm using
[groc](https://github.com/nevir/groc) for
[Core the Loot Hound](http://docs.coretheloothound.com/) and
[RDoc](http://rdoc.sourceforge.net/) for
[By Fire Be Purged](http://docs.byfirebepurged.com/) and both provide very
different things.

Groc was based on [Docco](https://jashkenas.github.io/docco/) and I think the
idea is excellent. Browse your code with the comments side by side. I really
like this idea and wanted to include this style of documentation in my project.

RDoc on the other hand is much more like
[Javadoc](http://www.oracle.com/technetwork/articles/java/index-jsp-135444.html)
and provides API docs for programming libraries. It's not easy or intuitive how
to theme the resulting site, or add static guide pages to the site. These tools
also only really work for the languages they were meant for.

I also looked at static site generators that are just meant to take markdown
files and turn them into sites. Great for writing guides, (like github's
README.md file) but not good for a programming referrence or code learning tool.

My plan is to combine all three. I want to provide a tool that in the beginning
does simple things:

  1. Displays the README.md and other md files as guides.
  2. Provides code browsing for the full project with comments side by side allowing you to learn about the code.
  3. Provide easy way to link from guides to code, and from code to guides.

After this initial version I would like to add the ability to do slight language
parsing (with plugins for different languages) so we can add API style
documentation to this site that we're generating. At this point this plugin
becomes more like
[Maven Site](https://maven.apache.org/plugins/maven-site-plugin/) than anything
else!

This is just a tiny pet project. I want to become better at writing parsers in
general, and while this is nothing compared to anything real it gives me some
tiny experience that I can apply. It also is something I would like to use on
tools as soon as I get it to a point that it can give Groc a run for it's money.
