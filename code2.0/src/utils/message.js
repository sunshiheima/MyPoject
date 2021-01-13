import { Message } from 'element-ui'


// 为了实现Class的私有属性
const $message = Symbol('$message')
/** 
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
class DonMessage {
  success(options, single = true) {
    this[$message]('success', options, single)
  }
  warning(options, single = true) {
    this[$message]('warning', options, single)
  }
  info(options, single = true) {
    this[$message]('info', options, single)
  }
  error(options, single = true) {
    this[$message]('error', options, single)
  }

  [$message](type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        Message[type](options)
      }
    } else {
      Message[type](options)
    }
  }
}
export default DonMessage
