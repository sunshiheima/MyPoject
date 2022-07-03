# word-break: 文字

## 1.换行 word-break

1)normal: 默认的换行规则
2)keep-all: 不断词，一句话就是一行
3)break-all: 允许断开单词换行

## 2.换行 word-wrap

1)normal: 单词结束处正常换行
2)break-word: 在长单词或 URL 地址内部进行 换行。

## 3.white-space

```text
1)normal
  连续的空白符会被合并，换行符会被当作空白符来处理。填充 line 盒子时，必要的话会换行。
2)nowrap
  和 normal 一样，连续的空白符会被合并。但文本内的换行无效。
3)pre
  连续的空白符会被保留。在遇到换行符或者<br>元素时才会换行。
4)pre-wrap
  连续的空白符会被保留。在遇到换行符或者<br>元素，或者需要为了填充 line 盒子时才会换行。
5)pre-line
  连续的空白符会被合并。在遇到换行符或者<br>元素，或者需要为了填充 line 盒子时会换行。
```

## 3.文本超出显示 text-overflow

1)ellipsis:超出省略号
2)clip: 简单的裁切

## 4.多行超出省略号(暂时只有 webkit 浏览器支持)：line-clamp

-webkit-line-clamp:2

注意：具体写法是有讲究的！并且可以使得：就算不是在 webkit 内核的浏览器，也可以优雅降级！
