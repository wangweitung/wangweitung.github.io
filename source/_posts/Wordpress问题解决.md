---
title: Wordpress问题解决
id: A1
tags: Wordpress
cover: 'http://wangweitung.tk:3800/uploads/big/1acc687cb76c7bd6f2a1e37fd572f801.png'
categories:
  - 博客
  - Wordpress
abbrlink: 21882
date: 2020-05-04 00:09:33
---
## Wordpress问题解决

## 无法更新博客系统

### 1、提示如下：

![Wordpress问题解决](http://wangweitung.tk:3800/uploads/big/1acc687cb76c7bd6f2a1e37fd572f801.png)

&emsp;&emsp;解决办法：使用宝塔面板，设置文件夹权限为755用户为www

### 2、无法安装主题更新。

&emsp;&emsp;使用宝塔面板，打开 /etc/hosts文件，添加以下hosts即可
``` bash
66.155.40.249    api.wordpress.org
```
### 3、将wordpress文件夹权限改为www。

&emsp;&emsp;来自：<https://zhuanlan.zhihu.com/p/25383871/>

&emsp;&emsp;把上面的root修改成www就解决了。

## wordpress无法下载插件

### 1、问题：在wordpress后台搜索插件时发现无法打开。

![2020.01.19.194540无法安装插件.png](https://raw.githubusercontent.com/wangweitung/image/master/img/3293007101.png)

为此查找解决办法，解决思路如下：

### 2、怀疑是wordpress的api地址无法访问 ###

 1. 查看Ubuntu server的hosts内容，并且ping api.wordpress.org
![2020.01.19 200208查看hosts.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2437780826.png )
 2. 修改hosts为新的ip地址。
![2020.01.19 204116修改hosts为ping值.png](https://raw.githubusercontent.com/wangweitung/image/master/img/3646276258.png )
 3. 刷新wordpress页面，即可打开插件下载页。
![2020.01.19 204240打开OK.png](https://raw.githubusercontent.com/wangweitung/image/master/img/182408312.png )

至此，问题解决~
