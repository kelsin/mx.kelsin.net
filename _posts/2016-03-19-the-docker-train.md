---
layout: post
title: The Docker Train
tags:
  - programming
---

I'm fully on board the [docker](https://www.docker.com/) train. I spent most of
today moving one of my work apps into a docker development environment. The
docker compose file consist of 4 containers. One for nginx (our proxy). One for
our app. One container for [redis](http://redis.io/) and one container for
[redis-commander](http://joeferner.github.io/redis-commander/) which is a redis
debuging/inspection tool.

Now when I run `docker-compose up` I get a full nginx environment proxying to my
app, my static files for my app, and the redis-commander app. I get my app in
the same environment as production with the proper version of all of it's
dependencies. I also get redis running and connected with no extra work. This
environment can be duplicated and used during tests and can all be recreated in
a matter of seconds.

The idea of not having to use rbenv or rvm on a server but still get proper
isolation and management of different ruby versions is amazing. I can't wait to
move all of my VPS software into containers.

Our build server can now build an image of the app which can be labeled, pushed
to a repo, tested, approved and then moved into QA or Production as needed. We
know it can run on any docker host. Our development boxes, QA VM's, AWS, Azure,
etc. This eliminates any odd situations about running apps in a public cloud,
when they have private NPM packages that are used when building. It also solves
many issues with having linux, mac and windows developers working on the same
project. Running multiple VM's is annoying, running one VM which can launch
docker containers has turned out not to be!

Excited to see where this will end up.
