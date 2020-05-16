---
title: ubuntu server修改获取ip方式
id: A2
tags: ubuntu
categories:
  - ubuntu
  - ip
abbrlink: 58023
date: 2020-05-12 21:18:17
cover:
---

# ubuntu server修改获取ip方式

 &emsp;&emsp;ubuntu 18.04可用方法：

```
vim /etc/netplan/50-cloud-init.yaml
```

&emsp;&emsp;原文件：

```
 # This file is generated from information provided by
 # the datasource. Changes to it will not persist across an instance.
 # To disable cloud-init's network configuration capabilities, write a file
 # /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
 # network: {config: disabled}
 	network:
 		ethernets:
 		enp1s0:
 		dhcp4: true
 		version: 2
```

&emsp;&emsp;改为：

![img](http://wangweitung.tk:89/wp-content/uploads/2020/01/011620_0312_Ubuntuserve1.png)

```
network:
    ethernets:
        enp1s0:
            addresses:[192.168.1.204/24]
            gateway4:192.168.1.1
            nameservers:
                addresses:[192.168.1.1]
                version: 2
```

&emsp;&emsp;应用生效

```
netplan apply
```

来自：

https://blog.csdn.net/u010039418/article/details/80934346

https://blog.csdn.net/wukai_std/article/details/79204103