// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userCaptureScreen: '用户没有截屏'
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
    //监测用户截屏
    wx.onUserCaptureScreen(()=>{
      this.setData({
        userCaptureScreen: '用户截屏了！'
      })
    })
  },

  /**
   * 长时间振动
   */
  virateLong(){
    wx.vibrateLong({
    })
  },

  /**
   * 短时间振动
   */
  vibrateShort(){
    wx.vibrateShort({})
  },

  /**
   * 保持屏幕常亮
   */
  sliderchange(){
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },
  
  /**
   * 添加手机联系人
   */
  addPhoneContact(){
    wx.addPhoneContact({
      firstName: '张三',
      nickName:'zangsan',
      remark: '程序员',
      mobilePhoneNumber: '13938271434',
      email: '154543234@qq.com'
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