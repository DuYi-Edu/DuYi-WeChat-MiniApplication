var url = 'http://www.imooc.com/course/ajaxlist'
var page = 0
var page_size = 5
var sort = 'last'
var is_easy = 0
var lange_id = 0
var pos_id = 0
var unlearn = 0

//请求数据
let loadMore = (that)=>{
  //加载一个loading动画
  that.setData({
    hidden:false
  })
  //数据获取
  wx.request({
    url: url,
    data:{
      page:page,
      page_size:page_size,
      sort:sort,
      is_easy:is_easy,
      lange_id:lange_id,
      pos_id:pos_id,
      unlearn:unlearn
    },
    success(res){
      let list = that.data.list;
      for(var i=0;i<res.data.list.length;i++){
        list.push(res.data.list[i])
      }
      //重新设置data
      that.setData({
        list: list
      }),
      page++
      that.setData({
        hidden:true
      })
    },
    fail(res){
      console.log('error',res)
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    scrollHeight: '',
    hidden: true,
    scrollTop: 0
  },

  /**
   * toLower
   */
  bindDownLoad(){
    console.log('toLower')
    let that = this;
    loadMore(that)
  },

  /**
   * toUpper,到最上面
   */
  topLoad(){
    console.log('toUpper')
    this.setData({
      list: [],
      scrollTop:0
    })
    loadMore(this)
  },

  /**
   * 滚动
   */
  scroll(){
    //console.log('scroll')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这里需要注意，微信的scroll-view必须设置高度，需要在页面的onload中给scroll-view高度变量赋值
    let that = this
    //高度的获取从微信获取客户端信息开始
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        that.setData({
          scrollHeight: res.windowHeight
        })
      },
    })
    //获取数据新闻列表
    loadMore(that)
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