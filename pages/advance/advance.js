const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse:wx.canIUse("button.open-type.getUserInfo"),
    title:'',
    content:'',
    user:{}
  },

  /**
   * 获取用户的输入
   */
  formSubmit(e){
    this.data.content = e.detail.value['input-content']
    this.data.title = e.detail.value['title']
    if(this.data.canIUse){
      //可用
      if(this.data.title.trim() != ""){
        this.saveDataToServer()
      }else if(this.data.content.trim() != ""){
        this.saveDataToServer()
      }else{
        wx.showToast({
          title: '给我们些意见吧',
        })
      }
    }else{
      this.jugdeUserLogin()
    }
  },

  /**
   * 保存数据
   */
  saveDataToServer(){
    this.showTipAndSwitchTab()
  },

  /**
   * 添加成功，切换页面
   */
  showTipAndSwitchTab(){
    let that = this
    try{
    db.collection("advanceDemo").add({
      data:{
        title:that.data.title,
        content:that.data.content
      },
      success(res){
        wx.showToast({
          title: '反馈成功，后台会加急处理的',
        })
        wx.navigateBack({
          url: '../home/home'
        })
      },
      fail:console.error
    })
    }catch(e){
      console.error(e)
    }

  },

  /**
  * 判断用户是否登录
  */
  jugdeUserLogin: function (event) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {

              that.data.user = res.userInfo;
              console.log(that.data.user)
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.jugdeUserLogin()
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