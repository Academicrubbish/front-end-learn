### BOM基本操作

#### 查看滚动条的滚动距离

- `window.pageXOffset/pageYOffset`

  - IE8及IE8以下不能用

- `document.body / documentElement.scrollLeft / scrollTop`

  - 兼容性比较混乱，用时取两个值相加，因为不可能存在两个同时有值

  - ```js
    //IE8及IE8以下的浏览器
    document.body.scrollLeft
    document.documentElement.scrollLeft
    //等同于window.pageXOffset，他俩互相冲突，一个有值另一个一定没值
    document.documentElement.scrollTop
    document.body.scrollTop   
    //等同于window.pageYOffset，他俩互相冲突，一个有值另一个一定没值
    ```

- 封装方法

  - ```js
    function getScrollOffset() {
        if(window.pageXOffset) {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset,
            }
        }else {
             return {
                x: document.body.scrollLeft + document.documentElement.scrollLeft,
                y: document.body.scrollTop + document.documentElement.scrollTop,
            }
        }
    }
    ```

#### 查看视口尺寸

- `window.innerWidth / innerHeight`

  - IE8及IE8以下不兼容

- `document.documentElement.clientWidth / clientHeight`

  - 标准模式下，任意浏览器都兼容

- `document.body.clientWidth / clientHeight`

  - 适用于怪异模式下的浏览器

- 封装方法

  - ```js
    //带有 <!DOCTYPE html> 就是标准模式
    //没有，就是怪异模式，怪异模式下的代码会向后兼容浏览器
    //通过document.compatMode来判断
    //"BackCompat" 就是怪异模式
    function getViewportOffset() {
        if(window.innerWidth) {
            return {
                w : window.innerWidth,
                h : window.innerHeight 
            }
        }else {
            if(document.compatMode === "backCompat") {
                return {
                    w : document.body.clientWidth,
                    h : document.body.clientHeight
                }
            }else {
                return {
                    w : document.documentElement.clientWidth,
                    h : document.documentElement.clientHeight
                }
            }
        }
    }
    ```

    

