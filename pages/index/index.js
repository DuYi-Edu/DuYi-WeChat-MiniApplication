// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 获取用户信息
   */
  getUserInfo(){
    
    wx.getUserInfo({
      success(res){
        let user = {
          userInfo : res.userInfo
        }
        console.log(user)
      }
    })
  },

  /**
   * 获取用户信息
   */
  getAppid(){
    const accountInfo =wx.getAccountInfoSync()
    console.log(accountInfo.miniProgram.appId)
  },

  /**
   * 业务代码
   */
  getCompInfo(){
    //从缓存中获取用户登录状态
    wx.getStorage({
      key: 'wxUserInfo',
      succes(res) {
        let userOpenid = res.openid
        let userSession_key = res.session_key

        //验证登录状态
        wx.checkSession({
          success(){
             this.send()
          },fail(){
            //重新登录
             this.login()
          }
        })
      },
    })

   
  },

  send(){
    //向服务器发送请求获取数据
    wx.request({
      url: 'http://www.xxx.com/wx/compinfo',
      data: {
        openid: userOpenid,
        session_key: userSession_key,
        compID: '23424332'
      },
      success(res) {
        //业务处理服务器数据
      }
    })
  },

  login(){
    wx.login({
      success(res) {
        console.log(res)
        //向服务器发送请求
        /**
         * url路径需要在微信公众平台的开发设置中进行配置
         */
        wx.request({
          url: 'http://www.xxx.com/wx/loginapi',//公司后台web服务器接口 
          data: {
            code: res.code
          },
          success(res) {
            console.log('success', res)
            let openid = res.openid
            let session_key = res.session
            //存储storage
            wx.setStorage({
              key: 'wxUserInfo',
              data: {
                openid,
                session_key
              },
            })
          },
          fail(res) {
            console.log('fail', res)
          },
          complete(res) {
            console.log('complete', res)
          }
        })
      }
    })
  },

  /**
   * 登录操作
   */
wxlogin(){
  this.login()
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