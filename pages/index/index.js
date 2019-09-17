// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_modal_Hidden:false,
    is_modal_icon:'',
    is_modal_title:'',
    is_modal_desc:''
  },

  bindViewTap:function(){
    var that = this
    that.setData({
      is_modal_Hidden:true,//控制显示和隐藏
      is_modal_icon:'success',//成功和失败提示语（标图），支持success和warn
      is_modal_title:'预约成功',
      is_modal_desc:'恭喜您，预约成功'
    })
  },

  bindViewTap2:function(){
    this.setData({
      is_modal_Hidden: true,//控制显示和隐藏
      is_modal_icon: 'warn',//成功和失败提示语（标图），支持success和warn
      is_modal_title: '警告',
      is_modal_desc: '您操作有误！'
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