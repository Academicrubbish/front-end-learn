### 专业素养

- mosaic，是互联网历史上第一个获普遍使用和能够显示图片的网页浏览器，于1993年问世(作者：卡克.安德森)
- 1994年4月，马克安德森和Silicon Graphics(简称为SGI，中译为“视算科技”或“硅图”)公司的创始人吉姆·克拉克 (Jim Clark) 在美国加州设立了“Mosaic Communication Corporation”。Mosaic公司成立后，由于伊利诺伊大学拥有Mosaic的商标权，且伊利诺伊大学已将技术转让给Spy Glass公司，开发团队必须彻底重新撰写浏览器程式码,且浏览器名称更改为Netscape Navigator，公司名字于1994年11月改名为“Netscap Communication Corporation”，此后沿用至今，中译为“网景”。微软的Internet Explorer及Mozilla Firefox等其早期版本皆以Mosaic为基础而开发。微软随后买下Spy Glass公司的技术开发出Internet Explorer浏览器，而Mozilla Firefox则是网景通讯开放源代码后所衍生出的版本。
- js历史
  - JavaScript作为Netscape Navigator浏览器的一部分首次出现在1996年。它最初的设计目标是改善网页的用户体验。
  - 作者: Brendan Eich
  - 初期JavaScript被命名为，LiveScript，后因和Sun公司合作，因市场宣传需要改名JavaScript。后来Sun公司被Oracle收购，JavaScript版权归Oracle所有。
- 浏览器组成
  - shell部分
  - 内核部分
    - 渲染引擎(语法规则和渲染)
    - js引擎
    - 其他模块
- js引擎历史
  - 2001年发布ie6，首次实现对is引擎的优化和分离。
  - 2008年Google发布最新浏览器Chrome，它是采用优化后的javascript引擎，引擎代号V8，因能把is代码直接转化为机械码来执行，进而以速度快而闻名。
  - 后Firefox也推出了具备强大功能的js引擎
  - Firefox3.5 TraceMonkey (对频繁执行的代码做了路径优化)
  - Firefox4.0 JeagerMankey
- js
  - 解释型语音
    - 代码运行需要翻译成机器识别的语言；根据翻译过程，将语言分为编译型语言和解释型语言
      - 编译型语言(c，c++)
        - 翻译方式：通篇翻译，翻译完之后生成翻译完的文件，系统最终运行翻译完的文件 (例如：c语言：.c → .obj；java：.java→.class)
        - 优点：快
        - 不足：不跨平台 
      - 解释型语言(js，python，php)
        - 翻译方式：一行一行的翻译并执行，不生成新的文件
        - 优点：跨平台
        - 不足：慢
  - 单线程
    - js引擎是单线程的，所以js是单线程的
  - ECMA标准——为了取得技术优势，微软推出了JScript，CEnvi推出ScriptEase，与JavaScript同样可在浏览器上运行。为了统一规格 JavaScript 兼容于 ECMA 标准，因此也称为ECMAScript。
- javaScript
  - ECMAScript (原生部分，语法...)
  - DOM (浏览器提供)
  - BOM (浏览器提供)
- javaScript执行队列
  - 轮转时间片：假设现在js需要执行任务1和任务2，他会把任务1和任务2切成无数个片段，把这些片段排成一个队列，队列的顺序完全随机 (争抢时间片) ，一个片段一个片段的往js引擎里送，js引擎以一个时间片为一个基准单位去执行这个时间片段，然后把任务1和任务2执行完

### 数据类型

#### 基本数据类型（也称为原始值

- 包括字符串（String）、数字（Number）、布尔值（Boolean）、Undefined和Null。

#### 引用数据类型

- 包括对象（Object）、数组（Array）、函数（Function）、日期（Date）、正则表达式（RegExp）、Map、Set等。

#### 基本数据类型和引用数据类型的不同

- **存储方式：**在给变量赋值时，基本数据类型的值会存在**栈内存**中，可以直接访问；而引用数据类型会将值存在**堆内存**中，并且在**栈内存**里存放引用地址，通过**栈内存**的引用地址来访问值。（下面几个不同点其本质都是这个）

- 复制方式：存储方式的不同造就复制情况的不同，如下图。不论基本数据类型还是引用数据类型，复制都是将**栈内存**里的内容进行赋值的，所以在基本数据类型赋值的时候，是将一个变量的值复制给另一个变量。而引用数据类型赋值时，是按**引用地址**复制给另一个变量，即两个变量指向同一个对象的**引用地址**。

  - ```js
    var a = 1;
    var b = a;
    a = 2;
    console.log(a); //2
    console.log(b); //1
    
    var arr1 = [1,2];
    var arr2 = arr1;
    arr1.push(3)
    console.log(arr1); // [1,2,3]
    console.log(arr2); // [1,2,3]
    ```

- 可变性：基本数据类型是不可变的，一旦创建就不可修改，对其进行操作会返回一个新的值。而引用数据类型是可变的，可以通过改变对象的属性来修改对象的值。

  - ```js
    //基本数据类型的不可变性
    let num1 = 10;
    let num2 = num1 + 5;
    console.log("num1:", num1);  //num1:10
    console.log("num2:", num2);  //num2:15
    
    //引用数据类型的可变性
    let obj1 = {name: "Alice"};
    let obj2 = obj1;
    obj2.name = "Charlie"
    console.log("obj1:", obj1);  //obj1: {name: "Charlie"}
    console.log("obj2:", obj2);  //obj2: {name: "Charlie"}
    ```
    

- 判等方式：基本数据类型可以通过`===`（严格相等）或`==`（相等）进行判等，比较的是值是否相等。引用数据类型的判等比较的是引用地址是否相等，即两个引用是否指向同一个对象。
  
  - ```js
    var arr1 = [1,2];
    var arr2 = arr1;
    var arr3 = [1,2];
    console.log(arr1 === arr2) //true
    console.log(arr1 === arr3) //false
    ```
  
- 传递方式：基本数据类型作为函数参数时，是按值传递的，即函数内部对参数的修改不会影响外部的变量。引用数据类型作为函数参数时，是按引用传递的，即函数内部对参数的修改会影响到外部的变量。

