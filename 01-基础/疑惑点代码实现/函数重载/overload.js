/**
 * 创建一个函数重载函数
 */
function createOverload() {
    // 创建一个 Map 对象，用于存储不同参数类型对应的函数实现
    const fnMap = new Map();
    // 定义一个 overload 函数作为返回值
    function overload(...args) {
        // 获取当前调用的参数类型序列
        const key = args.map((it) => typeof it).join(',');
        // 根据参数类型序列从 Map 中获取对应的函数实现
        const fn = fnMap.get(key);
        // 如果没有找到对应的函数实现，则抛出异常
        if(!fn) {
            throw new Error('No overload found');
        }
        // 调用对应的函数实现，并以当前执行上下文和参数列表作为参数
        return fn.apply(this, args);
    }
    // 定义一个 addImpl 方法，用于添加新的函数实现
    overload.addImpl = function (...args) {
        // 将最后一个参数作为函数实现
        const fn = args.pop();
        // 检查函数实现是否合法
        if(typeof fn !== 'function') {
            throw new Error('Last argument must be a function');
        }
        // 将参数类型序列作为 key，将函数实现作为 value，存储到 Map 中
        const key = args.join(',');
        fnMap.set(key, fn);
    };
    // 返回 overload 函数
    return overload;
}

// 创建一个名为 getUsers 的函数重载函数
const getUsers = createOverload()

// 添加一个查询所有用户的函数实现
getUsers.addImpl(() => {
    console.log('查询所有用户');
})

// 添加一个查询指定页码的函数实现
const searchPage = (page,size = 10) => {
    console.log(`查询第${page}页，每页${size}条`);
}

getUsers.addImpl('number',searchPage);

// 添加一个查询指定页码和每页数量的函数实现
getUsers.addImpl('number','number',searchPage);

// 添加一个查询指定用户名的函数实现
getUsers.addImpl('string',(name) => {
    console.log(`查询${name}的用户`);
});

// 添加一个查询指定用户名和性别的函数实现
getUsers.addImpl('string','string',(name,sex) => {
    console.log(`查询${name}的${sex}用户`);
});

// 调用 getUsers 函数，并传递两个字符串参数
getUsers('11','22')
