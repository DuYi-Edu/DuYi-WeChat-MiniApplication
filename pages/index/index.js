// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationPath:'',
    companyAddress:''
  },

  /**
   * 获取发票
   */
  getInvoiceTitle(){
    let that = this
    wx.chooseInvoiceTitle({
      success(res){
        console.log(res)
        that.setData({
          companyAddress: res.companyAddress
        })
      }
    })
  },

  /**
   * 获取已经开具过的发票信息
   * 只能在真机上做操作
   */
  chooseInvoice(){
    wx.chooseInvoice({
      success(res){
        console.log(res)
      }
    })
  },

  /**
   * 获取当前位置
   */
  getLocation(){
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res)
        //显示中文位置,获取腾讯的地理位置api操作
        wx.request({
          url: "http://api.go2map.com/engine/api/regeocoder/json?points=" + res.longitude + "," + res.latitude + "&type=1",
          success(res){
            console.log(res)
            let locationPath = res.data.response.data[0].address
            that.setData({
              locationPath: locationPath             
            })
          }
        })
      },
    })
  }
})