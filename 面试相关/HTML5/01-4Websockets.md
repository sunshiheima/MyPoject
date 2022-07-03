Websockets

# 重点

## 简介

1. Websocke 是 HTML5 支持的一种新协议，能实现浏览器和服务器的双向通信（全双工通信）
2. 使用 Websocket 时，浏览器需要先主动发出 websocket 连线请求，然后服务器在收到请求之后做出回应，即实现了 websocket 的握手过程。
   此时浏览器和服务器之间就形成了一条快速通道。两者就可以直接将数据传送给对方。

## 注意：

在 websocket 的设计原则当中，定义了一个 http 连接作为 websocket 的开始生命周期，从而保证其与 pre-websocket 世界的完全向后兼容。

## websocket 协议的特点：

```text
1)Header：互相沟通时的 Header 是很小的 -- 大概只有 2Bytes
2)服务器端推送(Server Push)
```

```js
//以下为浏览器端代码
var wsServer = "ws://localhost:8888/Demo";
var websocket = new WebSocket(wsServer);

websocket.onopen = onOpen;
websocket.onclose = onClose;
websocket.onmessage = onMessage;
websocket.onerror = onError;

function onOpen(evt) {
  console.log("Connected to WebSocket server.");
}
function onClose(evt) {
  console.log("Disconnected");
}
function onMessage(evt) {
  console.log("Retrieved data from server: " + evt.data);
}
function onError(evt) {
  console.log("Error occured: " + evt.data);
}
```
