---
layout: post
title: OS X notifications from remote Weechat in a screen session
redirect_from: /os-x-notifications-from-remote-weechat-in-a-screen-session/
tags:
  - irc
  - osx
---

I run my [weechat](http://www.weechat.org/) irc client on a
[linode](https://www.linode.com/) which makes it hard to get notifications. It's
running in a screen session so that I can rejoin it at any time, but when I'm
working I want to be notified of private messages or mentions of my name in any
channels. Using the help of
[terminal-notifier](https://github.com/alloy/terminal-notifier) and inspiration
from [simular solutions](https://gist.github.com/prebenlm/5562656) I set off to
make my own version using unix-sockets for communications instead of plain
files.

First I had to write the weechat plugin which was fortunately very easy.
[My plugin is currently hosted on github](https://github.com/Kelsin/weechat-socket-notify
"Link: https://github.com/Kelsin/weechat-socket-notify") with most of this
explanation in it's readme.

Next I needed the bash script to read through and notify me:

``` bash
function irc-notification {
  TYPE=$1
  MSG=$2

  terminal-notifier \
    -title IRC \
    -subtitle "$TYPE" \
    -message "$MSG" \
    -appIcon ~/path/to/icon.png \
    -contentImage ~/path/to/icon.png \
    -execute "/usr/local/bin/tmux select-window -t 0:IRC" \
    -activate com.apple.Terminal \
    -sound default \
    -group IRC
}

function get-irc-notifications {
  ssh remote.host.net 'nc -k -l -U /tmp/weechat.notify.sock' | \
    while read type message; do
      irc-notification "$(echo -n $type | base64 -D -)" "$(echo -n $message | base64 -D -)"
    done
}
```

I haven't figured out how I want to run my get-irc-notifications function
yet. Currently I'm just running it manually. Once I figure that out I'll edit
this post with my solution.
