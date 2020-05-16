---
title: ubuntu server配置步骤
id: A2
tags:
  - ubuntu
categories:
  - ubuntu
  - 配置
abbrlink: 26030
date: 2020-05-10 22:18:17
cover:
---
## 1.安装Ubuntu server

安装ubuntu server 18.04 LTS。
20.04对宝塔支持不够

## 2.修改源地址为163

	请使用以下命令：来自 <https://blog.csdn.net/a464057216/article/details/50865895> 
	
	vi /etc/apt/sources.list
	
	deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
	deb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
	deb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
	deb http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
	deb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
	deb-src http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
	deb-src http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
	deb-src http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
	deb-src http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
	deb-src http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
	
	sudo apt-get update
	sudo apt-get upgrade

## 3.安装宝塔面板

网址：

    https://bbs.ccspump.com/d/3

安装命令：

    wget -O install.sh https://download.ccspump.com/install/install-ubuntu_6.0.sh && sudo bash install.sh

安装完成后安装LAMP即可。

卸载宝塔面板：

    wget http://download.bt.cn/install/bt-uninstall.sh
    sh bt-uninstall.sh

## 4.添加设备硬盘

参考网址：https://blog.csdn.net/csdn609387481/article/details/83419917

列举硬盘：

    sudo fdisk -l

查看编号，注意唯一的sdb1的UUID号。再事先准备好一个地方来做挂载点，比如我这里是/home/pc/hdd然后再用命令打开配置文件：
    
    sudo blkid

编辑并挂载：

    sudo vim /etc/fstab
目前的配置文件如下：

    UUID=eef2130b-ba20-4a18-bf35-f8f8fd9b5d66 / ext4 defaults 0 0
    UUID=adfab361-ddbc-1e40-afce-37933f980671 /home/Disk/2Tsda ext4 defaults 0 0
    UUID=84e0b829-1d67-0a41-8449-7e689c5982ec /home/Disk/1Tsdb ext4 defaults 0 0
    UUID=b477e35d-0fa1-ac46-b513-c4209db1a3e2 /home/Disk/4Tsdc ext4 defaults 0 0
    UUID=609e0093-98f0-0c49-9745-f95ea46031ba /home/Disk/4Tsdd ext4 defaults 0 0

完成后重启并查看：

    reboot
    df -h

## 5、Ubuntu server版启用root用户登录

```
sudo su vim /etc/ssh/sshd_config
```

    # 在 sshd_config 文件里的 “Authentication” 部分加上以下内容
    PermitRootLogin yes
    # 完成以后退出 vim 并保存
    
    service sshd restart # 重启 ssh 服务以应用更改
    passwd root # 直接修改 Root 用户的密码
    这样重新登陆 ssh 就可以用 Root 登陆了。

## 6、Ubuntu 硬盘共享给windows

参考网址：https://blog.csdn.net/qq_28719743/article/details/84872396

    A、安装samba
    sudo apt-get install samba
    sudo apt-get install cifs-utils
    
    B、设置文件夹权限
    chmod 777 /home
    
    C、编辑samba配置文件
    sudo vim /etc/samba/smb.conf
    
    [ubuntu]  # 在 windows 下将看到的 ubuntu 共享文件夹名称  
    path = /home  # ubuntu 共享文件夹路径
    public = yes  # 是否允许匿名登录，要使之生效需删除valid users
    writable = yes  # 可写
    valid users = root  # 这里我使用 root 作为用户名，删除此行的话windows访问ubuntu的时候就不用输入账号密码
    create mask = 0644
    force create mode = 0644
    directory mask = 0755
    force directory mode = 0755
    available = yes


	available = yes
	browseable = yes
	public = no
	writable = yes
复制的时候别把中文复制进去，会报错

    smbpasswd -a root  # 设置root用户的密码

成功显示：Added user root
启动 samba 服务器

    /etc/init.d/samba restart
    
    sudo /etc/init.d/smbd restart

如果配置完成无法访问，需要增加防火墙的放行端口。samba开发tcp/139,445端口，udp/137,138端口。
命令：

    ufw allow 139
    ufw allow 445
    ufw allow 137
    ufw allow 138

