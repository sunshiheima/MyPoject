[元素优先级]('https://juejin.im/post/6844903709772611592')

# 基本选择器

```text
id  id 选择器
.   类选择器
el  标签选择器
selector1,...,selectorN   群组选择器
*   配(通用)
```

# 层次选择器

```text
E F   E 元素下面的后代元素 F
E>F   E 元素下面的第一层子元素 F
E+F   紧贴在 E 元素之后 F 元素（同级别 兄弟）
E~F   E 元素之后所有兄弟元素 F（同级别 兄弟）
```

## 伪类

### 动态伪类选择器

```text
E:link     a 在未被访问前的样式
E:visited  a 在访问后的样式
E:hover   鼠标悬停样式
E:active  鼠标按下没有释放时候的样式
E:focus   聚焦
```

### 目标为类选择器

E:target 鼠标选中的文字样式

### 结构伪类选择器（重点）

```text
E:first-child   父元素下的第一个子元素
E:last-child  父元素下的最后个子元素
E:nth-child(n)  父元素下的第 n 个子元素
E:nth-last-child(n)   父元素下倒数第 n 个子元素

E:first-of-type   父元素下指定类型的第一个子元素
E:last-of-type  父元素下指定类型的最后一个子元素
E:nth-of-type(n)  父元素下指定类型的第 n 个子元素
E:nth-last-of-type(n)   父元素下指定类型的倒数第 n 个子元素
E:only-of-type  父元素下唯一该类型的子元素
E:empty   没有子元素
```

### 否定伪类选择器

E:not(selector) 除了 selector

# 伪元素

```text
::first-letter  第一个字母
::first-line  第一行
::before  ...之前
::after   ...之后
::selection   选中文本
::placeholder input提示
```

# 属性选择器

```text
E[att]  包含属性名为 attr 的元素
E[att="val"]    属性名为 attr，值为 val 的元素
E[att~="ccc"]   属性名为 attr，值为 val，空格分隔
E[att^="val"]   属性名为 attr，值以 val 开头
E[att$="val"]   属性名为 attr，值以 val 结尾
E[att*="val"]   属性名为 attr，值包含 val
E[att|="val"]   属性名为 attr，值以 val 开头，分隔符为“-”
```

# 选择器优先级

!important > 行内样式 > #id > (类选择器/属性选择器/伪类) > (tag/微元素） > \* > 继承 > 默认
在选择器优先级相同的情况下，后设置覆盖新设置的
