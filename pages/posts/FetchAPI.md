---
title: 了解 Fetch API
date: 2022-04-14 10:46:12
tags:
---
 Fetch API 是近年来被提及将要取代 XHR 的技术新标准，是一个 HTML5 的 API。

 ## fetch 方法
 fetch 方法有两种调用方式。
 * Promise fetch(String url, [, Object options])
 * Promise fetch(Request req, [, Object options])

 1. 第一个参数是一个 Request 对象，第二个参数是配置信息，可选
 2. 第一个参数是一个 url，第二个参数是配置信息，可选

 可选配置信息是一个 Object 对象，可以包含以下字段：
 * method: 请求的方法，例如：GET, POST。
 * headers: 请求头部信息，可以是一个简单的对象，也可以是 Headers 类实例化的一个对象。
 * body: 需要发送的信息内容，可以是 Blob, BufferSource, FormData, URLSearchParams 或者 USVString。注意，GET, HEAD方法不能包含body。
 * mode: 请求模式，分别有 cors, no-cors, same-origin, navigate 这几个可选值。
     - cors: 允许跨域，要求响应中 Acess-Control-Allow-Origin 这样的头部表示允许跨域。
     - no-cors: 只允许使用 HEAD, GET, POST方法。
     - same-origin: 只允许同源请求，否则直接报错。
     - navigate: 支持页面导航。
* credentials: 表示是否发送cookie，有三个选项 
     - omit: 不发送cookie。
     - same-origin: 仅在同源时发送cookie。
     - include: 发送cookie。
* cache: 表示处理缓存的策略。
     - follow: 跟随。
     - error: 发生错误。
     - manual: 需要用户手动跟随。
* integrity: 包含一个用于验证资资源完整性的字符串。

## Headers
Headers 可用来表示 HTTP 的头部信息，使用 Headers 的接口，你可以通过 Headers() 构造函数来创建一个你自己的 headers 对象。

``` lua
const headers = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
headers.append("X-Custom-Header", "AnotherValue");
headers.has("Content-Type") // true
headers.getAll("X-Custom-Header"); // ["ProcessThisImmediately", "AnotherValue"]
```
Headers 提供 append, delete, get, getAll, has, set, forEach等这些实例方法，可供开发者更加灵活地配置请求中的 headers。

## Request 
Request 类用于描述请求内容。构造函数接受的参数与fetch方法一致，这里就不展开介绍了。我们可以这么理解，事实上fetch方法在调用时，会将传入的参数构造出一个 Request 对象并执行。
``` lua
var URL = '//api.some.com';
var getReq = new Request(URL, {method: 'GET', cache: 'reload'});
fetch(getReq).then(function(response) {
  return response.json();
}).catch(function(error) {
  console.log('Fetch Error: ', error);
});
```
Request 接口中的配置项 headers 可以是实例化的 Headers 。

``` lua 
var URL = '//api.some.com';
// 实例化 Headers
var headers = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
var getReq = new Request(URL, {method: 'GET', headers: headers });
fetch(getReq).then(function(response) {
  return response.json();
}).catch(function(error) {
  console.log('Fetch Error: ', error);
});
```
更便捷的是，Request 对象可以从已有的 Request 对象中继承，并拓展新的配置。
```lua
var URL = '//api.some.com';
var getReq = new Request(URL, {method: 'GET', headers: headers });
// 基于已存在的 Request 实例，拓展创建新的 Request 实例
var postReq = new Request(getReq, {method: 'POST'});
```
## Response
Response 实例是在fetch()处理完promises之后返回的。它的实例也可用通过JavaScript来创建，但只有在ServiceWorkers中才真正有用。

var res = new Response(body, init);

其中 body 可以是 Bolb, BufferSource, FormData, URLSearchParams, USVString 这些类型的值。

init 是一个对象，可以包括以下这些字段
- status: 响应状态码
- statusText: 状态信息
- headers: 头部信息，可以是对象或者Headers实例

Response 实例提供了以下实例属性，均是只读属性。
- bodyUsed: 用于表示响应内容是否被使用过
- headers: 头部信息
- ok: 表明请求是否成功，响应状态为 200 ~ 299 时，值为 true
- status: 状态码
- statusText: 状态信息
- type: 响应类型
    - basic: 同源
    - cors: 跨域
    - error: 出错
    - opaque: Request mode 设置为 “no-cors”的响应
- url: 响应地址

Response 实例提供以下实例方法
* clone: 复制一个响应对象。
* arrayBuffer: 将响应数据转换为 arrayBuffer 后 reslove 。
* bolb: 把响应数据转换为 Bolb 后 reslove 。
* formData: 把响应数据转换为 formData 后 reslove 。
* json: 把响应内容解析为对象后 reslove 。
* text: 把响应数据当做字符串后 reslove 。
