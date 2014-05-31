---
layout: post
title: Creating new MySql databases
tags:
- db
---

I ALWAYS forget how to create new mysql databases... it's horrible. I do this so
infrequently which means I also have to google everytime it comes up.

``` sql
-- First create the database
create database new_database;

-- Then give all privs to the correct user
grant all on new_database.* to username@localhost;

-- Or with privs written out
grant select, insert, update, delete, create, drop, references, index, alter, create temporary tables, lock tables, execute, create view, show view, create routine, alter routine on new_database.* to username@localhost;
```

I know... simple... but I always forget.
