---
title: ubuntu server安装百度客户端
id: A1
tags:
  - 百度客户端
  - ubuntu
categories:
  - ubuntu
  - 下载
abbrlink: 18172
date: 2020-05-10 18:18:17
cover:
---

# ubuntu server安装百度客户端

## 一、参考链接
网址：
&emsp;&emsp;https://hub.docker.com/r/johnshine/baidunetdisk-crossover-vnc
&emsp;&emsp;https://github.com/john-shine/Docker-CodeWeavers_CrossOver-VNC/tree/master/BaiduNetdisk

## 二、我的安装命令
&emsp;&emsp;安装命令如下，设置下载目录为2Tdownload目录，/home/Disk/2Tsda/baidu

```
docker pull johnshine/baidunetdisk-crossover-vnc
docker create --name=baidu \
-v /home/Disk/2Tsda/baidu:/home/baidu/baidunetdiskdownload/ \
-p 5901:5901  \
-p 6080:6080  \
--restart unless-stopped  \
johnshine/baidunetdisk-crossover-vnc
sudo docker start baidu
```
## 三、问题及解决
&emsp;&emsp;如果遇到退出客户端后再次打开客户端，停留在加载界面的进度条中，一直无法进入主界面的情况，需要删除用户信息文件，命令如下：
```
sudo docker ps
```
&emsp;&emsp;得到容器的ID $container_id
```
sudo docker exec -it $container_id /bin/bash
rm -f /home/baidu/baidunetdisk/baidunetdiskdata.db
```

&emsp;&emsp;其他废弃的命令：

```
sudo docker pull johnshine/baidunetdisk-crossover-vnc:latest
sudo docker docker run -d -p 5901:5901 johnshine/baidunetdisk-crossover-vnc:latest \
```

