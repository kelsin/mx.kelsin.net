---
layout: post
title: Tiny bits that I took away from Mongo Boston
tags:
- programming
---

So I attended [Mongo Boston](http://www.10gen.com/events/mongo-boston-2011
"Mongo Boston") on Oct 3rd. It was a pretty great time. My favorite talk was
Cowboy-coding by [Aaron White](http://twitter.com/#!/aaronwhite). While not an
indepth talk about Mongo it had a great feel to it, and made you really excited
to make applications... which is why I like web development.

I basically took away a couple of things from these talks.

- Denormalizing is OK! I forget this a lot. Don't be afraid to denormalize in
  Mongo when it speeds things up. When you can cut out a database query by
  putting a piece of data in a joined document AND the main document do it!
- [Covered indexes](http://www.mongodb.org/display/DOCS/Retrieving+a+Subset+of+Fields#RetrievingaSubsetofFields-CoveredIndexes):
  are cool. Read up about them.
- While you don't have full transactions, many things can be done atomically
  with Mongo's fancy
  [update commands](http://www.mongodb.org/display/DOCS/Updating).
- Schema is wicked important... change it when you need to and spend a lot of
  time on it at the beginning!
