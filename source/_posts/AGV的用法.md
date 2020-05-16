---
title: AGV的用法
id: A7
cover: 'http://wangweitung.tk:3800/uploads/big/8cccde9ea7e3d64004ef2b8dfeb26f74.png'
tags: AGV
categories:
  - Plant Simulation
  - 实体
abbrlink: 15008
date: 2020-05-04 18:18:17
---

# AGV的用法

## 一、设置AGV的安全距离。

&emsp;&emsp;打开AGV小车，选择控件，设置距离为任意值，下图为2m，创建控制方法。输入以下代码。

![AGV小车属性](http://wangweitung.tk:3800/uploads/big/8cccde9ea7e3d64004ef2b8dfeb26f74.png)

```c
param distanceIsBelowLimit: boolean
var mu1 := @
var mu2 := ?
if distanceIsBelowLimit 
	mu2.speed := 0
else
	mu2.speed := mu1.speed
end
```

代码解释：
&emsp;&emsp;设定两个变量mu1和mu2，mu1是当前的AGV小车，mu2是与当前小车相邻的前一个小车。如果distanceIsBelowLimit 是true的话。那么mu2的速度变为0，否则的话，mu2的速度等于mu1的速度。

&emsp;&emsp;官方文档对distanceIsBelowLimit 的解释如下：

```
The parameter DistanceIsBelowLimit of data type boolean is true when the distance becomes too small. It is false when the distance becomes too great. 
当距离变得太小时，数据类型为boolean的参数DistanceIsBelowLimit为true。 当距离太大时，为false。
The anonymous identifier ? designates the part (MU) for which you entered the distance control and the distance. The anonymous identifier @ designates the part (MU) for which the distance became too great or too small. At the point in time at which the distance control is called @ is located in front of ? in the direction of motion of ?. 
```

&emsp;&emsp;及示例代码：

```
-- ? designates the transporter with the control 
-- @ designates the calling transporter, which falls short of or exceeds the distance 
param distanceIsBelowLimit: boolean 
if distanceIsBelowLimit   
	?.Speed := @.Speed -- adapt speed of transporter in front 
else   
	?.speed := ?.Origin.Speed -- switch back to original speed 
end
```
## 二、设置AGV的分流

&emsp;&emsp;对AGV设置控制策略，当满足条件时，进行分流行走。

![AGV分流设置](http://wangweitung.tk:3800/uploads/big/68c609f54341d54685e167bf8d669718.png)

```
param SensorID: integer, Front: boolean, BookPos: boolean
if 轨道3.nummu < 轨道3.capacity
	@.destination :=轨道1 
else
	@.destination :=轨道2
end
```

代码解释：

&emsp;&emsp;如果轨道3上的小车数量小于其容量，则小车目的地设为轨道1。

&emsp;&emsp;如果轨道3上的小车数量大于等于其容量，则小车目的地设为轨道2。

## 三、AGV变换速度

&emsp;&emsp;使用代码对AGV的速度进行变换。加入原始速度为1m/s。

![修改AGV运行速度](http://wangweitung.tk:3800/uploads/big/c88d600b2ef29aff6c8bbb56a9a21499.png)

&emsp;&emsp;在轨道上增加传感器，输入以下代码：

```
@.speed := 30
```

&emsp;&emsp;当AGV经过传感器时，既可修改AGV的运行速度。