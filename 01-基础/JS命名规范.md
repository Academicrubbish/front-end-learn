- 通用规则

  - 不要使用歧义或项目外读者不熟悉的缩写，尽可能给出具有**描述性的词汇**

  - 文件名建议**小写短横线命名法**，并且使用小写字母，以避免服务器不区分大小写

    - ```js
      //index.js
      //inside-directory.js
      ```

  - 包名使用**驼峰命名法**，并和默认导出的名称保持一致

    - ```js
      //导出包名
      export default function insideDirectory() {}
      
      //导入
      import insideDirectory form './inside-directory.js'
      ```

  - 对于类接口和类型使用**大驼峰命名法**，其中**类名**通常是名词或者名词短语；**组件名**和类的规范一致；**接口名**可以是形容词或者形容词短语；**方法**一般是小驼峰命名法，通常是动词或者动词短语组成动宾结构，其中**布尔值**可以使用is或者has。对于**私有属性和方法**，推荐前缀加下划线。**常量名**使用全大写字母，并且单词之间使用下划线分割；**非常量名**使用小驼峰命名法，**参数名**一样

    - ```js
      const STATUS_CODE_OK
      
      export class Messenger {  //类
          sendMessage() {}  //方法
          _stop() {}  //私有方法
          isError() {  //布尔值
              return true
          }
      }
      export const ImmutableList = []  //类
      export type VisibilityMode = ''  //类
      
      export interface Readable {  //接口
          
      }
      ```

  - 当我们把英语短语转换成驼峰形式时，有时单词可能存在特殊字符，需要转换为纯ASCII，并删除所有撇号。通常来说，单词除了第一个字母其余都小写，而像`IOS`这样的词本身并不是驼峰，推荐`Ios`这样的方式命名。如果单词在常用情况下已经具有传统的驼峰式则建议保留。

    - ```js
      //Müller's algorithm
      let muellersAlgorithm
      
      // ❌
      let XMLHTTPRequest = new XMLHttpRequest()
      // ✅
      let XmlHttpRequest = new XMLHttpRequest()
      
      // ❌
      let supportsIPv60nIOS = true
      // ✅
      let supportsIPv60nIos = true
      
      // ❌
      let YoutubeImporter = {}
      // ✅
      let YouTubeImporter = {}
      ```

  - 注意统一性，比如在钩子函数中如果已经使用完成时，则坚持使用这种形式，如果使用after，则在代码其他地方也都坚持使用。再比如使用了`onButtonClick`后，其他地方最好也保持统一，而不要使用handle。

    - ```js
      var component = {
      	afterUpdate() {}
          afterActivate() {}
          // ❌ destroyed() {}
      	// ✅
          afterDestroy() {}
      }
      ```

      