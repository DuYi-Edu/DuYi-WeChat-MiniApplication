Page({
  data: {
    lAnimate: '',
    rAnimate: '',
    start: '北京',
    end: '深圳'
  },
  trigger() {
    let vm = this;
    let option = {
      duration: 100, // 动画执行时间
      timingFunction: 'ease-in' // 动画执行效果
    };
    var lanimation = wx.createAnimation(option); // 创建动画
    var ranimation = wx.createAnimation(option);
    // 起点
    lanimation.translateX(100);
    lanimation.opacity(0.1).step();
    // 终点
    ranimation.translateX(-100);
    ranimation.opacity(0.1).step();
    vm.setData({
      lAnimate: lanimation.export(),// 开始执行动画
      rAnimate: ranimation.export() // 开始执行动画
    })
    setTimeout(() => {
      // 起点
      lanimation.translateX(0);
      lanimation.opacity(1).step();
      // 终点
      ranimation.translateX(0);
      ranimation.opacity(1).step();
      var temp = vm.data.start;
      vm.setData({
        lAnimate: lanimation.export(),// 开始执行动画
        rAnimate: ranimation.export(),// 开始执行动画
        end: temp,
        start: vm.data.end
      })
    }, 100);
  }
})
