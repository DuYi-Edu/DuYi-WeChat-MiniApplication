//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    showSystemOpt:true,
    sysOptList:[{
      name:'拍照权限',
      val:'获取'
    }]
  },

  /**
   * 收货地址操作
   */
  address(){
    wx.chooseAddress({
      success(res) {
        console.log(res)
        wx.showModal({
          title: '展示',
          content: '您所在城市 '+ res.cityName +" 是我们的优质城市，快递可享8折",
        })
      }
    })
  },

  /**
   * 查看用户权限
   */
  userAuth(){
    wx.getSetting({
      success(res){
        console.log(res)
      }
    })
  },

  /**
   * 打开系统设置
   */
  sysOpt(){
    let that = this
    wx.openSetting({
      success(res){
       console.log(res)
       console.log(res.authSetting['scope.address']);
       
       let scopeAddress =[{
         name:'用户地址',
         val: res.authSetting['scope.address']
         },
        {
          name:'拍照权限',
          val: res.authSetting['scope.camera']
        }
         ,
         {
           name: '录音功能',
           val: res.authSetting['scope.record']
         }
         ,
         {
           name: '用户授权信息',
           val: res.authSetting['scope.userInfo']
         }
         ,
         {
           name: '授权保存相册信息',
           val: res.authSetting['scope.writePhotosAlbum']
         }
       ]
       that.setData({
         sysOptList: scopeAddress,
         showSystemOpt: false
       })
      }
    })
  },






  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
