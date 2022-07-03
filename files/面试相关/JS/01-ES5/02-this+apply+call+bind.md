# 1.this

this 的指向问题是 ES5 中众多坑中的一个，在 ES6 中可能会极大避免 this 产生的错误。

## 1.1 this 的指向：

在 ES5 中，函数内部 this，指向最后调用该函数的那个对象，即 this 指向是在函数调用时而非创建时确定的

## 1.2 函数被调用的三种方式

```text
1)在全局中直接调用 fn() --- 相当于是 window 调用 fn()---因此 fn 内部的 this 指向 window。
但如果是在严格模式下，则 fn 函数内的 this 不再指向 window，而是 undefined //并且报错：Uncaught TypeError: Cannot read property 'name' of undefined.
2)若调用函数的是一个对象，那么 this 永远指向最后调用它的那个对象。
3)若是用 new 关键字去调用构造函数，那么构造函数中的 this 指向实例。
4)若是箭头函数内部的 this，那么指向该箭头函数所在环境中的作用域。即 this 指向是在箭头函数创建时而非调用时确定的
```

# 2.多种【函数调用方法】的优先级（直接决定了函数内部的 this 指向）

//优先级从高到低

- 1)new 关键字调用
- 2)bind 提前绑定 this
- 3)对象调用(/apply 和 call)
- 4)全局调用

# 3.如何改变 this 指向（待看示例，多刷题）

## 3.1 使用 ES6 的箭头函数

```text
- ES6 中规定：箭头函数的 this 是在函数创建时就确定的，而非函数执行时确定的
- 详细定义：箭头函数中没有 this 绑定，必须通过查找作用域来决定其值，如果箭头函数被非箭头函数包含，则箭头函数的 this 指向 最近一层非箭头函数的 this，否则，this 为 undefined.
```

## 3.2 在函数内部使用 \_this = this

即先将该函数的作用域（即调用该函数的对象）保存在变量\_this 中

## 3.3 使用 apply、call、bind

### 3.3.1 apply

fn.apply(thisArg, [argsArray]);

会调用 fn 函数使其执行，同时临时改变 fn 内部的 this 指向为 thisArg（通常为一个对象）。接收数组/类数组形式的参数。
注意：该函数执行时真正的 this，不一定是 thisArg。 -如果此函数处于严格模式下，且指定 thisArg 为 null 或 undefined 时，函数执行时其内部 this 会自动指向全局对象(浏览器中就是 window 对象)。 -如果此函数处于严格模式下，且指定 thisArg 为数字/字符串/布尔值时，函数执行时内部的 this 会指向该原始值的自动包装对象。

### 3.3.2 call

fn.call(thisArg, arg1, arg2, ...)

和 apply 相同，区别是接收参数序列

### 3.3.3 bind

```js
var newfn = fn.bind(thisArg, arg1, arg2, ...);
newfn(arg3, arg4, ...);
```

会创建一个新的函数，当被调用时，新函数内部 this 会指向 thisArg，在新函数被创建和被掉用时都可以传入参数序列，作为最终执行时的所有参数。
