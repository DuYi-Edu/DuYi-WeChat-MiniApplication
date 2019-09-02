// pages/requestDemo/requestDemo.js
Page({
  requestUrl:'https://www.baidu.com/s?w=苹果',
  requestTask: '',
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 数据请求
   */
  requestOpt(){
    let that = this
    //request操作
    this.requestTask =  wx.request({
      url: this.requestUrl,
      data:{},
      header:{'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success(res){
        if(res.statusCode == 200){
          console.log('[success]', res.data)
        }
      },
      fail(res){
        console.log('[fail]', res)
      },
      complete(res){
        console.log('[complete]', res)
      }
    })
  },

/**
 *  请求终止
 */
  requestAbort(){
    this.requestTask.abort()
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