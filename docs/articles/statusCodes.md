#### 信息响应

#### 成功响应
- 200 OK 成功
- 201 Created 创建了新的资源
- 204 No Content 请求成功但是不需要离开当前页面
- 206 Partial Content 断电续传/分片下载

#### 重定向
- 301
- 302
- 304 Not Modified 携带条件的Get请求且响应内容未改变

#### 客户端响应
- 400 Bad Request 参数错误/语义错误不被服务器理解
- 401 Unauthorized 请求需要用户验证
- 405 Method Not Allowed 请求方法错误
- 429 Too Many Requests 请求频繁

#### 服务端响应
- 500 Server Error 服务器处理错误
- 502 Bad Gateway 网关得到的是错误的响应