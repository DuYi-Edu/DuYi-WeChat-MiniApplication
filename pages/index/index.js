// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showDialog(){
    //通过组件对象调用组件内的方法 object.methods
    this.dialog.showDialog();
  },

  //由组件内部发起的事件
  _cancelEvent(){
    console.log("你点击了取消按钮")
    this.dialog.hideDialog();
  },

  _confirmEvent(){
    console.log("你点击了确定按钮")
    this.dialog.hideDialog();
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
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog")
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