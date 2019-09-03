//app.js
App({
  onLaunch: function () {
    if(!wx.cloud){
      console.error("版本过低，请使用2.2.3以上基础库")
    }else{
      wx.cloud.init({
        traceUser:true
      })
    }

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})