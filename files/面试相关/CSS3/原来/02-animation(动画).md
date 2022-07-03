# 动画(animation)

主要用于做一个预设的动画，和一些页面交互的效果，效果和过渡一样，让页面不会那么生硬！

---

# 语法：

animation: 动画名称，一个周期花费时间，运动曲线(默认 ease)，动画延迟(默认 0)，播放次数(默认 1)，是否反向播放动画(默认 normal)，是否暂停动画(默认 running)

```css
/* 例 1：执行一次 logo2-line 动画，运动时间 2 秒，运动曲线为 linear */
 {
  animation: logo2-line 2s linear;
}

/* 例 2：2 秒后开始执行一次 logo2-line 动画，运动曲线为 linear，动画延迟 2s */
 {
  animation: logo2-line 2s linear 2s;
}

/* 例 3：无限执行 logo2-line 动画，每次运动时间 2 秒，运动曲线为 linear，并且执行反向动画 */
 {
  animation: logo2-line 2s linear alternate infinite;
}
```

最后：还有一个重要属性
animation-fill-mode: none | forwards | backwards | both;
1)none：不改变默认行为
2)forwards：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）
3)backforwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
4)both：向前或向后填充模式都被应用。

---

这部分的具体示例太多，都很精美！具体见文章：
1.logo 展示动画
2.loading 效果 3.音乐震动条
