// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDownNum:'5',
    i: '123'
  },

  /**
   * 动态改变tarbar
   */
  setItem(){
    wx.setTabBarItem({
      index: 0,
      text: 'index'
    })
  },

  /**
   * 设置redDot的闪动
   */
  setRedDot(){
    let that = this
    let countDownNum = that.data.countDownNum
    if(that.data.i != ''){
      that.setData({
        timer: setInterval(()=>{
          countDownNum--
          console.log(countDownNum)
          /*求余数、countDownNum为偶数时显示红点
            如果countDownNum为奇数隐藏红点
          */
          if(countDownNum % 2 == 0){
            wx.showTabBarRedDot({
              index: 1,
            })
          }else{
            wx.hideTabBarRedDot({
              index: 1,
            })
          }
          if(countDownNum == 0){
            clearInterval(that.data.timer)
          }
        },500)
      })
    }
  },

  /**
   * 显示红色角标
   */
  
  showRedDot(){
    /*
    wx.showTabBarRedDot({
      index:1
    })
    */
    /*
    setTimeout(()=>{
      wx.hideTabBarRedDot({
        index: 1,
      })
    },2000)
    */
  },

  /**
   * 显示数字角标
   */
  showBadge(){
    wx.setTabBarBadge({
      index: 1,
      text: '99+',
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