// pages/index/index.js
Page({
  menuList: ['学校','家庭','公司','酒吧','隔离老王'],
  /**
   * 页面的初始数据
   */
  data: {
    contentShow:"",
    showHidden: true
  },

  /**
   * 当输入框正在输入时，标题栏提示
   */
  showNavigator(){
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: '用户正在输入',
    })
  },

  /**
   * 消息提示框
   * icon: success/loading/none
   * mask:是否显示透明层，防止触摸穿透
   * 
   * 注意事项：不需要人为参与
   */
  showToastEvent(){
    wx.showToast({
      title: '操作确认',//显示文本
      icon: 'success',
      image: '/images/u7.png',
      duration: 3000,
      mask: false,
      success(res){
        console.log('success',res)
      },
      fail(res){
        console.log('fail', res)
      },
      complete(res){
        console.log('complete', res)
      }
    })
  },

  /**
   * 模态对话框
   * 
   * 需要有用户交互操作
   */
  showModelEvent(){
    wx.showModal({
      title: '提示',
      content: '确定需要删除吗',
      showCancel: true,
      cancelText: '返回',
      cancelColor: '#f00',
      confirmText: '删除',
      confirmColor: '#0f0',
      success(res) {
        console.log('success', res)
      },
      fail(res) {
        console.log('fail', res)
      },
      complete(res) {
        console.log('complete', res)
      }
    })
  },

  /**
   * show loading 加载
   */
  showLoading(){
    wx.showLoading({
      title: '正在数据查询...',
      mask: true,
      success(res) {
        console.log('success', res)
      },
      fail(res) {
        console.log('fail', res)
      },
      complete(res) {
        console.log('complete', res)
      }
    }),
    setTimeout(()=>{
      wx.hideLoading({
        success(res) {
          console.log('hideLoading-success', res)
        },
        fail(res) {
          console.log('hideLoading-fail', res)
        },
        complete(res) {
          console.log('hideLoading-complete', res)
        }
      })
    },3000)
  },

  /**
   * showActionSheet显示操作菜单
   */
  showActionSheet(){
    let that = this
    let filePathName = ''
    wx.showActionSheet({
      itemList: this.menuList,
      itemColor: '#f00',
      success(res) {
        console.log('showActionSheet-success', res)
        if(res.tapIndex != 4){
          switch(res.tapIndex){
            case 0:
              filePathName = 'school'
              break
            case 1:
              filePathName = 'home'
              break
            default:
              filePathName = 'other'
          }
          wx.navigateTo({
            url: '/pages/' + filePathName + '/' + filePathName,
          })
        }else{
          that.setData({
            showHidden: !that.data.showHidden
          })
        }
      },
      fail(res) {
        console.log('showActionSheet-fail', res)
      },
      complete(res) {
        console.log('showActionSheet-complete', res)
      }
    })
  },

  /**
   * 动态这是导航条
   */
  setNavigationBarTitle(){
      let that = this
      wx.showNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '用户正在输入...',
      })
      wx.setNavigationBarColor({
        frontColor: 'black',
        backgroundColor: '#ccc',
      })
      setTimeout(()=>{
        wx.setNavigationBarTitle({
          title: '我的微信',
        }),
        that.setData({
          contentShow:'新内容'
        })
        wx.hideNavigationBarLoading()
      },3000)
      
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