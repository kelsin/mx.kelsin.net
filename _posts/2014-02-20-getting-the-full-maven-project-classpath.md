---
layout: post
title: Getting the full maven project classpath
redirect_from: /getting-the-full-maven-project-classpath/
tags:
  - java
  - programming
  - maven
---

I'm working on some vim plugins that will help with java coding and in
the process of doing so I realized that most of my issues would be
solved if I had a text file that lists all of the classes available in
my project's class path. I want to include:

-   All of my projects classes
-   All classes included as maven dependencies
-   All classes included by the JRE

I was hoping to code a feature that generated this file from a
[maven plugin](https://github.com/Kelsin/classtags-maven-plugin "Link:
https://github.com/Kelsin/classtags-maven-plugin").  So far it's working pretty
well but until I finish the editor plugins I don't want to release it. I have
finished figuring out how to get all of the classpath info that I needed.

Maven Classpath
===============

The classpath information for my project and all of my dependencies is easily
gotten from the
[MavenProject](http://maven.apache.org/ref/3.1.1/maven-core/apidocs/org/apache/maven/project/MavenProject.html)
object.

In this code, I get the MavenProject object via the `@Parameter` annotation and
then I use it to grab the test classpath. The test classpath includes the
classpath for runtime, compile and test scopes which works for what I want. This
also contains both my project and all maven dependencies killing two birds with
one stone.

Java Boot Classpath
===================

The next step is getting JRE classes. These aren't listed in the normal java
classpath at all, but can be found from the `sun.boot.class.path` system
property.

Java Ext Classpath
==================

The last place to check is the JRE extension folders. The `java.ext.dirs` system
property contains a list of directories that contain jar files. None of my
system's had child directories so I didn't code to support them here. If someone
can point me to docs saying that you can nest directories let me know!

Sample Code
===========

This is some sample code from my
[plugin](https://github.com/Kelsin/classtags-maven-plugin) showing how to access
all of these locations:

``` java
@Parameter(property = "project", readonly = true, required = true)
private MavenProject project;

/**
 * This will return a list of all classpath elements
 * from my project all all dependencies
 */
public List<String> getMavenClasspathElements() {
  return project.getTestClasspathElements();
}

/**
 * This will return all of the classpath elements from
 * the JRE boot classpath
 */
public List<String> getBootClasspathElements() {
  return Arrays.asList(System.getProperty("sun.boot.class.path").split(";"));
}

public static final PathMatcher JARMATCHER = FileSystems.getDefault().getPathMatcher("glob:*.jar");

/**
 * This will return all of the classpath elements from
 * the JRE extension directories
 */
public List<String> getExtClasspathElements() {
  List<String> elements = new HashSet();

  String[] dirs = System.getProperty("java.ext.dirs").split(";");
  for(String dir: dirs) {
    File dirFile = new File(dir);
    if(dirFile.exists() && dirFile.isDirectory()) {
      File[] files = dirFile.listFiles();
      for(File file: files) {
        Path path = FileSystems.getDefault().getPath(file.getName());
        if(JARMATCHER.matches(path)) {
          elements.add(file.getAbsolutePath());
        }
      }
    }
  }

  return elements;
}
```
