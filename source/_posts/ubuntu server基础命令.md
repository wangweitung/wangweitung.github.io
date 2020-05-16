---
title: ubuntu server基础命令
id: A1
tags: ubuntu
categories:
  - ubuntu
  - 命令
abbrlink: 5758
date: 2020-05-12 20:18:17
cover:
---

# ubuntu server基础命令

## 一、root权限获取

&emsp;&emsp;如果你想保持当前用户的登录而并且使用root用户执行命令 可以输入： 

```
su root
sudo -i
```

## 二、重启命令

```
reboot
shutdown -r now
```

&emsp;&emsp;立刻重启(root用户使用)

```
shutdown -r 10
```

&emsp;&emsp;过10分钟自动重启(root用户使用)

```
shutdown -r 20:35
```

&emsp;&emsp;在时间为20:35时候重启(root用户使用)

&emsp;&emsp;如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启

## 三、关机命令：

```
halt
```

&emsp;&emsp;立刻关机

```
poweroff
```

&emsp;&emsp;立刻关机

```
shutdown -h now
```

&emsp;&emsp;立刻关机(root用户使用)

```
shutdown -h 10
```

&emsp;&emsp;10分钟后自动关机 如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启 

参考链接：

https://www.cnblogs.com/forward/archive/2012/01/10/2318483.html

https://blog.csdn.net/zhyulo/article/details/78730562

## 四、更新软件命令：

```
apt-get remove
```

&emsp;&emsp;#-----(package 删除包)

```
apt-get remove --purge
```

&emsp;&emsp;# ------(package 删除包，包括删除配置文件等)

```
apt-get autoremove --purge
```

&emsp;&emsp;# ----(package 删除包及其依赖的软件包+配置文件等（只对6.10有效，强烈推荐）)

```
apt-get update
```

&emsp;&emsp;#------更新源

```
apt-get upgrade
```

&emsp;&emsp;\#------更新已安装的包

```
apt-get dist-upgrade
```

&emsp;&emsp;\# ---------升级系统

```
apt-get dselect-upgrade
```

&emsp;&emsp;\#------使用 dselect 升级 ![img](http://wangweitung.tk:89/wp-content/uploads/2020/01/011620_0314_Ubuntuserve1.png)

## 五、查看个分区大小，

来自 https://blog.csdn.net/a746742897/article/details/52689271

```
du -h
```

&emsp;&emsp;将以熟悉的GMK为单位显示大小。它显示的是各个子文件及总文件的实际所占空间。

```
sudo fdisk -l
```

&emsp;&emsp;显示的是各个分区的大小

![img](http://wangweitung.tk:89/wp-content/uploads/2020/01/011620_0314_Ubuntuserve2.png)

## 六、创建文件夹命令

&emsp;&emsp;因为文件目录不存在，需要创建目录 在使用命令：

```
mkdir /volume2/docker/jellyfin
```



## 七、创建文件命令

```
vi /home/config.txt
```

## 八、更改ubuntu时区

```
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

&emsp;&emsp;查看结果

```
date -R
```

来自 <https://blog.csdn.net/suwu150/article/details/52722744>

## 


