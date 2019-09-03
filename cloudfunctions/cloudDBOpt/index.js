// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
/**
 *  event:{
 *    db:"news"
 *    type:"insert"
 *    data:{
 *      //录入的数据
 *    }
 *  }
 */
exports.main = async (event, context) => {
  try{
    //创建数据库集合对象(集合名字从用户端传送过来)
    const targetDB = db.collection(event.db)
    //录入
    if(event.type == "insert"){
      return await targetDB.add({
        data: event.data
      })
    }
    //更新
    if(event.type == "update"){
      return await targetDB.doc(event.indexKey).update({
        data: event.data
      })
    }
    //删除
    if(event.type == "delete"){
      return await targetDB.where(event.condition).remove()
    }
    //获取
    /**
     * event{
     *  db:"news",
     *  type:"get",
     *  condition:{},
     *  skip:0,
     *  limit:20
     * }
     */
    if(event.type == "get"){
      //云端数据返回每次只能20条
      return await targetDB.where(event.condition).skip(20*event.skip).limit(event.limit).get()
    }
  }catch(e){
    console.error(e)
  }
}