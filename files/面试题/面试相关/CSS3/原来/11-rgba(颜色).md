# CSS3 提供了新的颜色表示方法：rgba 和 hsla

## 1.rgba:

rgb 为颜色值，a 为透明度

### 1.1 例如:

color: rgba(255, 00, 00, 1);
background: rgba(00, 00, 00, .5);

## 2.hsla:

h-色相, s-饱和度, l-高度, a-透明度

例如：
color: hsla( 112, 72%, 33%, 0.68);
background-color: hsla( 49, 65%, 60%, 0.68);

## 注意：

使用 HSLA 时，透明度就不会影响到其后代元素，换句话说，元素使用了 HSLA 只会让元素本身具有一定的透明度，而其后代元素不受任何影响
