---
title: OpenWRT PPTP无法连接
id: A3
tags:
  - OpenWRT
categories:
  - 科学
  - OpenWRT
abbrlink: 18172
date: 2020-05-14 20:18:17
cover:
---

# OpenWRT PPTP无法连接

## 解决方法一：

旧版的OpenWRT要安装kmod-ipt-nethelper这个包。
对于新版，如3.18或4.xx内核的ROM，要安装kmod-nf-nathelper-extra这个包。
但对于我来说，已经有了这些包，仍然无法连接。 

参考链接：http://itren.xiaolee.net/p/1695845.html

## 解决方法二：

如题，默认在OpenWrt中安装pptpd并设置好后，虽然能通过vpn连接上，但是连上之后无法通过路由器上网。网上有人说在iptables中增加POSTROUTING的masquerade的规则，经老衲测试，没有效果。
经反复摸索，发现客户端拨完vpn后，上网时的包都被rst掉了，于是想到应该是防火墙在搞鬼。
看了下iptable，还真是复杂，增加了好几个链。想来想去应该是在FORWORD链中有名堂，于是加了条规则，发现终于可以上网了。甚喜，遂来分享之。

```
iptables -A forwarding_rule -s 192.168.125.0/24 -j ACCEPT
```

其中192.168.125.0/24是你vpn拨进来的网段。
http://www.voidcn.com/article/p-derzvlfk-yw.html

最终，通过在网络->防火墙->自定义规则中加入
~~~
iptables -A forwarding_rule -s 192.168.125.0/24 -j ACCEPT
~~~
实现。

网络->防火墙->自定义规则为：
~~~
iptables -t raw -A OUTPUT -p tcp -m tcp --dport 1723 -j CT --helper pptp
iptables -A forwarding_rule -s 192.168.1.1/24 -j ACCEPT
iptables -t nat -A PREROUTING -p udp --dport 53 -j REDIRECT --to-ports 53
iptables -t nat -A PREROUTING -p tcp --dport 53 -j REDIRECT --to-ports 53
~~~