---
title: antd（ant design）学习总结
date: 2022-4-12 12:22:10
tags: 
---
Ant Design Pro 是一个企业级中后台前端/设计解决方案。可以理解为：适合中后台的通用组件库，一个UI设计语言。ant design pro 其实相当于一个官方版的脚手架，当然它里面还对一些组件进行了优化。
> “脚手架”是一种元编程的方法，用于构建基于数据库的应用。许多MVC框架都有运用这种思想。     
> 程序员编写一份specification（规格说明书），来描述怎样去使用数据库；而由（脚手架的）编译器来根据这份specification生成相应的代码，进行增、删、改、查数据库的操作。我们把这种模式称为"脚手架"。   
> 作者:王欢   
>链接：https://www.zhihu.com/question/29075085/answer/89567700   
>来源：知乎

由“程序员手写代码”跨越到了“程序员指挥机器自动生成代码”。

## 前序准备
本地环境需要安装 node 和 git。技术栈基于 ES2015+、React、UmiJS、dva、g2 和 antd，提前了解和学习这些知识会非常有帮助。   

ES2015+ ： 即JavaScript语言

React： 一个用于构建用户界面的Javascript库。

UmiJS：一个企业级的React应用框架。

dva ： 一种数据流解决方案，基于Redux和Redux-saga。

g2：一套基于可视化编码的图形语法，用于生成各种图表。

antd：基于Ant Design设计体系的React UI组件库。

其实主要掌握Javascript的一些语法，react的一些基础知识，就可以进行开发了，其他的需要时再进行查询。

antd-pro项目的目录结构大致如下：
``` lua
.
├── config          # 项目配置，需要修改
│   ├── config.js
│   └── router.config.js
├── docker
├── functions
├── mock
├── public
│   └── icons
├── scripts
├── src
│   ├── assets
│   ├── components    # 业务通用组件，可以自己增加，也可以修改其中的组件使其满足自己的要求
│   ├── e2e
│   ├── layouts       # 通用布局
│   ├── locales
│   ├── models        # 全局dva model
│   ├── pages         # 业务页面入口和常用模板。在router.config.js中配置路由时，component属性是于page目录的相对路径
│   ├── services      # 后台接口服务
│   └── utils
└── tests
```
config.js：主要在里面配置代理proxy，将前端的请求发送到后端，从而获得返回数据。当没有后端时，可以使用mock目录下的数据进行模拟。

router.config.js ：路由配置。一个典型的路由配置如下：
```lua
{
  path: '/dashboard/analysis',
  name: 'analysis',
  component: './Dashboard/Analysis',
}
```
path是访问路径。   

component对应的不是组件components目录，而是相对于pages目录的路径。   

一般配置了name属性，而没配置隐藏属性的路由会显示在左侧菜单栏中。

在src/components目录下，是一些通用组件，你可以修改他们，使得其满足你的需要。也可以自己创建组件。  

src/pages目录，存放的是访问的页面。当你在浏览器中键入对应路径时，就在pages目录下找到对应的文件渲染后，显示在浏览器上。

src/models目录，存放的是一些model，一般model会调用src/services下的一些后台服务（如访问数据库）。一般model会与page进行关联，model一定会有page与之关联，反之则不成立。

src/services目录，是一些访问后台服务的接口。

## antd-pro前端的请求流程
一个完整的前端 UI 交互到服务端处理流程如下所示：  
   1. UI 组件交互操作；
   2. 调用 model 的 effect；
   3. 调用统一管理的 service 请求函数；
   4. 使用封装的 request.js 发送请求；
   5. 获取服务端返回；
   6. 然后调用 reducer 改变 state；
   7. 更新 model。

