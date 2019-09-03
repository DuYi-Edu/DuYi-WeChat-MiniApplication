// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 胶囊按钮位置信息
   */
  btnClick1(){
    let data = wx.getMenuButtonBoundingClientRect()
    console.log('菜单按键宽度',data.width)
    console.log('菜单按钮高度',data.height)
    console.log('菜单按钮上边界坐标',data.top)
    console.log('菜单按钮右边界坐标', data.right)
    console.log('菜单按钮下边界坐标', data.bottom)
    console.log('菜单按钮左边界坐标', data.left)
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
    let that = this
    //屏幕大小监控
    wx.onWindowResize((res)=>{
      console.log(res)
      console.log(res.size.screenWidth)
    }),

    //键盘高度监控
    wx.onKeyboardHeightChange(res=>{
      console.log(res)
    })
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