interface IBasicErrorLog {
  /**
  * 页面标题
  */
  title: string
  /**
   * 错误类型
   */
  errorType: 'js-error' | 'promise-error' | 'api-error'
  /**
   * 发生错误的时间戳
   */
  timestamp: number
  /**
   * 发生错误页面的路径
   */
  url: string
  /**
   * 捕获到错误的事件
   */
  mechanism: 'onerror' | 'onunhandledrejection' | 'onloadend',
  /**
   * 错误的标识码
   */
  errorUid: string
}

interface IJsErrorLog extends IBasicErrorLog {
  /**
   * 发生错误的代码文件
   */
  filename: string
  /**
   * 具体错误信息
   */
  message: string
  /**
   * js错误类型 类似TypeError SyntaxError
   */
  type: string
  /**
   * 错误堆栈
   */
  stack: StackTrace.StackFrame[],
}

interface IPromiseErrorLog extends IBasicErrorLog {
  type: string
  /**
   * promise被拒绝的原因
   */
  reason: string
}

interface IHttplog {
  method: string;
  url: string | URL;
  body: Document | XMLHttpRequestBodyInit | null | undefined | ReadableStream;
  requestTime: number;
  responseTime: number;
  status: number;
  statusText: string;
  response?: any;
}

interface IHttpErrorLog extends IBasicErrorLog {
  meta: IHttplog
}

/** 统一错误信息类型 */
type IErrorLog = IJsErrorLog | IPromiseErrorLog | IHttpErrorLog

interface ITrackerOption {
  /**
   * 是否开启错误监控
   */
  enable: boolean
  concat: boolean
  /**
   * 错误处理间隔时间
   */
  delay: number
  /**
   * 异常报错数量限制
   */
  maxError: number
  /**
   * 采样率
   */
  sampling: number
}