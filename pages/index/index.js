// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },

  /**
   * 主线程按钮触发worker线程
   */
  touch(e){
    let that = this
    console.log(e)
    let num1 = e.detail.value.num1
    let num2 = e.detail.value.num2
    if(num1 == "" || num2 == ""){
      wx.showModal({
        title: '错误提示',
        content: '数据异常或为空',
        showCancel: false
      })
      return
    }
    //创建wroker线程对象
    const worker =  wx.createWorker('/workers/myworker.js')
    //发送数据
    worker.postMessage({
      x: num1,
      y: num2
    }),

    //监控
    worker.onMessage((res)=>{
      console.log("这是主线程的onMessage对象",res)
      that.setData({
        result: res.sum
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