Geolocation
参照：https://juejin.cn/post/7088267078759071774

# 用法：

```text
1)请求一个位置信息，如果用户同意，浏览器就会返回位置信息，该位置信息是支持 HTML5 地理定位功能的底层设备提供给浏览器的。

2)位置信息由纬度/经度坐标和一些其他的元数据组成，有了这些位置信息就可以构建引人注目的位置感知类应用程序。

3)两种类型的定位请求 api：【单次定位请求】和【重复性的位置更新请求】
```

# 示例代码:

```js
window.addEventListener("load", loadDemo, true);
function loadDemo() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateLocation, handleLocationError, {
      maximumAge: 20000,
    });
  }
}
function updateLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var accuracy = position.coords.accuracy;
  var timestamp = position.timestamp;
}
```
