---
title: h5ai目录列表程序
id: A7
tags:
  - h5ai
categories:
  - nas
abbrlink: 18172
date: 2020-05-14 23:58:17
cover:
---

# h5ai目录列表程序

昨天闲了没事搭建了一个h5ai，现在把教程记录下来！
## 一、思考需要创建的目录 ##
因为我的ubuntu server挂载的硬盘比较多，因此先将4Tsdc的文件索引完成。
在4Tsdc根目录创建share文件夹。
![创建根目录.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2107080084.png)

## 二、下载h5ai程序文件 ##
下载地址：https://release.larsjung.de/h5ai
下载最新版本即可。

## 三、解压 ##
将下载的文件解压在Share文件夹里。
![解压.png](https://raw.githubusercontent.com/wangweitung/image/master/img/1997687565.png)

## 四、使用宝塔面板创建网站 ##
点击添加网站
![建立网站.png](https://raw.githubusercontent.com/wangweitung/image/master/img/741095230.png)
修改访问域名
![修改域名.png](https://raw.githubusercontent.com/wangweitung/image/master/img/539602235.png)
关闭跨域名攻击和日志，打开密码
![关闭跨域名攻击和日志，打开密码.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2280644443.png)
修改php配置文件
![修改php配置.png](https://raw.githubusercontent.com/wangweitung/image/master/img/443573804.png)
修改前：

~~~
index index.php index.html index.htm default.php default.htm default.html;
~~~
修改后：
~~~
index  index.html  index.php  /_h5ai/public/index.php;
~~~
## 五、检查网站是否搭建完成 ##
访问以下网址：
~~~
访问你的域名xxxx.com/_h5ai/public/index.php(初始密码为空)
~~~
我的为：
~~~
http://192.168.1.204:789/_h5ai/public/index.php
~~~

## 六、检查插件安装情况 ##
输入密码登录：
![输入密码登录.png](https://raw.githubusercontent.com/wangweitung/image/master/img/429379785.png)
可能会出现错误1：
![出现错误1.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2495633215.png)
回到宝塔，将_hai文件夹目录权限设为777 root。然后刷新，进入界面。密码为空

![进入界面.png](https://raw.githubusercontent.com/wangweitung/image/master/img/1270749643.png)
检查插件
![检查插件.png](https://raw.githubusercontent.com/wangweitung/image/master/img/3479862277.png)

按照自己的需要安装即可，有一部分可以在宝塔面板，php插件安装中安装。

## 七、新建目录并打开共享 ##
在_h5ai的同一目录下新建文件夹，即可进行共享访问。

![共享目录.png](https://raw.githubusercontent.com/wangweitung/image/master/img/2232255377.png)

打开网址访问：
~~~
http://192.168.1.204:789
~~~
可能会出现错误2
![错误2.png](https://raw.githubusercontent.com/wangweitung/image/master/img/1337410575.png)
此时需要进入宝塔面板，将_h5ai同目录下的2个文件文件删除。
![删除两个文件.png](https://raw.githubusercontent.com/wangweitung/image/master/img/3893394512.png)
再次刷新即可，成功！
![成功.png](https://raw.githubusercontent.com/wangweitung/image/master/img/185928269.png)


## 八、加速访问 ##
因为字体为google提供的字体，国内访问太慢，可将google字体更换为fonts.geekzu.org（支持https）或fonts.useso.com（不支持https）
文件目录：/_h5ai/private/conf/options.json
第26行找到下面文件替换如下：fonts.googleapis.com为fonts.geekzu.org

![字体加速.png](https://raw.githubusercontent.com/wangweitung/image/master/img/1035966245.png)

另外关闭关闭宝塔的防跨站攻击(open_basedir)与写访问日志，也将大大加速访问速度。


## 九、预览图开启 ##

把h5ai程序_h5ai中public文件夹中的cache目录权限设置为777，刷新一下网页可以看到no变为yes了。

## 十、其他功能 ##

文件目录：/_h5ai/private/conf/options.json

搜索功能： 搜索 “search” 308 行，enabled 由 false 改为 true。

文件信息及二维码： 搜索 “info” 184 行，enabled 由 false 改为 true。

默认简体中文： 搜索 “l10n” 200 行，enabled 由 false 改为 true。

文件及文件夹多选： 搜索 “select” 321 行，enabled 由 false 改为 true。

默认密码： 首先在此网址http://md5hashing.net/hashing/sha512 生成自定义 sha512 密码 然后搜索“passhash”，大概第 9行，将其密码改成自己生成的。
## 十二、修改网页title和根目录title ##
1.修改默认显示域名

h5ai安装好后，默认首页和主目录用域名显示，很不好。

打开 _h5ai/public/js/scripts.js ，Ctrl+F 找到
~~~
===e?f.getDomain():n.name
~~~
修改为
~~~
===e?'你想显示的内容':n.name
~~~
2.修改网页标题

网页标题太长了，不美观，改。

修改_h5ai/private/php/pages/index.php 中的内容
~~~
<title>index - powered by h5ai v0.29.2 (https://larsjung.de/h5ai/)</title>
~~~
替换为
~~~
<title>你想显示的内容</title>
~~~
同时，为了尊重作者劳动成果和开源，建议保留网站右上角的版权信息。
