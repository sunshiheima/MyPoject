# 1 performance

# 1.1 performance.now()

返回微秒精度的浮点值--时间戳。
[解决问题]：
Date.now()只是返回毫秒精度的时间戳，如果是执行的速度过快，相邻的 Date.now()并不会表现出差异。
[注意事项]：

- 1.这个在创建上下文之处就开始从 0 开始计时，所以对于不同的上下文参照点是不一样的，不具有共享性。
  使用 performance.timeOrigin 来解决，返回初始化时全局时钟的值。
- 2.幽灵漏洞
  可以执行缓存推断攻击，为了弥补这个漏洞，所有的浏览器选择降低 performance.now()的精度。

```js
var t1 = Date.now()
var t2 = Date.now()

console.log(t2 - t1) //0

var p1 = performance.now()
var p2 = performance.now()

console.log(p2 - p1) //13.532525 微秒精度

var m3 = performance.timeOrigin

console.log(m3 - p1) //1214124.7899
```

# 1.2 performance.mark()

User Timing api 用于记录和分析自定义性能条目。
使用 performance.getEntriesByType('mark')获取,返回的是一个对象数组；

```js
var p1 = performance.mark('sun')
for (let i = 0; i < 1000; i++);
var p2 = performance.mark('sun1')
var m4 = performance.measure('p3', 'p1', 'p2') //用于获取两个标记之间的时间差
console.log(p1)
/* 
{
  detail: null
  duration: 0
  entryType: "mark"
  name: "sun"
  startTime: 102183878.69999981
} 
*/
console.log(m4)
/* 
{
  name: "p3",
  entryType: "measure"
  startTime: 102183878.69999981
  duration: 112312.432423
} 
*/
```

# 1.3 Navigation Timing api

提供了高精度时间戳，用以度量当前页面加载速度。
获取方法：performance.getEntriesByType('navigation');

# 1.4 资源加载速度

获取方法：performance.getEntriesByType('resource');
