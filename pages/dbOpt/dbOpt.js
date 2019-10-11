// pages/dbOpt/dbOpt.js
const db = wx.cloud.database({
  env: 'test-jj55w'
})

Page({
  newVal:'',
  /**
   * 页面的初始数据
   */
  data: {
    userList:'',
    dbFieldVal:''
  },

  /**
   * 获取新记录值
   */
  getNewsFieldVal(e){
    this.newVal = e.detail.value
    console.log(this.newVal)
  },

  /**
   * 数据全部（年龄）
   */
  updateAllData(){
    //调用云函数，并传参
    wx.cloud.callFunction(
      {
        name:"updataInfo",
        data:{name:this.newVal}
      }).then(res=>{
        console.log(res)
      })
  },

  /**
   * 删除数据
   */
  deleteData(){
    db.collection('shujuku3')
      .doc(this.newVal)
      .remove()
      .then(console.log)
      .catch(console.error)
  },

  /**
   * 获取用户数据
   */
  getUserRecord(){
    let that = this
    /*
    //回调方式
    db.collection('shujuku3').get({
      success(res){
        console.log(res.data)
      }
    })
    */
    //promise
    db.collection('shujuku3').get().then(res=>{
      that.setData({
        userList:res.data
      })
    })
    
  },

  /**
   * 表单数据录入
   */
  formSubmit(e){
    //获取表单数据
    let userInfo ={
      username: e.detail.value.username,
      userage: e.detail.value.userage
    } 
    //数据库操作
    this.cloudDBadd(userInfo)
  },

  /**
   * 数据库云记录添加
   * 数据表为shujuku2
   */
  cloudDBadd(userInfo){
    /*回调风格
    //创建数据库对象
    const db = wx.cloud.database({
      env: 'test-jj55w'
    })
    
    //选择数据库集合并添加数据
    //创建服务器端时间
    db.collection('shujuku3').add({
      data:{
        name: userInfo.username,
        age: userInfo.userage,
        createTime: db.serverDate()
        //createTime: new Date('2018-03-05')
      },
      success(res){
        //成功录入后返回新记录的_id:25c59b425d3a722f02dd652a22b73c81
        console.log('success',res)
      }
     
    })
    */
    //promise方式
    db.collection("shujuku3").add({
      data: {
        name: userInfo.username,
        age: userInfo.userage,
        createTime: db.serverDate()
        //createTime: new Date('2018-03-05')
      }
    }).then(res=>{
      console.log('success', res)
    }).catch(console.error)


  },

  /**
   * 数据更新
   */
  updateData(){
    db.collection('shujuku3').doc('075734515d9bfb250d5716534a8c273f').update({
      data:{
        name:this.newVal
      }
    }).then(res=>{
      console.log(res)
      wx.showToast({
        title:'更新记录数：'+res.stats.updated
      })
    }).catch(console.error)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    //回调模式
    /*
    db.collection('shujuku3').where({
      _id: '25c59b425d3a722f02dd652a22b73c81'
    }).get({
      success(res){
        console.log(res)
      }
    })*/
    //promise
    db.collection('shujuku3').where({
      _id: '075734515d9bfb250d5716534a8c273f'
    }).get().then(res=>{
      console.log(res.data[0].name)
      that.setData({
        dbFieldVal: res.data[0].name
      })
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