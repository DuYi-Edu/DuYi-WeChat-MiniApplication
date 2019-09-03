let that
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    user: {},
    content: "",
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    isLike: false
  },

  /**
   * 预览图片
   */
  previewImg(e){
    let index = e.currentTarget.dataset.index;
    //预览
    wx.previewImage({
      //当前显示图片
      current: this.data.images[index],
      //所有图片
      urls: this.data.images,
    })
  },

  /**
   * 删除图片操作
   */
  removeImg(e){
    let position = e.currentTarget.dataset.index
    this.data.images.splice(position,1)//splice 删除数据中的元素，从position开始，1为要删除的数量
    this.setData({
      images:this.data.images
    })
  },

  /**
   * 获取textarea的值
   */
  getTextAreaContent(e){
    that.data.content = e.detail.value;
  },

  /**
   * 表单提交
   */
  formsubmit(e) {
    //表单元素中input可以通过name获取，textarea不行，依然需要通过bindblur操作
    //this.data.content = e.detail.value['input-content'];
    if (this.data.canIUse) {
      if (this.data.images.length > 0) {
        this.saveDataToServer()
      } else if (this.data.content.trim() != "") {
        this.saveDataToServer()
      } else {
        wx.showToast({
          title: '写点东西吧',
          icon: 'none'
        })
      }
    } else {
      this.jugdeUserLogin()
    }
  },

  /**保存到服务器（云数据库） */
  saveDataToServer() {
    //需要在云端创建一个数据集合topicDemo(可以自行定义)
    db.collection("topicDemo").add({
      //data字段表示需要新增的Json数据
      data: {
        content: that.data.content,
        date: new Date(),
        images: that.data.images,
        user: that.data.user,
        isLike: that.data.isLike
      },
      success(res) {
        //保存到发布历史
        that.saveToHistoryServer()
        //数据清空
        that.data.content = "";
        that.data.images = [];
        that.setData({
          content: "",
          images: []
        })
        //用户提示
        that.showTipAndSwitchTab()

      }
    })
  },

  /**
   * 发布历史纪录
   */
  saveToHistoryServer(e){
    db.collection("historyDemo").add({
      //data字段表示需新增的Json数据
      data:{
        content: that.data.content,
        date: new Date(),
        images: that.data.images,
        user: that.data.user,
        isLike: that.data.isLike
      },
      success(res){
        //res是一个对象，其中有_id字段标记为刚创建的记录的新id
        //console.log(res)
      },
      fail:res=>{console.error}
    })
  },

  /**
   * 用户提示
   */
  showTipAndSwitchTab() {
    //提示
    wx.showToast({
      title: '新增记录成功',
      duration: 500
    })

    setTimeout((res) => {
      //跳转
      wx.switchTab({
        url: '../home/home',
      })
    }, 500)
  },

  /**
   * 选择图片
   */
  chooseImage() {
    wx.chooseImage({
      count: 6,
      success(res) {
        //预览
        that.setData({
          images: res.tempFilePaths
        })
        //图片上传
        that.data.images = []
        for (let i in res.tempFilePaths) {
          //将图片上传至存储空间
          wx.cloud.uploadFile({
            cloudPath: that.timetostr(new Date()),
            filePath: res.tempFilePaths[i],
            //成功回调
            success: res => {
              that.data.images.push(res.fileID)
            }
          })
        }
      }
    })
  },

  /**
   * 图片名字的时间重取名（可自行定义形式）
   */
  timetostr(time) {
    let random = Math.floor(Math.random() * (9999 - 1000)) + 1000
    let str = random + "_" + time.getMilliseconds() + ".png"
    return str
  },

  /**
   * 用户头像获取权限的操作
   */
  jugdeUserLogin() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用getUserInfo获取头像昵称
          wx.getUserInfo({
            success(res) {
              that.data.user = res.userInfo;
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    that.jugdeUserLogin()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})