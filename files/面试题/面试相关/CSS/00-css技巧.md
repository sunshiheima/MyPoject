# 1.让元素占满整个屏幕（通常就是遮罩）

<div class="modal-wrapper">
    <div class="mask"></div>
</div>

```css
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
}
```

## 注意：

-mask 必须是被包裹的(即不能是 body 的直接子元素) -外层元素的定位无论设置成什么(relative/absolute/fixed)，都不会影响 mask 遮罩的效果！

# 2.画一条 0.5px 的直线（考察的是 css3 的 transform） //实验出现问题

height: 1px;
transform: scale(0.5);

# 3.画一个三角形 //已实验成功

```css
.a {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: transparent #0099cc transparent transparent;
  transform: rotate(90deg);
}
```

<div class="a"></div>

# 4.矫正位置

position: relative;
top/bottom/left/right 来调整位置。
注意：
因为 position 为 relative 的元素依旧会占据原来的位置，因此不会影响到其他元素的布局（除非超出了它能活动的范围）。

# 5.样式初始化

```css
- {
  margin: 0;
  padding: 0;
  box-sizing: border-box; //不建议
  font-family: Arial;
  font-weight: 100;
}
```

# 6.给 ul 加上 background 后颜色不变 -给 ul 加个高度背景就会出现 -结束的</ul>前面加个清除浮动的属性 <div style="clear:both"></div>

# 7.扩大可点击区域（下面以按钮为例）

```css
.button {
  position: relative;
}
.button::after {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
}
```

# 8.文字溢出部分用...代替

```css
h4 {
  white-space: nowrap; //文本不换行
  oveflow: hidden; //溢出部分隐藏
  text-overflow: ellipsis; //溢出部分用...代替
}
```
