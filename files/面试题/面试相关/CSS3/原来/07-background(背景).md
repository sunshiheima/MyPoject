# 主要讲 CSS3 提供的三个有关背景的属性

[参考]: https://juejin.cn/post/6844904046352924680

## 1.background-color 背景颜色

```text
1)单词：background-color: black;
2)十六进制：background-color: #000;
3)RGB 色彩模式：background-color: rgb(0, 0, 0);
```

## 2.background-image 背景图片

```text
1)单张图片: background-image: url('')；
2)多张图片: background-image: url('img1'), url('img2');
3)路径渐变 linear-gradient(可手动设置方向，默认自下向上):
  [1]用角度值指定渐变的方向
  [2]上右下左： [left | right] || [top | bottom]
  [3]color-stop >：< color > [ < percentage > | < length  > ]//TODO:未理解
4)镜像渐变 radial-gradient(详见 MDN )
  [例如]
  background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);
5)重复路径渐变 repeating-linear-gradient
  [例如]
  background-image: repeating-radial-gradient(circle, #90ade4 ,#3350ba 20%);
```

## 3.背景重复 background-repeat

1)基础：background-repeat 除了常见的几个 repeat、repeat-x，repeat-y 以及 no-repeat ；
2)css3 新增：
space：
[背景图小于容器时]：在保证不缩放的前提下尽可能多的重复图片，并等分图片中间的空隙;
[背景图大于容器时]：在不缩放的前提下裁剪图片，只保留在容器内的部分；
round：
[背景图小于容器时]：在尽可能多的重复图片的前提下，拉伸图片以铺满容器;
[背景图大于容器时]：缩小图片以铺满容器，长宽与容器尺寸一致（未按比例缩放，图片极有可能变形）；

## 4.背景固定 background-attachment

```text
1)fixed 背景固定
2)scroll：背景随页面滚动而滚动（默认）
3)扩展属性：element(#id)
  一个特殊的扩展属性，可以将某个元素设置为另一元素的背景。惊不惊喜，意不意外！不过这个属性只有 FireFox 4+ 的浏览器可以使用，并且需要加上浏览器前缀。
```

## 5.background-position

```text
1)​ 百分比（%)
2) 像素（px）
3) 位置（top | right | bottom | left | center）

注意:在只设置一个值的时候，另外一个值默认为 center 或 50% 。
```

## 6.background-size：指定背景的大小

1)contain: 保持图像的纵横比，并将图像缩放成【适合背景定位区域的最大大小】
2)cover: 保持图像的纵横比，并将图像缩放成【完全覆盖背景定位区域的最小大小】
3)auto 100%: 背景高度自适应，并且背景循环(外加了 background-repeat: repeat-x;)
4)400px: 背景宽度固定为 400，高度自适应(外加了 background-position: center;)

## 7.background-clip:

制定背景绘制区域
1)border-box: 从边框开始绘制(默认)
2)padding-box: 从 padding 开始绘制。 不算 border，相当于把 border 那里的背景给裁剪掉！
3)content-box: 只在内容区绘制。 相当于把 padding 和 border 那里的背景给裁剪掉！

## 8.background-origin：

指定 background-position 属性的（0,0）的起始位置
1)border-box: 背景从边框开始(默认)
2)padding-box: 背景从 padding 开始
3)content-box： 背景从 content(内容)开始
