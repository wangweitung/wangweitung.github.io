---
title: Wordpress自定义页脚
id: A1
tags: Wordpress
categories:
  - 博客
  - Wordpress
abbrlink: 2375
date: 2020-01-18 22:18:17
cover:
---

# Wordpress自定义页脚

例：以修改博客页脚的信息

1、选择区域，右键，点击检查。

![](http://wangweitung.tk:89/wp-content/uploads/2020/01/20200118162249.png)

2、查看对应代码。可以知道是位于footer的php文件中。

![](http://wangweitung.tk:89/wp-content/uploads/2020/01/20200118162832.png)

3、打开对应的php文件。外观->主题编辑器->主题页脚。

![](http://wangweitung.tk:89/wp-content/uploads/2020/01/20200118163016.png)

4、找到对应的段落。
~~~
<p>Copyright <?php echo date('Y'); ?> <a href="<?php echo get_option('home'); ?>"><?php bloginfo('name'); ?></a>. All Rights Reserved.<br>Theme <a href="https://github.com/vtrois/kratos" target="_blank" rel="nofollow">Kratos</a> made by <a href="https://www.vtrois.com/" target="_blank" rel="nofollow">Vtrois</a>
~~~

此处便于第一张图对应。

5、在后面加上代码：
~~~
<br><a href="http://wangweitung.tk:89/x.php" target="_blank" rel="nofollow">服务器状态</a>
~~~

6、更新文件，刷新页即可显示《我的服务器状态》选项，点击即可打开服务器状态页面。

![](http://wangweitung.tk:89/wp-content/uploads/2020/01/20200118162249.png)


其他：

```
<br>
```

为在页面换行