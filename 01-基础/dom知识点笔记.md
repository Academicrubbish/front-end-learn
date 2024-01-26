### DOM

- DOM：`Document Object Model`
- DOM定义了表示和修改文档所需的方法。DOM对象即为宿主对象，由浏览器厂商定义，用来操作HTML和XML功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口。

### 对节点的增删改查

#### 查

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

- 

- ```js
  //继承关系 document → HTMLDocument → Document
  function HTMLDocument() {
      __proto__ = Document.prototype
  }
  ```

  