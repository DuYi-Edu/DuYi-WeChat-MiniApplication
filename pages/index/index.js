// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    downloadImage:''
  },

  /**
   * 下载文件
   */
  formSubmit(e){
    //console.log(e.detail.value.cloudID)
    //判别是否有数据输入
    if(e.detail.value.cloudID === ""){
      wx.showToast({
        title: '没有获取到云存储ID',
        icon:"none"
      })
    }else{
      //云下载调用
      let that = this
      this.getCloudFile(e.detail.value.cloudID,that)
    }
  },

  /**
   * 下载cloudID下的文件
   */
  getCloudFile(cloudID,that){
    if(cloudID === ""  || cloudID === null){
      console.log("参数错误")
    }
    //下载图片
    wx.cloud.downloadFile({
      fileID:cloudID,
      success: res=>{
          that.setData({
            downloadImage: res.tempFilePath
          })
      },
      fail:res=>{
          console.error('fail',res)
      }
    })
  },

  /**
   * 获取临时文件路径
   */
  getTmpFilePath(){
    let fileListArr = ['cloud://test-jj55w.7465-test-jj55w/image1.png']
    wx.cloud.getTempFileURL({
      fileList: fileListArr,
      success(res){
        console.log('success',res)
      },fail(err){
        console.err('fail',res)
      }
    })
  },

  /**
   * 删除云图片
   */
  deleteCloudImg(){
    let fileListArr = ['cloud://test-jj55w.7465-test-jj55w/wxacode_default_openapi_page.jpeg']
    //微信删除
    wx.cloud.deleteFile({
      fileList: fileListArr,
      success(res){
        console.log(res)
      },
      fail(res){
        console.error(res)
      }
    })

  },

  /**
   * 选择并上传图片
   */
  uploadImg(){
    let that = this
    wx.chooseImage({
      success: function(res) {
        //console.log(res.tempFilePaths[0])
        //上传到云端存储
        that.setUploadImg(res.tempFilePaths[0])
      },
    })
  },

  /**
   * 上传图片至云存储
   */
  setUploadImg(res){
    if(res === "") {
      wx.showToast({
        title: '参数错误',
      })
      return
    }else{
      wx.cloud.uploadFile({
        cloudPath:'image1.png', //云端存储文件的名称
        filePath:res,
        config:{
          env: "test-jj55w"
        },
        success(res){
          if(res.statusCode == 200){
            console.log('success',res)
          }
        },
        fail(res){
          console.error('fail,',res)
        }
      })
    }
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