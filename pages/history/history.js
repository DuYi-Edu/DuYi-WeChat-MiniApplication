const app = getApp()
let that
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    pageSize:5,
    totalCount:0,
    topics:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.getData(that.data.page)
  },

  /**
   * 获取所有数据
   */
  getData(page){
    db.collection("topicDemo")
    .count({
      success(res){
        that.data.totalCount = res.total
      }
    })

    try{
      db.collection("topicDemo")
        .where({
          _openid: app.globalData.openid
        })
        .limit(that.data.pageSize)
        .orderBy('date','desc')
        .get({
          success(res){
            that.data.topics = res.data
            that.setData({
              topics: that.data.topics
            })
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
          },
          fail(){
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
          }
        })
    }
    catch(e){
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      console.log(e)
    }
  },

  /**
   * 具体查看一个话题
   */
  onItemClick(e){
    let id = e.currentTarget.dataset.topicid
    //带参跳转
    wx.navigateTo({
      url: '../homeDetail/homeDetail?id='+id,
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
    wx.showNavigationBarLoading()
    that.getData(that.data.pgae)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var temp = []

    if(that.data.topics.length < that.data.totalCount){
      try{
        db.collection('topicDemo')
          .where({
            _openid:app.globalData.openid
          })
          .skip(5)
          .limit(that.data.pageSize)
          .orderBy('date','desc')
          .get({
            success(res){
              if(res.data.length > 0){
                for(let i=0;i<res.data.length;i++){
                  let tempTopic = res.data[i]
                  temp.push(tempTopic)
                }

                let totalTopic = {}
                totalTopic = that.data.topics.concat(temp)

                that.setData({
                  topics:totalTopic
                })
              }else{
                wx.showToast({
                  title: '没有更多数据了',
                })
              }
            }
          })
      }catch(e){
        console.error(e)
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})