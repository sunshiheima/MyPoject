文章链接：https://juejin.im/post/58f558efac502e006c3e5c97
本文包含 DOM、Event、浏览器端优化、数据结构和算法功底的考察。
目标：DOM 是网页构建的基石，熟练掌握各种操作、知晓可能的问题、熟悉优化手段，才能做到在工程实践中从容不迫。

---

# 1.如何修改页面内容？

问题：
页面上有个空的【无序列表】节点，用<ul></ul>表示，要往列表中插入 3 个<li>，每个列表项的文本内容是列表项的插入顺序，取值 1，2，3，如何用原生的 JS 来实现这个需求？
同时约定：为方便获取节点引用，可以根据需要为<ul>节点加上 id 或者 class 属性。
加分点：
变量命名、选择符命名、容错能力(出错则 return;)、最小作用域原则(应该把代码段包在立即执行函数表达式里-IIFE，不产生全局变量，也避免变量名冲突的风险)

综合以上四点的改良版：
(() => {
var ndContainer = document.getElementById('js-list'); //变量命名和选择符命名
if(!ndContainer){ //容错能力
return;
}
for(var i=0; i<3; i++){
var ndItem = document.createElement('li');
ndItem.innerText = i+1;
ndContainer.appendChild(ndItem);
}
})(); //最小作用域原则

面试官会追问：选取节点是否还有其他方法？还有哪些？
document.getElementsByClassName("xxx");
document.getElementsByTagName("xxx");
document.querySelector("#id");
document.querySelectorAll(".id div");

---

2.如何绑定事件
问题：
现在页面上有了内容，接下来添加交互。要当每个<li>被单击的时候 alert 里面的内容，该怎么做？

优化之后的答案：
//第一种，用 let(即 ES6 的块级作用域)
for(let i=0; i<3; i++){ //注意此处是 let
var ndItem = document.createElement('li');
ndItem.innerText = i+1;
ndItem.addEventListener('click', function(){
alert(i); //注意此处是 ndItem.innerText
});
ndContainer.appendChild(ndItem);
}
//第二种，用 addEventListener 的特性：EventListener 里面默认的 this 指向当前节点
for(var i=0; i<3; i++){ //注意此处是 var
var ndItem = document.createElement('li');
ndItem.innerText = i+1;
ndItem.addEventListener('click', function(){
alert(this.innerText); //注意此处是 this.innerText
});
ndContainer.appendChild(ndItem);
}

注意：使用箭头函数会强制改变函数的执行上下文。。。（所以了？到底能不能用箭头函数？）

面试官追问：绑定事件除了 addEventListener 还有其他方式么？如果使用 onclick 会存在什么问题？
HTML、DOM0 级(即 btn.onclick = ...)
问题是只能为某个元素的某个事件(例如点击事件)绑定一个事件处理函数，若绑定多个，则后面的会覆盖掉前面的

---

3.数据量变大之后？
问题：
如果要插入的<li>是 300 个，该怎么解决？
分析：
部分同学会简单粗暴的直接把循环终止条件改为 i<300，这样没有明显的问题，但是这样在 DOM 中注册的事件监听函数会增加 100 倍。
更好的办法：【事件委托】 (即事件代理,Event Delegation)

//使用事件委托能有效的减少事件注册的数量，并且在子节点动态增减时无需修改代码，使用事件委托的代码如下
(() => {
var ndContainer = document.getElementById('js-list');
if(!ndContainer){
return;
}
for(let i=0; i<300; i++){
const ndItem = document.createElement('li');
ndItem.innerText = i+1;
ndContainer.appendChild(ndItem);
}
//将事件委托到容器元素 ndContainer 上
ndContainer.addEventListener('click', function(e){
const target = e.target;
if(target.tagName === 'LI'){
alert(target.innerHTML);
}
})
})()

面试官：标准 DOM 事件的发生流程 -> 事件委托
事件流：即事件捕获 -> 目标元素 -> 事件冒泡，事件冒泡使得事件委托得以实现

---

