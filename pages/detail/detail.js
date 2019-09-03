// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    scanResult:{
      isShow:false,
      type: '',
      text: '',
      msg: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取缓存数据
    wx.getStorage({
      key: 'scanLogs',
      success: (res) =>{
        console.log(res.data[options.id])
        this.setData({
          id: options.id,
          scanResult: res.data[options.id]
        })
      },
    })
  },

  onCopy(){
    //复制到剪切板
    wx.setClipboardData({
      data: this.data.scanResult.text,
      success:(res)=>{
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  /**
   * 删除
   */
  onDelete(){
    wx.getStorage({
      key: 'scanLogs',
      success: (res) => {
        let scanLogs = res.data;
        scanLogs.splice(this.data.id,1)
        //设置同步缓存
        wx.setStorageSync('scanLogs', scanLogs)
        //设置缓存
        wx.setStorage({
          key: 'scanLogs',
          data: scanLogs,
          success:() =>{
            wx.navigateBack()
          }
        })
      },
    })Page({
      data: {
        id: 0,
        scanResult: {
          isShow: false,
          type: '',
          text: '',
          msg: '',
        },
      },
      onLoad(options) {
        wx.getStorage({
          key: 'scanLogs',
          success: (res) => {
            console.log(res.data[options.id])
            this.setData({
              id: options.id,
              scanResult: res.data[options.id]
            })
          }
        })
      },
      onCopy() {
        // 复制到剪贴板
        wx.setClipboardData({
          data: this.data.scanResult.text,
          success: function (res) {
            wx.showToast({
              title: '复制成功',
            })
          }
        })
      },
      onDelete() {
        // 删除
        wx.getStorage({
          key: 'scanLogs',
          complete: (res) => {
            console.log(res);
            let scanLogs = res.data;
            scanLogs.splice(this.data.id, 1);
            wx.setStorageSync('scanLogs', scanLogs);
            wx.setStorage({
              key: 'scanLogs',
              data: scanLogs,
              success: () => {
                wx.navigateBack();
              },
            })
          }
        })
      },
    })

  },

})