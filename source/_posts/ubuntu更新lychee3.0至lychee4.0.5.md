---
title: ubuntu更新lychee3.0至lychee4.0.5
tags:
  - lychee
categories:
  - ubuntu
date: 2020-05-17 21:03:17
cover:
---

旧版本lychee： https://github.com/electerious/Lychee

新版本lychee：https://github.com/LycheeOrg/Lychee

系统system： Ubuntu server 18.04 LTS 

php版本php version：7.4

数据库database： mysql

其他信息other information： I use btPanel

Question: after installation,the web returns the massage “server error or api not found”.

below is what I did to install lychee 4.0.5

## 一、进入文件夹目录

此目录与lychee同级

```
cd /home/Disk/2Tsda/app/web/
```

## 二、同步源文件

```
git clone https://github.com/LycheeOrg/Lychee /home/Disk/2Tsda/app/web/Lychee
```

## 三、进入目录

```
 cd Lychee
```

## 四、安装依赖

```
composer install --no-dev
如果报错使用以下命令：
composer install --ignore-platform-reqs
```

如果报错：

![](https://raw.githubusercontent.com/wangweitung/image/master/img/2020-05-17_095204.png)

1、根据错误提示安装php扩展fileinfo

2、切换为非root帐户安装。

## 五、复制文件

```
cp ../lychee/uploads/big/* public/uploads/big/
cp ../lychee/uploads/medium/* public/uploads/medium/
cp ../lychee/uploads/small/* public/uploads/small/
cp ../lychee/uploads/thumb/* public/uploads/thumb/
```

## 六、设置env文件

```
cp .env.example .env
vi .env

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=Lychee4
DB_USERNAME=Lychee4
DB_PASSWORD=8+w
DB_DROP_CLEAR_TABLES_ON_ROLLBACK=false

#如果需要导入之前的数据库，需要加入lychee
# leave empty or delete the line for default (empty string).
DB_OLD_LYCHEE_PREFIX=lychee
# DB_OLD_LYCHEE_PREFIX=someprefix_
```

## 七、Migrate the database迁移数据库

```
php artisan migrate
```

<img src="https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517202711598.png" alt="image-20200517202711598" style="zoom:67%;" />

## 八、产生密钥

Generate an application key:`php artisan key:generate`,successful。

```
php artisan key:generate
```

![image-20200517202914100](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517202914100.png)

## 九、通过宝塔创建网站

设置网站目录为：

```
/home/Disk/2Tsda/app/web/Lychee/public
```

设置数据库密码如第六项。

修改网站为http://192.168.1.204:3900。

visit my website： 192.168.1.199:3900，error occurs：访问提示错误：

<img src="https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517203338541.png" alt="image-20200517203338541" style="zoom:67%;" />

so I disable the  .htaccess  file。关闭跨站访问。

<img src="https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517203605192.png" alt="image-20200517203605192" style="zoom:67%;" />

visit again, error 503:再次刷新，出现503错误。

![image-20200517203717160](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517203717160.png)



so I change the storage folder to writable.把报错的文件夹改为可写。

visit again, it shows that :再次访问，出现错误：

![image-20200517203944952](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517203944952.png)



或者错误：

![image-20200517211923627](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517211923627.png)

Edit nginx config (*only on nginx server*)，修改静态页面配置：

![image-20200517204511091](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517204511091.png)

```
# serve static files directly
location ~* \.(jpg|jpeg|gif|css|png|js|ico|html)$ {
  access_log off;
  expires max;
  log_not_found off;
}

# sets the limit on uploaded file sized
client_max_body_size 50M;

# removes trailing slashes (prevents SEO duplicate content issues)
if (!-d $request_filename)
{
  rewrite ^/(.+)/$ /$1 permanent;
}

# enforce NO www
if ($host ~* ^www\.(.*))
{
  set $host_without_www $1;
  rewrite ^/(.*)$ $scheme://$host_without_www/$1 permanent;
}

# unless the request is for a valid file (image, js, css, etc.), send to bootstrap
if (!-e $request_filename)
{
  rewrite ^/(.*)$ /index.php?/$1 last;
  break;
}

location / {
  try_files $uri $uri/ /index.php?$query_string;
}
```

出现安装界面：

![image-20200517212055300](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517212055300.png)

检查插件：

![image-20200517212609004](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517212609004.png)

检查权限：

![image-20200517212638062](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517212638062.png)

配置数据库：参照.env配置即可：

![image-20200517212720728](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517212720728.png)

设置用户：

![image-20200517212809777](https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517212809777.png)

## 十、修改php配置

modify PHP.ini：

<img src="https://raw.githubusercontent.com/wangweitung/image/master/img/image-20200517203114198.png" alt="image-20200517203114198" style="zoom:80%;" />

## 十一、导入导出数据库

进入phpadmin，导出原lychee3.0的数据库

进入lychee的数据库，导入原数据库。刷新，即可出现原照片。

## 十二、修改端口

关闭lychee3.0的端口A。

将lychee4.0的端口设置成A。

这样就可以平滑过渡。以前产生的外链图片继续生效。

1. Set storage permissions for uploads：

   ```
   sudo chgrp www-data -R storage public/dist public/sym public/uploads
   sudo chmod -R 775 storage/* app/* public/dist public/sym public/uploads bootstrap/
   sudo chmod 775 .
   ```

2. 安装激活zip，以下命令可以使用，虽然检测报错，但不影响使用。

   ```
   sudo add-apt-repository ppa:ondrej/php && sudo apt-get update
   sudo service nginx restart
   ```


## 十三、Output of the diagnostics  [REQUIRED]

*(Settings => Diagnostics or https://example.com/Diagnostics or `php artisan lychee:diagnostics`)*

```
php artisan lychee:diagnostics
```

十四、Diagnostics
-----------

```
Error: PHP zip extension not activated
Warning: Dropbox import not working. dropbox_key is empty.
Warning: You may experience problems when uploading a large amount of photos. Take a look in the FAQ for details.

System Information
------------------

Lychee Version (git):       master (69e53a0) - Data not in Cache
DB Version:                 4.0.5

composer install:           --no-dev
APP_ENV:                    production
APP_DEBUG:                  false

System:                     Linux
PHP Version:                7.4
MySQL Version:              5.6.46-log

Imagick:                    1
Imagick Active:             1
Imagick Version:            1687
GD Version:                 bundled (2.1.0 compatible)

Config Information
------------------

version:                    040005
check_for_updates:          0
sorting_Photos_col:         takestamp
sorting_Photos_order:       ASC
sorting_Albums_col:         max_takestamp
sorting_Albums_order:       ASC
imagick:                    1
skip_duplicates:            0
small_max_width:            0
small_max_height:           360
medium_max_width:           1920
medium_max_height:          1080
lang:                       简体中文
layout:                     1
image_overlay:              1
image_overlay_type:         desc
default_license:            none
compression_quality:        90
full_photo:                 1
delete_imported:            0
Mod_Frame:                  1
Mod_Frame_refresh:          30
thumb_2x:                   1
small_2x:                   1
medium_2x:                  1
landing_page_enable:        0
landing_owner:              John Smith
landing_title:              John Smith
landing_subtitle:           Cats, Dogs & Humans Photography
landing_facebook:           https://www.facebook.com/JohnSmith
landing_flickr:             https://www.flickr.com/JohnSmith
landing_twitter:            https://www.twitter.com/JohnSmith
landing_instagram:          https://instagram.com/JohnSmith
landing_youtube:            https://www.youtube.com/JohnSmith
landing_background:         dist/cat.jpg
site_title:                 Lychee v4
site_copyright_enable:      1
site_copyright_begin:       2019
site_copyright_end:         2019
additional_footer_text:     
display_social_in_gallery:  0
public_search:              0
SL_enable:                  0
SL_for_admin:               0
public_recent:              0
recent_age:                 1
public_starred:             0
downloadable:               0
photos_wraparound:          1
map_display:                0
zip64:                      1
map_display_public:         0
map_provider:               Wikimedia
force_32bit_ids:            0
map_include_subalbums:      0
update_check_every_days:    3
has_exiftool:               0
share_button_visible:       0
import_via_symlink:         0
has_ffmpeg:                 1
location_decoding:          0
location_decoding_timeout:  30
location_show:              1
location_show_public:       0
rss_enable:                 0
rss_recent_days:            7
rss_max_items:              100
```











