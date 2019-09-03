let that
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic:{},
    id:'',
    openid:'',
    isLike:false,
    replays:[]
  },

  /**
   * 回复
   */
  onReplayClick(){
    //通过id和openid进行跳转
    wx.navigateTo({
      url: '../replay/replay?id='+ that.data.id+"&openid="+that.data.openid,
    })
  },

  /**
   * 是否喜欢
   */
  onLikeClick(e){
    console.log(that.data.isLike)
    if(that.data.isLike){
      //已喜欢,取消收藏
      that.removeFormCollectServer()
    }else{
      //添加收藏
      that.saveToCollectionServer()
    }
  },

  /**
   * 取消喜欢
   */
  removeFormCollectServer(){
    //删除collectDemo
    db.collection('collectDemo')
      .doc(that.data.id)
      .remove({
        success(res){
          //修改isLike false(重刷)
          that.refreshLikeIcon(false)
        }
      })
    
  },

  /**
   * 添加喜欢（收藏）
   */
  saveToCollectionServer(){
    db.collection('collectDemo').add({
      data:{
        _id:that.data.id,
        date:new Date()
      },
      success(res){
        console.log(res)
        //刷新切换喜欢图标
        that.refreshLikeIcon(true)
      },
      fail(err){
        console.log(err)
      }
    })
  },

  refreshLikeIcon(isLike){
    that.data.isLike = isLike
    that.setData({
      isLike:isLike
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.data.id = options.id,
    that.data.openid = options.openid;
    //获取话题信息
    db.collection("topicDemo")
      .doc(that.data.id)
      .get({
        success(res){
          console.log(res)
          that.topic = res.data
          that.setData({
            topic:that.topic
          })
        }
      })

      //获取收藏喜欢状态
      db.collection('collectDemo')
        .where({
          _openid: that.data.openid,
          _id: that.data.id
        })
        .get({
          success(res){
            if(res.data.length>0){
              that.refreshLikeIcon(true)
            }else{
              that.refreshLikeIcon(false)
            }
          },
          fail: console.error
        })
  },

  /**
   * 预览图片
   */
  previewImg(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index;
    //预览
    wx.previewImage({
      //当前显示图片
      current: this.data.topic.images[index],
      //所有图片
      urls: this.data.topic.images,
    })
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
    //获取回复列表
    that.getReplay()
  },

  /**
   * 获取回复列表
   */
  getReplay(){
    db.collection('replayDemo')
      .where({
        t_id:that.data.id
      })
      .get({
        success(res){
          console.log("replay",res)
          that.setData({
            replays: res.data
          })
        },
        fail: console.error
      })
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