### 数据类型检测`typeof`

- `typeof`对引用数据类型会检测为 'object' ，这个'object' 并不代表对象，而是指代引用数据类型

- null为什么也是'object' ，历史遗留问题，一开始null是被当做空对象占位符发明出来的，后来null引申为出空值的意思，但是`typeof`仍然检测为'object'

  - ```js
    console.log(typeof 2); // number
    console.log(typeof true); // boolean
    console.log(typeof 'str'); // string
    console.log(typeof []); // object
    console.log(typeof function() {}); // function
    console.log(typeof {}); // object
    console.log(typeof undefined); // undefined
    console.log(typeof null); // null
    
    console.log(typeof {}); // object
    console.log(typeof []); // object
    console.log(typeof new Date()); // object
    console.log(typeof new Set()); // object
    console.log(typeof new Map()); // object
    console.log(typeof Symbol()); // symbol
    console.log(typeof /abc/); // object
    console.log(typeof function() {}); // function
    console.log(typeof null); // object
    
    //特殊情况
    //在变量未声明时直接使用会报错,但是有一种情况不会报错
    typeof(a) // 'undefined' 字符串形式
    typeof(typeof(a)) // 'string'
    ```


### 类型转换

#### 显式类型转换

##### `Number(mix)`

- 将参数 `mix` 转换为数字类型。如果 `mix` 是一个数字字符串，将其转换为对应的数字；如果 `mix` 是一个布尔值，`true` 转换为 1，`false` 转换为 0；如果 `mix` 是一个对象，会调用该对象的 `valueOf()` 方法并尝试将返回值转换为数字；否则，返回 `NaN`。

  - ```js
    //数字字符串转换为数字
    console.log(Number('123')); //输出：123
    
    //布尔值转换为数字
    console.log(Number(true)); //输出：1
    console.log(Number(false)); //输出：0
    
    //对象不能转换为数字
    const obj1 = {}
    console.log(Number(obj1)); //输出：NaN
    
    //特殊值转化为数字
    console.log(Number(undefined)); //输出：NaN
    console.log(Number(null)); //输出：0
    console.log(Number(NaN)); //输出：NaN
    console.log(Number("")); //输出：0
    
    //非数字字符串无法转换为数字
    console.log(Number('abc')); //输出：NaN
    
    //对象调用valueOf（）方法并尝试转换为数字
    const obj2 = {
        valueOf（） {
        	return 456
    	}
    }
    console.log(Number(obj2)); //输出：456
    ```

##### `parseInt(string, radix)`

- 将字符串 `string` 转换为整数。可选参数 `radix` 表示进制，默认为 10。该方法从字符串的开头开始解析，直到遇到非数字字符为止。如果无法解析出有效的整数，则返回 `NaN`。**将目标进制转化为10进制**

  - ```js
    //将数字字符串转换为对应的整数，直到遇到非数字字符为止
    console.log(parseInt("123")) //输出: 123
    
    //支持指定进制数进行转换
    console.log(parseInt("1010", 2)) //输出: 10
    console.log(parseInt("FF", 16)) //输出: 255
    
    //浮点数只保留整数部分
    console.log(parseInt(3.7)) //输出: 3
    console.log(parseInt("3.24")) //输出: 3
    
    //特殊值转换为NaN
    console.log(parseInt("abc")) //输出: NaN
    console.log(parseInt("")) //输出: NaN
    
    //可以解析带有正负号的字符串，并返回对应的数字
    console.log(parseInt("+100")) //输出: 100
    console.log(parseInt("-200")) //输出: -200
    
    //如果第一个字符无法识别为数字则返回NaN
    console.log(parseInt("hello")) //输出: NaN
    //如果第一个字符能识别为数字，则直到遇到非数字字符为止
    console.log(parseInt("100px")) //输出: 100
    ```

##### `parseFloat(string)`

- 将字符串 `string` 转换为整数。该方法从字符串的开头开始解析，直到遇到非数字字符为止。如果无法解析出有效的浮点数，则返回 `NaN`。

##### `toString(radix)`

- 将数字转换为字符串。可选参数 `radix` 表示进制，默认为 10。该方法将数字转换为指定进制的字符串表示形式。**将10进制转化为目标进制**
  - 例题：将10101010的2进制转化为16进制
  
    - ```js
      parseInt(10101010,2).toString(16)  //'aa'
      ```
  
  - ```js
    // 数字转换为字符串
    console.log((123).tostring()); // 输出:"123"
    
    //指定进制数进行转换
    console.log((255).tostring(16)); // 输出: "ff"
    console.log((10).tostring(2)); // 输出:"1010"
    
    //特殊值转换为字符串
    console.log(null.tostring()); // 报错
    console.log(undefined.tostring()); //报错
    console.log(NaN.tostring()); // 输出:"NaN"
    console.1og("".tostring()); // 输出:""
    
    //可以将函数转换为字符串
    function myFunction() {
        console.log("He1lo World!");
    }
    console.log(myFunction.tostring()); // 输出函数的源代码
    
    // 对象调用 tostring() 方法并尝试转换为字符串
    const obj1 = {
        tostring() {
            return "hello"
        }
    }
    console.log(obj1.tostring()); // 输出:"hello"
    ```
  

##### `String(mix)`

##### `Boolean()`

#### 隐式类型转换

##### `isNaN` 

- 使用时，隐式调用`Number`方法，再和`NaN`进行比较

  - ```js
    // 判断非数字值
    console.log(isNaN("hello")); //Number("hello") => NaN == NaN 输出：true
    console.log(isNaN(""));  //Number("") => 0 == NaN 输出：false
    
    // 判断数字值
    console.log(isNaN(123)); //Number(123) => 123 == NaN 输出：false
    console.log(isNaN(-Infinity));//Number(-Infinity) => -Infinity == NaN 输出：false
    
    // 特殊值
    console.log(isNaN(undefined)); //Number(undefined) => NaN == NaN 输出：true
    console.log(isNaN(null)); //Number(null) => 0 == NaN 输出：false
    
    //字符串转换为数字
    console.log(isNaN("123")); //Number("123") => 123 == NaN 输出：false
    console.log(isNaN("3.14")); //Number("3.14") => 3.14 == NaN 输出：false
    console.log(isNaN("-Infinity")); //Number("-Infinity") => -Infinity == NaN 输出：false
    
    // 布尔值转换为数字
    console.log(isNaN(true)); //Number(true) => 1 == NaN 输出：false
    console.log(isNaN(false)); //Number(false) => 0 == NaN 输出：false
    ```

