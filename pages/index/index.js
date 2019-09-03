// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 云函数的调用
   */
  useCloudFun(){
    wx.showLoading({
      title: '计算中...',
    })
    wx.cloud.callFunction({
      name: 'cloudFun1',
      data: {
        num1: 100,
        num2: 200
      },
      complete: res=>{
        wx.hideLoading()
        console.log(res.result)
      }
    })
  }
})