// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let cloudNum1 = event.num1
  let cloudNum2 = event.num2
  if(cloudNum1 == "" || cloudNum2 == ""){
    return "num param is error"
  }
  let opt = event.opt
  let result = 0
  if(opt == "+"){
    result = parseInt(cloudNum1) + parseInt(cloudNum2)
  }else if(opt == "-"){
    result = cloudNum1 - cloudNum2
  } else if (opt == "*") {
    result = cloudNum1 * cloudNum2
  } else  {
    result = cloudNum1 / cloudNum2
  }
  return result
}