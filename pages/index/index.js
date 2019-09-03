// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screen: '正面',
    alpha: 0
  },

  /**
   * 开始监听
   */
  startScreenClick(){
    wx.startDeviceMotionListening({
      success(res){
        console.log(res)
      }
    })
  },

  /**
   * 结束监听
   */
  endScreenClick(){
    wx.stopDeviceMotionListening({
      success:function(e){
        console.log(e)
      },
      fail(e){
        console.log(e)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this

    /**
     * alpha number 当手机坐标X/y和地球x/y重合时候，绕着Z轴转动的角度为alpha,范围值在[0,2*PI),转动逆时针为正转
     */
    wx.onDeviceMotionChange((res)=>{
      let screen="正面"
      let alpha =parseFloat(res.alpha)
      if(alpha >45 && alpha < 136){
          screen = '左侧'
      }else if(alpha > 225 && alpha < 316){
          screen = '右侧'
      }else if(alpha >135 && alpha < 226){
          screen = '反面'
      }else{
          screen = '正面'
      }
      //数据绑定到data
      that.setData({
        screen: screen,
        alpha: alpha
      })
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