##### `++/--`   `+/-`   (一元正负)

- `++/--` 和 `-` 使用时，隐式调用`Number`方法

  - ```js
    //数字类型转换
    var a = 123
    console.log(++a) //类似于 ++Number(123) => 124
    console.log(--a) //类似于 --Number(124) => 123
    console.log(-a) //类似于 -Number(123) => -123
    
    //数字字符串类型转换
    var b = '123'
    var c = '123'
    var d = '123'
    console.log(++b) //类似于 ++Number('123') => 124
    console.log(--c) //类似于 --Number('123') => 122
    console.log(-d) //类似于 -Number('123') => -123
    
    //字符串类型转换
    var e = 'abc'
    console.log(++b) //类似于 ++Number('abc') => NaN
    ```

- `+ `  使用时，隐式调用`String`方法，在 `+` 两边只要出现字符串类型，就会调用`String`方法走拼接；只有在 `+` 两边都是`number`类型的，才会调用`Number`方法进行加法运算

  - ```js
    let str1 = "Hello";
    let str2 = "World";
    let result = str1 + str2; // 拼接字符串
    console.log(result); // 输出: "HelloWorld"
    
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2; // 加法运算
    console.log(sum); // 输出: 15
    
    let str = "Hello";
    let num = 10;
    let result = str + num; // 字符串拼接
    console.log(result); // 输出: "Hello10"
    ```

##### ` - * / % `

- ` - * / % `使用时，隐式调用`Number`方法

##### `&& || ！`

- ` && || ！`使用时，隐式调用`Boolean`方法

##### `< > <= >= == !=` 

- `< > <= >= == !=` 转换过程中，会隐式调用`Number`方法进行比较，但是最终返回结果会隐式调用`Boolean`，返回Boolean值

- `== !=`比较特殊，当两边类型相同时，会直接进行比较

  - ```js
    // < > <= >=
    let strNum = "10";
    let num = 5;
    
    console.log(strNum > num); // 输出: true
    
    console.log(10 > 5); // 输出: true
    console.log(5 <= 3); // 输出: false
    
    console.log(true > false); // Number(true) > Number(false)  => 1 > 0 输出: true
    console.log(100 > 10 > 8); // Number(100) > Number(10) > Number(8) => Number(true) > Number(8) => 0 > 8 输出false 
    
    // == !=
    console.log(5 == '5'); // 输出: true
    console.log(5 != '5'); // 输出: false
    
    console.log('abc' == 'abc'); // 输出: true
    
    //特殊情况
    console.log(undefined > 0) // 输出: false
    console.log(undefined < 0) // 输出: false
    console.log(undefined = 0) // 输出: false
    console.log(null > 0) // 输出: false
    console.log(null < 0) // 输出: false
    console.log(null = 0) // 输出: false
    console.log(undefined == null) // 输出: true
    console.log(undefined == undefined) // 输出: true
    console.log(null == null) // 输出: true
    console.log(NaN == NaN) // 输出: false
    ```

##### `","`逗号运算符

```js
//特殊运算符
var a = (1 + 1 , 1 - 1) //返回逗号后面的内容
var a = (1, 2) //返回逗号后面的内容
```

#### 不发生类型转换

##### `=== 和 !==`

- ```js
  console.log(1 === 1) // 输出 true
  console.log(1 === '1') // 输出 false
  console.log(undefined === null) // 输出: false
  console.log(NaN == NaN) // 输出: false
  ```

#### 练手题

- ```js
  console.log(typeof(a));
  console.log(typeof(undefined));
  console.log(typeof(NaN));
  console.log(typeof(null));
  console.log(typeof(NaN));
  var a = '123abc'
  console.log(typeof(+a));
  console.log(typeof(!!a));
  console.log(typeof(a + ""));
  console.log(1 == '1');
  console.log(NaN == NaN);
  console.log(NaN == undefined);
  console.log('11' + 11);
  console.log(1 === '1');
  console.log(parseInt("123abc"));
  var num = 123123.345678
  console.log(num.toFixed(3));
  console.log(typeof(typeof(a)))
  ```

### 函数Function

#### 定义

##### 函数声明

```js
function test() {} //声明一个函数test
```

##### 函数表达式

```js
//命名函数表达式
var test = function abc() {} //表达式就是忽略'abc'这个名字的，定义完了之后充当表达式，就不能充当函数体
//test.name => abc

//匿名函数表达式 --- "函数表达式"一般指匿名...
var demo = function () {}
//demo.name => demo
```

#### 组成形式和参数

```js
function sum(a,b) { //a,b称形参
    
    //arguments -- [1,2,3] //实参列表
    //arguments[0] == a
    //arguments[1] == b
    
    //sum.length //形参长度 2
    
}
sum(1,2,3) //1，2称实参

//例：判断形参和实参谁多
function test (a,b,c,d) {
    if(test.length > arguments.length) {
        console.log('形参多了')
    }else if(test.length < arguments.length) {
        console.log('实参多了')
    }else {
        console.log('一样多')
    }
}
//例：求和
function sum() {
    var result = 0
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i]
    }
    return result
}
sum(1,2,3,4,5,6)
```

- `arguments` 对象类似于一个数组，但并不是一个真正的数组。它具有索引、length 属性以及一些数组方法（例如 `arguments.length`），但它没有数组特有的方法，比如 `push()` 和 `pop()`。

  通过 `arguments` 对象，你可以在函数内部访问所有传递给函数的参数，而无需提前定义函数形参。这对于接收可变数量的参数或者不知道函数会接收多少个参数的情况特别有用。

  - ```js
    //ES6有一种写法，比较通用，功能和arguments类似，arg 是一个真正的数组，通过函数形参收集传入的参数；而 arguments 是一个类数组对象，可以直接通过索引访问传入的参数。
    function sum(...arg) {
        console.log(arg) //也是实参列表数组
    }
    ```

