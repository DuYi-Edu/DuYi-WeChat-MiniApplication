
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers:[{
      id:1,
      latitude: 23.099994,
      longitude: 113.324520,
      name:'T.I.T创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/images/location.png'
    },
      {
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '/images/location.png'
      },
    ]
  },

  /**
   * 获取位置
   */
  getCenterLocation(){
    this.mapCtx.getCenterLocation({
      success(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },

  /**
   * 移动位置
   */
  moveToLocation(){
    this.mapCtx.moveToLocation()
  },

  /**
   * 移动标注
   */
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:1,
      autoRotate:true,
      duration:1000,
      destination:{
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd(){
        console.log('end')
      }
    })
  },

  /**
   * 缩放
   */
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
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
    this.mapCtx = wx.createMapContext("myMap")
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