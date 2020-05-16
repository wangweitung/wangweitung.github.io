---
title: ubuntu安装hexo
id: A2
tags: hexo
cover: 'http://wangweitung.tk:3800/uploads/big/4fa9512bb4fe04d8fdff232b2772ee4c.png'
categories:
  - 博客
  - hexo
abbrlink: 33623
date: 2020-05-04 00:05:33
---
# ubuntu安装hexo

## 一、安装 Node.js和npm

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
sudo apt-get install npm
```

&emsp;&emsp;查看nodejs和npm版本号

```
nodejs -v
npm -v
```

&emsp;&emsp;如果不能安装提示：

```
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 npm : Depends: node-gyp (>= 0.10.9) but it is not going to be installed
E: Unable to correct problems, you have held broken packages.
```

&emsp;&emsp;使用下面的命令安装：

```
sudo apt install aptitude 
sudo aptitude install npm
```

&emsp;&emsp;查看nodejs和npm版本号

```
nodejs -v
npm -v
```

&emsp;&emsp;遇见这个选项：

```
 Keep the following packages at their current version:

1)     libssl-dev [Not Installed]                         
2)     node-gyp [Not Installed]                           
3)     nodejs-dev [Not Installed]                         
4)     npm [Not Installed]     

Accept this solution? [Y/n/q/?] ?
```

&emsp;&emsp;如果选y，没什么用，先选?再选n就安装成功了，我也不知道为什么

```
$ npm -v 
3.5.2
```



## 二、安装及卸载 Hexo

### 1、安装hexo

&emsp;&emsp;创建博客所在目录

```
mkdir /home/Disk/2Tsda/app/web/hexo
```

&emsp;&emsp;切换目录

```
cd  /home/Disk/2Tsda/app/web/hexo
```

&emsp;&emsp;全局安装 Hexo，需要最高权限，记得输入root密码。

&emsp;&emsp;安装 ：

```
sudo npm install -g hexo-cli
```

&emsp;&emsp;初始化 Hexo

```
hexo init
```

&emsp;&emsp;如果报错执行代码,不报错忽略：

```
sudo npm install -g hexo-cli
```

&emsp;&emsp;安装插件---可先不安装：

```
npm install hexo-generator-index --save
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-server --save
npm install hexo-deployer-git --save
npm install hexo-deployer-heroku --save
npm install hexo-deployer-rsync --save
npm install hexo-deployer-openshift --save
npm install hexo-renderer-marked --save
npm install hexo-renderer-stylus --save
npm install hexo-generator-feed --save
npm install hexo-generator-sitemap --save
```

&emsp;&emsp;ubuntu放开端口：

```
ufw allow 4000
```

&emsp;&emsp;测试安装成功：

```
hexo server
```

&emsp;&emsp;浏览器输入 http://192.168.1.204:4000 可以访问到首页。至此，安装hexo完成。

### 2、卸载hexo

&emsp;&emsp;如何干净的卸载 HEXO？

&emsp;&emsp;命令提示符中输入：

```
npm uninstall hexo-cli -g
```

&emsp;&emsp;然后文件夹中的blog，手动删除。

```
cd /home/Disk/2Tsda/app/web
rm -rf ./hexo
```

&emsp;&emsp;另外，进行重装之前，如果还是在原来位置，必须手动清理了才能迁移安装。

## 三、配置hexo及常用命令

&emsp;&emsp;修改Hexo配置文件hexo/_config.yml

```
vi _config.yml
```

&emsp;&emsp;提示：key对应没有值的时候，冒号后面一定要有空格！否则会报错例如: 

```
timezone:Asia/Shanghai
```

&emsp;&emsp;加了空格则不会报错，如：

```
timezone: Asia/Shanghai
```


&emsp;&emsp;下边列出了常用的配置信息：

### 1、站点信息设置:

```
title: ZTFDeveloper's Blog #站名
subtitle:  #副标题
description: 前进的开发者#站描述
author:  ZTF#作者
language: zh-CN #语言
timezone:
```

&emsp;&emsp;我的配置：

```
title: 记录我自己
subtitle: '在这个世界，努力的生活'
description: 'Think further，Do harder！'
keywords:
author: wangweitung
language: zh-Hans
timezone: 'Asia/Shanghai'
```

&emsp;&emsp;想把博客部署到自己的服务器,并通过IP或域名访问需要配置url

```
url: http://blog.prozin.xyz
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
```

&emsp;&emsp;我的配置：

```
url: https://wangweitung.github.io/
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

