const _items = ['播放列表','歌曲','专辑','演唱者']
const _songsList = [{
  dataUrl:'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
  name:'哑巴',
  singer:'薛之谦',
  coverImgUrl:'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
}, {
    dataUrl: 'http://stream.qqmusic.tc.qq.com/138549169.mp3',
    name: '你还要我怎样',
    singer: '薛之谦',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg'
  }, {
    dataUrl: 'http://stream.qqmusic.tc.qq.com/137903929.mp3',
    name: '微微一笑很倾城',
    singer: '杨洋',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg'
  }, {
    dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
    name: '演员',
    singer: '薛之谦',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg'
  }
]
const _albumList = [
  {
    name: "寂寞不痛",
    singer: 'A-Lin',
image:'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nlo922ahOEE.jpg?max_age=2592000'
  },
  {
    name: "喜剧之王",
    singer: '李荣浩',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001FOctH2oGoAx.jpg?max_age=2592000'
  },
  {
    name: "艾欧，不错哦",
    singer: '周杰伦',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg?max_age=2592000'
  },
  {
    name: "寂寞不痛",
    singer: 'A-Lin',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nlo922ahOEE.jpg?max_age=2592000'
  }
]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    songsList: _songsList,
    musicGroupName:_items[0],
    actionSheetHidden:true,
    actionSheetItems:_items,
    listTemplateName:'music-play-list',
    templateData:'',
    playing:false,
    playBar:{
      coverImgUrl:'http://img.5nd.com/86/photo/2018album/20185/85111.jpg',
      name:'哑巴'
    }
  },

  /**
   * 点击唱片
   */
  play(e){
    let that = this
    let res = this.data.songsList[e.currentTarget.dataset.num]
    //修改
    this.setData({
      //改变播放轴
        playBar:res,
        playingSongsNum: e.currentTarget.dataset.num,
        playing:true
    })
    //播歌
    wx.playBackgroundAudio({
      dataUrl: res.dataUrl,
      name:res.name,
      singer:res.singer,
      coverImgUrl:res.coverImgUrl,
      complete(res){
        console.log(res)
      }
    })
  },

  /**
   * 暂定
   */
  pause(){
    let that = this
    //暂停了歌曲的播放
    wx.pauseBackgroundAudio({
      success(){
        that.setData({
          //变回播放图标
          playing:false
        })
      }
    })
  },

  /**
   * 列表选择
   */
  actionSheetTap(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    
  },

  /**
   * action-sheet的显示隐藏
   */
  actionSheetChange(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  /**
   * item的单击
   */
  bindItemTap(e){
    //单击链接的操作
    //获知现在所点击的菜单
    let _listTemplateName = ''
    let _templateData = ''
    let sheetitem = e.currentTarget.dataset.sheetitem
    //判断打开模板页面
    switch (sheetitem){
      case '播放列表':
        _listTemplateName = 'music-play-list'
        break
      case '歌曲':
        _listTemplateName = 'songs-list'
        _templateData = _songsList
        break
      case '专辑':
        _listTemplateName = 'album-list'
        _templateData = _albumList
        break
      case '演唱者':
        _listTemplateName = 'author-list'
        _templateData = _albumList
        break
    }
    console.log(_listTemplateName)
    //显示隐藏
    this.setData({
      listTemplateName:_listTemplateName,
      templateData: _templateData,
      actionSheetHidden: !this.data.actionSheetHidden
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