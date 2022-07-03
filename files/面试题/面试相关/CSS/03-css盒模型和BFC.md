# 面试回答盒模型

参照：https://juejin.cn/post/6939559485606199309

## content-box：标准盒模型（默认值）

```css
div{
  box-sizing: content-box;
  width = content width
  height = content height

  /* 元素的大小，会随着border和padding的变化进行绘制 */
}
```

## border-box：IE 盒模型

```css
div{
  box-sizing: border-box;
  width = content width + border + padding
  height = content height + border + padding

/* 元素的content，包含了 border 和 padding
content的大小会随着border、padding的增大减小 */
}
```

# css 布局基本单位

参考：https://juejin.cn/post/7072174649735381029

简单来讲，我们看到的所有页面都是由一个个 Box 组合而成的，元素的类型和 display 属性决定了 Box 的类型。

## block-level Box：

当元素的 CSS 属性 display 为 block, list-item 或 table 时，它是块级元素 block-level 。块级元素（比如<p>)视觉上呈现为块，竖直排列。
每个块级元素至少生成一个块级盒（block-level Box）参与 BFC ，称为主要块级盒(principal block-level box)。一些元素，比如<li>，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒。

## Inline-level Box：

当元素的 CSS 属性 display 的计算值为 inline, inline-block 或 inline-table 时，称它为行内级元素。视觉上它将内容与其它行内级元素排列为多行。典型的如段落内容，有文本或图片，都是行内级元素。行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文 IFC 。

## flex container：

当元素的 CSS 属性 display 的计算值为 flex 或 inline-flex ，称它为弹性容器。display:flex 这个值会导致一个元素生成一个块级（block-level）弹性容器框。display:inline-flex 这个值会导致一个元素生成一个行内级（inline-level）弹性容器框。

## grid container：

当元素的 CSS 属性 display 的计算值为 grid 或 inline-grid，称它为栅格容器。

# BFC

BFC 全称：Block Formatting Context， 名为 块级格式化上下文。
W3C 官方解释为：BFC 它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，Block Formatting Context 提供了一个环境，HTML 在这个环境中按照一定的规则进行布局。

## 如何触发 BFC？

```text
1.根元素或其它包含它的元素
2.浮动 float: left/right/inherit
3.绝对定位元素 position: absolute/fixed
4.行内块 display: inline-block
5.表格单元格 display: table-cell
6.表格标题 display: table-caption
7.溢出元素 overflow: hidden/scroll/auto/inherit
8.弹性盒子 display: flex/inline-flex
```

## BFC 布局规则

```text
1.内部的 Box 会在垂直方向，一个接一个地放置。
2.Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。 3.每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4.BFC 的区域不会与 float box 重叠。
5.BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6.计算 BFC 的高度时，浮动元素也参与计算
```

## 3.BFC 的应用

```text
1.实现自试应两栏布局（避免某元素被浮动元素覆盖）：同级 BFC 不会重叠。
2.清除浮动：BFC 内部的 BFC 会参与高度计算。
3.margin塌陷：属于同一个 BFC 的两个相邻盒的 margin 会发生重叠，位于不同 BFC 当中的两个盒的 margin 不会发生重叠
```

# IFC

IFC 全称：Inline Formatting Context，名为行级格式化上下文

## 如何触发 IFC？

块级元素中仅包含内联级别元素

## IFC 布局规则

```text
1.在一个IFC内，子元素是水平方向横向排列的，并且垂直方向起点为元素顶部。
2.子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。
3.在垂直方向上，子元素会以不同形式来对齐（vertical-align）
4.能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
5.IFC中的line box一般左右边贴紧其包含块，但float元素会优先排列。
6.IFC中的line box高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。
7.当 inline boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。
8.当一个inline box超过父元素的宽度时，它会被分割成多个boxes，这些boxes分布在多个line box中。如果子元素未设置强制换行的情况下，inline box将不可被分割，将会溢出父元素。
```

