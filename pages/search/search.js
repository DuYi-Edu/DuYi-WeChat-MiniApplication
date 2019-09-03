const db = wx.cloud.database({
  env: 'test-jj55w'
})
const channelMenuObj = db.collection('channelMenu')
const _cmd = db.command

Page({
  programName: '',
  /**
   * 页面的初始数据
   */
  data: {
    searchInfo:[],
    key: "",
    searchResult:[]
  },

  /**
   * 搜索节目
   */
  searchProgram(){
    let that = this
    let searchTmpResult = []
    channelMenuObj.where({
      "programList.programName": this.programName
    }).get()
    .then(res=>{
      console.log(res)
      //通过数据查找后的结果中寻找符合条件的栏目
      for(let i=0;i<res.data.length;i++){
        let programList = res.data[i].programList
        //在频道列表中寻找符合条件的（if）搜索结果
        for(let j=0;j<programList.length;j++){
          if (programList[j].programName == this.programName){
            //追加频道名称到数组中
            programList[j].channel= res.data[i].channelName
            searchTmpResult.push(programList[j])
          }
        }
      }
      console.log(searchTmpResult)
      //数据绑定
      that.setData({
        searchInfo:searchTmpResult
      })
    })
    .catch(console.error)
  },

  /**
   * 搜索节目名称
   */
  searchProgramName(e){
    this.programName = e.detail.value
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