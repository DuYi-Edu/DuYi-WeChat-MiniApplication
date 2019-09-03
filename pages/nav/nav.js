// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paramsVal:'',
    navigatorVal:'',
    apiName:'',
    apiScore:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.title)
    this.setData({
      navigatorVal:options.title,
      //api
      apiName: options.name,
      apiScore: options.score
    })
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
    wx.getStorage({
      key: 'id',
      success: function(res) {
        //console.log(res)
        that.setData({
          paramsVal: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //清除缓存
    wx.removeStorage({
      key: 'id',
      success: function (res) {
        console.log('缓存删除')
      },
    })
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