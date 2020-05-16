---
title: OpenWRT编译步骤
id: A2
tags: 
  - 编译
  - OpenWRT
cover: 
categories:
  - 科学
  - OpenWRT
abbrlink: 21197
date: 2020-05-13 23:58:43
---
# OpenWRT编译步骤

大雕编译教程，注意：

	1. 不要用 root 用户 git 和编译！！！
	2. 国内用户编译前最好准备好梯子
	3. 默认登陆IP 192.168.1.1, 密码 password

## 1、第1次编译

编译命令如下:
首先装好 Ubuntu 64bit，推荐  Ubuntu  14 LTS x64
http://releases.ubuntu.com/14.04.5/ubuntu-14.04.5-desktop-amd64.iso

命令行输入:

```
sudo apt-get update
```

然后输入:

```
sudo apt-get -y install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint
git clone https://github.com/coolsnowwolf/lede
```

然后：
```
cd lede
./scripts/feeds update -a && ./scripts/feeds install -a
make menuconfig
make -j5 V=s
```

-j5后面是线程数。第一次编译推荐用单线程，国内请尽量全局科学上网，即可开始编译你要的固件了。

**编译完成后固件输出在/lede/bin/targets**

## 2、后面再次编译：

进入磁盘目录：

```
cd /home/Disk/1Tsdb
```

删除原来文件夹，从github上获取新的源码。

删除原来文件夹，从github上获取新的源码。
```
rm /home/Disk/1Tsdb/lede/package/openwrt-packages
```
删除了软连接diy，但是源文件还在
```
rm /home/Disk/1Tsdb/lede/feeds/luci/modules/luci-compat  删除了软连接/luci-compat，但是源文件还在
rm -rf /home/Disk/1Tsdb/howtomakeopenwrt/diy 删除diy文件夹`
rm -rf /home/Disk/1Tsdb/howtomakeopenwrt/luci 删除luci文件`
```
更新源码
```
svn checkout https://github.com/Lienol/openwrt/trunk/package/diy/luci-app-adguardhome  howtomakeopenwrt/diy/luci-app-adguardhome 
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/my/luci-app-advancedsetting  howtomakeopenwrt/diy/luci-app-advancedsetting
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/my/luci-app-control-mia   howtomakeopenwrt/diy/luci-app-control-mia
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/lean/luci-app-pptp-server howtomakeopenwrt/diy/luci-app-pptp-server
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/my/luci-app-smartdns  howtomakeopenwrt/diy/luci-app-smartdns
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/my/smartdns   howtomakeopenwrt/diy/smartdns
svn checkout https://github.com/Leo-Jo-My/openwrt18.06/trunk/package/my/luci-app-koolproxyR   howtomakeopenwrt/diy/luci-app-koolproxyR
git clone -b lean  https://github.com/Leo-Jo-My/luci-app-ssr-plus-Jo howtomakeopenwrt/diy/luci-app-ssr-plus-lean
git clone https://github.com/Leo-Jo-My/luci-app-vssr howtomakeopenwrt/diy/luci-app-vssr
svn checkout https://github.com/Leo-Jo-My/luci-theme-opentomcat/trunk howtomakeopenwrt/diy/luci-theme-opentomcat
svn checkout https://github.com/openwrt/luci/trunk/modules/luci-compat howtomakeopenwrt/luci/luci-compat
svn checkout https://github.com/fw876/helloworld howtomakeopenwrt/diy/luci-app-helloworld
svn checkout https://github.com/jerrykuku/lua-maxminddb howtomakeopenwrt/diy/lua-maxminddb
svn checkout https://github.com/jerrykuku/luci-app-vssr howtomakeopenwrt/diy/luci-app-vssr
```
 建立软连接：
```
ln -s /home/Disk/1Tsdb/howtomakeopenwrt/diy /home/Disk/1Tsdb/lede/package/openwrt-packages
ln -s /home/Disk/1Tsdb/howtomakeopenwrt/luci/luci-compat /home/Disk/1Tsdb/lede/feeds/luci/modules
```
进入目录
```
cd /home/Disk/1Tsdb/lede	
```
同步更新大雕源码
```
git pull
```
更新vssr
```
cd /home/Disk/1Tsdb/lede/package/lean
rm -rf ./luci-app-vssr
git clone https://github.com/jerrykuku/luci-app-vssr.git
rm -rf ./lua-maxminddb
git clone https://github.com/jerrykuku/lua-maxminddb.git
```
更新FEEDS
```
./scripts/feeds update -a && ./scripts/feeds install -a
rm -rf ./tmp           	#清除编译缓存，必须
rm -rf .config        	#清除编译配置
make menuconfig 		#进入编译配置菜单
make -j5 V=s       
```
建立软连接：
对DL包：如果存在/home/Disk/1Tsdb/lede/dl目录，请删除,解压出DL文件夹后，执行以下命令
```
ln -s /home/Disk/1Tsdb/howtomakeopenwrt/dl /home/Disk/1Tsdb/lede
ln -s /home/Disk/1Tsdb/howtomakeopenwrt/luci/luci-compat /home/Disk/1Tsdb/lede/feeds/luci/modules
```

涡轮增雕法：(可编译大雕源码里没有或者已删除的插件)
将需要添加的插件放入diy文件夹后，执行以下命令，执行软连接
```
ln -s /home/Disk/1Tsdb/howtomakeopenwrt/diy /home/Disk/1Tsdb/lede/package/openwrt-packages`
```
拷贝openwrt的package文件到diy中.这样编译时就会加载/package/lean和/package/openwrt-packages（量子领域），如果这2个文件夹里的插件包同名则优先编译/package/lean里的插件。
使用涡轮增雕法，可通过在量子领域里把插件打包回去编译，例如KPR，Verysync，Serverchan，BaiduPCS-Web
```
rm -rf ./home/Disk/1Tsdb/lede/package/openwrt-packages`
```
files大法：就是把你改好的配置直接编译进固件，这样做的好处就是升级不需要保留配置，或者恢复出厂设置，缺省值就是你自己设置好的配置。
固化某配置教程例子：
```
1.提取路由固件下的\etc\config\network
2.在编译机LEDE根目录下创建files目录
3.拷贝到\files\etc\config\network
这样编译完，network就是你自己配置好的network，注意提取的文件路径和权限要一致
```
## 一些常用的配置，路由器路径

```
\etc\config  各个LUCI配置
\etc\shadow  登录密码
\etc\firewall.user   自定义防火墙规则
\usr\share\adbybyadbyby里的相关规则和设置
\usr\lib\lua\luci\view\admin_status\index.htm主页样式文件，温度显示等等
```

X86架构固件的index，默认被大雕files强奸了，自己到源码里替换/lede/package/lean/autocore/files/index.htm
如果无效请make clean或者删除/lede/build_dir/target架构/autocore-1（编译其他失败同理）

彻底删除目录：
```
cd /home/Disk/1Tsdb
rm -rf ./lede
```

教程参考：
<https://www.jiayie.xyz/2019/05/08/Openwrt%E7%BC%96%E8%AF%91%E6%97%B6%E7%94%A8%E5%AE%98%E6%96%B9%E5%8E%9F%E7%89%88%E7%9A%84%E6%BA%90%EF%BC%8C%E7%84%B6%E5%90%8E%E5%8A%A0%E5%85%A5lean%E7%9A%84%E6%8F%92%E4%BB%B6%E6%BA%90//>
建立软连接：
<https://www.cnblogs.com/peida/archive/2012/12/11/2812294.html/>