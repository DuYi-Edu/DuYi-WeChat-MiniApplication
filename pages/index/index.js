// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 数据分析
   */
  reportAnalytics(){
    wx.reportAnalytics('user',{
      name:'zhangsan',
      age:20
    })
    console.log("传送完成")
  },

  /**
   * 数据上报
   */
  reportMonitor(){
    wx.reportMonitor("1",10)
    console.log('数据上报成功')
  },

  /**
   * 跳转其他小程序
   */
  navigatorToMiniProgram(){
    wx.navigateBackMiniProgram({
      appId: 'wx3efb95b9c5579418',
      success(res) {
        console.log('success', res)
      },
      fail(res) {
        console.log('fail', res)
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