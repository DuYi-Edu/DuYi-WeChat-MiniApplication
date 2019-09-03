// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 邀请好友
   */
  clickInvitivation(){
    this.actioncnt()
  },

  /**
   * 产品意见
   */
  onAdvanceClick(){
    //跳转
    wx.navigateTo({
      url: '../advance/advance',
    })
  },

  /**
   * 底部菜单操作
   */
  actioncnt(){
    wx.showActionSheet({
      itemList: ["群聊","好友","朋友圈"],
      success(res){
        console.log('success',res.tapIndex)
      },
      fail(res){
        console.error('fail',res)
      }
    })
  },

  /**
   * 搜藏列表
   */
  onCollectClick(){
    //跳转
    wx.navigateTo({
      url: '../collect/collect',
    })
  },

  /**
   * 发布历史
   */
  onHistoryClick(){
   wx.navigateTo({
     url: '../history/history',
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