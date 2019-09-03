// pages/index/index.js
Page({
  chooseImgs:[],
  /**
   * 页面的初始数据
   */
  data: {
    updateImage:''
  },

  /**
   * 获取图像
   */
  chooseImage(){
    let that = this
    wx.chooseImage({
      success(res) {
        that.chooseImgs = res.tempFilePaths
        console.log("图片获取成功")

        that.setData({
          updateImage: res.tempFilePaths
        })
      }
    })
  },

  /**
   * 获取图片信息
   */
  getImageInfo(){
    wx.getImageInfo({
      src: this.chooseImgs[0],
      success(res){
        console.log(res)
      }
    })
  },

  /**
   * 预览图片
   */
  previewImage(){
    wx.previewImage({
      urls: [this.chooseImgs[0]],
      current:'0'
    })
  }
})