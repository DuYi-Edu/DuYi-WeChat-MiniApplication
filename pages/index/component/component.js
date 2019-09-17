// pages/index/component/component.js
Component({
  behaviors:[require('behavior1.js')],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  ready(){
    console.log("in component:",this.data.form)
  },

  /**
   * 组件的初始数据
   */
  data: {
    form:"inner-component"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
