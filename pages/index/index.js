// pages/index/index.js
Page({
  userWifiName: '',
  userWifiPwd: '',
  /**
   * 页面的初始数据
   */
  data: {
    wifiList:[]
  },

  /**
   * 连接wifi
   */
  connectWifi(e){
    //获取用户输入的wifi账户和密码
   this.userWifiName = e.detail.value.wifiname
   this.userWifiPwd = e.detail.value.wifipwd

   let that = this
   //检测手机型号，获得系统信息
   wx.getSystemInfo({
     success: function(res) {
       let system = ''
       if(res.platform == 'android'){
         system = parseInt(res.system.substr(8))
       }
       if(res.platform == 'ios'){
         system = parseInt(res.system.substr(4))
       }
       if(res.platform == 'andorid' && system < 6){
         //提示手机不支持
         wx.showToast({
           title: '安卓当前手机版本不支持',
         })
         return
       }
       if(res.platform == 'ios' && system < 11.2){
         wx.showToast({
           title: '苹果手机当前版本不支持',
         })
         return
       }
       //初始化Wifi模板
       that.startWifi()
     },
   })
  },

  /**
   * 初始化WIFI模块
   */
  startWifi(){
    let that = this
    wx.startWifi({
      success(){
        //连接
        that.Connected()
      },
      fail(res){
        wx.showToast({
          title: '接口调用失败',
        })
      }
    })
  },

  /**
   * 连接wifi
   */
  Connected(){
    let that = this
    wx.connectWifi({
      SSID: this.userWifiName,//wifi账户名
      password: this.userWifiPwd,//wifi连接密码
      success(res){
        wx.showToast({
          title: 'wifi连接成功',
          duration: 2000
        })
      },
      fail(res){
        console.log(res)
        wx.showToast({
          title: 'wifi连接失败',
          duration: 2000
        })
      }
    })
  },

  

  /**
   * 搜索wifi
   */
  startSearch(){
    const getWifiList = () => {
        wx.getWifiList({
          success: (res) => {
            wx.onGetWifiList((res) => {
              const wifiList = res.wifiList
                .map(wifi => {
                  const strength = Math.ceil(wifi.signalStrength * 4)
                  return Object.assign(wifi, { strength })
                })
              this.setData({
                wifiList
              })
            })
          },
        })
    }

    const startWifi = () => {
      wx.startWifi({
        success:getWifiList,
        fail(res){
          console.error(res)
        }
      })
    }

    //获取系统信息
    wx.getSystemInfo({
      success(res) {
        const isIOS = res.platform === "ios"
        if (isIOS){
          wx.showModal({
            title: '提示',
            content: '由于系统限制，ios用户请手动先进入系统Wifi页面，然后返回小程序',
            showCancel: false,
            success(){
              //开启wifi搜索
              startWifi()
            }
          })
          return
        }
        startWifi()
      },
    })
  }
})
