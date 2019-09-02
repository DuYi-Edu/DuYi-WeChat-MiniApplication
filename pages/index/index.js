Page({
  data: {
    // 记录播放状态
    isPlaying: false,
    // 记录 coverImg ，仅当音乐初始时和播放停止时，使用默认的图片。播放中和暂停时，都是用当前音乐的的 coverImg
    changedImg: false,
    // 音乐内容
    music: {
      "url": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=4",
      "title": "谭咏麟 - 朋友",
      "coverImg": "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"
    },
  },
  onLoad: function () {
    // 页面加载时，注册监听事件
    this.onAudioState();
  },
  // 点击播放或者是暂停按钮时触发
  onAudioTap: function (event) {
    if (this.data.isPlaying) {
      // 正常播放的话，就暂停。并修改播放的状态
      wx.pauseBackgroundAudio();
    } else {
      // 暂停的话，就开始播放。并修改播放的状态
      let music = this.data.music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.coverImg
      })
    }
  },
  // 点击停止音乐的播放
  onStopTap: function () {
    let that = this;
    wx.stopBackgroundAudio({
      success: function () {
        // 改变 coverImg 和 播放状态
        that.setData({ isPlaying: false, changedImg: false });
      }
    })
  },
  // 点击 快进10秒或者是快退10秒时，触发
  onPositionTap: function (event) {
    let how = event.target.dataset.how;
    // 获取音乐的播放状态
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        // 仅仅在音乐播放中，快进和快退才生效
        // 音乐的播放状态，1 表示播放中
        let status = res.status;
        if (status === 1) {
          // 音乐的总时长
          let duration = res.duration;
          // 音乐播放的当前位置
          let currentPosition = res.currentPosition;
          if (how === "0") {
            //注意: 快退时，当前播放位置快退 10 秒小于 0 的话，直接设置 position 为 1；否则的话直接减去 10 秒秒
            // 快退到达的位置
            let position = currentPosition - 10;
            if (position < 0) {
              position = 1;
            }
            // 执行快退
            wx.seekBackgroundAudio({
              position: position
            });
            // 给出一个友情提示，实际引用中，请删除！！！
            wx.showToast({ title: "快退10s", duration: 500 });
          }
          if (how === "1") {
            //注意: 快进时，当前播放位置快进 10 秒后大于总时长的话，直接设置 position为 总时长减 1 
            // 快进到达的位置
            let position = currentPosition + 10;
            if (position > duration) {
              position = duration - 1;
            }
            // 执行快进
            wx.seekBackgroundAudio({
              position: position
            });
            // 给出一个友情提示，实际引用中，请删除！！！
            wx.showToast({ title: "快进10s", duration: 500 });
          }
        } else {
          // 给出一个友情提示，实际引用中，请删除！！！
          wx.showToast({ title: "音乐未播放", duration: 800 });
        }
      }
    })
  },
  onAudioState: function () {
    let that = this;
    wx.onBackgroundAudioPlay(function () {
      // 当 wx.playBackgroundAudio() 执行时触发
      // 改变 coverImg 和 播放状态
      that.setData({ isPlaying: true, changedImg: true });
      console.log("on play");
    });
    wx.onBackgroundAudioPause(function () {
      // 当 wx.pauseBackgroundAudio() 执行时触发
      // 仅改变 播放状态
      that.setData({ isPlaying: false });
      console.log("on pause");
    });
    wx.onBackgroundAudioStop(function () {
      // 当 音乐自行播放结束时触发
      // 改变 coverImg 和 播放状态
      that.setData({ isPlaying: false, changedImg: false });
      console.log("on stop");
    });
  }
})