4.分治的思想
如果要在<ul>中插入 30000 个<li>的长列表，页面体验肯定不再流畅，甚至会出现明显的卡顿感。主要原因是：每次循环都会修改 DOM 结构，外加大循环执行时间过长，浏览器的渲染帧率(FPS)过低。
而实际上，包含 30000 个<li>的长列表，用户不会立即看到全部，大部分都没有渲染的必要。好在现代浏览器提供了 requestAnimationFrame 这个 API 来解决非常耗时的代码对渲染的阻塞问题。

---

综合上面的分析，可以从【减少 DOM 操作次数】、【缩短循环时间】两个方面减少主线程阻塞的时间。

1. 减少 DOM 操作次数： 用【DocumentFragment】
2. 缩短循环时间：用浏览器提供的 requestAnimationFrame 这个 API，即【分治】的思想把 30000 个<li>分批次插入到页面中，每次插入的时机是在页面重新渲染之前。
   但是并不是所有的浏览器都支持这个 API 的。

根据上面两条优化之后的代码:
(() => {
const ndContainer = document.getElementById('js-list');
if(!ndContainer){
return;
}

    const total = 30000;
    const batchSize = 4;	//每批插入的节点次数，越大越卡
    const batchCount = total / batchSize;	//需要批量处理多少次
    let batchDone = 0;	//已经完成的批处理个数

    function appendItems(){
    	//1.下面createDocumentFragment()这个API --- 用于减少DOM操作次数的
    	const fragment = document.createDocumentFragment();
    	for(let i=0; i<batchSize; i++){
    		const ndItem = ducument.createElement('li');
    		ndItem.innerText = (batchDone * batchSize) + i + 1;
    		fragment.appendChild(ndItem);
    	}
    	//每次批处理只修改1次DOM
    	ndContainer.appendChild(fragment);

    	batchDone += 1;
    	//2.实现分批次把<li>插入到页面中，主要见requestAnimationFrame函数
    	doBatchAppend();
    }

    function doBatchAppend(){
    	if(batchDone < batchCount){
    		window.requestAnimationFrame(appendItems);	//注意此处appendIems是上面那个函数！
    	}
    }

    doBatchAppend();	//注意上面，会发现appendItems函数和doBatchAppend函数互相调用。 而入口就是这句，我们先手动调用doBatchAppend函数。

    ndConatiner.addEventListener('click', function(e){
    	const target = e.target;
    	if(target.tagName === 'LI'){
    		alert(target.innerHTML);
    	}
    });

})()

---

5.DOM 树的遍历？
JS 当中的 DOM 可以天然的跟【树】这种数据结构联系起来。

//给出一段 HTML 代码，要求对这颗 DOM 树，期望给出【广度优先遍历(BFS)】的代码实现，遍历到每个节点时，打印出当前节点的类型和类名。
//代码实现中关键属性就是 childNodes 和 children，两者有细微的差别。
//注意：如果是【深度优先的遍历(DFS)】，使用【递归】非常容易写出来；但是【广度优先遍历(BFS)】则需要使用【队列】这种数据结构来管理待遍历的节点。
const traverse = (ndRoot) => {
const queue = [ndRoot];

    while(queue.length){
    	const node = queue.shift();
    	printInfo(node);
    	if(!node.children.length){
    		continue;
    	}
    	//广度优先遍历。。。
    	Array.from(node.children).forEach(x => queue.push(x));
    }

};

const printInfo = (node) => {
console.log(node.tagName, `.${node.className}`);
};

//疑问：querySelector 返回的是什么？也就是上面 traverse 函数的 ndRoot 参数是什么？都说这个 API 返回的是，会返回第一个匹配 CSS 选择器的元素啊，但是我怎么感觉 ndRoot 不只包含一个值。
traverse(document.querySelector('.root'));

//上面的代码尚未完全理解清楚！！！

面试官追问：如果要在打印节点的时候输出节点在树中的层次，该怎么解决？

---

总结：
本文以基本的 DOM 操作为出发点 -> 接下来聊到事件绑定 -> 接下来是渲染性能优化 -> 最后聊到工程师避不开的数据结构和算法
