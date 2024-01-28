### DOM

- DOM：`Document Object Model`
- DOM定义了表示和修改文档所需的方法。DOM对象即为宿主对象，由浏览器厂商定义，用来操作HTML和XML功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口。

### 对节点的增删改查

### 查

- 查看元素节点
  - document代表整个文档

  - `document.getElementsById()` //元素id在`IE8`以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素

  - `document.getElementsByTagName()` //标签名

  - `document.getElementsByName()` //需注意，只有部分标签name可生效(表单，表单元素，img，iframe)

  - `document.getElementsByClassName()` //类名   IE8和IE8以下的版本中没有，可以多个class一起

  - ```html
    <!-- 非实时的 -->
    <!-- document.getElementById() -->
    <!-- document.getElementsByTagName() -->
    <!-- document.getElementsByName() -->
    <!-- document.getElementsByClassName() -->
    <div>
    </div>
    <script>
    	var demo = document.getElementById('')
        var demo1 = document.getElementsByTagName('')
        var demo1 = document.getElementsByName('')
        var demo1 = document.getElementsByClassName('')
    </script>
    ```

    

  - `document.querySelector()` //CSS选择器   IE7和IE7以下的版本中没有

  - `document.querySelectorAll()` //cSS选择器   IE7和IE7以下的版本中没有

  - ```html
    <!-- 非实时的 -->
    <!-- document.querySelector() -->
    <!-- document.querySelectorAll() -->
    <div>
        <span>
        	<strong class="demo">123</strong>
        </span>
    </div>
    <script>
    	var demo = document.querySelector('div > span strong.demo')
        //<strong class="demo">123</strong>
        var demo1 = document.querySelectorAll('div > span strong.demo')
        //[strong.demo] NodeList
    </script>
    ```

  - ![](assets\4c7cbaac56cf5a0c6cd4fa06a52ebd6.png)

#### 遍历节点树

- parentNode 父节点 （最顶端的parentNode为 #document）

- childNodes 子节点们

- firstChild

- lastChild

- nextSibling  后一个兄弟节点  previousSibling 前一个兄弟节点

- ```html
  <!--
  节点的类型：
  元素节点、属性节点、文本节点、注释节点、document、DocumentFragment
  -->
  <html>
      <div>
          123
          <!-- this is comment -->
          <strong></strong>
          <span></span>
      </div>
      <script>
      	var div = document.getElementsByTagName('div')[0];
          console.log(div.childNodes) 
          //[text,comment,text,strong,text,span,text] 
          //七个子节点，因为空格间隙算文本节点
          console.log(div.firstChild) //#text
          console.log(div.lastChild) //#text
          var strong = document.getElementsByTagName('strong')[0];
          console.log(strong.nextSibling) //#text
          console.log(strong.previousSibling) //#text
      </script>
  </html>
  ```

#### 基于元素节点树的遍历

- parentElement  返回当前元素的父元素节点

- children  返回当前元素的子元素节点

- node.childElementCount  和 node.children.length效果一致，子元素节点个数

- firstElementChild 第一个子元素节点

- lastElementChild 最后一个子元素节点

- nextElementSibling  后一个兄弟元素节点  previousElementSibling 前一个兄弟元素节点

- ```html
  
  <html>
      <body>
          <div>
              123
              <!-- this is comment -->
              <strong></strong>
              <span></span>
          </div>
          <script>
              var div = document.getElementsByTagName('div')[0];
              console.log(div.parentElement)// <body>...</body>
              console.log(div.parentElement.parentElement)// <html>...</html>
              console.log(div.parentElement.parentElement.parentElement)// null
          </script>
      </body>
  </html>
  ```

#### 节点的四个属性

- nodeName 元素的标签名，一大写形式表示，只读

- nodeValue Text节点或Comment节点的文本内容，可读写

- nodeType 该节点的类型，只读

- ```html
  <html>
      <body>
          <div>
              123
              <!-- this is comment -->
              <strong></strong>
              <span></span>
          </div>
          <script>
              var div = document.getElementsByTagName('div')[0];
              console.log(div.childNodes[1].nodeName) //"#comment"
              console.log(div.childNodes[3].nodeName) //"STRONG"
              
              div.childNodes[0].nodeValue = 234
              console.log(div.childNodes[0].nodeValue) //234
              
               // 元素节点.nodeType   1
  			// 属性节点.nodeType   2
  			// 文本节点.nodeType   3
  			// 注释节点.nodeType   8
  			// document.nodeType  9
  			// DocumentFragment.nodeType   11
              
              function resElementChild(div) {
                  // no Children 不使用Children拿到所有子元素节点
                  //let arr = []
                  //模拟系统类数组
                  let temp = {
                      length: 0,
                      push: Array.prototype.push,
                      splice: Array.prototype.aplice
                  }
                  for(var i = 0; i < div.childNodes.length; i++) {
                      if(div.childNodes[i].nodeType === 1) {
                          //arr.push(div.childNodes[i])
                          temp.push(div.childNodes[i])
                      }
                  }
                  //return arr
                  return temp
              }
          </script>
      </body>
  </html>
  
  ```

- attributes Element节点的属性集合

- ```js
  //属性节点
  // <div id="demo" class="box" />
  div.attributes
  // 打印 NameNodeMap {0: id, 1: class, length: 2}
  div.attributes[0].nodeType  // 2  属性节点
  div.attributes[0].value  // "demo"
  div.attributes[0].name  // "id"
  div.attributes[0].value = 'abc'  // 'abc'  可以被赋值，但是name不能被赋值
  ```

