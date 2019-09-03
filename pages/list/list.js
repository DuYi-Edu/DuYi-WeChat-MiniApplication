
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 删除数据
   */
  delNews(e){
    let that = this
    //获取数据
    let newsId = e.currentTarget.dataset.id
    //云变量设定
    let sendData = {
      db: "news",
      type: "delete",
      condition: {
        _id: newsId
      }
    }
    //操作提示
    wx.showModal({
      title: '警告',
      content: '正在删除信息，确定？',
      success(res){
        if(res.cancel) return
         //云端删除数据
         that.delCloudFunction(sendData)
      }
    })
  },

  /**
   * 
   */
  delCloudFunction(sendData){
    var that = this
    wx.cloud.callFunction({
      name: "cloudDBOpt",
      data: sendData,
      complete: res => {
        console.log(res)
        that.getNewsList()
      }
    })
  },

  /**
   * 获取新闻列表
   */
  getNewsList(){
    let that = this
    let sendData={
      db: "news",
      type: "get",
      condition: {},
      skip: 0,
      limit: 20
    }
    wx.cloud.callFunction({
      name:"cloudDBOpt",
      data: sendData,
      complete: res => {
        wx.hideLoading()
        that.setData({
          listData: res.result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中...',
    })
    this.getNewsList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})