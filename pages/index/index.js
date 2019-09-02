const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 开始录音
   */
  start:function(){
    const options = {
      duration:10000,//指定录音的时长，单位ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format:'mp3',//音频格式，有效值 aac/mp3
      frameSize:50,//指定帧大小，单位kb
    }

    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(()=>{
      console.log('recorder start')
    });
    recorderManager.onError((res)=>{
      console.log(res);
    })

  },

  /**
   * 停止录音
   */
  stop(){
    recorderManager.stop();
    recorderManager.onStop((res)=>{
      this.tempFilePath = res.tempFilePath
      console.log('停止录音',res.tempFilePath)
    })
  },

  /**
   * 播放录音
   */
  play(){
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.tempFilePath,
    innerAudioContext.onPlay(()=>{
      console.log('开始播放')
    })
    innerAudioContext.onError((res)=>{
      console.log('[error]',res)
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