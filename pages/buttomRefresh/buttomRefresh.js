let _newsList = ['中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国', '中国的旅游消费力很大', '世界正在关注中国'];
let flagNumber = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: _newsList
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
    if(flagNumber == 5){
      wx.showToast({
        title: '已经数据加载完毕',
        icon:'none'
      })
      return
    }else{
      flagNumber++;
    }
    console.log('追加数据',flagNumber)
    _newsList.push("中国正在腾飞")
    this.setData({
      newsList : _newsList
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})