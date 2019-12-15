// pages/index/index.js
var app = getApp();
var page = 1;
const config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubscibe:false,
    mask:true,
    nodata:false,
    hotWord:[],
    videoList:[],
    page:"index",
    playIndex:null,
  },

  //由自定义组件完成内部调用的映射函数
  myvideoPlay:function(e){
    console.log(e)
  },

  /**
   * 每日热搜跳转操作
   */
  tolist:function(e){
    console.log(e)
    var alldata ={
      id: e.currentTarget.dataset.id,
      bg: e.currentTarget.dataset.bg,
      name: e.currentTarget.dataset.name,
      ph: e.currentTarget.dataset.ph,
      num: e.currentTarget.dataset.num,
    }
    //navigateTo
    wx.navigateTo({
      url:'/pages/detail/detail?alldata='+JSON.stringify(alldata),
      success:function(res){},
      fail:function(res){},
      complete:function(){}
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 用户登录
    wx.login({
      success: (res) => {
        config.ajax('POST', {
          wxcode: res.code
        }, config.wxLogin, (res) => {
          app.globalData.openid = res.data.data.openId
          config.ajax('POST', {
            openId: res.data.data.openId
          }, config.isSubscibe, (res) => {
            that.setData({
              isSubscibe: res.data.data
            })
            app.globalData.isSubscibe = res.data.data
          }, (res) => {

          })
        }, (res) => {

        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    page  = 1;
    wx.showLoading({
      title:'数据加载中...',
      mask:true
    })
    // 自定义组件
    this.videoGroup = this.selectComponent("#videoGroup");
    // 获取视频列表
    this.getvideoList()
    //获取热点词
    this.getHotword()
    this.getAps()
  },

 

  //获取是否显示广告
  getAps() {
    var params = {
      location: 'details'
    }
    config.ajax('POST', params, config.aps, (res) => {
      console.log("aps", res.data.data)
      this.setData({
        aps: res.data.data
      })
    }, (res) => {

    })
  },

  getHotword(){
    var params = {}
    config.ajax('POST',params,config.hotWord,(res)=>{
      console.log(res)
      this.setData({
        hotWord:res.data.data
      })
    })
  },

  getvideoList(art){
    if(art == undefined || art == null || art == ''){
      var hotWordsId = ''
    } else {
      var hotWordsId = art
    }
    var params = {
      hotWordsId : hotWordsId,
      page: page,
      limit: config.limit
    }
    //获取
    config.ajax('POST',params,config.videoList,(res)=>{
      if(this.data.videoList.length !=0){
        if(page == 1){
          this.setData({
            videoList:res.data.data.list
          })
        }else{
          this.setData({
            videoList:this.data.videoList.concat(res.data.data.list)
          })
        }
      }else{
        console.log(res.data.data.list)
        this.setData({
            videoList:res.data.data.list,
            mask:true
        })
      }
      if(res.data.data.list.length < config.limit){
        this.setData({
          nodata:true,
          allnum: res.data.data.totalCount
        })
      }
      //取消loading
      wx.hideLoading()
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
  onShareAppMessage: function (res) {
    console.log(res)
    if(res.from == 'button'){
      if(res.target.dataset.id == '分享好友'){

      }else{
        return {
          title: res.target.dataset.title,
          path: '/pages/share/share?alldata=' + JSON.stringify(res.target.dataset),
          imageUrl:res.target.dataset.cover
        }
      }
    }
  }
})