目前的配置文件如下：

    [global]
        workgroup = WORKGROUP
        security = user   
    [ubuntu]
        path = /home
        writable = yes
        valid users = root
        create mask = 0644
        force create mode = 0644
        directory mask = 0755
        force directory mode = 0755
        available = yes

透过smbpasswd 指令可以建立samba 使用者并设定密码

    [root@smbsrv samba]# smbpasswd -a test
    New SMB password:
    Retype new SMB password:
    Failed to add entry for user test.

如果出现以上错误，表示你的linux系统并没有test这个使用者
这时候只要在系统上建立这个使用者。

    [root@smbsrv samba]# adduser test
    [root@smbsrv samba]# passwd test
    Changing password for user test.
    New password:
    Retype new password:
    passwd: all authentication tokens updated successfully.

即可建立samba user

    [root@smbsrv samba]# smbpasswd -a test
    New SMB password:
    Retype new SMB password:
    Added user test.

查看刚刚新增的user

    [root@smbsrv samba]# pdbedit -L
如果创建的用户可以登陆，无法创建文件，将其文件夹权限设置为777即可。

## 7、安装docker

来自：

https://www.quchao.net/Portainer-CN.html
https://segmentfault.com/a/1190000012063374  #docker的常用命令
https://blog.csdn.net/u010316188/article/details/79865451
https://www.jianshu.com/p/1a4025c5f186


命令：

    curl -sSL https://get.docker.com/ | sh
    如果太慢，将docker.com加入ssr的“强制走代理”列表即可
    systemctl start docker 
    设置随机重启docker服务。
    systemctl enable docker.service

查看docker版本

    docker --version

docker pull的太慢，增加镜像：

    源地址：https://registry.docker-cn.com
    https://blog.csdn.net/u010316188/article/details/79865451
    https://www.jianshu.com/p/1a4025c5f186

命令：


    sudo vi /etc/docker/daemon.json
增加：

    {
     "registry-mirrors": ["http://hub-mirror.c.163.com"]
     }

然后重启docker：

    service docker restart
查看dockers是否运行：

    docker run hello-world

## 8、安装protainer

下载汉化包，汉化protainer，在/home/app下创建/home/app/PortainerCN
来自：

   <https://portainer.readthedocs.io/en/latest/deployment.html/> 

   <https://www.kubernetes.org.cn/5883.html/> 

原命令：

    docker volume create portainer_data 
    docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data -v /public:/public portainer/portainer:1.20.2
我的命令：位置/home/Disk/2Tsda/web/Portal

    docker volume create portainer_data
    docker run -d --name protainer -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data -v /home/Disk/2Tsda/app/PortainerCN:/public portainer/portainer:1.20.2
    sudo docker start protainer

安装完成后重启下protainer

    docker stop protainer
    docker start protainer
输入192.168.1.204:9000登陆即可。

## 9、安装jellyfin

我的安装jellyfin命令：

    sudo docker pull jellyfin/jellyfin
    sudo docker run -d --name jellyfin \
    -v /home/Disk/2Tsda/app/jellyfin/config:/config \
    -v /home/Disk/2Tsda/app/jellyfin/cache:/cache \
    -v /home/Disk:/video \
    -p 8096:8096 \
    -p 8920:8920 \
    --device=/dev/dri/renderD128 \
    --restart unless-stopped  \
    jellyfin/jellyfin
    docker start jellyfin
查看硬解是否OK的命令：

    ls /dev/dri
    card0  controlD64  renderD128
    
    cat /sys/kernel/debug/dri/0/i915_frequency_info
    
    ls -all /dev/dri/
## 10、安装transmission。

我的安装命令：下载目录设置为2T的盘。目录：/home/Disk/2Tsda/app/Transmission，这个版本的容易占用系统空间。

    docker pull oldiy/transmission-twc
    docker create --name=transmission \
    -v /home/Disk/2Tsda/app/transmission/config:/config \
    -v /home/Disk/2Tsda/download:/downloads \
    -v /home/Disk/2Tsda/app/transmission/watch:/watch \
    -e PGID=0 -e PUID=0 \
    -p 9091:9091 -p 45555:45555 \
    -p 45555:45555/udp \
    --restart unless-stopped  \
    oldiy/transmission-twc