- 函数的形参和 `arguments` 对象之间有一种映射关系；但是形参多了，没有对应的实参，则没有映射关系。

  - ```js
    function example(a, b, c) {
      console.log(arguments[0]); // 输出：1
      console.log(arguments[1]); // 输出：2
      console.log(arguments[2]); // 输出：3
    
      console.log(a);            // 输出：1
      console.log(b);            // 输出：2
      console.log(c);            // 输出：3
    
      a = 4;
      console.log(arguments[0]); // 输出：4
      console.log(a);            // 输出：4
    
      arguments[1] = 5;
      console.log(b);            // 输出：5
      console.log(arguments[1]); // 输出：5
    }
    
    example(1, 2, 3);
    
    function sum (a,b) {
        b = 2
        console.log(arguments[1]) //打印：undefined
    }
    sum(1)
    ```

#### 返回值和递归

- return，终止函数和返回变量两个功能

  - ```js
    //考察知识点，递归和返回值
    //例：n的阶乘
    function jc(n) {
        if(n == 1) {
            return 1
        }
        return n * jc(n-1)
    }
    
    //例：斐波那契数列
    function Fibonacci(n) {
        if(n == 2 || n == 1) {
            return 1
        }
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
    ```

#### js运行三部曲

##### 语法分析

- 执行前会通篇扫描一遍，确保没有语义错误，这个过程被称为语法分析

##### 预编译

###### 预编译前奏

- imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。

- 一切声明的全局变量，全是window的属性。

  - ```js
    //情况1
    a = 1;  //a = 1就是未经声明就赋值，a就成为了全局变量，即window.a == 1
    
    //情况2
    var a = b = 2;
    
    //拆分成
    var a
    b = 2;  //b = 2就是未经声明就赋值，b就成为了全局变量，即window.b == 2
    a = b;
    
    //情况3
    function test () {
        var a = b = 2; //未经声明就赋值，b就成为了全局变量
    }
    test()
    console.log(b) //打印 2
    
    //声明全局变量
    var d = 3;  //window.d == 3
    ```

###### 预编译四部曲

1. **创建AO对象** Activation Object （执行期上下文）

2. 找**形参**和**变量声明**，将**变量名**和**形参名**作为**AO属性名**，**值为undefined**

3. **将实参值和形参统一**

4. 在函数体里面找**函数声明** (function 方法名 () {})，赋值**函数体**
- ```js
   //例1：
   function fn(a) {
       console.log(a);  // function a () {}
       var a = 123;
       console.log(a);  // 123
       function a () {}
       console.log(a);  // 123
       var b = function () {}
       console.log(b);  // function () {}
       function d () {}
   }
   fn(1)
   ```

   - 预编译生成最终的AO对象 （根据预编译顺序，从左往右）![](assets\Snipaste_2024-01-07_12-24-22.png)

   - 执行代码 （从上往下）![](assets\Snipaste_2024-01-07_12-30-57.png)

- ```js
      //练手题
       function test (a, b) {
           console.log(a);//1      //AO {  代码执行前AO
           c = 0;                  //  a: 1,
           var c;                  //  b: function b () {},
           a = 3;                  //  c: undefined,
           b = 2;                  //  d: function d () {}
           console.log(b);//2      //}
           function b () {}
           function d () {}
           console.log(b);//2
       }
       test(1)
  ```

- 全局也有预编译 (没有形参和实参) ，生成GO对象 Global Object；GO === window

  - ```js
    function test() {
    	var a = b = 123;  //b未声明属于全局变量
    }
    
    test()
    
    //执行前
    AO { 
        a: undefined
    }
    
    //执行后
    GO {
        b: 123
    }
    AO {
        a: 123
    }
    ```


##### 解释执行

#### 作用域

- 作用域定义：变量（变量作用域又称上下文）和函数生效（能被访问）区域
- 全局、局部变量
- 作用域的访问顺序

##### [[scope]]

- 每个javascript函数都是一个对象，对象中有些属性我们可以访问，但有些不可以，这些属性仅供javascript引擎存取，[[scope]]就是其中一个。[[scope]]指的就是我们所说的作用域
- 作用域链：[[scope]]中所存储的执行期上下文对象的集合，这个集合呈链式连接，我们把这种链式连接叫做作用域链

##### 执行期上下文

- 当函数执行时，会创建一个称为执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境，**函数每次执行时对应的执行上下文都是独一无二的**，所以多次调用一个函数会导致创建多个执行上下文，当函数型执行完毕，它所产生的执行上下文被销毁。
- **查找变量：从作用域链的顶端依次向下查找**（在哪个函数里查找变量，就在哪个函数的作用域链的顶端依次向下查找）

##### 例题

- ```js
  function a() {
      function b() {
          var b = 234;
      }
      var a = 123;
      b();
  }
  var glob = 100;
  a();
  //1.a定义： a.[[scope]] -->  0 : GO {}
  //2.a执行： a.[[scope]] -->  0 : AO {}
  //                          1 : GO {}
  //3.b定义： b.[[scope]] -->  0 : AO {}  a
  //                          1 : GO {}
  //4.b执行： b.[[scope]] -->  0 : AO {}  b
  //                          1 : AO {}  a
  //                          2 : GO {}
  ```

- ![](assets\Snipaste_2024-01-09_20-41-59.png)

- ![](assets\Snipaste_2024-01-09_20-38-21.png)

- ![](assets\Snipaste_2024-01-09_20-43-17.png)

##### 闭包

- 例题

- ```js
  function a() {
      function b() {
          var bbb = 234;
          console.log(aaa);
      }
      var aaa = 123;
      return b;
  }
  var glob = 100;
  var demo = a();
  demo();  //打印 123
  //内部函数保存到了外部一定生成闭包
  ```

