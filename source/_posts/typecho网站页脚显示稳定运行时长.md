---
title: typecho网站页脚显示稳定运行时长
id: A5
tags:
  - tpyecho
categories:
  - 博客
  - typecho
abbrlink: 18172
date: 2020-05-14 21:58:17
cover:
---


# typecho网站页脚显示稳定运行时长

一、找到对应的显示文件 

 1. typecho，一般为footer.php。
 2. 单文件的php一般在最后。




二、粘贴代码

~~~
本站已稳定运行：<SPAN id=span_dt_dt style="color: #2F889A;"></SPAN> <SCRIPT language=javascript>function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("1/31/2018 12:38:49");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML='<font style=color:#C40000>'+daysold+'</font> 天 <font style=color:#C40000>'+hrsold+'</font> 时 <font style=color:#C40000>'+minsold+'</font> 分 <font style=color:#C40000>'+seconds+'</font> 秒';
    }
    show_date_time();
    </script>
~~~

三、刷新网站，在底部即可看到
