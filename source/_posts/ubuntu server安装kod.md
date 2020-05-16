---
title: ubuntu server安装kod
id: A1
tags:
  - ubuntu
categories:
  - ubuntu
abbrlink: 18172
date: 2020-05-14 11:18:17
cover:
---

# ubuntu server安装kod

 1. 安装宝塔面板 
 安装宝塔面板详见：https://wangweitung.github.io/posts/20200510A2.html

 2. 下载可道云源文件
网站地址：
    ```
	https://kodcloud.com/download/
	```
	
 3. 添加网站
![添加网站](https://raw.githubusercontent.com/wangweitung/image/master/img/2020-05-14_110750.png)
    设置文件根目录，无需设置密码。
    
 4. 设置目录
    点击网站设置，修改端口。
    
    ![修改端口](https://raw.githubusercontent.com/wangweitung/image/master/img/2020-05-14_110905.png)
    
 5. 公共目录
     ```
     /home/Disk/2Tsda/app/web/kod/data/Group/public/home/share
     ```

 6. 个人目录

     ```
     /home/Disk/2Tsda/app/web/kod/data/User/admin/home
     ```

 7. 使kod访问其他文件夹：

     进入宝塔面板，打开kod所在的目录，设置目录权限为777root即可。

![设置kod文件夹权限](https://raw.githubusercontent.com/wangweitung/image/master/img/2020-05-14_112455.png)

 8. 访问其他目录：

![访问其他目录](https://raw.githubusercontent.com/wangweitung/image/master/img/2020-05-14_112629.png)

 9. 其他：
kod还自带了markdown的编辑器，所以hexo的博客可以直接在kod里面书写，然后通过[宝塔的计划任务](https://wangweitung.github.io/posts/20200509A1.html)发布。