// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"hello"
  },

  onMyEvent(e){
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getSubComponentFun(){
    this.myComponentObj.innerFun()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myComponentObj =this.selectComponent("#myComponent")
  },

  pageEventListener1(){
    console.log("pageEventListener1")
  },

  pageEventListener2(){
    console.log("pageEventListener2")
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