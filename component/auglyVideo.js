// component/auglyVideo.js
const config = require('../utils/config.js')
let app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList:{
      type:Array,
      value:[]
    },
    aps:{
      type:Object,
      value:{
        isShow:null
      }
    },
    playIndex:{
      type:null,
      value:null
    },
    page:{
      type:String,
      value:'index'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //广告点击
    submitInfo(e){
      
      if(app.globalData.isSubscibe){
        var params = {
          openId:app.globalData.openId,
          formId:e.detail.formId,
          status:'t'
        }
      }else{
        var params = {
          openId: app.globalData.openId,
          formId: e.detail.formId,
        }
      }
      // ajax
      config.ajax('POST', params,config.wxformId,(res)=>{
        console.log('submitInfo',res)
        app.globalData.isSubscibe = true
      },(res)=>{})
    },

    //播放视频
    videoPlay: function (e) {
      var videoList = this.data.videoList
      var index = e.currentTarget.dataset.index
      var id = e.currentTarget.id
      config.ajax('POST', {
        id: id
      }, config.videoPlay, (res) => {
        if (res.data.statusMsg == "success") {
          videoList[index].videoUrl = res.data.data
          if (!this.data.playIndex) { // 没有播放时播放视频
            this.setData({
              videoList: videoList,
              playIndex: index,
              playmid: id
            })
            var videoContext = wx.createVideoContext('myVideo' + id, this)
            videoContext.play()
          } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
            var videoContextPrev = wx.createVideoContext('myVideo' + this.data.playmid, this)
            videoContextPrev.seek(0)
            videoContextPrev.pause()
            this.setData({
              videoList: videoList,
              playIndex: index,
              playmid: id
            })
            var videoContextCurrent = wx.createVideoContext('myVideo' + this.data.playmid, this)
            videoContextCurrent.play()
          }
          var myEventDetail = {
            playIndex: this.data.playIndex,
            playmid: this.data.playmid,
            videoContextCurrent: videoContextCurrent,
            videoContext: videoContext
          } // detail对象，提供给事件监听函数
          var myEventOption = {

          } // 触发事件的选项
          this.triggerEvent('videoPlay', myEventDetail, myEventOption)
        }
      }, (res) => {

      })
    },
  }
})
