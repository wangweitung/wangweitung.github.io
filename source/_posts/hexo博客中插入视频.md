---
title: hexo博客中插入视频
id: A4
tags:
  - hexo
categories:
  - 博客
  - hexo
abbrlink: 18172
date: 2020-05-16 20:40:17
cover:
---

# hexo博客中插入视频

## 1、自用nas的视频--NG：
nas中的视频无法通过hexo编译发布，因为有ssl connection error。
如果想插入nas的视频，建议使用Wordpress或者typecho。

## 2、如果想在typecho中使用markdown语言添加视频，可以使用以下代码：

```
<iframe height=498 width=510 src="videoname.mp4" frameborder=0 allowfullscreen></iframe>
```

## 3、如果想在hexo中添加视频，可以使用以下代码（方法1-使用vimeo）：

见此：https://wangweitung.github.io/posts/2020/05/04/00/05.html
注意点：
复制vimeo的embed code后，需要将宽度改为100%，以自适应手机端布置，如下：
~~~
<iframe src="https://player.vimeo.com/video/418706814" width=100% height=564 frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
~~~

## 4、如果想在hexo中添加视频，可以使用以下代码（方法2-使用bili）：
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
    <iframe src="//player.bilibili.com/player.html?aid=498121873&bvid=BV1xK411W7hw&cid=189486183&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
    </iframe>
</div>

{% endraw %}


