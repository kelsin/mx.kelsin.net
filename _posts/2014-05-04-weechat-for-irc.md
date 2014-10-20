---
layout: post
title: Weechat for IRC
redirect_from: /weechat-for-irc/
tags:
  - linux
  - irc
---

Due to the commit activity, the settings structure, and the support for
[encrypted settings](http://dev.weechat.org/post/2013/08/04/Secured-data) I
decided to switch back to [weechat](http://www.weechat.org/) for IRC. Soon I
will also working in a [minbif](https://symlink.me/projects/minbif/wiki/) config
but taking things one step at a time.

[![Weechat](http://kelsin.smugmug.com/Blog/i-BXp9mhJ/0/Th/weechat-Th.png "Weechat")](http://kelsin.smugmug.com/Blog/i-BXp9mhJ/0/L/weechat-L.png)

I have sasl authentication working with [freenode](http://freenode.net/) and my
password is encrypted in my
[weechat config](https://github.com/Kelsin/configs/tree/master/.weechat) so that
I can feel safe posting it to github. You can follow the directions in the blog
post that I linked up above for how to setup the sec.conf file in weechat.

Heres a bunch of settings that I used to get freenode working and weechat
looking good in my [solarized](http://ethanschoonover.com/solarized) terminal:

```
# Nick and auth settings for freenode
/set irc.server_default.nicks "kelsin,kelsin1,kelsin2,kelsin3,kelsin4"
/set irc.server_default.sasl_mechanism dh-blowfish
/set irc.server_default.username "kelsin"
/set irc.server.freenode.sasl_username "kelsin"
/set irc.server.freenode.ssl on
/set irc.server.freenode.ssl_dhkey_size 1024
/set irc.server.freenode.addresses "chat.freenode.net/7000"
/set irc.server.freenode.autoconnect on
/set irc.server.freenode.autojoin "#antelopes,#legitco,#emacs,#vim"
/set irc.server.freenode.realname "Christopher Giroir"
/set irc.server.freenode.sasl_password "${sec.data.freenode.nickserv}"

# Only notify on a highlight (not normal messages) for these channels
/set weechat.notify.irc.freenode.#emacs highlight
/set weechat.notify.irc.freenode.#vim highlight

# Unicode characters for coolness
/set weechat.look.bar_more_down "▼"
/set weechat.look.bar_more_left "◀"
/set weechat.look.bar_more_right "▶"
/set weechat.look.bar_more_up "▲"
/set weechat.look.buffer_notify_default message
/set weechat.look.buffer_time_format "${color:252}%H:${color:245}%M:${color:240}%S"
/set weechat.look.item_buffer_filter "⚑"
/set weechat.look.prefix_action "⚡"
/set weechat.look.prefix_align_max 15
/set weechat.look.prefix_error "⚠"
/set weechat.look.prefix_join "→"
/set weechat.look.prefix_network "ℹ "
/set weechat.look.prefix_quit "←"
/set weechat.look.prefix_same_nick "⤷"
/set weechat.look.prefix_suffix "│"
/set weechat.look.read_marker_string "─"
/set buffers.look.indenting on
/set buffers.look.suffix_bufname " "

# Making colors look good with solarized terminals
/set weechat.color.chat_nick_colors "1,2,3,4,5,6,9,13"
/set buffers.color.current_bg 0
/set buffers.color.current_fg 7
/set buffers.color.hotlist_message_fg 7

# Nicklist should be colored too
/set irc.look.color_nicks_in_nicklist on
```
