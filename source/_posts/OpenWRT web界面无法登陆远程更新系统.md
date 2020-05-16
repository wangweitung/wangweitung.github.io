---
title: OpenWRT web界面无法登陆远程更新系统
id: A8
tags:
  - OpenWRT
categories:
  - 科学
  - OpenWRT
abbrlink: 18172
date: 2020-05-14 23:59:17
cover:
---

# OpenWRT web界面无法登陆远程更新系统

## 背景

今天突然发现openwrt的55R无法打开了。自己通过系统选项，卸载了带有相应名字的插件，但是结果更加悲剧，web页面登不进去了。提示如下：
![2020-01-20_091141l路由器无法登录.png](https://raw.githubusercontent.com/wangweitung/image/master/img/1734817908.png)

## 解决办法 ##

1、测试系统是否还在运行。因为我设置了端口转发，通过连接发现，端口转发仍然生效，说明opnwrt的系统仍然是在运行的。因此打开putty，连接root帐户。测试OK。

![2020-01-20_105255 root.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2425378555.png)

2、下载新的固件。

下载地址：https://github.com/Ameykyl/openwrt18.06_update/releases

3、打开winscp。

![2020-01-20_105735.png](https://raw.githubusercontent.com/wangweitung/image/master/img/801728727.png)

进入到tmp文件目录。

![2020-01-20_tmp.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2766229778.png)

将第2步下载的文件拖进tmp目录，完成后重新命名为：openwrt.img.gz

4、进入putty，输入更新代码，然后回车。即可保留原有配置，并且修复损坏的55R插件。
~~~
root@OpenWrt:~# cd /tmp
root@OpenWrt:/tmp# sysupgrade openwrt.img.gz
~~~
5、enjoy！




