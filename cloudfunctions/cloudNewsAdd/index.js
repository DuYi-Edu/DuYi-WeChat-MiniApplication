// 云函数入口文件
const cloud = require('wx-server-sdk')
//云初始化操作
cloud.init()
//创建云数据库对象
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let dataResult = {
    isSuccess: 1 ,//1代表操作成功 0代表操作失败
    errMessage: '',//1不填写，0 填写错误代码
    data:{},//1填写返回内容，0不填写
  }
  //接受数据
  let news = {
    newsTitleCloud: event.newsTitle,
    newsDescriptionCloud: event.newsDescription,
    newsAuthorCloud: event.newsAuthor,
    newsContentCloud: event.newsContent,
    newsSourceCloud: event.newsSource
  }
  //验证数据
  if (news.newsTitleCloud === "" || news.newsTitleCloud === null || news.newsDescriptionCloud === "" || news.newsDescriptionCloud === null || news.newsAuthorCloud === "" || news.newsAuthorCloud === null || news.newsContentCloud === "" || news.newsContentCloud === null || news.newsSourceCloud === "" || news.newsSourceCloud === null){
    dataResult.isSuccess = 0
    dataResult.errMessage = "传输数据为空"
  }else{
    //数据库的操作
    return await db.collection("news").add({
      data:news
    })
  }

}

