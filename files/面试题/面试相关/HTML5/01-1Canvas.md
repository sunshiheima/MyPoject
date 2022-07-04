Canvas(本质上是一个位图画布)

# 重点

## 使用步骤

```text
1)首先获取其上下文(context)
2)接着在上下文中执行动作
3)最后将这些动作应用到上下文中。

可以将 canvas 的这种编辑方式想象成数据库事务：开发人员先发起一个事务、然后执行某些操作、最后提交事务。
```

## --例子--

html 结构：

```html
<canvas id="diagonal" style="border:1px solid;" width="200" height="200">
</canvas>
```

```js
function drawDiagonal() {
  //取得 canvas 元素及其绘图上下文
  var canvas = document.getElementById("diagonal");
  var context = canvas.getContext("2d");
  //用绝对坐标来创建一条路径
  context.beginPath();
  context.moveTo(70, 140);
  context.lintTo(140, 70);
  //将这条线绘制到 canvas 上
  context.stroke();
}
window.addEventListener("load", drawDiagonal, true);
```
