---
title: "How fi Cause a Segfault!!!" 
date: 2013-01-15
tags: ["segfault","segmentation fault science"]
author: ["mkulima"]
description: "This paper reviews effective ways to cause segmentation fault." 
summary: "segmentation fault made familiar." 
---

### Whe yuh mean by segfault?

A segfault a when program try fi read or write memory weh it nuh supuan fi use. Di OS seh “no way” an it kill di program.

Example - Arsenal UCL dereference
```C
#define ARSENAL_UCL_TROPHIEZ 0

int main(void) {
    int *p = ARSENAL_UCL_TROPHIEZ;
    return *p;
}
```
Simple an classic. Yuh dereference Arsenal UCL an boom.


