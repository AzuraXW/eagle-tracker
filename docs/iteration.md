# 迭代计划
目前SDK已经提供了一部分基础的功能，但还不够完善，现列出大致的迭代计划

## 监控webscoket错误
现已有对JS执行错误，Promise执行错误，Ajax（fetch）请求异常，资源加载失败的监控。但没有对使用websocket过程中产生的异常进行监控处理。

## 用户行为追踪
用户在页面中的行为对于分析bug起着至关重要的作用，单靠错误信息不足以精准的排查错误以及错误产生的原因。可以考虑以日志或者录屏的形式记录用户行为。

## 测速模块
独立出一个单独的测速模块，用于测量页面速度，接口速度，资源速度

## 手动上报
提供自定义日志上报的相关方法。

## 数据抽样与忽略
- 增加数据采样率配置
- 增加数据忽略选项，支持正则表达式与函数
  
## 上报地址
作为一个通用SDK，考虑到可能需要适应不同后台，所以需要细化各种数据的上报地址。

## PV，UV
计划增加PV，UV的上报