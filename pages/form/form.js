// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    multiIndex:[0,0,0],
    multiArray:[
      ['中国','北京'],["美国",'加利福尼亚','洛杉矶'],['英国','伦敦','开普敦']
    ],
    index:0,
    country:["美国","中国","日本","英国"],

    items:[
      { name: 'tom', value: 'CHA'},
      { name: 'mary', value: 'CHA', checked: 'true'},
      { name: 'alice', value: 'USA' },
    ],

    radioItems:[
      {name:'tom',value:'美国'},
      { name: '张三', value: '中国', checked:'true'},
      { name: 'alice', value: '英国'}
    ]
  },


  bindMultiPickerColumnChange(e){
    console.log(e)
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
   
  },

  bindMultiPickerChange(e){
    console.log(e)
  },

  bindTimeChange(e){
    console.log(e.detail.value)
    this.setData({
      time:e.detail.value
    })
  },

  switch1Change(e){
    console.log(e.detail.value)
  },

  sliderChange(e){
    console.log(e.detail.value)
  },

  bindPickerChange(e){
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  radioChange(e){
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    console.log(changed)
  },

  phonenumber(e){
    console.log(e)
  },

  checkbind(e){
    console.log(e)
  },

  checkedChange(){

  },

  onstatusChange(e){
    console.log(e)
  },

  confirmBtn(e){
    console.log(e)
  },

  /**
   * 提交事件
   */
  formSubmit(e){
    console.log(e.detail.value)
    //获取数据

    //处理数据

    //提交数据
  },

  /**
   * 重置事件
   */
  formReset(e){
    console.log(e)
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