- ![](assets\Snipaste_2024-01-09_21-49-28.png)

- 当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露。(占的内存多了相当于内存少了，故称内存泄漏)

- 闭包作用

  - 实现公有变量

    - ```js
      //函数累加器
      function add() {
      	var count = 100;
      	function demo() {
      		count++;
              console.log(count)
      	}
      	return demo;
      }
      var mycount = add();
      mycount(); //101
      mycount(); //102
      mycount(); //103
      mycount(); //104
      ```

  - 可以做缓存(存储结构)

    - ```js
      function eater () {
          var food = "";
          var obj = {
              eat : function() {
                  console.log('i am eat ' + food);
                  food = "";
              },
              push : function(myFood) {
                  food = myFood;
              }
          }
          return obj;
      }
      var eater1 = eater();
      eater1.push('banana');
      eater1.eat();
      ```

  - 可以实现封装，属性私有化

  - 模块化开发，防止污染全局变量

##### 立即执行函数

- 此类函数没有声明，在一次执行过后立即释放。适合做初始化工作

- ```js
  var num = (function(a,b,c) {
      var d = a + b + c
      return d
  }(1,2,3)) //num: 7
  ```

- ```js
  //执行函数就是在函数名后加 "()"
  function test() {
      var a = 1;
  }()  //直接将 "()" 放在函数声明后面会报错
  
  var test = function() {
      var a = 2;
  }()  //直接将 "()" 放在函数表达式后可以执行
  
  //结论1：只有表达式才能被执行符号执行
  
  //结论2：能被执行符号执行的表达式就没有函数名，因为立即执行完立即释放空间
  
  + function test() {
      var a = 1;
  }()
  //在函数声明前加一个运算符 "+"、"-"、"!" ，就可以将函数声明转化为函数表达式
  
  (funciton () {
   	var a = 1; 
   }())
  
  // "()"也算数学运算符，也可以将函数声明转化为表达式
  
  //补丁
  function(a,b,c,d) {
      var num = a + b + c + d;
  }(1,2,3,4);
  
  //不会报错，也不会立即执行。以为系统将 "(1,2,3,4)"，这里的"()"当成数学运算符而不是立即执行
  // "()"，在函数表达式后面象征执行函数；"()"，其他情况象征计算运算符。
  ```

##### 例题

```js
function test() {
    var arr = [];
    for(var i = 0; i < 10 ; i++) {
        arr[i] = function() {
            console.log(i);
        }
    }
    return arr;
}
var myArr = test();
for(var j = 0; j < 10 ; j++) {
    myArr[j]();
}
//执行结果 10个10；为什么呢，test里for循环结束，function只是被定义并没有被执行，定义的function的作用域链里存放的i值已经变成10，最后再执行的时候，固然就是十个10。

function test() {
    var arr = [];
    for(var i = 0; i < 10 ; i++) {
        (function(j) {
            arr[j] = function() {
            	console.log(j);
        	}
        }(i));
    }
    return arr;
}
var myArr = test();
for(var j = 0; j < 10 ; j++) {
    myArr[j]();
} //0，1，2，3，4，5，6，7，8，9
//使用立即执行函数即可实时赋值，为什么呢？因为J值来源于立即执行函数的作用域链，每个立即执行函数执行完后，function继承了它的作用域链，作用域链的J值只被赋值过一次就再也没动过了，所以...
```

```js
//考察逗号运算符和立即执行函数
var f = (
	function f() {
        return "1"
    },
    function g() {
        return 2
    }
)()
typeof f //number

//考察
//1.if(function f() {})可以执行
//2.f最后为undefined 
//3.typeof返回结果为字符串类型
var x = 1;
if(function f() {}) {
    x += typeof f;
}
console.log(x);  //"1undefined"
//条件语句if：if语句用于根据条件执行不同的代码块。在该代码中，由于函数表达式总是被认为是真值（truthy），因此if语句的条件始终为true。
//在()将 函数声明 转化为 函数表达式 时，就没有函数名了，所以f就是undefined
```

#### 对象

```js
var mrDeng = {
    name: "MrDeng",
    age: 40,
    sex: "male",
    health: 100,
    smoke: function () {
        mrDeng.health --; //使用this指代自己，this.health--
    },
    drink: function () {
        mrDeng.health ++; //使用this指代自己，this.health++
    }
}
//增删改查
//增
mrDeng.wife = 'xiaowang'
//查
console.log(mrDeng)
//改
mrDeng.sex = 'female'
//删
delete mrDeng.wife

//对象创建方法
//1. var obj = {}  plainObject  对象字面量/对象直接量
//2.构造函数
//  1) 系统自带构造函数 Object()
//   var obj = new Object();
//  2) 自定义

// 大驼峰命名规则
function Car(color) { //自定义构造函数
    this.color = color;
    this.name = "BMW";
    this.height = "1400";
    this.lang = "4900";
    this.weight = 1000;
    this.health = 100;
    this.run = function () {
        this.health -- ;
    }
}
var car = new Car('red');
var car1 = new Car('green');
```

##### 构造函数

- 内部原理：1.在函数体最前面隐式的加上this = {}  2.执行this.xxx = xxx;  3.隐式的返回this

- ```js
  function Student(name, age, sex) { //自定义构造函数
      //var this = {}; AO { this: {} } 第一步，隐式操作
      
      //第二步
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.grade = 2024
      
      //第三步，隐式返回
      //return this; 
  }
  var car = new Student('zhangsan', 18, 'male'); //使用 new 操作符，执行的操作；没有new就是普通函数
  
  //可以捣乱，显式返回  return {}  ,这样操作就算new也不好使，但是  return 123  这种原始值没用， new 会生效
  ```

#### 包装类

