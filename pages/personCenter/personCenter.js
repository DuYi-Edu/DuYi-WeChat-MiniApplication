// pages/personCenter/personCenter.js
Page({
  //表单数据
  personName:'',
  password:'',
  gender:'',
  hobby:'',
  birthday:'',
  studyYears:'',
  isMember:'',

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 获取姓名
   */
  inputValue(e){
    this.personName = e.detail.value;
    console.log(this.personName)
  },

  /**
   * 获取密码
   */
  passwordValue(e){
    this.password = e.detail.value;
    console.log(this.password)
  },


  /**
   * 获取性别
   */
  genderRadio(e){
    this.gender = e.detail.value == 1 ? "male" : "female";
    console.log(this.gender)
  },

  /**
   * 获取爱好
   */
  hobbyCheckbox(e){
    this.hobby = e.detail.value
    console.log(this.hobby)
  },

  /**
   * 获取生日
   */
  birthdayValue(e){
    this.birthday = e.detail.value;
    console.log(this.birthday)
  },

  /**
   * 获取学习年数
   */
  sliderValue(e){
    this.studyYears = e.detail.value;
    console.log(this.studyYears)
  },

  /**
   * 获取判断会员
   */
  isMemberValue(e){
    this.isMember = e.detail.value;
    console.log(this.isMember)
  },

  /**
   * 提交按钮
   */
  regFormSubmit(){
    let memberData = {
      personName: this.personName,
      password: this.password,
      gender: this.gender,
      hobby: this.hobby,
      birthday: this.birthday,
      isMember: this.isMember 
    }

    if(memberData.personName == ""){
      wx.showModal({
        title: 'error',
        content: '姓名没有填写',
      })
    }

    //向服务器提交(含云)
    //console.log(memberData)

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