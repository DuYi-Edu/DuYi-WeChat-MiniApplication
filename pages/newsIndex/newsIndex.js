// pages/newsIndex/newsIndex.js
Page({
  news:{
  newsTitle: "",
  newsDescription: "",
  newsAuthor: "",
  newsContent: "",
  newsSource: ""
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 获取表单数据
   */
  formSubmit(e){
    let that = this
    //接受数据
    this.news.newsTitle = e.detail.value.newsTitle
    this.news.newsDescription = e.detail.value.newsDescription
    this.news.newsAuthor = e.detail.value.newsAuthor
    this.news.newsContent = e.detail.value.newsContent
    this.news.newsSource = e.detail.value.newsSource
    //错误验证
    if(this.validate(this.news)) return
    //传送数据给云端做数据录入
    //this.addCloudNewsData(this.news)
    this.addCloudNewsDataByDBCloudOpt(this.news)
  },

  /**
   * 综合调用
   */
  addCloudNewsDataByDBCloudOpt(news){
   let sendData= {
     db:"news",
     type:"insert",
     data:news
   }
    wx.cloud.callFunction({
      name: "cloudDBOpt",
      data: sendData,
      complete:res=>{
          console.log('result',res)
          //_id存在则表示录入成功
          if(res.result._id){
            setTimeout(()=>{
              wx.switchTab({
                url: '/pages/list/list',
              })
            },500)
            wx.showToast({
              title: '数据录入成功',
              duration:500
            })
          }
        }
      })
  },

  /**
   * 添加云端新闻数据
   */
  addCloudNewsData(news){
    wx.cloud.callFunction({
      name: "cloudNewsAdd",
      data: news,
      complete: res=>{
        //输出数据存储后的提示，包括错误提示
        console.log('result',res)
        return
        if(!res.result.isSuccess){
          //云端返回有错误
          console.log(res.result.errMessage)
          wx.showModal({
            title: '警告',
            content: '操作终止',
          })
        }else{
          //正常处理
          console.log(res.result.data)
        }
      }
    })
  },

  /**
   * 验证用户输入
   */
  validate(event){
    if (event.newsDescription === "" || event.newsDescription == null || event.newsAuthor === "" || event.newsAuthor == null || event.newsContent === "" || event.newsContent == null || event.newsSource === "" || event.newsSource == null){
      wx.showToast({
        title:"数据都必须填写",
        icon:'none'
      })
      return true
    }else{
      return false
    }
  }
})