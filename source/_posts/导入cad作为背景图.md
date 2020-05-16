---
title: 导入cad作为背景图
author: wangweitung
id: A2
tags: cad
categories:
  - Plant Simulation
  - 背景
abbrlink: 25119
date: 2020-05-05 13:20:32
---

# 导入cad作为背景图

## 一、导入cad文件

### 检查cad文件的默认单位是什么？

&emsp;&emsp;在cad文件中输入命令，并查看单位是否为毫米

```
units
```

### 如果单位是毫米

&emsp;&emsp;直接将cad文件拖入到模型中即可，比例选择为1.0。

### 如果单位不是毫米

&emsp;&emsp;输入命令进行转化：

&emsp;&emsp;输入比例因子的命令：

```
sc
```

&emsp;&emsp;输入需要调整的比例：

```
0.5
```

&emsp;&emsp;应用即可。

## 二、导入图片

&emsp;&emsp;打印cad文件为png格式。

### 1、选择打印为png。

### 2、选择打印窗口，可自行选择。

### 3、打印比例设置为1:50（1像素为50单位）.因为Plant  Simulation里的像素比例因子是0.05（常规->比例因子）.即一个像素对应0.05m=50mm，所以cad中为1:50。

![Plant  Simulation比例因子](https://raw.githubusercontent.com/wangweitung/image/master/img/20200505121009.png)

### 4、新建Frame。

### 5、右键Frame，编辑图标。

### 6、导入，刚才打印的png文件。

### 7、名称改为：background

### 8、应用，即可。