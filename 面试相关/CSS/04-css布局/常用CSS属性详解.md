# margin 详解：

    默认值是0
    1.auto             浏览器计算外边距
    2.length           以具体单位计的外边距值，比如像素、厘米等。
    3.%                基于父元素的宽度的百分比的外边距
    4.inherit          从父元素继承外边距

    注意：块级元素的垂直相邻外边距会合并，而行内元素padding:top、left、bottom、right都生效，margin只有左右生效（chrome浏览器测试结果）

## 注意：子元素设置 margin-top 会对父元素造成影响：

     所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享之。毗邻的定义为：同级或者嵌套的盒元素，并且它们之间没有非空内容、Padding或Border分隔。

### 解决办法：

1. 父级或子元素使用浮动或者绝对定位 absolute
   浮动或绝对定位不参与 margin 的折叠
2. 父级 overflow:hidden;
3. 父级设置 padding（破坏非空白的折叠条件）
4. 父级设置 borde

# position 详解:（会使元素脱离文档流？导致不一定能撑起父元素高度？绝对定位布局在不等高的时候也会对下面盒子排布产生影响？）

1).static(默认值) 没有定位，元素出现在正常流中（忽略 top/bottom/left/right 或者 z-index 声明
2).absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 top/bottom/left/right 属性进行规定，脱离文本流，随着页面滚动。
3).fixed 生成固定定位的元素，相对于浏览器窗口进行定位。元素位置通过 top/bottom/left/right 属性进行规定。脱离文本流，不随着页面滚动；
4).relative 生成相对定位的元素，相对于其正常位置进行定位，不脱离文本流；
5).inherit 从父元素继承 position 属性的值

# transform 详解：

这是一个 CSS3 属性，其属性值可选的有很多，还带 2D/3D 旋转等功能，不一一列出了。
移动端动画卡顿使用：transform-style；开启 gpu 加速；

# 表格详解(display: table/table-cell)

## border-spacing: 设置间距

### 优点：

适用于宽高度未知的情况！兼容性好。

### 缺点：

```text
1)设置 table-cell 的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置 display: table;才生效
2)table-cell 不感知 margin，在父元素上设置 table-row 等属性，也会使其不感知 height；
3)设置 float 或 position 会对默认布局造成破坏，可以考虑为之增加一个父 div，定义 float 等属性
4)内容溢出时会自动撑开父元素
```

# flex 布局：只要是用到了 flex 属性的地方都要先加一句 display: flex;

flex 在 PC 端兼容性不好，但是在移动端 Android4+的兼容性还是可以的。
移动端兼容性允许的情况下能用 flex 就用 flex，务必带上兼容，也可用 Autoprefixer

# 会导致脱离文档流的两个属性：float 和 position-absolute/fixed

# float 详解：

## 注意：

```text
1.如果前面的元素采用了 float: left;布局 && 后面的元素不写 clear: both;清除浮动
那么后面的那个元素会被遮挡，即使设置了宽高背景颜色都还是看不到它的存在。
2.使用了 float 之后，需要手动清除浮动，否则会产生高度塌陷！
如果多列布局中，子元素们是百分比平分的话，宽度不能设置 margin，否则占位超出父元素宽度，会换行显示
```

# background:

background-clip: content-box; //背景色从内容开始绘制
