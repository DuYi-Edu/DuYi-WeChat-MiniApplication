// pages/index/index.js
Page({
  menuList:['在线提交','查看处理进度'],
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    workOrderTitle:'提交工单提问',
    workOrderContent:'我的工单正文'
  },

  /**
   * 清除工单
   */
  clearWordOrder(){
    wx.showModal({
      title: '警告',
      content: '确定要撤销吗？',
      showCancel: true,
      cancelText: '再考虑下',
      confirmText: '坚决取消',
      success(res){
        //删除缓存数据
        if(res.confirm){
          wx.removeStorage({
            key: 'workOrder',
            success: function (res) {
              //告知用户
              wx.showToast({
                title: '已经撤销',
                duration:600,
                success(res){
                  setTimeout(()=>{
                    wx.redirectTo({
                      url: '/pages/index/index',
                    })
                  },1000)
                }
              })
            }, 
          })
        }
      }
    })

   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初次加载本页面是，需要判别本页面是否有工单
    wx.getStorage({
      key: 'wokrCode',
      success: function(res) {},
    })
  },

  /**
   * 催办进度
   */
  accelerateProgress(){
    let that = this
    //服务器 省略....
    //提交后的提示
    wx.showToast({
      title: '已经催办',
      icon: 'success',
      duration: 1000,
      success(res){
        console.log('accelerateProgress-success',res)
      },
      fail(res){
        wx.showToast({
          title: '服务器忙稍后',
        })
        console.log('accelerateProgress-fail',res)
      },
      complete(res){
        console.log('accelerateProgress-complete', res)
        setTimeout(()=>{
          that.setData({
            isShow: !that.data.isShow
          })
        },1000)
        
      }
    })
  },

  /**
   * 用户按钮操作，唤起菜单
   */
  userOpt(){
    let that = this
    //底部菜单
    wx.showActionSheet({
      itemList: this.menuList,
      itemColor: '#000',
      success(res){
        if(res.tapIndex == '0'){
          //手工填写表单,跳转
          wx.navigateTo({
            url: '/pages/workOrder/workOrder',
          })
        }else{
          //查看进度

          //判断是否工单的进度
          wx.getStorage({
            key: 'workOrder',
            success: function (res) {
              that.setData({
                isShow: !that.data.isShow
              })
            },
            fail(res){
              wx.showToast({
                title: '没有工单',
                icon:'none'
              })
              
            }
          })

          
        }
      },
      fial(res){
        console.log('error',res)
      },
      complete(res){
        console.log('comp',res)
      }
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
    let that = this
    //获取缓存值
    wx.getStorage({
      key: 'workOrder',
      success: function(res) {
        if (res.errMsg == "getStorage:ok"){
          that.setData({
            workOrderTitle: res.data.workOrderTitle,
            workOrderContent: res.data.workOrderContent,
          })
        }
      },
    })
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