#### 节点的一个方法

- Node.hasChildNodes();  是否有子节点 true / false

- ```html
  <div>
      <span></span>
  </div>
  // div.hasChildNodes() true  文本节点 + 元素节点
  <div>
  	
  </div>
  // div.hasChildNodes() true  文本节点
  <div></div>
  // div.hasChildNodes() false
  ```

### DOM结构树

#### HTMLDocument、Document、HTMLElement

- ![](assets\Snipaste_2024-01-26_23-00-13.png)

- ```js
  1.
  Document
  //function Document() { [native code] } 
  //可以理解为系统的构造函数，但是我们不能new Document()，但是我们可以利用它的原型
  Document.prototype.abc = 'abc'
  document.abc //'abc'
  
  2.
  //继承关系 
  HTMLDocument.prototype = {
      __proto__ : Document.prototype
  }
  //document → HTMLDocument → Document
  Document.prototype.abc = '1'
  HTMLDocument.prototype.abc = '2'
  document.abc //'2'
  
  3.
  HTMLElement
  //<head></head> 的构造函数就是 HTMLHeadElement
  //依此类推...
  HTMLBodyElement.prototype.abc = 'demo';
  var body = document.getElementsByTagName('body')[0]
  body.abc //打印 'demo'
  
  ```


#### DOM元素最终继承自Object

- ![](assets\Snipaste_2024-01-26_23-16-46.png)

- ```js
  document.body.toString()
  //打印 [object HTMLBodyElement]
  ```

### DOM基本操作 

1. getElementById方法定义在Document.prototype上，即Element节点上不能使用

2. getElementByName方法定义在HTMLDocument.prototype上，即Element和document不能使用(XML document Element)

3. getElementByTagName方法定义在Document.prototype和Element.prototype上

   - ```html
     <body>
         <div>
         	<span></span>
         </div>
         <span></span>
         <script>
         	var div = document.getElementsByTagName('div')[0];  //document 上可以使用 getElementsByTagName
             var span = div.getElementsByTagName('span')[0];  //元素节点上也可以使用 getElementsByTagName
         </script>
     </body>
     ```

4. HTMLDocument.prototype定义了一些常用属性，body,head，分别指代HTML文档中的<body><head>标签

   - ```js
     document.body
     document.head
     //可以直接选择
     ```

5. Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总指代<html>元素

   - ```js
     document.documentElement
     //指代<html>...</html>
     ```

6. getElementsByClassName、querySelectorAll、querySelector在Document.prototype，Element.prototype类中均有定义

### 增

- document.createElement();
- document.createTextNode();
- document.createComment();
- document.createDocumentFragment();

### 插

- PARENTNODE.appendChild();  //插在子元素里的最后一个

- ```html
  //一般配合createElement使用
  <script>
  	var div = document.createElement('div');
  	body.appendChild(div);
  </script>
  //这才把div放在页面上
  
  //剪切操作
  //如果这个元素页面已经存在，那么appendChild方法，会将该元素移动到PARENTNODE里
  <body>
      <div>
        <span></span>
        <strong></strong>
        <i></i>
      </div>
      <script type="text/javascript">
        var strong = document.getElementsByTagName("strong")[0];
        var i = document.getElementsByTagName("i")[0];
        i.appendChild(strong);
          //最终结果
          //<div>
        	//<span></span>
        	//<i><strong></strong></i>
      	//</div>
      </script>
    </body>
  ```

- PARENTNODE.insertBefore(a,b);

- ```js
  div.insertBefore(a,b)
  //在div里，将a元素添加在b元素前
  ```

### 删

- parent.removeChild(); //取出

- ```js
  var i = parent.removeChild(i);
  //用这个操作可以取出来，页面上也删除了，理解为：剪切
  ```

- child.remove(); //删除

- ```js
  i.removeChild();
  //直接删除，消失，理解为：删除
  ```

### 替换

- parent.replaceChild(new, origin)

- ```html
  //和removeChild，也可以理解为剪切操作。
  <body>
      <div>
        <span></span>
        <strong></strong>
      </div>
      <script type="text/javascript">
        var div = document.getElementsByTagName("div")[0];
        var strong = document.getElementsByTagName("strong")[0];
        var i = document.createElement('i')
        div.replaceChild(i,strong)
          //最终结果
          //<div>
        	//<span></span>
        	//<i></i>
      	//</div>
      </script>
    </body>
  
  ```

### DOM基本操作

- Element节点的一些属性

  - innerHTML

  - ```html
     <body>
        <div></div>
        <script type="text/javascript">
          var div = document.getElementsByTagName("div")[0];
          //查
          console.log(div.innerHTML)
          //写，覆盖操作，会覆盖原内容
          div.innerHTML = '<span>123</span>'
        </script>
      </body>
    
    //追加操作 +=
    <body>
        <div>123</div>
        <script type="text/javascript">
          var div = document.getElementsByTagName("div")[0];
          div.innerHTML += '<span style="backGround:red">456</span>'
        </script>
      </body>
    ```

  - innerText   和innerHTML功能一致，只能赋值文本节点

- Element节点的一些方法

  - ele.setAttribute()

  - ```js
    div.setAttribute('class','demo') 
    //设置行间属性，前面是属性名，后面是属性值
    //设置了一个class，叫demo
    //<div class="demo"></div>
    ```

  - ele.getAttribute()

  - ```js
    div.getAttribute('class') 
    //根据属性名取出属性值
    //'demo'
    ```

    

