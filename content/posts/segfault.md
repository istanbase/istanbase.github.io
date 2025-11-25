---
title: "Segmentation fault (Core dumped) " 
date: 2013-01-15
tags: ["segfault","segmentation fault science"]
author: ["mkulima"]
description: "This paper reviews the most effective way to cause segmentation fault." 
summary: "segmentation fault made familiar." 
---

Example - Arsenal UCL dereference
```C
#define ARSENAL_UCL_TROPHIEZ 0

int main(void) {
    int *p = ARSENAL_UCL_TROPHIEZ;
    return *p;
}
```


