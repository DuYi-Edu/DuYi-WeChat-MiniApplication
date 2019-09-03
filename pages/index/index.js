Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasResutl: -1,
    bar_state: 0,
    winWidth: 0,
    winHeight: 0,
    img_url: "https://www.demomaster.cn/eatbar/public/static/img/yaoyiyao/img_yaoyiyao.png",
    loading: "https://www.demomaster.cn/eatbar/public/static/img/yaoyiyao/small_loading.gif"
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
    var that = this;
    that.initAnimation();
    //重力加速度
    wx.onAccelerometerChange(function (res) {
      //console.log(res.x)
      //console.log(res.y)
      //console.log(res.z)
      if (res.x > .7 && res.y > .7) {
        // wx.showToast({
        //   title: '摇一摇成功',
        //   icon: 'success',
        //   duration: 2000
        // })
        that.startAnimation();
      }
    })
    var that = this;
    //获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

  },
  initAnimation: function () {
    var that = this;
    //实例化一个动画
    this.animation1 = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 400,
      /**
      * linear 动画一直较为均匀
      * ease 从匀速到加速在到匀速
      * ease-in 缓慢到匀速
      * ease-in-out 从缓慢到匀速再到缓慢
      * 
      * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
      * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
      */
      timingFunction: 'ease',
      // 延迟多长时间开始
      // delay: 100,
      /**
      * 以什么为基点做动画 效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)

      }
    })
    //实例化一个动画
    this.animation2 = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 400,
      /**
      * linear 动画一直较为均匀
      * ease 从匀速到加速在到匀速
      * ease-in 缓慢到匀速
      * ease-in-out 从缓慢到匀速再到缓慢
      * 
      * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
      * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
      */
      timingFunction: 'ease',
      // 延迟多长时间开始
      // delay: 100,
      /**
      * 以什么为基点做动画 效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
  *位移
  */
  startAnimation: function () {
    var that = this
    //x轴位移100px
    var h1 = "35%";
    var h2 = "65%";
    if (this.data.bar_state == 1) {
      h1 = "40%";
      h2 = "40%";
      setTimeout(function () {
        that.setData({
          //输出动画
          bar_state: 0,
          hasResutl: 0
        })
        setTimeout(function () {
          that.setData({
            hasResutl: 1
          })
        }, 4000)
      }, 400)
    } else {
      h1 = "25%";
      h2 = "55%";
      this.setData({
        bar_state: 1
      })
      setTimeout(function () {
        that.startAnimation();
      }, 600)
    }
    this.animation1.height(h1).step()
    this.animation2.top(h2).step()
    this.setData({
      //输出动画
      animation1: that.animation1.export(),
      animation2: that.animation2.export()
    })

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