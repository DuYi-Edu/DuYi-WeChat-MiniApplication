// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:true
  },

  /**
   * showToast
   */
  showToast(){
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000,
      mask: true,
      success(res){},
      fail(res){},
      complate(res){}
    }),
    setTimeout(this.closeToastLoadin,2000)
  },

  closeToastLoadin(){
    //关闭loading显示
    wx.hideToast()
  },

  /**
   * showLoading
   */
  showLoading(){
    wx.showLoading({
      title: '加载中...',
    }),
    setTimeout(this.closeLoading, 2000)
  },

  closeLoading(){
    wx.hideLoading()
  }
})