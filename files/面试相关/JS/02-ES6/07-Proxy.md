# 1 Proxy（代理?）

- 1)常作为一个“拦截器”，可以在目标对象前设置一个拦截器，外界访问对象，必须先经过这层拦截器。
- 2)ES6 提供了非常多对象拦截的操作，几乎覆盖了所有可能修改目标对象的情况
- 3)Proxy 一般和 Reflect 配套使用,前者拦截对象,后者返回拦截的结果,Proxy 上有的的拦截方法 Reflect 都有

```js
  let obj = {};
  let handler = {
  //target 为目标对象，key 为目标属性，val 为目标属性的值
  set(target, key, val){
  console.log("到这儿来了");
  return Reflect.set(target, key, val);
  }
  }
  //生成的 newObj 即在 obj 基础上，添加了一个拦截器而已
  let newObj = new Proxy(obj, handler);
  obj.foo() = "bar"; //"到这儿来了"
```

- 4)Proxy 实则就是 Object.defineProperty 的增强版
  ES5 只能定义属性的 属性描述符 && 访问器；而 Proxy 增强到了 13 种（下面只列举几个）

  - 4.1)handler.apply（节流）
    可以让我们拦截一个函数的执行，我们可以将其用在函数节流中： //JS 中函数也是对象

    ```js
    const proxy = (func, time) => {
      let last = 0;
      let handler = {
        apply(target, context, args) {
          let now = +new Date();
          if (now - last > time) {
            last = now;
            Reflect.apply(func, context, args);
          }
        },
      };
      return new Proxy(func, handler);
    };
    //使用
    DOM.addEventListener("mousemove", proxy(func, TIME));
    ```

    - 4.2) handler.construct（单例模式）
      可以拦截通过 new 关键字调用构造函数的操作，我们可以把它用在单例模式中

      ```js
      function proxy(func) {
        let instance;
        let handler = {
          construct(target, args) {
            if (!instance) {
              instance = Reflect.construct(func, args);
            }
            return instance;
          },
        };
        return new Proxy(func, handler);
      }
      //使用
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      const SinglePerson = proxy(Person);
      let person1 = new SinglePerson("yf", 22);
      let person2 = new SinglePerson("xmy", 44); //该实例不会生成，会返回 person1
      person1 === person2; //true
      ```

    - 4.3)handler.defineProperty
      可以拦截这个对象的 Object.defineProperty 操作
      //注意：对象内部的默认的[[SET]]操作(即对这个对象的属性赋值)，会间接触发 defineProperty 和 getOwnPropertyDescriptor 这 2 个【拦截方法】

    - 4.4)Proxy 的其他功能 -实现验证器时，可以将业务逻辑和验证器分离达到解耦 -通过 get，拦截对变量的访问，以实现私有变量 -实现微信 API 的 promise 化

注意：Vue3.0，将用 Proxy 替代 Object.defineProperty，以弥补 Vue 响应式中在对象拦截上的不足。
