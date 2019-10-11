// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//定义db
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection("shujuku3").update({
    data: {
      name: event.name
    }
  }).then(res => {
    console.log(res)
  }).catch(console.error)
}