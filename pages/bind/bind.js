// pages/bind/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentName:"tom",
    studentAge:20,
    flag:false,
    id:2,
    a:10,
    b:20,
    studentScroes:[90,70,85],
    studentClassScroes:[
      {className:'语文',score:'90'},
      { className: '数学', score: '70' },
      { className: '英语', score: '85' },
    ]
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