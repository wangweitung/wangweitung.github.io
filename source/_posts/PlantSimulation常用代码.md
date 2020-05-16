---
title: Plant Simulation常用代码
id: A1
cover: 
tags: Plant Simulation
categories:
  - Plant Simulation
  - 常用代码
abbrlink: 18117
date: 2020-03-22 18:24:29
---

# PlantSimulation常用代码

## 1、清空控制台

```
clearConsole
```

## 2、统计故障时间

```
if ?.failed
    修复时间统计[1,修复时间统计.ydim+1]	:=?.getDisruptionendtime-eventController.simTime
end
```

