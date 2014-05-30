---
layout: post
title: CSS Grid Systems
tags:
- compass
- css
- grids
- sass
- susy
---

I spend a lot of time the past few days looking into CSS grid systems. My main
reason for this was being sick of laying out things myself. There's so much you
have to do and be careful of when laying out css and due to this I often ended
up absolutely positioning way too many things. I also was not very careful
about clearfixing which leads to problems in many designs. I want layout to be a
bit easier which means learning one of these systems.

The main problem with some of the old frameworks ([960.gs](http://960.gs/),
[Blueprint](http://blueprintcss.org/), etc) is that they force you to put stupid
classes on divs. Now your layout is coded into the HTML. This isn't good and was
the reason I was never interested in using these before.

However, a lot of smart stuff goes into these frameworks. They do use the
current best methods of floating/clearfixing etc. There's a lot to learn about
good css from looking at these frameworks.

Enter [Compass](http://compass-style.org/) and
[Sass](http://sass-lang.com/). Sass lets you write smart css files (with
varibles, mixins (functions basically), etc). Now we can just include the
blueprint classes into other css rules easily so no more need to put classes for
layout into our html! Since rails uses sass by default now this seems like a
great solution. Compass is a set of libraries (built in Sass) to do things that
I've started to do anyway. They include sass mixins to easily do cross browser
border radius and other things like that. I currently write my own mixins but
I'm going to learn compasses for now. Rails handles compass easily while compass
has a gem that can compile stylesheets for you if you are working in another
framework or language.

I've decided to use [Susy](http://susy.oddbird.net/) as my grid system. It is
also built on top of Compass and basically just includes the mixins and
functions needed to implement a grid system. It's one step below blueprint in
that it allows you to do any grid system you want. (I realize that blueprint has
been ported to Compass in the same way, but honestly I like Susy's philosphy
about things on their homepage so that's why I'm going to try it first).

Very excited to try this out on my current freelance project. Probably
next week :)