&emsp;&emsp;Deployment 这里设置了Git,mocorochio为你的github用户名:

```
deploy:
type: git
repo: git@github.com:mocorochio/[micorochio.github.io.git
branch: master
```

&emsp;&emsp;我的配置：

```
deploy:
    type: git
    repo: git@github.com:wangweitung/wangweitung.github.io.git
    branch: master
```

### 2、hexo的命令

&emsp;&emsp;新建文章(会在 hexo/source/_post 下生成对应.md 文件)

```
hexo n 文章名称
```

&emsp;&emsp;生成静态文件(位于 hexo/public 目录)

```
hexo g
```

&emsp;&emsp;启动 Hexo 预览

```
hexo s
```

&emsp;&emsp;提交部署(需要相关配置)

```
hexo d
```

&emsp;&emsp;也可以手动在Typora里新建文件，但记得要把头文件复制在新的文件的头部，修改必要信息即可。如：

```
---
title: Move的用法
date: 2020-05-04 17:01:34
tags: Move
cover: http://wangweitung.tk:3800/uploads/big/7a54e07a5c22d630b2558b9cfaea3a8c.png
categories: 
- Plant Simulation
- SimTalk
---
```



## 四、部署到Github

### 1.配置本机全局git环境（如果已经配置过请忽略）

&emsp;&emsp;首先请使用邮箱注册github账号，否则会影响下面操作，记住你注册的邮箱。
&emsp;&emsp;另外，请在ubuntu上设置你的git。

```
git config --global user.email "weitung.wang@gmail.com"
git config --global user.name "wangweitung"
```

### 2.生成SSH秘钥

&emsp;&emsp;先确定你的VPS 有没有生成过ssh的key，验证

```
less ~/.ssh/id_rsa.pub
```

&emsp;&emsp;如果报错,执行下面代码,-C后面加你在github的用户名邮箱，这样公钥才会被github认可

```
ssh-keygen -t rsa -C weitung.wang@gmail.com
```

&emsp;&emsp;查看 公钥内容 稍后加入Github 账户的 sshkey中

```
less ~/.ssh/id_rsa.pub
```

&emsp;&emsp;你会看到一堆代码

```
ssh-rsa ****A***AAAB3NzaC1yc2EAAAADAQABAAABAQDAawx6pe4JpwLvpapP230zO37BSVKbzrGpmIyR5Wc37NeL51qLxQUipEV1ZsiTZXMMARSmaXIG7xGa5X+4imQiUbFp28DIN4+zXO7g8xSpsS6NSAuPdcP8dQUafOocBA6Ei7/ArALn+AGt0gRVHtx2v6dMABgTSOd6kTxN2gKActkQPkk35lBQZ7Tg98rDFjxRKD3R+ofBtseZxW4S4qCnbZD4ZbNrXGgpCkjOdfXX/1/pWQAwZmFof6csHCZ5OfIolKia7xVNYAF94U45wnxKRW6Tt/1b5oInvHsRoALNuxZkY5wBGOTQ0/JFnKS4bDClgiyVvJDfnmTMmqC9A7Lb weitung.wang@gmail.com
```

### 3、创建博客工程

&emsp;&emsp;创建一个新项目，项目名称为 用户名.github.io ，比如我的Github用户名是wangweitung，则创建的项目名为 wangweitung.github.io。 用户名是你的github用户名哦！千万别弄错了，不然访问不到的！

```
wangweitung.github.io
```

### 4、将ssh秘钥添加到github中

&emsp;&emsp;即在名字，setting，ssh里面加入即可。

```
ssh-add ~/.ssh/id_rsa
```

