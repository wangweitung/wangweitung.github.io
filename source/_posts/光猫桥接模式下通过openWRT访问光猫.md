---
title: 光猫桥接模式下通过openWRT访问光猫
id: A1
tags: OpenWRT
categories:
  - 科学
  - OpenWRT
top: false
abbrlink: 1060
date: 2020-02-04 20:18:17
cover: https://raw.githubusercontent.com/wangweitung/image/master/img/2842103653.png
---

# 光猫桥接模式下通过openWRT访问光猫

&emsp;&emsp;我用的是openwrt18.06版。所有设置只需要通过web gui界面。不需要打命令。

&emsp;&emsp;前提：

```
光猫ip：192.168.0.1
openWRTip：192.168.1.1
注意，此处两个ip不在一个ip段内。
```

&emsp;&emsp;以下设置步骤开始：

 1. openwrt-网络-接口-添加新接口。
    ![](https://raw.githubusercontent.com/wangweitung/image/master/img/3995732829.png)

 2. 取个名"lightrouter"，选取静态ip，地址设为和光猫一样的网段某个ip，此处设为192.168.0.254
    ![](https://raw.githubusercontent.com/wangweitung/image/master/img/1228553135.png)

 3. openwrt-网络-静态路由-添加新的ipv4静态路由。
    ![](https://raw.githubusercontent.com/wangweitung/image/master/img/2527272837.png)

 4. 输入光猫地ip，192.168.0.1，即可访问。

  ![](https://raw.githubusercontent.com/wangweitung/image/master/img/2842103653.png)




