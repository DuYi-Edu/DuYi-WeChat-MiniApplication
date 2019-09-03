// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 分享
   */
  onshare(){
    this.onShareAppMessage()
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
    /**
     * title：转发后的标题
     * path:转发后的页面（展示给用户的页面）
     * imageUrl:自定义图片路径
     */
    return{
      title:'清凉暑假亲子游玩',
      path:'/pages/index/index',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563957383156&di=5df5b8f1d20e8f6e670d47cda92da26c&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F15%2F08%2F16pic_1508150_b.jpg',
      success(res){
        console.log('success',res)
      }
    }
  }
})