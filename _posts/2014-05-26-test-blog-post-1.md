---
layout: post
title: Test Blog Post 1
category: programming
tags:
  - programming
  - ruby
---

Normal paragraph

# The biggest heading

Normal paragraph with a [link](http://google.com). Does autolinking work
http://google.com well? What about [links with a title](http://google.com "Link
Title")?

> Block quote some famous saying

---

## Second biggest heading

> Block quote some famous saying that takes up more than just one line of
> text. Just in case we need one.

``` ruby
# Comment
def class
    puts "A ruby code block"

    hash = { :keyword => 'hash rocket' }
end
```

### Third header in case we need it

``` ruby
# Long lines
req = Net::HTTP::Post.new(uri.path); req.body = payload.to_json; req.body = payload.to_json; req.body = payload.to_json
req.body = payload.to_json
```

#### Does anyone use h4?

{% highlight ruby linenos %}
# Normal highlight block
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

##### or h5s?

Now let's try a plain line

```
Nothing much
```

We can also do `/root/file` inline code blacks!

###### h6? For realz?

Let's test *italic* and **bold** and with underscores: _italic_ and __bold__ but
not_in_the_middle! Let's also try ~~strikethrough~~ and **combinations of _them_**!

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

### Lists

1. Lists
1. Of
   1. 2nd List
   1. Amazing
      1. Third List
      1. Crazy
         1. Forth

* With
* a
  * ul
  * in it
     1. And another
     1. list!

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt> <dd>Does *not* work **very** well. Use HTML
  <em>tags</em>. Let's see how a long line matters. Hopefully it wraps
  nicely.</dd>

  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
</dl>

![images](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")