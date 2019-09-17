// components/fom/custom-form-field.js
Component({
  //内置表单behaviors
  behaviors:['wx://form-field'],

  //生命周期创造值
  attached(){
    //实例化节点树的运行
    this.setData({
      value:"custom-value"
    })
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
