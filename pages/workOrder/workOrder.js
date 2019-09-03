// pages/workOrder/workOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 输入框导航栏
   */
  inputNavBarTip(){
  wx.showNavigationBarLoading()
   wx.setNavigationBarTitle({
     title: '用户正在输入...',
   })
  },

  /**
   * 隐藏导航栏用户提示
   */
  hideNavBarTip(){
    wx.hideNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: '提交工单',
    })
  },

  /**
   * 获取工单内容
   */
  formSubmit(e){
    let workOrderTitle = e.detail.value.workOrderTitle
    let workOrderContent = e.detail.value.workOrderContent
    //数据存于本地缓存
    wx.setStorage({
      key: 'workOrder',
      data: {
        'workOrderTitle': workOrderTitle,
        'workOrderContent': workOrderContent
      },
      success(res){
        //用户提示
        wx.showToast({
          title: '工单提交完成',
          duration:1000,
          success(res){
            //跳转至首页
            setTimeout(()=>{
              wx.redirectTo({
                url: '/pages/index/index',
              })
            },1000)
            
          }
        })

        /*
        wx.getStorage({
          key: 'workOrder',
          success: function(res) {
            console.log(res)
            console.log(res.data.workOrderTitle,res.data.workOrderContent)
          },
        })
        */
      }
    })


    //向服务器发送数据 省略
    /*
    wx.request({
      url: 'http://www.xxx.com',
      data:{

      },
      method:get,
      success(){

      }
    })
    */

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