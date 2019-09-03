// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(event.num1+event.num2)
    },2000)
  })
}