const db = wx.cloud.database()
const db_imglist = db.collection('imagelist')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'',
    showImg:true
  },

  /**
   * 上传图片
   */
  upload(){
    let that = this
    //选择图片
    wx.chooseImage({
      count: 2,//同时上传图片数量
      success: function (res) {
          //用户等待图片
          wx.showLoading({
            title: '上传中...',
          })
          //多图片处理foreach
          res.tempFilePaths.forEach((item,index)=>{
            //定义存储名称
            let imgName = Math.random(1000) * 100 + '.png'
            //云存储
            wx.cloud.uploadFile({
              cloudPath: imgName,
              filePath: res.tempFilePaths[0],
              success: res => {
                wx.hideLoading()//隐藏loading图标
                that.setData({
                  imgUrl: res.fileID,
                  showImg: false//显示单张预览
                })
                //插入数据库操作
                that.addImgList(res.fileID)
              },
              fail: res => {
                console.error("图片上传失败", res)
              }
            })
          })
       },
    })
  },

  /**
   * 添加图片列表
   */
  addImgList(imgUrl){
    let db_add_data = {
      name:'JC老师',
      imgUrl:imgUrl,
      time: this.getNowFormatData()
    }
    //添加图片到云数据库
    db_imglist.add({
      data: db_add_data,
      success:res=>{
        wx.showToast({
          title: '上传成功',
          duration: 1000
        })
        setTimeout(()=>{
          //跳转列表页面
          wx.navigateTo({
            url: '/pages/list/list',
          })
        },1000)
      },
      fail:res=>{
        console.error('db_add_data_error',res)
      }
    })
  },

  //格式化日期时间格式
  getNowFormatData(){
    let date = new Date()
    let seperator1 = "-"
    let seperator2 = ":"
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if(month >=1 && month <= 9){
      month = "0" + month;
    }
    if(strDate >=0 && strDate <= 9){
      strDate = "0"+ strDate
    }
    //拼接
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 +strDate + " " + date.getHours() + seperator2 +date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate
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