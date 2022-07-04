requestAnimationFrame

1)浏览器可以优化并行的动画动作，将它们更合理的重新排列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果。

2)比如，通过 requestAnimationFrame()，JS 动画能够和 CSS 动画/变幻/SVG SMIL 动画同步发生。
另外，如果在一个浏览器标签页里运行一个动画，当这个标签不可见时，浏览器会暂停它，这会减少 CPU、内存的压力，节省电池电量。

3)用法

```js
window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
(function animloop() {
  requestAnimationFrame(animloop);
  render();
})();
```
