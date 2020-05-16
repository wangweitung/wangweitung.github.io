---
title: ubuntu server查看放行端口
id: A2
tags:
  - ubuntu
categories:
  - ubuntu
abbrlink: 18172
date: 2020-05-14 12:18:17
cover:
---
# ubuntu server查看放行端口

1.查看端口使用情况。

```
netstat -ntlp   //查看当前所有tcp端口·
netstat -ntulp |grep 80   //查看所有80端口使用情况·
netstat -ntulp | grep 3306   //查看所有3306端口使用情况·
```

2.放行端口

```
ufw allow 98
```


