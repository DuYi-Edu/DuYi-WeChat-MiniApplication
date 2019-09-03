// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kuaidiList: ['申通', 'EMS','圆通'],
    kuaidilistCode:['shengtong','ems','yuantong'],
    index:0,
    orderCode:'',
    current:{
      context:'到达哈尔滨',
      time:'2019-1-1'
    },
    orderCodeList:[]
  },

  /**
   * 获取订单号
   */
  getOrderCode(e){
    this.setData({
      orderCode: e.detail.value
    })
  },

  /**
   * 查询订单信息
   */
  searchKuaidi(){
    let that = this
    let kuaidiUrl = 'http://www.kuaidi100.com/query?type=' + this.data.kuaidilistCode[this.data.index]+'&postid='+this.data.orderCode
    wx.request({
      url: kuaidiUrl,
      success(res){
        that.setData({
          orderCodeList:res.data.data,
          current: 
          {
            context:res.data.data[0].context,
            time: res.data.data[0].time
          }
      })}
    })
  },

  /**
   * picker
   */
  bindPickerChange(e){
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
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