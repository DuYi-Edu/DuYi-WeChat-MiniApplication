// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //记录播放状态
    isPlaying:false,
    //记录图片的播放和停止时显示的状态
    changedImg:false,
    music:{
      url: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      title: '此时此刻',
      coverImg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    }
  },

  /**
   * 播放
   */
  onAudioTap(){
    if(this.data.isPlaying){
      //正常在播放,暂停操作
      wx.pauseBackgroundAudio();
    }else{
      //暂停场景
      //获得音乐对象
      let music = this.data.music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl:music.coverImg
      })
    }
  },

  /**
   * 停止播放
   */
  onStopTap(){
    let that = this;
    wx.stopBackgroundAudio({
      success(){
        //改变图片和改变图标
        that.setData({
          isPlaying: false,
          changeImg: false
        })
      }
    })
  },

  /**
   * 快进或者慢进
   */
  onPositionTap(e){
    //获取点击按钮
    let how = e.target.dataset.how
    //获取音乐的状态
    wx.getBackgroundAudioPlayerState({
      success(res){
        //console.log(res)
        if(res.status === 1){
          //正在播放
          //获得音乐总时长
          let duration = res.duration;
          //音乐播放的当前位置
          let currentPosition = res.currentPosition;
          //判断how
          if(how === "0"){
            //退,在当前播放位置减10秒，当然如果当前秒数小于10秒，那么直接设置为1秒
            let position = currentPosition -10;
            if(position < 10){
              position = 1;
            }
            //快退
            wx.seekBackgroundAudio({
              position: position,
            })
            //给用户一个提示
            wx.showToast({
              title: '快退10秒',
              duration:500
            })
          }
          if(how === "1"){
            //进，在当前播放位置添加10秒，如果加上10后大于了总长度，那么久直接变为1
            let position = currentPosition + 10
            if(position > duration){
              //duration 总长
              position = duration -1
            }
            //执行快进
            wx.seekBackgroundAudio({
              position: position,
            })
            //友好提示
            wx.showToast({
              title: '快进10秒',
              duration: 500
            })
          }
        }else{
          //非播放状态,友好提示
          wx.showToast({
            title: '音乐未播放',
            duration: 800
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载时，注册监听事件
    this.onAudioState();
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

  },
  
  /**
   * 注册时的加载事件
   */
  onAudioState() {
    let that = this
    wx.onBackgroundAudioPlay(() => {
      //当正在播放时（play被触发时）
      that.setData({
        isPlaying: true,
        changedImg: true
      })
      console.log("on play");
    })
    wx.onBackgroundAudioPause(()=>{
      that.setData({
        isPlaying:false
      })
      console.log("on pause")
    })
    wx.onBackgroundAudioStop(()=>{
      //当音乐停止的时候
      that.setData({
        isPlaying:false,
        changedImg:false
      })
      console.log('on stop')
    })
  }
})

