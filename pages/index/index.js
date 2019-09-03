// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 清除缓存数据
   * Sync:同步
   */
  clearStorage(){
    wx.clearStorage()
  },

  /**
   * 设置缓存
   */
  setStorage(){
    wx.setStorage({
      key: 'name',
      data: 'tom',
      success(){
        console.log('storage is saved')
      }
    })
  },

  /**
   * 移除缓存
   */
  removeStorage(){
    wx.removeStorage({
      key: 'name',
      success: function(res) {
        console.log('storage name is none')
      },
    })
  },

  /**
   * 获取缓存里的数据信息
   */
  getStorageInfo(){
    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
      },
    })
  },

  /**
   * 生命周期的加载
   */
  onLoad(options){
    wx.getStorage({
      key: 'storageVal',
      success: function(res) {
        console.log(res)
      },
    })
  }
})