---
layout: post
title: Using CanCan in an engine and your app
tags:
  - ruby
  - programming
---

My current project involved an auth gem (internal) that provides user management
into every app that it's included into. I want this engine to be able to define
some cancan rules since it determines the current\_user and should allow some
users to edit more than others when it comes to users, their roles, and the
services they can access.

My main app also needs to provide more cancan rules. In order to do this I'm
defining a new Ability class in my engine with a namespace:

``` ruby
# This is your main app/models/ability.rb file in your app
class Ability < Namespace::Ability
  def initialize(user)
    super

    # Main app CanCan rules
  end
end
```

``` ruby
# This is in your engine under app/models/namespace/ability.rb
module Namespace
  class Ability
    include CanCan::Ability
    def initialize(user)
      # Engine CanCan rules
    end
  end
end
```

This is work out well so far. I'll edit if I run into any problems with this
approach as I add more rules. :smile:
