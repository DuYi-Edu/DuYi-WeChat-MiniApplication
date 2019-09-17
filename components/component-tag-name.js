// components/component-tag-name.js
//引入behaiors
var myBeahavior = require('my-behavior')

Component({
  //将引入对象，放入数组
  behaviors: [myBeahavior],
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty:String
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
