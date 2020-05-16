---
title: hexo源文件备份至GitHub
tags:
  - hexo
categories:
  - 博客
  - hexo
date: 2020-05-16 21:40:17
cover:
---

参考连接：

https://mupceet.com/2019/09/backup-hexo-blog/



## 一、操作

查看.gitignore文件中的内容，这些是要排除在备份目录以外的。

```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
themes/landscape/
```



## 二、初始化：

```
#进入目录
cd /home/Disk/2Tsda/app/web/hexo
#已初始化空的 Git 仓库于 /home/Disk/2Tsda/app/web/hexo/.git/
git init
#添加位于 'themes/Butterfly' 的现存仓库到索引
git submodule add https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
#添加所有文件进入监控范围
git add .
#添加更新注释
git commit -m "init blog backup"

```



## 三、将备份仓库跟踪并 push 到远程仓库的备份分支 `hexo` 上

```
#添加新分支hexo
git branch -m master hexo
#添加远程仓库
git remote add origin https://github.com/wangweitung/wangweitung.github.io.git
#推送更新
git push -u origin hexo:hexo
```

经过以上步骤，我们就备份了所有所必要的文件。后续更新博客之后，需要及时地将这些备份文件的变更提交并上传。

## 四、通过宝塔面板备份源文件

宝塔-计划任务-shell脚本，新增如下脚本

```
#!/bin/sh
cd /home/Disk/2Tsda/app/web/hexo
git config --global user.email "weitung.wang@gmail.com"
git config --global user.name "wangweitung"
git add .
git commit -m "$(date +"%D %T")"
git push origin hexo:hexo
```

说明：

```
#!/bin/sh
#进入目录
cd /home/Disk/2Tsda/app/web/hexo
设置邮件
git config --global user.email "weitung.wang@gmail.com"
设置用户名
git config --global user.name "wangweitung"
添加所有文件
git add .
添加日期时间注释
git commit -m "$(date +"%D %T")"
推送更新
git push origin hexo:hexo
```

零需要修改如下文件：

```
\Disk\2Tsda\app\web\hexo\.git\config
```

在文件最后加入以下内容

```
[user]
    name = wangweitung
    email = weitung.wang@gmail.com
```

宝塔中点击执行，即可自动push文件至GitHub。

## 五、发布博客

详见:https://wangweitung.github.io/posts/2020/05/09/12/20.html

## 六、Git如何切换远程仓库地址

连接：https://www.jianshu.com/p/df7c86926497

有时候，我们想把一个项目开源出去，提交到github上面去，免不了就要切换远程仓库地址。那这时候有什么办法解决呢？
据目前自己的了解，有三种办法。

### 1、修改命令

```
git remote set-url origin url
```



### 2、先删后加

```
git remote rm origin
git remote add origin git@github.com:sheng/demo.git
```



### 3、修改config文件

如果你的项目有加入版本控制，那可以到项目根目录下，查看隐藏文件夹， 发现.git文件夹，找到其中的config文件，就可以修改其中的git remote origin地址了。

# 七：恢复

有了备份之后，在另一台电脑上创建博客，或者是恢复备份时，就可以直接使用我们备份的内容进行操作。

### 1、克隆备份的内容

```
git clone --recursive -b hexo git@github.com:wangweitung/wangweitung.github.io.git /home/Disk/2Tsda/app/web/hexo
```

### 2、下载 npm 依赖模块

```
cd /home/Disk/2Tsda/app/web/hexo
npm install
```

### 3、恢复主题配置

下载butterfly主题，:

```
cd /home/Disk/2Tsda/app/web/hexo
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

其配置文件已经在:

```
\Disk\2Tsda\app\web\hexo\source\_data\butterfly.yml
```

### 4、正常更新博客

```
hexo g
hexo s
hexo d
```

可以看到，使用备份文件恢复博客的环境是非常简单的。

