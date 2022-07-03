# reflect: 反射 或者 倒影

## 语法：

-webkit-box-reflect: 方向[ above-上 | below-下 | right-右 | left-左]，偏移量，遮罩图片

```html
<p>下倒影</p>
<p class="reflect-bottom-p"><img src="test.jpg" class="reflect-bottom" /></p>
```

```css
/* 1.下倒影 */
.reflect-bottom-p{
padding-bottom: 300px;
}
.reflect-bottom{
-webkit-box-reflect: below;
}

/* 2.右倒影(加偏移) */
.reflect-right-translate{
-webkit-box-reflect: right 10px;
}

/* 3.下倒影(加渐变) */
.reflect-bottom-mask{
-webkit box-reflect: below 0 linear-gradient(transparent, white);
}

/* 4.下倒影(加图片遮罩) */

.reflect-bottom-img{
	-webkit-box-reflect: below 0 url('shou.png');
}
```
