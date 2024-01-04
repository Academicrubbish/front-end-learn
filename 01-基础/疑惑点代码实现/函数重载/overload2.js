const fnMap = new Map(); // 创建一个 Map 对象，用于存储各个参数签名对应的函数实现

function overload(...args) { // 定义 overload 函数，接受任意数量的参数
  const signature = args.map((it) => typeof it).join(','); // 根据传入参数的类型生成参数签名

  if (fnMap.has(signature)) { // 判断是否存在与参数签名匹配的函数实现
    const implementation = fnMap.get(signature); // 获取与参数签名匹配的函数实现
    return implementation(...args); // 调用函数实现并返回结果
  } else {
    throw new Error('No implementation found for the given signature'); // 抛出一个错误提示
  }
}

// 添加函数实现到 fnMap 对象中
fnMap.set("number,string", function(num, str) {
  return num + str;
});

fnMap.set("string,number", function(str, num) {
  return str + num;
});

// 调用 overload 函数，根据传入参数的类型和数量自动选择合适的函数实现
console.log(overload(123, "abc")); // 输出："123abc"
console.log(overload("abc", 123)); // 输出："abc123"



//问：overload和overload2有什么区别？

//答：

// 这两个代码块的功能是非常相似的，都是根据参数类型签名来查找对应的函数实现并调用它。

// 第一段代码中，先通过 fnMap.get(key) 获取到与参数类型签名匹配的函数实现，如果找不到对应的函数实现则抛出一个错误。然后使用 apply 方法来调用这个函数，传入 args 数组作为参数，并将 this 关键字绑定到当前函数中。

// 第二段代码中，先通过 fnMap.has(signature) 判断是否存在与参数类型签名匹配的函数实现，如果存在，则通过 fnMap.get(signature) 获取到这个函数实现，并使用 ...args 将参数数组展开，传入该函数中进行调用。如果不存在，则抛出一个错误提示。

// 可以看出，这两段代码的核心功能是一样的，都是实现了函数重载的功能。但是第一段代码使用了 apply 方法来调用函数，并将 this 关键字绑定到当前函数中；而第二段代码使用了 ES6 的扩展语法来将参数数组展开，并直接调用函数。此外，第一段代码中抛出的错误提示是 "No overload found"，而第二段代码中抛出的错误提示是 "No implementation found for the given signature"，稍有不同。



//问：apply方法好，还是直接调用函数好

//答：

// apply 方法和直接调用函数各有优缺点，应该根据具体情况来选择使用哪种方式。

// apply 方法的优点在于可以指定函数执行时的上下文（即 this 值），因此它非常适用于需要在特定上下文中执行函数的场景，比如在类方法中调用另一个类方法，或者在函数内部调用另一个函数时需要指定正确的上下文。

// 另外，apply 方法还可以接收一个参数数组，将参数数组中的值作为参数传递给函数。这使得 apply 方法非常适合于处理参数数量不确定的函数，例如实现函数重载或者接受可变数量参数的函数。

// 然而，由于 apply 方法的调用方式略显繁琐，对代码可读性和代码量都会产生一定影响。因此，在简单的场景下直接调用函数可能更为方便和清晰。

// 总的来说，应该根据具体情况来选择使用 apply 方法还是直接调用函数，以达到代码简洁、可读性高和易于维护的目的。