```js
//原始值是没有属性和方法的，只有值
//数字是原始值吗？不对，只有原始值数字才是原始值
//原始值数字
var num = 123;
//构造函数数字
var num = new Number(123);
num.abc = "a"
console.log(num.abc)  //打印123

//但是仍然可以进行运算
num * 2 //246  但是运算结束之后就会变成原始值数字

//字符串也是一样的
var str = new String('123')
str.a = 'a';
console.log(str.a) // 'a'
str.value = function() {return 'a'}
console.log(str.value) // 'a'

var num = new Number();
var str = new String();
var bol = new Boolean();
// undefined 和 null 不能有构造函数

var str = 'abcd'
str.length // 4 为什么原始值字符串有属性呢？

//原始值是不可能有属性和方法的，但是为什么str可以使用length，因为 包装类

var num = 4;
num.len = 3; //不会报错
console.log(num.len) //undefined

//在原始只调用属性的时候，会隐式进行一个操作
//new Number(4).len = 3; 并且 new 的 Number没有保存到任何地方直接 delete

//那为什么访问也没报错，依然隐式操作
//访问的是 new Number(4).len ，结果undefined，又delete

//这个隐式的操作就是 包装类
```

```js
//巩固题
var str = 'abc'
str += 1;
var test = typeof(str); //'string' 记住typeof返回的是字符串形式
if(test.length == 6) {
    test.sign = '123' // new String(test).sign = '123'  直接delete
}
console.log(test.sign) //new String(test).sign undefined
```

#### 原型

##### 原型定义

原型是function对象的一个属性，它定义了构造函数制造出的对象的**公共祖先**。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。

- ```js
  // Person.prototype  --- 原型
  // Person.prototype = {}
  Person.prototype.LastName = 'yuan'
  Person.prototype.say = function () {
      console.log('hehe')
  }
  function Person() {
      
  }
  var person = new Person() //person.LastName : 'yuan'
  var person1 = new Person() //person1.LastName : 'yuan'
  
  //例：
  function Person(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex
  }
  var person = new Person('创', 22, 'male');
  //person.name  创
  //person.LastName  yuan
  
  //优化
  // Car.prototype.height = 1400;
  // Car.prototype.lang = 4900;
  // Car.prototype.carName = "BMW";
  Car.prototype = {
      height : 1400,
      lang : 4900,
      carName : "BMW"
  }
  function Car(color, owner) {
      this.owner = owner;
      this.color = color;
      // this.height = 1400;
  	// this.lang = 4900;
  	// this.carName = "BMW";
  }
  
  var car = new Car('red', 'yuanchuang')
  ```

- 利用原型特点和概念，可以提取共有属性

- 对象如何查看原型 → 隐式属性 `__proto__`

- 对象如何查看对象的构造函数 → `constructor`

- ```js
  function Car () {};
  var car = new Car();
  ```

- ![](assets\微信图片_20240113222355.png)

- ```js
  function Person () {};
  Car.prototype = {
  	constructor : Person
  }
  function Car () {};
  var car = new Car();
  soncole.log(car.constructor) //Person () {} 结论：constructor是可以被改变的
  ```

```js
//原型链原理
Person.prototype.name = 'abc'
function Person () {
   // new 的第一步 就是创建person的隐式原型 "__proto__" 指向构造函数 "Person" 的原型prototype
   // var this = {
   //     __proto__ : Person.prototype
   // }
}
var person = new Person();
preson.name //先在自己身上找有没有 'name' 属性，如果没有就去'__proto__'上找，'__proto__'又指向 'Person.prototype' ，最后就找到了 'Person.prototype' 上的 'name' 属性，值为'abc'

//原型是可以被修改的（原型是对象）
var obj = {
    name : 'sunny'
}
person.__proto__ = obj //那么现在 person 的隐式原型就是 obj 了
```

```js
//修改原型
// 1.
Person.prototype.name = 'sunny';
function Person() {
    // var this = {__proto__ : Person.prototype};
}

var person = new Person();

Person.prototype.name = 'cherry'

person.name // 打印'cherry'

// 2.
Person.prototype.name = 'sunny';
function Person() {
    // var this = {__proto__ : Person.prototype};
}
Person.prototype.name = 'cherry'
var person = new Person();

person.name // 打印'cherry'

// 3.
Person.prototype.name = 'sunny';
function Person() {
    // var this = {__proto__ : Person.prototype};
}

var person = new Person();

Person.prototype = {
    name : 'cherry'
}

person.name // 打印'sunny'  为什么是sunny，因为prototype是对象，是引用数据类型，直接改变Person的prototype不影响person自己的__proto__，因为已经指向了原来的prototype

// 4.
Person.prototype.name = 'sunny';
function Person() {
    // var this = {__proto__ : Person.prototype};
}

Person.prototype = {
    name : 'cherry'
}

var person = new Person();

person.name // 打印'cherry'
```

#### 原型链

##### 原型链构成

```js
function Grand () {};
function Father () {
    this.firstName = 'chuang'
};
function Son () {
    this.occupation = 'Front-end Engineer'
};

Grand.prototype.LastName = 'yuan'

var grand = new Grand();
var father = new Father();
var son = new Son();

father.__proto__ = grand;
son.__proto__ = father;
```

![](assets\d99a9ae0708462907c678618c649cb8.png)

```js
// 讲解一下
son.__proto__ → father
father.__proto__ → grand
grand.__proto__ → Grand.prototype
Grand.prototype.__proto__ → object.prototype最终结果
// son 的构造函数是 Son ，所以 Son 有的属性， son 也会有，比如 occupation 属性
// son 的原型指向了 father ，father的构造函数是 Father ，所以 father 是有 firstName 属性的
// father 的原型指向了grand ， grand的构造函数 Grand 啥也没有 ，所以grand也啥也没有
// grand 的原型指向了 Grand.prototype，这个Grand.prototype的__proto__指向了Object.prototype 是系统赋予的最终原型。
// 每个构造函数的原型都指向 Object.prototype
```

##### 绝大多数对象最终都会继承`Object.prototype`

- 不是绝对，为什么，往下看

##### `Object.create`(原型)

```js
var obj = {name:'sunny'};
var obj1 = Object.create(obj);
//相当于 
//var obj1 = {}
//obj1.__proto__ = obj

//例
Person.prototype.name = 'sunny';
function Person() {
    
}
var person = new Person();
//等同于
var person = Object.create(Person.prototype);

//利用Object.create可以构造一个没有原型的对象
var obj = Object.create(null) //这个obj对象就没有原型
```

