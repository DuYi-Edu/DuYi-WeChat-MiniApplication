// pages/eventDemo/eventDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigatorArr: ['王者荣耀', '球球大作战', '皇室战争', '梦幻西游', '穿越火线', '我的世界', '火隐忍者', '棋牌世界', '部落冲突', '街头篮球'],
    swiperRPXHeight : 0,
    currentTab:0,
    classArr: ['color-red', 'color-red', 'color-red', 'color-red', 'color-red', 'color-red', 'color-red','color-red','color-red']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let rpxHeight = clientHeight * ratio;
        // console.log(clientHeight);
        // console.log(rpxHeight);
        that.setData({
          swiperRPXHeight: rpxHeight
        })
      },
    })
  },

  campusActivity(event){
    let classActivityArr = []
    //console.log(this.data.navigatorArr.length)

    for (let i = 0; i < this.data.navigatorArr.length;i++){
      if (event.currentTarget.dataset.index == i){
        classActivityArr.push("color-blue")
      }else{
        classActivityArr.push("color-red")
      }
    }

    this.setData({
      currentTab: event.currentTarget.dataset.index,
      classArr: classActivityArr
    })
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