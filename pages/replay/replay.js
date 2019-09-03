let that
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    openid:'',
    content:''
  },

  /**
   * 发布神评
   */
  saveReplay(){
    db.collection('replayDemo').add({
      data:{
        content:that.data.content,
        date: new Date(),
        r_id: that.data.id,
        u_id: that.data.openid,
        t_id: that.data.id
      },
      success(res){
        wx.showToast({
          title: '发表成功',
        })
        setTimeout(()=>{
          wx.navigateTo({
            url: '../homeDetail/homeDetail?id='+that.data.id+"&openid="+that.data.openid,
          })
        },1500)
      }
    })
  },

  /**
   * 用户输入值
   */
  bindKeyInput(e){
    that.data.content = e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.data.id = options.id
    that.data.openid = options.openid
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