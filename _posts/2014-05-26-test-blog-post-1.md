---
layout: post
title: Test Blog Post 1
category: programming
tags:
  - programming
  - ruby
---

Normal paragraph

<<<<<<< HEAD
# The biggest heading

=======
>>>>>>> 1a9e061... Moving to one test markdown post
Normal paragraph with a [link](http://google.com). Does autolinking work
http://google.com well? What about [links with a title](http://google.com "Link
Title")?

> Block quote some famous saying

---

<<<<<<< HEAD
## Second biggest heading

> Block quote some famous saying that takes up more than just one line of
> text. Just in case we need one.
=======
# All

## Of

***

### The

#### Headers

___

##### For

###### Realz
>>>>>>> 1a9e061... Moving to one test markdown post

``` ruby
# Comment
def class
    puts "A ruby code block"

    hash = { :keyword => 'hash rocket' }
end
```

<<<<<<< HEAD
### Third header in case we need it

``` ruby
# Long lines
req = Net::HTTP::Post.new(uri.path); req.body = payload.to_json; req.body = payload.to_json; req.body = payload.to_json
req.body = payload.to_json
```

#### Does anyone use h4?

{% highlight ruby linenos %}
# Normal highlight block
=======
``` ruby linenos
req = Net::HTTP::Post.new(uri.path)
req.body = payload.to_json
```

{% highlight ruby linenos %}
>>>>>>> 1a9e061... Moving to one test markdown post
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

<<<<<<< HEAD
##### or h5s?

=======
>>>>>>> 1a9e061... Moving to one test markdown post
Now let's try a plain line

```
Nothing much
```

We can also do `/root/file` inline code blacks!

<<<<<<< HEAD
###### h6? For realz?

=======
>>>>>>> 1a9e061... Moving to one test markdown post
Let's test *italic* and **bold** and with underscores: _italic_ and __bold__ but
not_in_the_middle! Let's also try ~~strikethrough~~ and **combinations of _them_**!

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

<<<<<<< HEAD
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
=======
1. Lists
1. Of
1. Things
  * With
  * a
>>>>>>> 1a9e061... Moving to one test markdown post
  * ul
  * in it
     1. And another
     1. list!

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

<<<<<<< HEAD
  <dt>Markdown in HTML</dt> <dd>Does *not* work **very** well. Use HTML
  <em>tags</em>. Let's see how a long line matters. Hopefully it wraps
  nicely.</dd>

  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
=======
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
>>>>>>> 1a9e061... Moving to one test markdown post
</dl>

![images](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
