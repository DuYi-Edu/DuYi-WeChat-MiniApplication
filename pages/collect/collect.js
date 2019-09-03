let that
const db = wx.cloud.database()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    pageSize:5,
    totalCount:0,
    collects:{},
    topics:[]
  },

  onLoad(options){
    that = this
  },

  onShow(){
    that.getData(that.data.page)
  },

  /**
   * 获取数据
   */
  getData(page){
    db.collection('collectDemo')
      .where({
        _openid: app.globalData.openid
      })
      .get({
        success(res){
          that.data.collects = res.data
          console.log(that.data.collects)

          //获取话题
          that.getTopicFromCollects()
        } 
      })
  },

  /**
   * 获取话题根据id
   */
  getTopicFromCollects(){
    var tempTopics = {}
    for(let i in that.data.collects){
      let topicId = that.data.collects[i]._id
      //去话题表找数据
      db.collection("topicDemo")
        .doc(topicId)
        .get({
          success(res){
            that.data.topics.push(res.data)
            that.setData({
              topics:that.data.topics
            })
          },
          fail:console.error
        })
    }

  }

})