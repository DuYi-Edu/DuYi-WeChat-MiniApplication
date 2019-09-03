// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    level: '',
    isCharging: ''
  },

  /**
   * 拨打电话
   */
  formCallPhone(e){
    let phone = e.detail.value.phoneNumber || ''
    if(phone === ''){
      wx.showModal({
        title: '提示',
        content: '电话没有填写',
        showCancel: false
      })
      return
    }
    wx.makePhoneCall({
      phoneNumber: phone,
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
    let that = this
    wx.getBatteryInfo({
      success(res){
        console.log('电量',res.level)
        console.log('是否在充电',res.isCharging)
        that.setData({
          level: res.level,
          isCharging: res.isCharging
        })
      }
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