##### `toString`

```js
//通过原型的角度看toString
var num = 123
num.toString() // '123'
//num.toString()  →  new Number(num).toString;
//Number.prototype上就存在toString方法，而undefined和null都没原型，所以都不能使用toString()。

// Object.prototype.toString "[object object]"
// Number.prototype.toString 
// Array.prototype.toString
// Boolean.prototype.toString
// String.prototype.toString

//原型链最末端都是 Object.prototype ,这个上面的toString方法有很大的不同，返回结果是 "[object, object]"
//因此利用该特性，配合使用call方法，可以实现判断数据类型

Object.prototype.toString.call(123) //'[object Number]'
Object.prototype.toString.call('')  //'[object String]'
Object.prototype.toString.call(true)  //'[object Boolean]'
Object.prototype.toString.call(undefined)  //'[object Undefined]'
Object.prototype.toString.call(null)  //'[object Null]'
Object.prototype.toString.call([])  //'[object Array]'
Object.prototype.toString.call({})  //'[object Object]'
Object.prototype.toString.call(function() {})  //'[object Function]'
Object.prototype.toString.call(new Set())  //'[object Set]'
Object.prototype.toString.call(new Map())  //'[object Map]'

//call方法是直接调用原型上的方法
//例如
Number.prototype.toString.call(123) //'123'

//为什么 Object.prototype.toString.call({}) 可以这么使用
Object.prototype.toString = function () {
    
}
//正常使用时，谁调用方法，this就指向谁，但是call可以改变this指向，指到第一个参数中，详情往下看
```

#### call/apply

- 作用，改变this指向
- 区别，后面传的参数形式不同

##### call

- ```js
  function test() {}
  test() // 隐式转化成test.call()来执行
  
  //call
  function Person(name, age) {
      this.name = name;
      this.age = age;
  }
  var person = new Person('yuanchuang',18);
  var obj = {};
  Person.call(obj, 'yuanchuang', 18);  
  obj //{name: 'yuanchuang', age: 18}
  // call里的第一个参数会改变Person里this的指向，相当于 this = obj;
  // 其他参数传参
  
  //实际开发中，可以使用别人已经写好的函数来实现自己的功能
  //例
  function Person (name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
  }
  
  function Student(name, age, sex, tel, grade) {
      Person.call(this, name, age, sex);
      this.tel = tel;
      this.grade = grade;
  }
  
  var student = new Student('sunny', 123, 'male', 139, 2017);
  student // {name: 'sunny', age: 123, sex: 'male', tel: 139, grade: 2017}
  ```

##### apply

- call 需要把实参按照形参的个数传进去
- apply 需要传一个arguments，实参列表

#### 继承

1. 传统形式 → 原型链

   - 过多的继承了没用的属性

2. 借用构造函数

   - 不能继承借用构造函数的原型

   - 每次构造函数都要多走一个函数

   - ```js
     function Person (name, age, sex) {
         this.name = name;
         this.age = age;
         this.sex = sex;
     }
     
     function Student(name, age, sex, tel, grade) {
         Person.call(this, name, age, sex);
         this.tel = tel;
         this.grade = grade;
     }
     
     var student = new Student('sunny', 123, 'male', 139, 2017);
     student // {name: 'sunny', age: 123, sex: 'male', tel: 139, grade: 2017}
     ```

3. 共享原型

   - 不能随便改动自己的原型

   - ```js
     Father.prototype.lastName = 'Deng';
     function Father() {
         
     }
     function Son() {
         
     }
     
     //共享原型
     Son.prototype = Father.prototype
     
     var son = new Son();
     var father = new Father();
     
     //将功能封装成函数
     function inherit(Target, Origin) {
         Target.prototype = Origin.prototype;
     }
     inherit(Son, Father); //Son继承Father的原型
     //但是Son不能个性化添加属性，因为Son和Father指向同一个对象(引用类型)，Son添加Father也会添加
     ```

4. 圣杯模式

   - ```js
     function Father() {
         
     }
     function Son() {
         
     }
     function F() {
         
     }
     F.prototype = Father.prototype
     Son.portotype = new F();
     
     //封装函数，解决不能个性化定义自己原型属性的问题
     function inherit(Target, Origin) {
         function F () {};
         F.prototype = Origin.prototype;
         Target.prototype = new F();
     }
     
     //这个时候，给Son原型添加属性就不会影响Father
     Son.prototype.sex = 'male'
     var son = new Son();
     var father = new Father();
     son.sex //'male'
     father.sex //'undefined'
     
     //但是但是，还有一个问题，就是构造器
     son.constructor // Father() {}
     //为什么
     //son.__proto__ → Son.prototype
     //Son.prototype.__proto__ → Father.prototype
     //Father.prototype.constructor  →  Father() {}
     
     //优化
     //圣杯模式
     function inherit(Target, Origin) {
         function F () {};
         F.prototype = Origin.prototype;
         Target.prototype = new F();
         Target.prototype.constructor = Target;
         //可以记一下 '超类' ，就是原始父级，以备不时之需
         Target.prototype.uber = Origin.prototype;
     }
     
     //优雅模式
     var inherit = (function() {
         var F = function () {}; //私有化变量
         return function (Target,Origin) {
             F.prototype = Origin.prototype;
             Target.prototype = new F();
             Target.prototype.constructor = Target;
             Target.prototype.uber = Origin.prototype;
         }
     }());
     inherit(Son,Father);
     ```

#### 理解一下节流和防抖

```js
//理解一下
//防抖 可以避免在某些高频事件（如窗口大小改变、滚动等）中频繁触发事件处理函数而导致页面卡顿的问题
function debounce(func, wait) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}
//节流  在一段时间内只执行一次事件处理函数
function throttle(func, wait) {
  let timer;
  return function() {
    if (!timer) {
      func.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
}
```

#### 命名空间

- 管理变量，防止污染全局，适用于模块化开发