## IFC 应用场景

### 1.元素水平居中

当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。

### 2.多行文本水平垂直居中

创建一个 IFC，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

# GFC

GFC 全称：Grids Formatting Contexts，名为网格格式上下文

## 简介：

CSS3 引入的一种新的布局模型——Grids 网格布局，目前暂未推广使用，使用频率较低，简单了解即可。
Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。
Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

## 如何触发 GFC？

当为一个元素设置 display 值为 grid 或者 inline-grid 的时候，此元素将会获得一个独立的渲染区域。

## GFC 布局规则

通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间（具体可以在 MDN 上查看）

## GFC 应用场景

### 1.任意魔方布局

这个布局使用用 GFC 可以轻松实现自由拼接效果，换成其他方法，一般会使用相对/绝对定位，或者 flex 来实现自由拼接效果，复杂程度将会提升好几个等级。

# FFC

FFC 全称：Flex Formatting Contexts，名为弹性格式上下文

## 简介：

CSS3 引入了一种新的布局模型——flex 布局。
flex 是 flexible box 的缩写，一般称之为弹性盒模型。和 CSS3 其他属性不一样，flexbox 并不是一个属性，而是一个模块，包括多个 CSS3 属性。flex 布局提供一种更加有效的方式来进行容器内的项目布局，以适应各种类型的显示设备和各种尺寸的屏幕，使用 Flex box 布局实际上就是声明创建了 FFC(自适应格式上下文)

## 如何触发 FFC？

当 display 的值为 flex 或 inline-flex 时，将生成弹性容器（Flex Containers）, 一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）

## FFC 布局规则

设置为 flex 的容器被渲染为一个块级元素
设置为 inline-flex 的容器被渲染为一个行内元素
弹性容器中的每一个子元素都是一个弹性项目。弹性项目可以是任意数量的。弹性容器外和弹性项目内的一切元素都不受影响。简单地说，Flexbox 定义了弹性容器内弹性项目该如何布局

**⚠️ 注意：**FFC 布局中，float、clear、vertical-align 属性不会生效。
Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

## FFC 应用场景

这里只介绍它对于其它布局所相对来说更方便的特点，其实 flex 布局现在是非常普遍的，很多前端人员都喜欢用 flex 来写页面布局，操作方便且灵活，兼容性好。

### 1.自动撑开剩余高度/宽度

看一个经典两栏布局：左边为侧边导航栏，右边为内容区域，用我们之前的常规布局，可能就需要使用到 css 的 calc 方法来动态计算剩余填充宽度了，但如果使用 flex 布局的话，只需要一个属性就能解决这个问题.

# 定位方案

决定了盒的排布，定位方案有三种：普通流(/常规流/正常布局流)、浮动(float)、绝对定位(position)
//盒的排布(/布局)：即设置各盒子在普通流、周边元素、父容器、主视口/窗口的位置
//如何实现：我们可以通过给单一的盒子设置定位，来决定盒子的位置 -普通流：即 position 为 static/relative，且 float 为 none 时
所有的盒一个接一个排列，BFC 中，盒子会竖着排列；IFC 中，盒子会横着排列
静态定位中(position 为 static)，盒的位置就是普通流里的默认位置
相对定位中(position 为 relative)，盒的偏移位置由 top、right、bottom、left 定义。【即使有偏移，仍然保留原有的位置，而不被其他元素占有】 -浮动：即 float 不为 none 时
浮动定位中，盒子称为”浮动盒“
浮动盒会脱离普通流，浮动到当前行的开头或结尾；普通流会环绕在浮动盒的周围，除非设置 clear 属性 -绝对定位：即 position 为 absolute/fixed 时
盒会从普通流中移除，不会影响其他普通流的布局
position 为 absolute 的盒，是相对于最近的一个 relative/fixed/absolute 的父元素，如果没有则相对于 body
position 为 fixed 的盒，是相对于浏览器视窗
