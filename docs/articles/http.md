
## TCP/UDP

### 网络通信

1. 物理层
2. 数据链路层
3. 网络层
4. 传输层`TCP/UDP`
5. 会话层
6. 表示层
7. 应用层

### TCP 基于连接

- [TCP拥塞控制](https://zh.wikipedia.org/wiki/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6)

1. 三次握手
    1. 客户端发送 `SYN` 包到服务端并进入 `SYN-SEND` 状态（第一次🤝）
    2. 服务端同意连接则回复 `SYN+ACK` 包并进入 `SYN-RCVD` 状态（第二次🤝）
    3. 客户端收到后回复 `ACK` 包并进入 `ESTABLISHED` 状态（第三次🤝）
    4. 服务端收到后进入 `ESTABLISHED` 状态，建立连接  
    ------
    - 第三次握手的必要性？
        - ??? 为了防止已失效的报文突然传送到服务端引起错误，解决网络信道不可靠的问题。
    ------

2. 传输确认
    - 丢包问题 & 乱序问题
        - TCP协议为每一个连接建立了发送缓冲区，建立连接后的第一个字节序列号为0，后面每个字节的序列号+1，发送数据时从缓冲区取出一部分数据组成发送报文，在TCP协议头中会附带”序列号和长度“，接受端收到后回复的 ACK 包包含了接收的”序列号和长度“也就是下一包数据的起始序列号。
        - 接收端收到后根据”序列号和长度“重组数据包，如果有丢失可以重发一个 ACK 包到发送端要求发送端重发。
    ------

3. 四次挥手
    1. 客户端发送 FIN 包，表示要关闭连接并进入 FIN-WAIT-1 状态（第一次👋）
    2. 服务端收到后回复 ACK 包并进入 CLOSED-WAIT 状态（第二次👋）
    3. 客户端收到 ACK 包并进入 FIN-WAIT-2 状态
    4. 服务端确认数据已发送完毕后发送 FIN 包并进入 LAST-ACK 状态（第三次👋）
    5. 客户端收到后回复 ACK 包并进入 TIME-WAIT 状态经过超时时间后关闭连接并进入 CLOSED 状态（第四次👋）
    6. 服务端收到 ACK 包后立即进入 CLOSED 状态
    ------
    - 为什么需要 TIME-WAIT 状态？
        - 为了保证对端收到发送的 ACK 包，如果没有超时时间直接关闭连接，当 ACK 包丢失时对端将保持 LAST-ACK 状态无法关闭连接。有超时时间时对端如果未接收到 ACK 包会重发 FIN 包，客户端响应后重发 ACK 包同时刷新超时时间解决这个问题。
    ------

### UDP 基于非连接

1. 稳定性差，可能造成丢包
2. 速度快
3. 隧道网络，如 VPN

## HTTP

### HTTP/1.1

### HTTP/2

在单个`TCP`连接上使用了`多路复用`

- [多路复用](https://zh.wikipedia.org/wiki/%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8)
- [队头阻塞](https://zh.wikipedia.org/wiki/%E9%98%9F%E5%A4%B4%E9%98%BB%E5%A1%9E)

### HTTP/3

- 为了解决`HTTP/2`中存在的`队头阻塞`问题
- QUIC

## 其它

### 浏览器请求并发
`Chrome`/`Firefox`单个域名只能并发请求 6 个资源。

1. `Chrome` 的并发请求数量是不能修改的，因为已经固定写到源码中了，具体可以[查看](https://chromium.googlesource.com/chromium/src/+/65.0.3325.162/net/socket/client_socket_pool_manager.cc#44)。
2. `Firefox` 可以修改，首先在地址栏输入 `about:config`，搜索 `http.max` 关键字，`network.http.max-connections` 为全局 `HTTP` 同时最大的连接数量，默认为 `900`；`network.http.max-persistent-connections-per-server` 为单个域名最大链接数量，默认为 `6`，双击此列可以进行修改。