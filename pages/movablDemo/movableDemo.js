// pages/movablDemo/movableDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    startX:0,
    startY:0
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
    for(var i=0;i<10;i++){
      this.data.items.push({
        content: i +'向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除，',
        isTouchMove:false
      })
    }
    this.setData({
      items:this.data.items
    })
  },

  /**
   * 手指触摸动作开始，记录起点X坐标
   */
  touchstart(e){
    this.data.items.forEach(function(v,i){
      if(v.isTouchMove){
        v.isTouchMove = false
      }
    })
    this.setData({
      startX:e.changedTouches[0].clientX,
      startY:e.changedTouches[0].clientY,
      items:this.data.items
    })
  },

  /**
   * 滑动事件处理
   */
  touchmove(e){
    var that = this,
    index = e.currentTarget.dataset.index,//当前索引
    startX = that.data.startX,//开始X坐标
    startY = that.data.startY,//开始Y坐标
    touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
    touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
    //获取滑动角度
    angle = that.angle({x:startX,Y:startY},{X:touchMoveX,Y:touchMoveY});
    that.data.items.forEach(function(v,i){
      v.isTouchMove = false
      //滑动超过30度角 return
      if(Math.abs(angle) > 30) return;
      if(i == index){
        if(touchMoveX > startX) //右划
          v.isTouchMove = false
        else
          v.isTouchMove = true
      }
    })
    that.setData({
      items:that.data.items
    })
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

  },
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度  /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }
})