&emsp;&emsp;参考:[https://yiutto.github.io/2017/11/07/Hexo-Github-Windows%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E7%BB%88%E7%BB%93%E7%89%88%EF%BC%89/](https://yiutto.github.io/2017/11/07/Hexo-Github-Windows搭建博客（终结版）/)



## 五、配置Hexo，编译与部署

&emsp;&emsp;还记得我们在_config.yml里最后一段的配置吗？根据刚才创建的GitHub项目填上repo

```
deploy:
type: git
repo: git@github.com:wangweitung/wangweitung.github.io.git
branch: master
```

&emsp;&emsp;最后一步，编译，上传静态代码

&emsp;&emsp;编译

```
hexo g
```

&emsp;&emsp;在主机的hexo目录下 执行以下命令将自动更新到Github

```
hexo d
```

&emsp;&emsp;如果出现以下异常：

```undefined
ERROR Deployer not found: git
```

&emsp;&emsp;尝试输入以下命令，然后重新执行刚刚的两条命令：

```ruby
npm install hexo-deployer-git --save
hexo g && hexo d
```

&emsp;&emsp;这时候就可以通过刚才设置的github访问博客了。比如我的就是:wangweitung.github.io
至此你的博客就完成了。

## 六、hexo 怎么删除文章？

&emsp;&emsp;删除文章的过程一样也很简单，先删除本地文件，然后通过生成和部署命令进而将远程仓库中的文件也一并删除。具体来说，以最开始默认形成的helloworld.md这篇文章为例。

&emsp;&emsp;首先进入到source / _post 文件夹中，找到helloworld.md文件，在本地直接执行删除。然后依次执行

```
hexo g && hexo d
```

&emsp;&emsp;再去主页查看你就会发现你的博客上面已经空空如也了，这就是如何删除文章的方法。

## 七、更换主题

1. 下载主题（themes）
2. 修改主目录文件夹中的_config.yml文件的theme配置
3. 执行hexo generta => hexo deploy将主题应用到自己最新的博客上面

```
$ cd /home/Disk/2Tsda/app/web/hexo
hexo g && hexo d
$ ls
_config.yml  node_modules  package.json  public  scaffolds  source  themes
```

```
cd  /home/Disk/2Tsda/app/web/hexo
git clone https://github.com/iissnan/hexo-theme-next themes/next
vi _config.yml
cd  /home/Disk/2Tsda/app/web/hexo/themes/next
```

&emsp;&emsp;在用主题：https://github.com/jerryc127/hexo-theme-butterfly

&emsp;&emsp;其他主题：https://github.com/iTimeTraveler/hexo-theme-hiker

## 八、使用hexo-admin

### 1、原始方法：

&emsp;&emsp;在我们放置博客文件的文件夹Hexo中，source/_posts/目录下存放着所有博文的Markdown文件，初始化只有一个hello-world.md文件。
&emsp;&emsp;我们可以在ubuntu中创建新博文：

```
hexo new <title>
```

&emsp;&emsp;在_posts目录下会生成相应的.md文件，接下来我们可以编辑该文件，直接写博文啦。注意使用Markdown语法。

![](https://oscimg.oschina.net/oscnet/7b2d3dc14415b268572ccdbc4ce835641dd.jpg)

&emsp;&emsp;写完博文后，执行即可在博客中更新。

```
hexo g && hexo d
```

&emsp;&emsp;如果要删除博文，则直接把_posts目录下相应的.md文件删除，再执行上述命令即可。
&emsp;&emsp;PS：关于在博文中插入图片.
&emsp;&emsp;可以把图片统一放置在source/images目录下，然后在使用时用下述方式引用。

```
![](/images/image.jpg)
```

### 2. Hexo Admin插件管理

&emsp;&emsp;可以看出，用原生的方法来管理博文十分的不便，因此便有了Hexo Admin这一插件来方便我们的操作。
&emsp;&emsp;首先，安装插件。 由于插件作者已经一年以上没有更新，可能会看到如图的一些警告与错误；之后的步骤虽然会遇到问题，但尚不至于影响使用。本地伺服器运作的时候，不管是在后台编辑文章，还是正在修改部落样式，只要直接按下 F5 重新整理页面，基本上是会**即时显示新的样式/修改后的文章** (除非更改样式后有语法错误)。

![](https://cdn1-t17.techbang.com/system/attached_images/2019/08/261850/original/6b7d80e82200487e3f0669b7166067da.png)

&emsp;&emsp;安装hexo-admin

```
npm install --save hexo-admin
hexo server -d
open http://192.168.1.204:4000/admin/
```

&emsp;&emsp;进入setting，设置用户名和密码。

If you're using Hexo admin on your live server, you want some password protection. To enable this, you just add a few config variables to your hexo _config.yml。

&emsp;&emsp;Copy this into your `_config.yml`, and restart Hexo. Now you'll be protected with a password!

```
# hexo-admin authentification
admin:
  username: wwd
  password_hash: ***$2a$10$rkX9gcltn9m9rmkFsC2CC.IEvR7Nvp3GMlVhclrKmO3Gn87IY.dk2
  secret: what is the purpose of life?
```

```
vi  _config.yml
```

![](https://oscimg.oschina.net/oscnet/1865ce1b8f0fa13ae97befbd33195b6b30c.jpg)





&emsp;&emsp;然后，Deploy之前，还需要编辑配置文件_config.yml。(否则会出现Error: Config value "admin.deployCommand" not found或者Error: spawn hexo ENOENT之类的报错。)

![](https://cloud.githubusercontent.com/assets/109873/15278806/9f1a9afe-1aeb-11e6-8ce1-4593b9bdee23.png)

&emsp;&emsp;如果是Windows则在末尾加上：

![](https://oscimg.oschina.net/oscnet/1e6a9d76cccf914ee9b8f2ff66b8c906520.jpg)

&emsp;&emsp;如果是Linux系统则:

&emsp;&emsp;再hexo文件夹，输入以下命令：

```
touch hexo-deploy.sh
chmod a+x hexo-deploy.sh
vi hexo-deploy.sh
```

```
#!/usr/bin/env sh
hexo g && hexo d
```

&emsp;&emsp;然后再修改文件 _config.yml

```
vi  _config.yml
```

&emsp;&emsp;加入以下内容：

```
admin:
  username: wwd
  password_hash: ***$2a$10$7BsDlvPtfmnXAHveotT7T.DgFN2W.AJsSAwObAv5trPCSXXJmDsEi
  secret: what is the purpose of life?
  deployCommand: './hexo-deploy.sh'
```

&emsp;&emsp;编辑完毕后，就可以点击Deploy，直接部署发布Github博客上。

![](https://oscimg.oschina.net/oscnet/928c4245cd3ea3bc6bf547d96ded44126fe.jpg)

&emsp;&emsp;PS：关于Hexo Admin插入图片
&emsp;&emsp;Hexo Admin可以直接复制图片粘贴，然后自动下载到source/images目录并重命名。但在Windows中粘贴后会出现裂图。这时就需要手动把括号中的前后两个斜杠去掉，就能正常显示。

![](https://oscimg.oschina.net/oscnet/ddef70b8e6355ba7da1a9b04f53866a73ce.jpg)

![](https://oscimg.oschina.net/oscnet/3b6be82d762b0e5343f8da455097ee267e8.jpg)

&emsp;&emsp;文章来源：https://segmentfault.com/a/1190000018488921

## 九、实用教学

&emsp;&emsp;加入“Read More”来截断文章。如果每篇文章都照原始篇幅来显示，那么首页就会非常非常的~~长~~。

![](https://cdn1-t17.techbang.com/system/attached_images/2019/08/261958/original/0e969d0aa238713e0f2157a6944d1dd3.png)

&emsp;&emsp;要解决这个问题，只要在指定位置加入

```
<!--more-->
```

&emsp;&emsp;也就是“继续阅读”的语法，就能在首页隐藏文章以下的部分。

![](https://cdn2-t17.techbang.com/system/attached_images/2019/08/261959/original/9f1672e6d7a6fc522cec3ecdb411bec6.png)

&emsp;&emsp;回到首页后，文章多馀的部分会被隐藏。如果要阅读更多内容，除了能点选“Read More”，也能点选文章的标题。

![](https://cdn2-t17.techbang.com/system/attached_images/2019/08/261960/original/ab73c6842eae6c6ea82ec29dfb357edf.png)



## 十、文章状态在 Hexo 资料夹中的架构

&emsp;&emsp;所有的文章包含未发布、已发布、已删除的文章，都会以**不同资料夹**做区分，被放在 /Hexo资料夹/source 之下(如下图)。要注意的是，虽然从后台删除了文章，但其实文章还是会被存放在 /Hexo资料夹/source/_discarded 中。

![](https://cdn2-t17.techbang.com/system/attached_images/2019/08/261961/original/ec16d7be3e5e4c5f71dc134fcacaaeb2.png)

&emsp;&emsp;另外，文章的档案是以“连结网址名称”来命名，所以如果要修改文章连结，后台是无法修改的，需**直接修改档名**。

&emsp;&emsp;参考链接：https://ed521.github.io/2019/08/hexo-admin/

## 十一、问题解决

&emsp;&emsp;使用hexo-admin后有推送问题：

```
(node:1395) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
(node:1405) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
To github.com:wangweitung/wangweitung.github.io.git
   8b0c57e..4da19f9  HEAD -> master
```

&emsp;&emsp;尝试以如下命令进行更新：

```
npm install hexo-deployer-git hexo-server --save
```

&emsp;&emsp;问题仍未解决。

&emsp;&emsp;解决办法：

&emsp;&emsp;打开Disk\2Tsda\app\web\hexo\node_modules\hexo-admin\node_modules\hexo-fs\lib

&emsp;&emsp;打开文件fs.js

&emsp;&emsp;注释掉第718行。使用“//”注释。

&emsp;&emsp;来源：

https://github.com/xovel/xovel.github.io/issues/28

https://github.com/hexojs/hexo/issues/2598

https://www.leiyawu.com/2018/02/28/hexo-fs-SyncWriteStream-is-deprecated/

## 十二、安装新主题butterfly的问题

```
cd /home/Disk/2Tsda/app/web/hexo
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
```

&emsp;&emsp;出现错误提示：

```
extends includes/layout.pug block content #recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug #aside_content.aside_content include includes/aside.pug
```

```
如果你没有pug以及stylus的渲染器，请下载安装： npm install hexo-renderer-jade hexo-renderer-stylus --save or yarn add hexo-renderer-jade hexo-renderer-stylus
```

```
记得hexo clean
```

&emsp;&emsp;参考：https://github.com/jerryc127/hexo-theme-butterfly/issues/4



## 十二、评论系统

### 1、评论数据管理：

&emsp;&emsp;登录Leancloud`>选择你创建的`应用`>`存储`>选择Class`Comment`，然后就可以尽情的发挥你的权利啦。

### 2、关于攻击：

&emsp;&emsp;你可以开启验证码选项`verify: true`

## 十三、配置搜索

1、首先注册Algolia账户

&emsp;&emsp;Algolia 登陆页面https://www.algolia.com/users/sign_in，可以使用 GitHub 或者 Google 账户直接登录，也可以注册一个新账户。

2、注册完成后，创建一个新的 Index，这个 index name 之后会用到。我创建了：

```
mygithubsearch
```

3、修改Algolia搜索ACL（访问控制列表），如果不能修改，则需要新建一个。在选项里勾选上图选项。

![2020-05-04_114940](https://raw.githubusercontent.com/wangweitung/image/master/img/20200504133545.png)

4、获取 Key，更新站点根目录配置。前往站点根目录/home/Disk/2Tsda/app/web/hexo打开_config.yml添加以下代码

```
algolia:
  applicationID: 'SOFJLCX0IW'
  apiKey: '74998d40bfca62cdc3aef726d0b59cdc'
  indexName: 'mygithubsearch'
```

5、Index 创建完成后，此时这个 Index 里未包含任何数据。 接下来需要安装 Hexo Algolia 扩展， 这个扩展的功能是搜集站点的内容并通过 API 发送给 Algolia。前往站点根目录，执行命令安装：

```
cd /home/Disk/2Tsda/app/web/hexo
hexo algolia && hexo g && hexo d 
npm install hexo-algolia --save
```

6、设置环境变量，algolia 官网声明，Admin API Key 不能写在配置里，会有风险，写到环境变量中：

```
export HEXO_ALGOLIA_INDEXING_KEY=74998d40bfca62cdc3aef726d0b59cdc
```

7、生成 algolia 索引，提示成功后可以在 algolia Indices 中看到你的博客记录。

```
hexo algolia
```

8、修改 melody配置。Disk\2Tsda\app\web\hexo\source\_data内的melody.yml

```c
algolia_search:
  enable: true
  hits:
    per_page: 10
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
    hits_stats: "${hits} results found in ${time} ms"
```

9、更新

```
hexo algolia # 每次写完一篇文章后都需要执行一次（有点尴尬）
```

10、问题

&emsp;&emsp;Not enough rights to update an object near

![](https://user-gold-cdn.xitu.io/2018/5/10/1634907c472f07d4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

&emsp;&emsp;原因：没有修改Algolia搜索ACL（访问控制列表），按照3操作。

## 十四、顶部图

&emsp;&emsp;为特定的文章页配置特定的顶部图，在你的文章`md`文件的头部，加入`top_img`项，然后输入你想要的顶部图的url即可。

```yaml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
top_img: https://xxxxxxx.jpg   # < top_img在这里插入
cover： 
date: 2017-09-07
---
```

## 十五、设置二级分类

&emsp;&emsp;来自：https://www.zhihu.com/question/57888214

```text
---
title: Plant Simulation
date: 2017-04-01 00:44:21
categories: 
- Plant Simulation
- AGV
- SimTalk语句
tags:
---
```

## 十六、更新文章目录、索引、及发布

### 1、写文章命令

```
cd /home/Disk/2Tsda/app/web/hexo
hexo new ***
```

### 2、发布命令

```
export HEXO_ALGOLIA_INDEXING_KEY=74998d40bfca62cdc3aef726d0b59cdc && hexo algolia --flush true && hexo algolia &&  hexo g && hexo d 
```

## 十七、索引更新

&emsp;&emsp;使用 hexo-algolia 时，如果你删除了文章，需要更新 Algolia 里面的链接，需要使用以下命令

```
export HEXO_ALGOLIA_INDEXING_KEY=74998d40bfca62cdc3aef726d0b59cdc
hexo algolia --flush true 
hexo algolia &&  hexo g && hexo d 
```

&emsp;&emsp;hexo-algolia 模块的作用：将博客文章链接发送给自己的 Algolia 账户。搜索原理：输入关键字，调用 Algolia 提供接口，返回相应文章链接

## 十八、hexo插入视频

### youtube测试：
代码：
~~~
<iframe width=100% height=450  src="https://www.youtube.com/embed/htWJOQK11EU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
~~~
<iframe width=100% height=450  src="https://www.youtube.com/embed/htWJOQK11EU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
以上为YouTube测试
### raw测试哔哩哔哩，代码：
~~~
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?aid=46303362&cid=81124889&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
    </iframe>
</div>
{% endraw %}
~~~
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?aid=46303362&cid=81124889&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
    </iframe>
</div>
{% endraw %}
测试哔哩哔哩结束。

### 测试vimeo开始：
代码1
~~~
<iframe src="https://player.vimeo.com/video/418706814" width=100% height=564 frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
~~~
<iframe src="https://player.vimeo.com/video/418706814" width=100% height=564 frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
代码2
~~~
<iframe src="https://player.vimeo.com/video/418706814" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
~~~
<iframe src="https://player.vimeo.com/video/418706814" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

测试vimeo结束。

### 结论，使用vimeo作为hexo的视频床。
注意点：
复制vimeo的embed code后，需要将宽度改为100%，以自适应手机端布置。即vimeo代码1。

