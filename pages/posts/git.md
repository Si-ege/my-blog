---
title: git 学习
date: 2022-03-1 23:46:12
tags:
---
# git学习
## git安装
#### 下载安装
```lua 
#windows
https://git-scm.com/download/win
#mac
https://git-scm.com/download/mac
```

# 常用命令
要将代码推送到服务器通常会经历五个步骤：更新、检查，提交暂存，正式提交，推送。 即 pull -> status -> add -> commit -> push

```lua
#初始化一个本地版本仓库
git init   

#查看配置信息
git config user.name
git config user.email

#设置配置
git config --global user.name Denis
git config --global user.email 87702755@qq.com

#命令行修改配置
git config --global --replace-all user.name Denis
git config --global --replace-all user.email 87702755@qq.com

#修改配置文件
vim ~/.gitconfig

#拉取代码
git clone  https://xxxx         #https方式, 需要输入用户名和密码
git clone  git@gitee.com:xxx    #ssh方式, 需要把本机公钥添加到服务器

#同步远程代码
git pull

#检查改动文件
git status

#撤销更改
git checkout 文件名

#添加文件到缓存
git add 文件名 或者  git add .

#提交代码
git commit . -m  "备注内容"  或者 git commit 文件名 -m  "备注内容"

#推送代码
git push

```
## 分支学习
```lua
#主分支：master，默认分支

#新建分支
git branch 分支名

#查看分支
git branch

#切换分支（实际项目中，每个人都要在自己的分支上工作，最后再合并到如果要在master上面合并分支，需要先切回到master
git checkout 分支名

#合并分支
git merge 分支名字

#删除分支（如果分支没有合并不能删除）
git branch -d 分支名

#强制删除（如果分支没有合并要删除可以使用）
git branch  -D 分支名字
```
## git 推送空的commit消息
``` lua
# 提交空的commit消息
git commit --allow-empty -m "Empty-Commit"
#推送到主目录
git push origin main
```
# 开发步骤
一个master，一个dev
1. 新建一个dev
2. 切换到dev进行开发
3. 在dev添加文件并且提交文件
4. 切换到master分支
5. 将dev分支合并到master分支 git merge dev
6. 推送master到服务端
7. 继续切换到dev进行开发
# 冲突解决
a和b同时修改同一个文件的同一行代码就会产生冲突，如果a先push，那么b在push的时候就会报错。所以，为了保险起见，只要想向服务端push内容，首先需要pull内容，pull下来之后就会将服务端的代码和本地的代码进行合并，如果有冲突，就会显示冲突(git diff)，如果没有冲突，那就合并成功，然后再push上去即可，如果有冲突，商量解决冲突即可。
```lua
git pull    #下拉文件
git diff    #查看冲突
```
