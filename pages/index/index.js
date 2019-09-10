// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewAnimate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 移动view
   */
  startMove(){
    let that = this
   let animationObj = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
      delay: 0
    })
  //由对象安排动画
  //
    animationObj.translateX(100).opacity(0.1).width(200).step();
    that.setData({
      viewAnimate: animationObj.export()//执行动画
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