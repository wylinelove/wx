// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 1获取参数str
  var str=event.str;
  // 2分析是否有东哥危险字符
  if(!str){
    return {"msg":"err"}
  }
  var idx=str.indexOf("308")
     var msg="ok";
     if(idx !=-1){
       msg="err"
     }
     return {"msg":msg}

  // 3返回err  ok
  }
  
