const app = getApp()

// 扫描类型
const scanType = {
  'WX_CODE': '微信小程序',
  'QR_CODE': '二维码',
  'EAN_8': '条形码（EAN_8）',
  'EAN_13': '条形码（EAN_13）',
  'UPC_A': '条形码（UPC_A）',
  'UPC_E': '条形码（UPC_E）',
  'CODE_25': '条形码（CODE_25）',
  'CODE_39': '条形码（CODE_39）',
  'CODE_128': '条形码（CODE_128）',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeText: '',
    imgTempFilePath: ''
  },

  /**
   * 文本获取
   */
  bindInput(e){
    console.log(e)
    this.setData({
      codeText: e.detail.value
    })
  },

  /**
   * 生成二维码
   */
  onGenerate(){
    let that = this
    console.log('[this.data.condeText]',this.data.condeText);
    wx.downloadFile({
      url:"http://qr.topscan.com/api.php?text="+this.data.codeText,
      success(res){
        //console.log(res)
        that.setData({
          imgTempFilePath: res.tempFilePath
        })
        
      },
      fail(res){
        console.error('error',res)
      }
    })
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