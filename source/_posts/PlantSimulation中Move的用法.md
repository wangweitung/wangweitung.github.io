---
title: PlantSimulation中Move的用法
id: A5
tags: Move
cover: http://wangweitung.tk:3800/uploads/big/7a54e07a5c22d630b2558b9cfaea3a8c.png
categories:
  - Plant Simulation
  - SimTalk
abbrlink: 54062
date: 2020-05-04 17:01:34
---

# PlantSimulation中Move的用法

## 1、从传送带移动到传送带上。

&emsp;&emsp;在传送带上创建传感器，创建一个Method，使用Method来控制传送带上的物料移动。

```Syntax
@.move（传送带1）
```

&emsp;&emsp;如果需要移动到传送带上某一个位置，如3m位置。

```Syntax
@.move（传送带1,3）
```

![move的用法](http://wangweitung.tk:3800/uploads/big/7a54e07a5c22d630b2558b9cfaea3a8c.png)