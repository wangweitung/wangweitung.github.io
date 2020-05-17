---
title: ubuntu打开防火墙
tags:
  - buntu
categories:
  - ubuntu
date: 2020-05-17 22:42:17
cover:
---
# Ubuntu打开防火墙
 1. 防火墙的打开
    ```
    sudo ufw enable
    ```
 1. 防火墙的重启
    
    ```
    sudo ufw reload
    ```
    
 1. 打开想要的端口（以9000为例）
    
    ```
    ufw allow 90001 //防火墙的打开
    sudo ufw enable
    ```

 1. .防火墙的重启
    
    ```
    sudo ufw reload
    ```
 1. 打开想要的端口（以9000为例）

    ```
    ufw allow 9000
    ```
