Communication

出于安全方面的考虑，运行在同一浏览器中的框架、标签页、窗口间的通信一直都受到了严格的限制。

# 重点

## 1.跨文档消息通信

可以确保运行在同一浏览器中的框架、标签页、窗口间安全的进行跨源通信。 它把 postMessage API 定义为发送消息的标准方式。

## 使用时：

```js
// 1)通过 postMessage 方法发送消息，此方法包含两个参数：要发送的消息内容 && 目标页面的 url
chatFrame.contentWindow.postMessage("Hello, World!", "http://jartto.wang");
// 2)在目标页面当中为 onmessage 事件添加一个事件处理函数。当某个消息到达时，通过检查消息的来源来决定怎样对这条消息进行处理
window.addEventListener("messsage", messageHandler, true);
function messageHandler(e) {
  switch (e.origin) {
    case "friend.example.com":
      //处理消息
      processMessage(e.data);
      break;
    default:
    //消息来源无法识别，消息被忽略
  }
}
```
