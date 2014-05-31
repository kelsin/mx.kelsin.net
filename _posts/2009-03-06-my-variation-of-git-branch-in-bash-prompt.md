---
layout: post
title: My variation of Git branch in bash prompt
date: 2009-03-06 13:57:10.000000000 -08:00
tags:
  - servers
---
After reading another cool blog post about putting your current git branch in your bash prompt I decided I needed to try this out. Once I got it working I added in color coding to see the status of the current checkout as well!

First off, you need bash-completion and git installed on your server (bash-completion and git-core on Debian/Ubuntu). Once installed you can enable bash completion in the system wide bash file (/etc/bash.bashrc) or in your own ~/.bashrc by adding these lines (Clearly if you are not on Debian/Ubuntu double check file paths):
<pre style="color: #bebebe; background-color: #262626; padding: 5px; overflow: auto;"><span style="color: #add8e6;"># </span><span style="color: #add8e6;">Completion
</span><span style="color: #afeeee; font-weight: bold;">if</span> [ -f /etc/bash_completion ]; <span style="color: #afeeee; font-weight: bold;">then</span>
    <span style="color: #7fffd4;">.</span> /etc/bash_completion
<span style="color: #afeeee; font-weight: bold;">fi</span></pre>
Once this is all set you should have a function called __git_ps1 available. Try it out by just running "__git_ps1" on your command line from a git repo. You should get the branch name returned inside parenthesis's.

Now comes my variations on how to include this in your prompt. My entire ~/.bash_prompt file can be found on my <a title="Bash Prompt Config File" href="http://git.dreaminginlyrics.com/?p=configs.git;a=blob_plain;f=.bash_aliases;hb=HEAD">git repo</a>. I source this file into my <a title="Bashrc" href="http://git.dreaminginlyrics.com/?p=configs.git;a=blob_plain;f=.bashrc;hb=HEAD">~/.bashrc</a>. The two most interesting parts are the function that determines the color of the branch based on git-status output and the function that gets the branch name. Branch name is pretty simple. We check that the __git_ps1 function is available and if it is, check that we're in a branch using it. If we are we echo the branch name. Pretty clean.
<pre style="color: #bebebe; background-color: #262626; padding: 5px; overflow: auto;">prompt_git_branch() {
    <span style="color: #afeeee; font-weight: bold;">if </span><span style="color: #7fffd4;">type</span> -p __git_ps1; <span style="color: #afeeee; font-weight: bold;">then</span>
        <span style="color: #40e0d0; font-weight: bold;">branch</span>=$(<span style="color: #fa8072;">__git_ps1</span> <span style="color: #87cefa;">'%s'</span>)
        <span style="color: #afeeee; font-weight: bold;">if</span> [ -n <span style="color: #87cefa;">"$branch"</span> ]; <span style="color: #afeeee; font-weight: bold;">then</span>
            <span style="color: #7fffd4;">echo</span> -e <span style="color: #87cefa;">"$branch"</span>
        <span style="color: #afeeee; font-weight: bold;">fi</span>
    <span style="color: #afeeee; font-weight: bold;">fi</span>
}</pre>
The next function has to grep stuff out of git status to determine what state the repo is in. If we are completely up to date we use green. If I have local changes it's blue. If we have files in our index ready to be committed I use red. This is really great with my home directory cause it helps remind me to add new dotfiles that I don't care about to .gitignore (or commit them if they should be public config files).
<pre style="color: #bebebe; background-color: #262626; padding: 5px; overflow: auto;">prompt_git_branch_color() {
    <span style="color: #afeeee; font-weight: bold;">if </span><span style="color: #7fffd4;">type</span> -p __git_ps1; <span style="color: #afeeee; font-weight: bold;">then</span>
        <span style="color: #40e0d0; font-weight: bold;">branch</span>=$(<span style="color: #fa8072;">__git_ps1</span> <span style="color: #87cefa;">'%s'</span>)
        <span style="color: #afeeee; font-weight: bold;">if</span> [ -n <span style="color: #87cefa;">"$branch"</span> ]; <span style="color: #afeeee; font-weight: bold;">then</span>
            <span style="color: #40e0d0; font-weight: bold;">status</span>=$(<span style="color: #fa8072;">git</span> status 2> /dev/null)

            <span style="color: #afeeee; font-weight: bold;">if</span> $(<span style="color: #fa8072;">echo</span> $<span style="color: #40e0d0; font-weight: bold;">status</span> | grep <span style="color: #87cefa;">'added to commit'</span> &amp;> /dev/null); <span style="color: #afeeee; font-weight: bold;">then</span>
            <span style="color: #add8e6;"># </span><span style="color: #add8e6;">If we have modified files but no index (blue)
</span>                <span style="color: #7fffd4;">echo</span> -e <span style="color: #87cefa;">"\033[1;34m"</span>
            <span style="color: #afeeee; font-weight: bold;">else</span>
                <span style="color: #afeeee; font-weight: bold;">if</span> $(<span style="color: #fa8072;">echo</span> $<span style="color: #40e0d0; font-weight: bold;">status</span> | grep <span style="color: #87cefa;">'to be committed'</span> &amp;> /dev/null); <span style="color: #afeeee; font-weight: bold;">then</span>
                <span style="color: #add8e6;"># </span><span style="color: #add8e6;">If we have files in index (red)
</span>                    <span style="color: #7fffd4;">echo</span> -e <span style="color: #87cefa;">"\033[1;31m"</span>
                <span style="color: #afeeee; font-weight: bold;">else</span>
                <span style="color: #add8e6;"># </span><span style="color: #add8e6;">If we are completely clean (green)
</span>                    <span style="color: #7fffd4;">echo</span> -e <span style="color: #87cefa;">"\033[1;32m"</span>
                <span style="color: #afeeee; font-weight: bold;">fi</span>
            <span style="color: #afeeee; font-weight: bold;">fi</span>
        <span style="color: #afeeee; font-weight: bold;">fi</span>
    <span style="color: #afeeee; font-weight: bold;">fi</span>
}</pre>
It took some playing but I finally found the right final line to correctly tell bash which characters in the prompt are visible. If anyone has a good way of making these functions smaller or faster I'd love to hear it. I had some trouble making sure that the functions were always executed (not just on a new shell's creation, but on every display of PS1). The delay this causes is not noticeable on all of my computers but more speed never hurts.
