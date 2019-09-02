// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    j:1,//帧动画初始图片
    isSpeaking:false,
    voices:[]
  },

  /**
   * 按钮按下
   */
  touchdown(){
    //录音开始
    console.log('手指按下了....')
    console.log('new data:'+ new Date)
    let _this = this;
    //麦克风的帧动画
    speaking.call(this)
    this.setData({
      isSpeaking:true
    })

    //开始录音
    wx.startRecord({
      success(res){
        //临时路径，
        let tempFilePath = res.tempFilePath
        console.log('tempFilePath:'+tempFilePath)
        //持久保存
        wx.saveFile({
          tempFilePath: tempFilePath,
          success(res){
            //持久路径
            //本地文件存储大小限制在100M
            let savedFilePath = res.savedFilePath
            console.log('savedFilePath:'+savedFilePath)
          }
        })
        //成功提示
        wx.showToast({
          title: '恭喜！录音成功',
          icon:"success",
          duration: 1000
        })
        //获取录音音频列表
        wx.getSavedFileList({
          success(res){
            console.log(res)
            let voices = [];
            for(let i=0;i<res.fileList.length;i++){
              //格式化时间
              let createTime = new Date(res.fileList[i].createTime)
              //将音频大小B转为KB
              let size = (res.fileList[i].size / 1024).toFixed(2);
              //建立对象，存储于voices
              let voice = {
                filePath:res.fileList[i].filePath,
                createTime: res.fileList[i].createTime,
                size:size
              };
              
            
              voices = voices.concat(voice)
              console.log(voices)
            }
            _this.setData({
              voices:voices
            })
          }
        })
      },
      fail(res){
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对！',
          showCancel:false,
          success(res){
            if(res.confirm){
              console.log("你已经知道")
              return
            }
          }
        })
      }
    })
  },

  /**
   * 按钮放开
   */
  touchup(){
    //录音停止
    console.log("手指抬起了")
    //关闭麦克风
    this.setData({
      isSpeaking:false,
    })
    clearInterval(this.timer)
    wx.stopRecord()
  },

  /**
   * 选择播放
   */
  gotoPlay(e){
    console.log(e.currentTarget.dataset.key)
    let filePath = e.currentTarget.dataset.key;
    //点击开始播放
    wx.showToast({
      title: '开始播放',
      icon:'success',
      duration: 1000
    })
    //播放
    wx.playVoice({
      filePath: filePath,
      success(){
        wx.showToast({
          title: '播放结束',
          icon: 'success',
          duration: 1000
        })
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


//麦克风帧动画
function speaking(){
  let _this = this;
  //话筒帧动画
  let i = 1;
  setInterval(()=>{
    i++;
    i = i % 5;
    _this.setData({
      j:i
    })
  },200)
  
}