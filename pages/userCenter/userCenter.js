let phone = ''
let name = ''
let id = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    //读取缓存数据
    wx.getStorage({
      key: 'regInfo',
      success: function(res) {
        phone = res.data.phone
        name = res.data.name
        id = res.data.id
        //显示用户名字
        that.setData({
          showName: name
        })
      },
      fail(res){
        console.error('fail',res)
        wx.showToast({
          title: '登录方式错误或异常，重新登录',
          icon:'none',
          duration:500
        })
        setTimeout(()=>{
          //跳转到登录页
          wx.redirectTo({
            url: '/pages/index/index',
          })
        },500)
      }
    })
    //缓存数据存在，显示内容
    //数据不存在（非法登录）-> 提示用户，重新登录，跳转到登录页面
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