// pages/index/index.js
Page({
   message: '',
  /**
   * 页面的初始数据
   */
  data: {
    responseString:"<h1>this is response content</h1>"
  },

  /**
   * 数据获取操作
   */
  recodeMessage(e){
    this.message = e.detail.value;
  },

  /**
   * 发送消息
   */
  sendMessage(){
    let that = this
    //在线服务器位置：http://coolaf.com/tool/chattest
    wx.sendSocketMessage({
      data: that.message,
    })

   

    wx.onSocketMessage((data)=>{
      console.log('[接收到服务器的数据]',data)
      this.setData({
        responseString: '<h1>[接收到服务器的数据]'+data.data+'</h1>'
      })
      
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
    //建立连接
    wx.connectSocket({
      url: 'ws://123.207.167.163:9010/ajaxchattest',
    })
    //连接成功与否的判断
    wx.onSocketOpen(() => {
      //发送socket数据
      console.log("通讯连接成功")
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.closeSocket({})
    wx.onSocketClose(() => {
      console.log("socket已经关闭")
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