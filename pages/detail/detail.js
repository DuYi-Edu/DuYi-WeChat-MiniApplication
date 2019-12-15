// pages/detail/detail.js
var app = getApp()
var page = 1
const config = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodata:false,
    videoList:[],
    showother:true,
    playIndex:null,
    mask:false,
    page:'detail',
    moretype:'上拉查看更多',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // loading
    wx.showLoading({
      title:'数据加载中...',
      mask:true,
    })
    
    var alldata = JSON.parse(options.alldata)
    console.log(alldata)
    this.setData({
      alldata:alldata,
      id:alldata.id,
      name:alldata.name,
      num:alldata.num
    })

    page =1
    this.getvideoList(this.data.id)
    this.videoGroup= this.selectComponent("#videoGruop")
    this.getAps()

  },

//获取视频
  getvideoList(art){
    if(art == undefined || art == null || art == ''){
      var hotWordsId = ''
    }else{
      var hotWordsId = art
    }
    var params = {
      hotWordsId:hotWordsId,
      page:page,
      limit:config.limit
    }
    // ajax
    config.ajax('POST',params,config.videoList,(res)=>{
      console.log(res)
      if(this.data.videoList.length != 0){
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
        this.setData({
          videoList:res.data.data.list,
          mask:true
        })
      }
      if(res.data.data.list.length<config.limit){
        this.setData({
          nodata:true,
          allnum:res.data.data.totalCount
        })
      }
      this.setData({
        allnum: res.data.data.totalCount
      })
      wx.hideLoading()
    },(res)=>{})
  },

//获取是否显示广告
  getAps(){
    var params = {
      location: 'details'
    }
    config.ajax('POST', params, config.aps, (res) => {
      console.log("aps",res.data.data)
      this.setData({
        aps: res.data.data
      })
    }, (res) => {

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
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    page = 1
    this.getvideoList(this.data.id)
    this.videoGroup = this.selectComponent("#videoGroup")
    this.getAps()
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
    this.setData({
      playIndex:null
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    page++
    that.setData({
      moretype:'正在加载中'
    })
    setTimeout(function(){
      that.getvideoList(that.data.id)
      that.setData({
        playIndex:null
      })
    },2000)
  },

  toIndex:()=>{
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from == 'button') {
      if (res.target.dataset.id == '分享好友') {
        //detail页面的按钮分享
        return {
          title:'我是分享好友的',
          path:"/pages/detail/detail?alldata="+JSON.stringify(this.data.alldata)
        }
      } else {
        return {
          title: res.target.dataset.title,
          path: '/pages/share/share?alldata=' + JSON.stringify(res.target.dataset),
          imageUrl: res.target.dataset.cover
        }
      }
    }
  }
})