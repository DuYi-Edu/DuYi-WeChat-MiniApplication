//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  // 跳转指南针页面
  jump(){
    wx.redirectTo({
      url: '../compass/compass',
    })
  },

  onLoad: function () {
   
  }

})
