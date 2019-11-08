// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// 1创建一个云函数，
exports.main = async (event, context) => {
  // 2完成两个整型的数值相加event.i event.j
  // 3返回js对象{"sum":3}
  return {
    "sum": event.i + event.j
  }
}