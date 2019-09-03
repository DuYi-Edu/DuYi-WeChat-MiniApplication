const zhenzisms = require('../../utils/zhenzisms.js')

Page({
  phone: '',
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    btnDisabled: false,
    btnValue:'',
    name: '',
    phone: '',
    code: '',
    seconde: 60
  },

  //保存注册
  save(){
    //获取用户的所有输入
    //并对验证码做对比证明手机的真实性

    //从缓存中取出验证码
    wx.getStorage({
      key: 'code',
      success: function(res) {
        if(this.code != res.data.code){
          wx.showModal({
            title: '错误',
            content: '验证码错误',
            showCancel:false
          })
        }else{
          console.log('phone', this.phone)
          console.log('name', this.name)
        }

      },
    })
  },

  /**
   * 获取验证码
   */
  //获取短信验证码
  getCode(e) {
    //生成验证码并记录
    wx.setStorage({
      key: 'code',
      data: '2233',
    })

    console.log('获取验证码');
    var that = this;
    zhenzisms.client.init('https://sms_developer.zhenzikj.com', '102151', 'fdd83e14-1aca-4bca-b8e9-3650f7f08388');
    zhenzisms.client.send(function (res) {
      if (res.data.code == 0) {
        that.timer();
        return;
      }
      wx.showToast({
        title: res.data.data,
        icon: 'none',
        duration: 2000
      })
    }, that.data.phone, '验证码为:2233');

  },
  timer: function () {
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          var second = this.data.second - 1;
          this.setData({
            second: second,
            btnValue: second + '秒',
            btnDisabled: true
          })
          if (this.data.second <= 0) {
            this.setData({
              second: 60,
              btnValue: '获取验证码',
              btnDisabled: false
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })
  },

  /**
   * 输出验证码
   */
  bindCodeInput(){
    this.setData({
      code:e.detail.value
    })
  },

  /**
   * 获取姓名
   */
  bindNameInput(e){
    this.setData({
      name: e.detail.value
    })
  },

  /**
   * 获取电话
   */
  bindPhoneInput(e){
    console.log(e.detail.value)
    let val = e.detail.value
    this.setData({
      phone:val
    })
    if(val != ''){
      this.setData({
        hidden:false,
        btnValue:'获取验证码'
      })
    }else{
      this.setData({
        hidden: true
      })
    }
  },

  /**
   * 获取需要拨打的电话
   */
  callPhone(e){
    console.log(e.detail.value);
    this.phone = e.detail.value
  },

  /**
   * 拨打电话
   */
  mackcallphone(){
    wx.makePhoneCall({
      phoneNumber: this.phone,
      success(res){
        console.log('success',res)
      },
      fail(res){
        console.log('fail',res)
      }
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