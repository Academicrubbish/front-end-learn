# 浏览器页面处理流程

当在浏览器地址栏中输入一个 url 地址，并按下回车后，会发生什么？

> 试试这个地址：oss.duyiedu.com/test/index.html

![image-20220428165629557](http://mdrs.yuanjin.tech/img/20220428165634.png)

# AJAX



> **AJAX就是浏览器赋予JS的一套API，通过这套API能够使JS具备网络通信的能力**



## 历史

浏览器本身就具备网络通信的能力，但在早期，浏览器并没有把这个能力开放给JS

最早是微软在IE浏览器中把这一能力向JS开放，让JS可以在代码中实现发送请求，这项技术在2005年被正式命名为AJAX（**A**synchronous **J**avascript **A**nd **X**ml）

IE使用了一套API来完成请求的发送，这套API主要依靠一个构造函数完成。该构造函数的名称为` XMLHttpRequest `，简称为`XHR`，所以这套API又称之为 `XHR API` 

由于`XHR API` 有着诸多缺陷，在HTML5和ES6发布之后，产生了一套更完善的API来发送请求。这套API主要使用的是一个叫做`fetch`的函数，因此这套API又称之为`Fetch API`

**无论是`XHR`还是`Fetch`，他们都是实现ajax的技术手段，只是API不同**

## XHR API

```js
var xhr = new XMLHttpRequest(); //创建发送请求的对象
    xhr.onreadystatechange = function () {
      //当请求状态发生改变时运行的函数
      //xhr.readyState：一个数字，用于判断请求到了哪个阶段
      //0：刚刚创建好了请求对象，但还未配置请求 (未调用open方法)
      //1：open方法已被调用
      //2：send方法已被调用
      //3：正在接收服务器的响应消息体
      //4：服务器响应的所有内容均已接收完毕
      //xhr.responseText：获取服务器响应的消息体文本
      //xhr.getResponseHeader("Content-Type") 获取响应头Content-Type

    }
    xhr.open('请求方法','url地址'); //配置请求
    // xhr.setRequestHeader('Content-Type', 'application/json'); //设置请求头
    xhr.send('请求体内容'); //构建请求体，发送到服务器，如果没有请求体，传递null
```

## Fetch API

```js
const res = await fetch('url地址', { //请求配置对象，可省略，省略则所有配置为默认值
    method: '请求方法', //默认为GET
    headers: { //请求头配置
        'Content-Type':'application/json'
    },
    body: '请求体内容' //请求体
}); // fetch会返回一个Promise，该Promise会在接收完响应头后变为fulfilled

res.headers; //获取响应头对象
res.status;  //获取响应状态码，例如200
res.statusText; //获取响应状态码文本，例如OK
res.json(); //用json的格式来解析即将到来的响应体，返回Promise，解析完成后得到一个对象
res.text(); //用纯文本的格式来解析即将到来的响应体，返回Promise，解析完成后得到一个字符串
```

## 特别注意

**无论使用哪一种API，AJAX始终都是异步的**

在初学的时候，可以把网络传输的时间想象的夸张一些，比如每一次请求和响应都要经过一年才能完成。这样有助于理解网络是异步这一点
