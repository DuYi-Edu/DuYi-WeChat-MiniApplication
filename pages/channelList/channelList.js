const db = wx.cloud.database({
  env: 'test-jj55w'
})
const channelListObj = db.collection('channelList')
const channelMenuObj = db.collection('channelMenu')
const _cmd = db.command

Page({
  channelId: -1,
  /**
   * 页面的初始数据
   */
  data: {
    channelAdArr:[],
    programList:[]
  },

  /**
   * 栏目介绍
   */
  programInfo(e){
    //console.log(this.data.programList[e.currentTarget.dataset.id])
    //存储缓存
    wx.setStorage({
      key: 'programDescription',
      data: this.data.programList[e.currentTarget.dataset.id],
      success(){
        wx.navigateTo({
          url: '/pages/programInfo/programInfo',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log("channelId",options.channelId)
    //console.log("channelName",options.channelName)
    //this.channelId = options.id
    this.getChannelNameByArrayIndex(options.channelName)

  },

  //查找卫视名称
  getChannelNameByArrayIndex(channelName){
    let that = this
    //console.log("channelNameInner", channelName)
    channelMenuObj.where({
      channelName: channelName
    }).get()
    .then(res=>{
      console.log('return',res)
      //console.log(res.data[0].channerAD)
      that.setData({
        channelAdArr: res.data[0].channerAD,
        programList:res.data[0].programList
      })
    })
    .catch(console.error)
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