完成后运行，然后停止docker。并打开config目录，设置以下几个参数，在重新运行docker。

    "rpc-authentication-required": true,   //改为true
    "rpc-bind-address": "0.0.0.0",
    "rpc-enabled": true,
    "rpc-host-whitelist": "",
    "rpc-host-whitelist-enabled": true,  
    "rpc-password": "30985162w.",    //改为自己的密码
    "rpc-port": 9091,
    "rpc-url": "/transmission/",
    "rpc-username": "wwd",       //改为自己的用户名

另一个版本的安装命令：

	docker create \
	--name=transmission \
	-e USER=wwd \
	-e PASS=30985162w \
	-p 9091:9091 \
	-p 51413:51413 \
	-p 51413:51413/udp \
	-v /home/app/Transmission/config:/config \
	-v /home/Disk/1T/Transmission:/downloads \
	-v /home/app/Transmission/watch:/watch \
	--restart unless-stopped \
	linuxserver/transmission

## 11、安装aria2。

SSH中执行如下命令，沿用了以前的端口设置。重新设置了映射的文件夹。设置下载目录为Transmission的下载目录。

	sudo docker pull johngong/aria2
	sudo docker create  \
	--name=aria2  \
	-p 6800:6800  \
	-p 6801:80  \
	-e RPC_SECRET=30985162w \
	-v /home/Disk/2Tsda/app/aria2/config:/config  \
	-v /home/Disk/2Tsda/download:/Downloads  \
	--restart unless-stopped  \
	johngong/aria2:latest
	sudo docker start aria2

## 12、定时测试家庭宽带速率

安装命令，路径在/home/Disk/2Tsda/app/speedtest下面：来自 <https://hub.docker.com/r/roest/docker-speedtest-analyser/> 
		

	docker pull roest/docker-speedtest-analyser
	docker create --name=speedtest \
	-v /home/Disk/2Tsda/app/speedtest:/var/www/html/data \
	-p 500:80  \
	--restart unless-stopped  \
	roest/docker-speedtest-analyser 
	sudo docker start speedtest
	
	ufw allow 500
	
	新增环境：
	CRONJOB_ITERATION
	测试间隔，设为15min一次
	15

## 13、安装netdata

来自 <https://zhuanlan.zhihu.com/p/69912218/> 

    # 下载安装文件至指定目录/home/Disk/2Tsda/app/netdata
    git clone https://github.com/Fhaohaizi/netdata --depth=1 /home/Disk/2Tsda/app/netdata
    # 进入目录
    cd /home/Disk/2Tsda/app/netdata
    # 执行安装脚本
     ./netdata-installer.sh
    # 进入根目录
    cd /
    # 停止服务
    service netdata stop
    # 进入目录
    cd /home/Disk/2Tsda/app/netdata
    # 覆盖文件
    ./netdata-installer-zh.sh
    # 进入根目录
    cd /
    # 再启动
    service netdata start
    如果没有显示中文，ctrl+F5强制刷新即可
    # 卸载netdata，进入卸载文件目录
    cd /home/Disk/2Tsda/app/netdata/packaging/installer
    # 执行卸载文件
    ./netdata-uninstaller.sh -y
    # 放行端口 
    ufw allow 19999

即可访问netdata

## 14、安装monit 

来自 <http://www.zjzj.xyz:82/archives/788/> 

    #目录建立成功后需要通过vi命令建立.sh文件，否则会无法运行。
    #原因如下：原文链接：https://blog.csdn.net/qq598535550/article/details/72867885
    #执行命令时有时会出现bad interpreter: No such file or directory错误，
    #一般是因为Linux无法识别出Windows的DOS格式，此时只需将文件格式转换成unix的即可，方法如下：
    #1、编辑出错文件
    #vi filename
    #2、查看该格式（报错文件格式是DOS）
    #:set ff
    #3、修改格式
    #:set ff=unix
    #4、保存退出
    #:wq!

1、安装monit

	sudo apt-get install monit
2、安装完后查看版本。

	monit -V
3、配置文件：

	sudo vi /etc/monit/monitrc