- ```js
  var name = 'bcd';
  var init = (function() {
  	var name = 'abc';
  	
  	function callName() {
  		console.log(name);
  	}
  	return function () {
  		callName()
  	}
  })
  init(); //'abc'，利用闭包会形成 变量私有化 ，不会污染全局变量
  
  // 模块化开发，变量私有化，防止全局变量污染
  var init = (function () {
     return {
         name: 'abc',
         age: 18,
     } 
  }())
  init.name
  init.age
  ```

#### 方法的连续调用

```js
var cool = {
    smoke : function () {
        console.log('smoking')
        return this
    },
    drink : function () {
        console.log('drinking')
        return this
    },
    perm : function () {
        console.log('perming')
        return this
    },
}
cool.smoke().drink().perm() //'smoking''drinking''perming'
```

#### 属性的表示方法

```js
var obj = {
	name: 'abc'
}
obj.name //'abc'

// 使用 obj.name 调用属性时，会隐式转换为 obj['name'] 
var obj = {
    wife1 : {name: 'xiaoliu'},
    wife2 : {name: 'xiaowang'},
    wife3 : {name: 'xiaoyao'},
    wife3 : {name: 'xiaozhang'},
    sayWife : function (num) {
        return this['wife' + num]
    }
}
obj['wife1'] //{name: 'xiaoliu'}
obj['wife1']['name'] //'xiaoliu'
```

#### 对象的枚举

- for in

- ```js
  var obj = {
      name : '13',
      age : 18,
      sex : 'male',
      height : 180,
      weight : 70
  }
  for(var i in obj) {
      console.log(i)
  }
  //name,age,sex,height,weight
  for(var i in obj) {
      //conosle.log(obj.i) obj.i 这种形式会把 i 当成属性，而 obj 中没有 i 属性
      console.log(obj[i])
  }
  //'13',18,'male',180,70
  ```

- hasOwnProperty

  - 判断属性是不是对象自身的，如果是返回 true

  - ```js
  var obj = {
      name : '13',
      age : 18,
      sex : 'male',
      height : 180,
      weight : 70,
      __proto__ : {
      	lastName : 'yuan'
  	}
  }
  Object.prototype.name = '123' 
  for(var i in obj) {
      console.log(obj[i])
  }
  //'13',18,'male',180,70,'yuan','123'
  //如果原型上有值，也会把原型上的值遍历出来，直到最底层的原型Object.prototype
  for(var i in obj) {
      if(obj.hasOwnProperty(i)) {
          console.log(obj[i])
      }    
  }
  //'13',18,'male',180,70
  // hasOwnProperty 方法 判断属性是不是对象自身的，如果是返回 true
  ```

- in

  - 和 hasOwnProperty 方法效果差不多，判断对象能否访问到这个属性，原型上也算

  - ```js
    var obj = {
        name : '13',
        age : 18,
        sex : 'male',
        height : 180,
        weight : 70,
        __proto__ : {
        	lastName : 'yuan'
    	}
    }
    console.log('name' in obj) //true
    console.log('lastName' in obj) //true
    ```
    

- instanceof

  - ```js
    // A对象 是不是 B构造函数构造出来的
    A instanceof B
    
    function Person() {}
    var person = new Person();
    
    person instanceof Person // true
    person instanceof Object // true
    
    // 进一步解释
    //看A的原型链上 有没有 B的原型
    A instanceof B
    
    //所以 instanceof 可以判断引用数据类型
    [] instanceof Array // true
    ({}) instanceof Object // true
    function () {} instanceof Function // true
    
    //为什么不直接使用 {} instanceof Object ，因为{}单独存在时，有优先将其理解为代码块，而不是对象，所以直接使用会报错。
    
    //但是所有引用对象最底层都是Object，所以instanceof Object 都是true
    ```


### try...catch...

- try里的代码报错，不影响try外的代码运行

- ```js
  try {
  	console.log('a')
      console.log(b)
      console.loe('c')
  }catch(e) {
      console.log('e')
  }
  console.log('d')
  //打印
  //a
  //e
  //d
  ```


### 日期对象

```js
//日期对象，系统提供好的
//date 保存的时间是 new 出来那一刻的，不是实时的
var date = new Date();
//'Sun Jan 28 2024 19:12:25 GMT+0800 (中国标准时间)'
date.getDate(); //这个月第几天 (1-31)
date.getDay(); //这周第几天 (0-6) 且周日是第一天
date.getMonth(); //今年第几月 (0-11)
date.getFullYear(); // 2024 , 正常输出
date.getYear(); //124 , 历史遗留问题 之前是6位制 99.01.28 1999年1月28日 21世纪向前进一位, 100 就指代2000年
date.getHours(); //小时 (0-23)
date.getMinutes(); //分钟 (0-59) 
date.getSeconds(); //秒 (0-59)
date.getMilliseconds(); //毫秒 (0-999)
date.getTime(); //返回1970年1月1日至今的毫秒数

//eg.验证程序执行效率问题
var start = new Date().getTime();
for (var i = 0; i < 100000000; i++) {}
var end = new Date().getTime();
console.log("Time taken: " + (end - start) + "ms");
// 1亿次 68ms

//set方法，可以设置时间点
//set
//计时器
var date = new Date();
date.setMinutes(39); //设置时间，分钟
setInterval(function () {
    if (new Date().getTime() - date.getTime() > 1000) {
        console.log("123");
    }
},1000);


date.toTimeString();
//'22:48:19 GMT+0800 (中国标准时间)'

```

### 计时器

- setInterval();
- setTimeout();
- clearInterval();  //清除计时器
- clearTimeout();

```js
//计时器
var time = 1000;
var i = 0;
setInterval(function () {
    i++;
    console.log(i);
}, time);

//测试误差
var firstTime = new Date().getTime();
setInterval(function () {
    var lastTime = new Date().getTime();
    console.log(lastTime - firstTime);
    firstTime = lastTime;
}, 1000)
//1010
//1004
//993
//1006
//1002
//991
//1009
//991

//清除计时器
var i = 0;
var timer = setInterval(function () {
    console.log(i++);
    if(i > 10) {
        clearInterval(timer);
    }
},10)
```

