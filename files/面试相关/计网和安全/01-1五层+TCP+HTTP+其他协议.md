# 1 计网：（五层+其他协议）

https://juejin.im/post/5ad7e6c35188252ebd06acfa

- 1)计算机网络体系结构：OSI 体系结构、TCP/IP 体系结构、五层体系结构
- 2)应用层：HTTP 协议、Cookie 和 Session、Cookie 和 Token
- 3)传输层：TCP 协议 + UDP 协议 + Socket（套接字，即编程调用接口(API)，不是一个协议，属于传输层；通过 socket，才能在 android 平台上进行 TCP/IP 开发）
- 4)网络层：IP 地址(IPv4 地址) + ICMP 协议（Ping 过程）
- 5)网际接口层：路由器和交换机的区别

---

# 2 TCP：

https://www.jianshu.com/p/65605622234b

- 1)TCP/UDP 简介（特点、优缺点、应用场景、报文段格式）
- 2)TCP 三次握手建立连接（为什么是三次握手而非两次？SYN 泛洪攻击？）
- 3)TCP 四次挥手释放连接（为什么是四次挥手而非两次？为什么客户端关闭连接需要等待 2MSL 时间？）
- 4)TCP 如何保证无差错传输
  保证传输信道不出差错：出错重传（即自动重传协议 ARQ-内含滑动窗口）
  ARQ：停等式 ARQ、后退 N 帧 ARQ、选择重传 ARQ
  保证发送接收效率匹配：接收方可通知发送方降低发送数据的速率（流量控制协议 && 拥塞控制协议）
  拥塞控制协议：慢开始&拥塞避免算法、快重传&快恢复算法

---

HTTP：
https://www.jianshu.com/p/a6d086a3997d
-HTTP 简介（特点、工作方式）
-HTTP 报文结构
http 请求报文：请求行(请求方法、url、协议版本) + 请求头(常用的请求头) + 请求体
http 响应报文：状态行(协议版本、状态码、状态码描述) + 响应头(常用的响应头) + 响应体
请求/响应通用头部
-HTTP1.0 和 HTTP1.1 的区别（HTTP 处理长连接的方式）
-HTTP2.0 的新特性（HTTP2.0 多路复用基本原理以及解决的问题）
-HTTP3.0
-HTTP 和 HTTPS 的区别(https=http+SSL/TLS；https 是有状态的)
-HTTPS 是如何进行加密的