4、修改配置文件如下：

	配置文件位置：\OneDrive\04.Software\Ubuntu\ubuntu-monit

启动

    sudo monit -t
    sudo monit reload 
    sudo /etc/init.d/monit restart

安装监控cpu温度和硬盘健康的软件。

    sudo apt-get install lm-sensors hddtemp
    sudo apt-get install smartmontools 

设置定时任务：

    20 0 * * 0 /usr/local/etc/monit/scripts/1Tsdbh.sh
    20 0 * * 0 /usr/local/etc/monit/scripts/2Tsdah.sh
    20 0 * * 0 /usr/local/etc/monit/scripts/4Tsdch.sh
    20 0 * * 0 /usr/local/etc/monit/scripts/4Tsddh.sh
    20 0 * * 0 /usr/local/etc/monit/scripts/syssde.sh

含义：
	20 0  *  *  0  /usr/local/etc/monit/scripts/syssde.sh
	分 时 日 月 星期 命令
	第1列分钟0～59
	第2列小时0～23（0表示子夜）
	第3列日1～31
	第4列月1～12
	第5列星期0～7（0和7表示星期天）
	第6列要运行的命令

示例：
	每1分钟执行一次myCommand
	* * * * * myCommand
	每小时的第3和第15分钟执行
	3,15 * * * * myCommand
	在上午8点到11点的第3和第15分钟执行
	3,15 8-11 * * * myCommand
	每周一上午8点到11点的第3和第15分钟执行
	3,15 8-11 * * 1 myCommand

目前的配置：每个星期5的8：20运行后面的程序，检查硬盘健康状态。

    20 8 * * 5 /usr/local/etc/monit/scripts/1Tsdbh.sh
    20 8 * * 5 /usr/local/etc/monit/scripts/2Tsdah.sh
    20 8 * * 5 /usr/local/etc/monit/scripts/4Tsdch.sh
    20 8 * * 5 /usr/local/etc/monit/scripts/4Tsddh.sh
    20 8 * * 5 /usr/local/etc/monit/scripts/syssde.sh

## 15、查看网卡速度

Ubuntu查询网卡连接速度：

	ifconfig
![](http://wangweitung.tk:3800/uploads/big/6953e2b4a3f42a22d225bec5436bb3ca.png)

## 16、安装图床lychee,	无需docker,直接安装

	1、下载安装包，解压至相应目录。
https://github.com/LycheeOrg/Lychee/
	2、更新php至7.2以上。
	3、宝塔添加网站。
	4、设置数据库。
	5、登录连接即可。
	6、无法上传照片，安装exif扩展即可。
	7、然后我们可以尝试上传一个照片，我们可以在Direct Link这里获得图片的链接。作为图床使用。

## 17、移动文件夹

将第一个目录的文件夹，移动到第二个目录

	mv /home/Disk/2Tsda/download/complete/1 /home/Disk/4Tsdd
	mv /home/Disk/4Tsdd/1 /home/Disk/4Tsdc
## 18、安装wget

~~~
sudo apt-get update
sudo apt-get install wget
wget --version
~~~

## 19、Could not get lock /var/lib/dpkg/lock解决

ubuntu常见错误--Could not get lock /var/lib/dpkg/lock解决

通过终端安装程序sudo apt-get install xxx时出错：
~~~
E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it
~~~
出现这个问题可能是有另外一个程序正在运行，导致资源被锁不可用。而导致资源被锁的原因可能是上次运行安装或更新时没有正常完成，进而出现此状况，解决的办法其实很简单：

在终端中敲入以下两句
~~~
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock
~~~

## 20、dpkg status database is locked by another process

Ubuntu apt-get安装出现dpkg status database is lock...解决

最近在Ubuntu 服务器上安装包的时候出现了一个异常，采用的是 apt-get install 方式 。

异常详细信息如下：
~~~
dpkg status database is locked by another process
~~~
原因是包管理器没有正确关闭。需要重启计算机或者重新打开终端 输入：
~~~
sudo rm /var/lib/dpkg/lock
sudo dpkg --configure -a
~~~
然后重新安装包。声明：此文章非本人原创，网上搜到的解决方案，的确解决问题.