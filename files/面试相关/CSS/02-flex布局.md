# 重点

## 相当出名的阮一峰 flex

https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

## 1.flex 的背景：

原来 CSS 标准提供的三种定位方案：普通流、浮动 float、定位 position ----> 现在：flex（更方便）
注意：设为 Flex 布局以后，子元素的 float、clear、vertical-align 属性将失效

## 2.flex 的核心概念就是：

-容器：包括外层的父容器 和 内层的子容器。 -轴：包括主轴 和 交叉轴。

## 3. flex 布局涉及到 12 个 CSS 属性（不含 display: flex）

//父容器属性
-justify-content：设置子容器如何沿主轴排列(即水平方向上)
-align-items：设置子容器如何沿交叉轴排列(即垂直方向上)
-flex-direction：决定主轴的方向
-flex-wrap：设置换行方式
-flex-flow: 是 flex-direction 和 flex-wrap 的简写
-align-content：多行沿交叉轴对齐
//子容器属性
-align-self：单独设置自己如何沿交叉轴排列
-flex-grow：设置扩展比例（即子容器弹性伸展的比例）
-flex-shrink：设置收缩比例（即子容器弹性收缩的排列）
-flex-basis：设置基准大小（即在不伸缩的情况下子容器得原始尺寸）。
-flex: 是以上三个属性的缩写
-order：设置排列顺序（改变子容器的排列顺序）

## 4.常用的属性（父容器子容器各两个）

//父容器
justify-content: 设置子容器如何沿主轴排列(即水平方向上) flex-start/flex-end/center/space-between(相切)/space-around
align-items: 设置子容器如何沿交叉轴排列(即垂直方向上) flex-start/flex-end/center/baseline/stretch
//子容器
align-self: 单独设置自己如何沿交叉轴排列
flex: 在主轴上如何伸缩, flex 实则是多个属性(flex-grow / flex-shrink / flex-basis)的缩写
详情：
flex-grow 项目的扩大比例，值类型为 number。
默认为 0，即如果存在剩余空间，也不放大。
flex-shrink 项目的缩小比例，值类型为 number。
默认为 1，即如果空间不足，该项目将缩小。
flex-basis 在分配多余空间之前，项目占据的主轴空间(main size)，值类型为 length（即可以是 px/em/...为单位的具体长度）
默认为 auto，即项目的本来大小。
flex 是上面三个属性的简写，默认值为 0 1 auto。

### 四个快捷值：

#### flex:initial

表示默认的 flex 状态，无需设置，适合小控件元素的分布布局，或者某一项内容动态变化的布局；

#### 0(0 1 0%)

适用场景较少，适合设置在替换元素的父元素上；

#### 1(1 1 0%)

适合等分布局；

#### auto(1 1 auto)

适合基于内容动态适配的布局；

#### none(0 0 auto)

适用于不换行的内容固定或者较少的小控件元素上，如按钮。

flex-direction 属性决定主轴的方向，交叉轴的方向由主轴确定 row/column/row-reverse/column-reverse

Flex 是发生在父容器和子容器之间的布局关系的。
应用 flex 布局，那么父容器一定设置 display: flex; 子容器要“占有”并且“瓜分”父容器的空间;
重！子容器如何占有、瓜分的策略就是弹性布局的策略

-剩余空间、溢出空间
-flex-grow 和 flex-shink 是怎么计算的？
-flex-basis 和 width 有什么关系和区别？

---

【总结】 -如果有剩余空间，会根据 flex-grow 的设置进行拉伸；无剩余空间则会忽略 flex-grow -如果有溢出空间，会根据 flex-shrink 的设置进行压缩；无溢出空间则会忽略 flex-shrink -若未设置 flex-shrink 和 flex-grow，则会展示 width 指定的宽度；若设置了 flex-basis，则按照 flex-basis 展示实际宽度（优先级见下 flex-basis 部分）

【重】
flex: flex-grow flex-shrink flex-basis
//默认值
flex: 0 1 auto
//通常使用
flex: 1 0 auto -三栏布局中会将左右两栏定宽，中间一栏设置 flex: 1(即 flex-grow: 1)，表示占满剩余宽度 -通常我们不希望子元素被压缩，所以将 flex-shrink 设置为 0

---

【flex-grow】
//MDN：定义弹性盒子项(flex-item)的拉伸因子，默认值为 0

剩余空间：子容器在父容器的“主轴”上还有多少空间可以“瓜分”。
定义了子容器的瓜分剩余空间的比例，默认为 0，即如果存在剩余空间，也不会去瓜分。

例如： -父容器宽度为 500px
三个子容器：a 宽度为 100px，b 宽度为 150px，c 宽度为 100px
那么父容器的剩余空间就为 150px
-flex-grow 的值可以为小数（总和小于等于 1）
将 a 的 flex-grow 设置为 0.3，那么 a 实际宽度则为 100px+150*0.3 => 145px
将 b 的 flex-grow 设置为 0.3，那么 b 实际宽度则为 150px+150*0.3 => 195px
将 c 的 flex-grow 设置为 0.4，那么 c 实际宽度则为 100px+150*0.4 => 160px
-flex-grow 的值可以为整数（总和小于等于 1）
将 a 的 flex-grow 设置为 1，那么 a 实际宽度则为 100px+150*1/6
将 b 的 flex-grow 设置为 2，那么 b 实际宽度则为 150px+150*2/6
将 c 的 flex-grow 设置为 3，那么 c 实际宽度则为 100px+150*3/6

---

【flex-shrink】
//MDN：指定了 flex 元素的收缩规则，默认值是 1

溢出空间：如果子容器宽度超过父容器宽度，超过的那部分空间的宽度就是溢出空间
如果子容器宽度超过父容器宽度，即使是设置了 flex-grow，但是由于没有剩余空间，就分不到剩余空间了。
这时候有两个办法：换行(flex 默认不换行) && 压缩(flex-shrink 属性来定义压缩方式)
//如果子容器没有超出父容器，设置 flex-shrink 无效

例如： -父容器宽度为 500px
三个子容器：a 宽度为 300px，b 宽度为 150px，c 宽度为 200px
那么父容器的溢出空间就为 150px -将 a,b,c 的 flex-grow 分别设置为 1,2,3
//计算总压缩权重
sum = 300*1 + 150*2 + 200*3 = 1200
//计算每个元素压缩率
s1 = 300*1 / 1200 = 0.25
s2 = 150*2 / 1200 = 0.25
s3 = 200*3 / 1200 = 0.5
//计算每个子容器的真实宽度
a 的实际宽度则为 300px-0.25*150px
b 的实际宽度则为 150px-0.25*150px
c 的实际宽度则为 200px-0.5\*150px

---

【flex-basis】
//MDN：指定了 flex 元素在主轴方向上的初始大小，默认值是 auto

注意：一旦 flex-item 放进 flex 容器，并不能保证能够按照 flex-basis 设置的大小展示。
优先级：max-width/min-width > flex-basis > width > box 的大小?
