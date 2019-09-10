// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563768801931&di=def9483aafdaba2b1394c9b62d71b39e&imgtype=0&src=http%3A%2F%2Fi8.hexunimg.cn%2F2012-10-17%2F146862535.jpg',
    imgTitle: '计算机的旧照片'
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
    //loading
    /*
    wx.showLoading({
      title: '正在加载...',
    })
    */

    setTimeout(()=>{
      this.setData({
        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3833654612,1866622642&fm=26&gp=0.jpg',
        imgTitle: '旧照片的记忆'
      })
      //wx.hideLoading()
      //停止系统加载事件
      wx.stopPullDownRefresh()
    },1000)
    
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