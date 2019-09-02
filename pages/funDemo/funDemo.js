// pages/funDemo/funDemo.js
Page({
  functionString : '',
  /**
   * 页面的初始数据
   */
  data: {
    canUse:''
  },

  functionString(e){
    console.log(e.detail.value)
    this.functionString = e.detail.value
  },

  isCanUse(){
    /*
    console.log(this.functionString);
    this.setData({
      canUse: wx.canIUse(this.functionString)
    })
    */
    const arrayBuffer = new Uint8Array([11, 22, 33])
    const base64 = wx.arrayBufferToBase64(arrayBuffer)
    console.log(base64)
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