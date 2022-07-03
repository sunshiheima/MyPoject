# 1 Object.defineProperty(obj, prop, descriptor)

这个 API 可以给一个对象添加属性 && 添加该属性的属性描述符/访问器(这两个【不能共存】，同一属性只能有属性描述符或者访问器)

- 1)属性描述符：value(属性的值)、writable(是否只读)、enumerable(是否可枚举)、configurable(是否可配置)
- 2)访问器：get(应对属性的读操作)、set(应对属性的写操作)、enumerable(是否可枚举)、configurable(是否可配置)

````js
1.  let obj = {};
    Object.defineProperty(obj, "a", { //定义了 obj 中 a 属性：只读，且不可枚举
    value: "1",
    writable: false,
    enumerable: false,
    configurable: true
    })
    obj.a //1
    obj.a = 1 //TypeError: read only
    Object.keys(obj) //[]


2.  let obj2 = {};
    Object.defineProperty(obj2, "b", { //定义了 get，但没有定义 set，表示只读。并且读取 obj2 的 b 属性返回的值是 getter 函数的返回值
    get(){
    return 1
    }
    enumerable: true,
    configurable: true
    })
    obj2.b; //1
    obj2.b = 2 //重点！Uncaught TypeError: Cannot set property b of <object> which has only a getter
    ```
````
