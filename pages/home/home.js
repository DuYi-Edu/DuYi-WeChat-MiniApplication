let that
const app = getApp()
const db = wx.cloud.database()
Page({
  currentPage: 1,
  pageNum: 4,
  /**
   * 页面的初始数据
   */
  data: {
    totalCount:0,
    topics: {},
  },

  /**
   * 单信息的查看
   */
  onItemClick(e){
    let id = e.currentTarget.dataset.topicid
    let openid = e.currentTarget.dataset.openid;
    //console.log(id)
    //console.log(openid)
    //跳转
    wx.navigateTo({
      url: '../homeDetail/homeDetail?id='+id+"&openid="+openid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    //另一种初始化模式
    /*
    wx.cloud.init({
      ent: app.globalData.evn
    })
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    that.getData()
    that.getDataCount()
  },

  /**
   * 获取记录总数操作
   */
  getDataCount(){
    db.collection('topicDemo').where({
      _openid: app.globalData.openid
    }).count({
      success(res){
        that.data.totalCount = res.total
      }
    })
  },

  /**
   * 获取数据
   * 每次只能拿20条
   */
  getData() {
    db.collection('topicDemo')
      .orderBy('date', 'desc').limit(that.pageNum)
      .get({
        success(res) {
          //利用es6转换日期格式
          res.data.map((value, index, array) => {
            value.date = String(value.date)
          })

          that.data.topics = res.data
          that.setData({
            topics: that.data.topics
          })

          //隐藏标题栏loading动作
          wx.hideNavigationBarLoading();
          //终止下来刷新动作
          wx.stopPullDownRefresh()
        },
        fail(e) {
          //隐藏标题栏loading动作
          wx.hideNavigationBarLoading();
          //终止下来刷新动作
          wx.stopPullDownRefresh()
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //加载标题栏loading动作
    wx.showNavigationBarLoading()
    that.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let temp = [];
    //获取后面10条记录
    if(this.data.topics.length < this.data.totalCount){
      //还可以拿
      /*
      wx.showToast({
        title: '继续取值',
      })
      */
      db.collection('topicDemo').skip(that.currentPage* that.pageNum).get({
        success(res){
          //res.data 是包含以上定义的两条记录的数组
          if(res.data.length>0){
            for(let i =0;i<res.data.length;i++){
              let tempTopic = res.data[i];
              temp.push(tempTopic)
            }
            let totalTopic = {}
            //concat是连接两个数组，返回一个新数组
            totalTopic = that.data.topics.concat(temp);
            that.setData({
              topics:totalTopic
            })

          }

          //当前页+1
          that.currentPage += that.currentPage
        }
      })

    }else{
      wx.showToast({
        title: '没有更多数据了'
      })
    }


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})