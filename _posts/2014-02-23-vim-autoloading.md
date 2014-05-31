---
layout: post
title: Vim Autoloading
redirect_from: /vim-autoloading/
tags:
  - vim
  - programming
---

While writing my [imports plugin](https://github.com/Kelsin/vim-imports) I
learned about vim's autoloading feature. This started as me being confused
(while looking at other plugins) about why some things were in the autoload
folder and some were in the plugins folder. To me both folders appeared to be
autoloaded at startup... but this isn't the case!

Anything in the plugin runtime folder are loaded at startup. Anything in
autoload is not. Those files are loaded on demand later on. Here is a small
example:

``` vim
" This file should be /autoload/example.vim

" Here is the function that our command runs
function! example#run()
  echo g:example_option
endfunction
```

``` vim
" This file should be /plugin/example.vim

" Double loading protection
if (exists("g:loaded_example") && g:loaded_example) || &cp
  finish
endif
let g:loaded_example = 1

" Options for my example plugin
if !exists("g:example_option")
  let g:example_oiption="some,options"
endif

" Define a command
autocmd FileType vim command! -buffer ExampleRun call example#run()
```

The plugin file is run on startup and defines an option and a command.  The
command needs to be defined in this file since otherwise it would not be loaded
on startup. At this point you can run the command and have vim execute the
`example#run()` function. Note that this function is NOT loaded yet.

When a function is not loaded yet, vim will check to see if the function name
has a \# in it. If it does it tries to load a .vim file with the same name as
the function name prior to the \#. If multiple \#'s are in the name it will use
the first names as folders in an obvious way. For example, a function named
`example#test#run()` will look for this file: `autoload/example/test.vim`

If vim finds this file, it loads it and then tries to execute the function
again. We now have a collection of functions that are loaded on demand. Perfect!
