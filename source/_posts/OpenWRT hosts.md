---
title: OpenWRT hosts
tags:
  - hosts
categories:
  - 科学
  - OpenWRT
date: 2020-05-24 07:03:17
cover: https://raw.githubusercontent.com/wangweitung/image/master/img/Mierror.png
---
# OpenWRT hosts
设置：

位置 openwrt ->系统 ->高级设置 ->hosts。

~~~
127.0.0.1 localhost

::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters

# 注意：需要把 127.0.0.1 api.io.mi.com 去掉，有此行，米家无法正常使用
127.0.0.1 api.ad.xiaomi.com
127.0.0.1 sdkconfig.ad.xiaomi.com
127.0.0.1 ad.mi.com
127.0.0.1 ad.xiaomi.com
127.0.0.1 ad1.xiaomi.com
127.0.0.1 adv.sec.miui.com
127.0.0.1 test.ad.xiaomi.com
127.0.0.1 new.api.ad.xiaomi.com
127.0.0.1 e.ad.xiaomi.com
127.0.0.1 test.new.api.ad.xiaomi.com
127.0.0.1 ssp.ad.xiaomi.com
127.0.0.1 o2o.api.xiaomi.com
127.0.0.1 stat.pandora.xiaomi.com
127.0.0.1 upgrade.mishop.pandora.xiaomi.com
127.0.0.1 logonext.tv.kuyun.com
127.0.0.1 config.kuyun.com
#127.0.0.1 api.io.mi.com
127.0.0.1 mishop.pandora.xiaomi.com
127.0.0.1 dvb.pandora.xiaomi.com
127.0.0.1 api.ad.xiaomi.com
127.0.0.1 de.pandora.xiaomi.com
127.0.0.1 data.mistat.xiaomi.com
127.0.0.1 jellyfish.pandora.xiaomi.com
127.0.0.1 gallery.pandora.xiaomi.com
127.0.0.1 bss.pandora.xiaomi.com
127.0.0.1 gvod.aiseejapp.atianqi.com
127.0.0.1 b.netcheck.gallery.pandora.xiaomi.com
218.104.71.170 mirrors.ustc.edu.cn
127.0.0.1 sdkauth.hpplay.cn
127.0.0.1 adeng.hpplay.cn
127.0.0.1 ad.hpplay.cn
127.0.0.1 conf.hpplay.cn
127.0.0.1 fix.hpplay.cn

#2019.11.07
127.0.0.1 cdn.ad.xiaomi.com
127.0.0.1 test.new.api.ad.xiaomi.com
127.0.0.1 ssp.ad.xiaomi.com
127.0.0.1 o2o.api.xiaomi.com

# tcpdump
127.0.0.1 api.cupid.ptqy.gitv.tv

#2019.11.08
127.0.0.1 de.pandora.xiaomi.com
127.0.0.1 mishop.pandora.xiaomi.com
127.0.0.1 auth.api.gitv.tv
127.0.0.1 misc.pandora.xiaomi.com
127.0.0.1 tvapi.kuyun.com
127.0.0.1 data.mistat.xiaomi.com
127.0.0.1 tv.aiseet.atianqi.com
127.0.0.1 vv.play.aiseet.atianqi.com
127.0.0.1 gallery.pandora.xiaomi.com
127.0.0.1 config.kuyun.com
127.0.0.1 bss.pandora.xiaomi.com
127.0.0.1 o2o.api.xiaomi.com
127.0.0.1 dvb.pandora.xiaomi.com
127.0.0.1 alog.umeng.com
127.0.0.1 pandora.mi.com
127.0.0.1 api.ad.xiaomi.com
127.0.0.1 tvapi.kuyun.com
127.0.0.1 sdkconfig.ad.xiaomi.com
127.0.0.1 assistant.pandora.xiaomi.com
127.0.0.1 tracking.miui.com
127.0.0.1 misc.pandora.xiaomi.com
127.0.0.1 gvod.aiseejapp.atianqi.com
127.0.0.1 omgmta.play.aiseet.atianqi.com
127.0.0.1 jellyfish.pandora.xiaomi.com
127.0.0.1 starfish.pandora.xiaomi.com
127.0.0.1 misc.in.duokanbox.com

#群晖更新
127.0.0.1 update.synology.com

#coreelec 屏蔽更新
127.0.0.1 relkai.coreelec.org
127.0.0.1 update.coreelec.org

#wordpress插件更新
#198.143.164.251 api.wordpress.org
#198.143.164.252 wordpress.org

~~~

![米家无法使用](https://raw.githubusercontent.com/wangweitung/image/master/img/Mierror.png)