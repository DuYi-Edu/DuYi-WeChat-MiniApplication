// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },


  /**
   * 计算
   */
  calNum(e){
    let that = this
    //获取数值
    let num1 = e.detail.value.num1
    let num2 = e.detail.value.num2
    let opt = e.detail.target.dataset.opt
    //判别
    if(num1 == "" || num2 == ""){
      wx.showToast({
        title: '数值未填',
      })
    }else{
      wx.showLoading({
        title: '计算中...',
      })

      //提交云函数处理
      wx.cloud.callFunction({
        name:"cal",//云函数名称
        data:{
          num1,
          num2,
          opt
        },
        success(res){
          wx.hideLoading()
          that.setData({
            result: res.result
          })
        }
      })
    }
    
  }
})