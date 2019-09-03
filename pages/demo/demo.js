// pages/demo/demo.js
Page({
  inputVal:'',
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 跳转
   */
  navi(){
    wx.setStorageSync('storageVal', this.inputVal)
  },

  /**
   * 获取数据
   */
  getInput(e){
    console.log(e.detail.value)
    this.inputVal = e.detail.value
  }
})