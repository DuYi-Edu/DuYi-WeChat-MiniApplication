const _banners = [
  {
    id:1,
  img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=71594397,1452765852&fm=27&gp=0.jpg',
  name:"日式浓香盖饭"
  },
  {
    id: 2,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523954724538&di=bf83d8c7b5114f63d26afbebf5bb8b6e&imgtype=0&src=http%3A%2F%2Ffs01.bokee.net%2Fuserfilespace%2F2013%2F09%2F13%2Fxihegroup19837567.jpg',
    name: "鱼香茄子"
  },
  {
    id: 3,
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523954724534&di=c9dbda0b5defeb2b4b2b2917b87db306&imgtype=0&src=http%3A%2F%2Fp1.ifengimg.com%2Ffck%2F2016_28%2F51c633e132225a7_w638_h325.jpg',
    name: "外卖产品新套装"
  }

]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:_banners,
    filterID:2,
    scrollDown:false
  },

  /**
   * 跳转搜索
   */
  tapSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  /**
   * 附近商家
   */
  tapFilter(e){
    this.setData({
      filterID: e.currentTarget.dataset.id
    })
  },

  onPageScroll(res){
    if(res.scrollTop>=100){
      this.setData({
        scrollDown:true
      })
    }
    if (res.scrollTop<100){
      this.setData({
        scrollDown: false
      })
    }
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