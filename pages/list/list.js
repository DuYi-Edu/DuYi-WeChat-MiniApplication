// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pageTopText = ''
    console.log(options)
    switch(options.index){
      case '0':
        pageTopText = '休闲食品'
        break
      case '1':
        pageTopText = '生活百家'
        break
      case '2':
        pageTopText = '饮料食品'
        break
      default:
        pageTopText = '生鲜配送'
    }
    //页面导航栏的连接
    wx.setNavigationBarTitle({
      title: pageTopText +'-XX电商'
    })
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