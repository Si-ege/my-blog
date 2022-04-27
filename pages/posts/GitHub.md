---
title: GitHub 用户查询
date: 2022-04-13 12:46:12
tags:
---
最近写了一个小工具，通过调取GitHub的API，来实现输入GitHub用户的ID，来获取用户的信息，如ID，name，GitHub主页链接，地址。

实现的这小工具也是非常的简单，首先我们要找到官方路径列表Root Endpoints得到的链接，https://api.github.com/users/用户名
总结如下:
* 首先！访问的链接最后不能有/。如https://api.github.com/users/Si-ege是可以访问到我个人信息的，但是https://api.github.com/users/solomonxie/就不行了，唯一不同是多了一个/.
* 其次！不同于一般URL访问，GIthub的API访问链接是区分大小写的！
* 个人主要信息。 https://api.github.com/users/用户名,得到数据如下图：
![](https://peiguo.oss-cn-beijing.aliyuncs.com/blog/WechatIMG5.png)
