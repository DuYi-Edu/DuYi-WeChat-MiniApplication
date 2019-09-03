// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:''
  },

  /**
   * 允许从相机和相册扫码
   */
  scanCode2(){
    let that = this
    wx.scanCode({
      success(res){
        console.log(res)
        that.setData({
          img: res.result
        })
      }
    })
  },

  /**
   * 只从相机扫码
   */
  scanCOde1(){
    let that = this
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log(res)
        that.setData({
          img: res.result
        })
      }
    })
  }
})