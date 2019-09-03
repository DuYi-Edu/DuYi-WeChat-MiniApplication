const db = wx.cloud.database()
const db_imglist = db.collection('imagelist')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  /**
   * 去发布
   */
  qufabu(){
    //跳转至上传图片页面
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /**
   * 获取图库数据列表
   */
  getImageList(){
    let that = this
    //从云端数据库获取数据
    db_imglist.get({
      success(res){
        that.setData({
          dataList:res.data
        })
      }
    })
  },

  /**
   * 删除记录
   */
  deleteImg(e){
    let that = this
    let id = e.currentTarget.dataset.id
    let fileID = e.currentTarget.dataset.imgurl
    //询问
    wx.showModal({
      title: '警告',
      content: '确定要删除吗？',
      success(res){
        if(res.confirm){
          //用户确定删除
          //删除记录
          db_imglist.doc(id).remove({
            success(res) {
              //同步删除云存储文件
              that.deleteCloudFile(fileID)
              //重新绑定
              that.getImageList()
            }
          })
        }
      }
    })
  },

  /**
   * 根据fileID删除云文件 
   */
  deleteCloudFile(fileID){
    wx.cloud.deleteFile({
      fileList: [fileID],
      success(res){
        console.log('deleteCloudFile-success',res)
      },
      fail(res){
        console.error('deleteCloudFile-fail',res)
      }
    })
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
    this.getImageList()
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