---
layout: post
title: Murmur Virtual Servers
tags:
- servers
---

I've been running my own mumble server for a while. I installed the ubuntu
mumble-server packages and it's been completely stable ever since. Recently
however I needed to setup a second murmur server. Murmur comes with this ability
built it but it's not available via the config file. The config file only sets
up default configuration. To actually setup a second server you need to
interface with the murmur server via dbus (deprecated) or ice.

One of the ways to interface is to use a php admin system. If I was actually
hosting mumble servers I would clearly want to go this route. I don't however. I
had no luck getting ANY (I tried 3) of the php interfaces to work. Either ice
library trouble or just random errors messages precented my from getting
anything remotely working.

Finally someone on the \#mumble irc channel suggested I try the command line
python client listed on the
[wiki](http://mumble.sourceforge.net/3rd_Party_Applications#Commandline-Interfaces).
Mice was the one I saw first and seemed really simple. You put the mice.py
script in the same directory as the Murmur.ice file (On my ubuntu system this
was /usr/share/slice/Murmur.ice) and then just import it. I installed
python-zeroc-ice and ipython using aptitude and then did the following to create
my server:

``` python
import mice

# Show an array of all servers
mice.m.getAllServers()

# Create a new server
mice.m.newServer()

# Grab the new server object (for me this was server 2)
s2 = mice.m.getServer(2)

# You can check the default configuration
mice.m.getDefaultConf()

# Then set the config you need (port is one higher than default which my server 1 was running on)
s2.setConf('port','64739')
s2.setConf('registername','Base Channel Name')
s2.setConf('welcometext','<br />Welcome to my new channel!<br />')

# Start it up!
s2.start()
```
