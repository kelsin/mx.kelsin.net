---
layout: post
title: Using God as a monitor service for my VPS
redirect_from: /using-god-as-a-monitor-service-for-my-vps/
tags:
  - servers
  - ruby
  - linux
---

Despite some issues I do like [god](http://godrb.com/) as a monitoring solution
for my vps. I understand the config files and feel comfortable with it's
commands and logging. I don't currently like my rvm solution for running it so
this morning I converted over to using rbenv.

First I opened a shell as root on my VPS and installed rbenv and ruby-install
for root:

``` bash
# Open a new root shell
sudo -i

# Install rbenv and ruby-build
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="/root/.rbenv/shims:/root/.rbenv/bin:$PATH"' >> ~/.bash_profile

# Reloaded my shell
exit
sudo -i

# Installed ruby 2.1.1 and set it as default
rbenv install 2.1.1
rbenv global 2.1.1

# Install god
gem install god
rbenv rehash
```

Next I edited my god init script to make sure the problem environment variables
are loaded:

``` bash
# /root/.bash_profile
export PATH="/root/.rbenv/shims:/root/.rbenv/bin:$PATH"
```

``` bash
#!/bin/sh
#/etc/init.d/god

### BEGIN INIT INFO
# Provides:             god
# Required-Start:       $all
# Required-Stop:        $all
# Default-Start:        2 3 4 5
# Default-Stop:         0 1 6
# Short-Description:    God
### END INIT INFO

NAME=god
DESC=god

set -e

# Create this file and put in a variable called GOD_CONFIG, pointing to
# your God configuration file
GOD_CONFIG=/etc/god/config.god
GOD_PID=/var/run/god.pid
GOD_COMMAND=god
GOD_LOG=/var/log/god.log

. /lib/lsb/init-functions
. /root/.bash_profile

RETVAL=0

case "$1" in
  start)
    echo -n "Starting $DESC: "
    $GOD_COMMAND -c $GOD_CONFIG -P $GOD_PID -l $GOD_LOG
    RETVAL=$?
    echo "$NAME."
    ;;
  stop)
    echo -n "Stopping $DESC: "
    kill `cat $GOD_PID`
    RETVAL=$?
    echo "$NAME."
    ;;
  restart)
    echo -n "Restarting $DESC: "
    kill `cat $GOD_PID`
    $GOD_COMMAND -c $GOD_CONFIG -P $GOD_PID -l $GOD_LOG
    RETVAL=$?
    echo "$NAME."
    ;;
  status)
    $GOD_COMMAND status
    RETVAL=$?
    ;;
  reload)
    $GOD_COMMAND load $GOD_CONFIG
    RETVAL=$?
    ;;
  *)
    echo "Usage: god {start|stop|restart|status|reload}"
    exit 1
    ;;
esac

exit $RETVAL
```

At this point I could start up god and control it using sudo:

``` bash
# When using normal god commands with sudo -i is needed to load root's .bash_profile

# Start up god
sudo -i /etc/init.d/god start

# Shutdown god
sudo -i /etc/init.d/god stop

# See Status
sudo -i god status

# Restart Nginx (for example)
sudo -i god restart nginx
```
