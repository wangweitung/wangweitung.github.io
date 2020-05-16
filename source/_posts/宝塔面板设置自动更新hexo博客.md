---
title: 宝塔面板设置自动更新hexo博客
author: wangweitung
id: A1
cover: 'http://wangweitung.tk:3800/uploads/big/5ba155108598b94ed3d7d9c453204310.png'
tags:
  - 宝塔
  - hexo
  - 原创
categories:
  - 博客
  - hexo
abbrlink: 18008
date: 2020-05-09 12:20:32
---

# 宝塔面板设置自动更新hexo博客

&emsp;&emsp;hexo写完博客后，每次都要:

> 手动登陆ssh
>
> 然后录入命令
>
> 添加密钥
>
> 清除索引
>
> 新建索引
>
> 生成静态文件
>
> 部署文件
>

&emsp;&emsp;以上步骤实在是太繁琐。

&emsp;&emsp;有无简单的方法更新博客呢？

&emsp;&emsp;答案是有的！

## 一、打开宝塔面板。

![创建自动任务](http://wangweitung.tk:3800/uploads/big/5ba155108598b94ed3d7d9c453204310.png)

## 二、脚本内容：

```
#!/bin/sh
cd /root
git config --global user.email "weitung.wang@gmail.com" 
git config --global user.name "wangweitung"
cd /home/Disk/2Tsda/app/web/hexo
export HEXO_ALGOLIA_INDEXING_KEY=your key
hexo algolia --flush true
hexo algolia
hexo g
hexo d  
```

## 三、尽情的写博客吧~~

&emsp;&emsp;自动任务会帮你更新博文的~

## 四、其他设置

&emsp;&emsp;如果觉得每隔一段时间执行太消耗资源，可以手动在宝塔里面执行命令。

## 五、问题及解决

&emsp;&emsp;单独执行时会提示如下问题：

![问题提示](http://wangweitung.tk:3800/uploads/big/402bc78244fe55956be29289f3362e88.png)

&emsp;&emsp;解决方法：

&emsp;&emsp;进入项目目录中的git文件夹，我的是：

```
\Disk\2Tsda\app\web\hexo\.deploy_git\.git
```

&emsp;&emsp;在最后增加以下内容：

```
[user]
    name = name
    email = email
```

&emsp;&emsp;目前我的自动更新代码：

```
#!/bin/sh
git config --global user.email "your e-mail"
git config --global user.name "your name"
cd /home/Disk/2Tsda/app/web/hexo
export HEXO_ALGOLIA_INDEXING_KEY=your key
hexo algolia --flush true
hexo algolia
hexo g
hexo d 
```

&emsp;&emsp;问题解决：

![问题解决](http://wangweitung.tk:3800/uploads/big/c007ca71c7f8f5bbeea9e4c48f0107e1.png)



