var customFormControls = require("./custom-form-controls")

Component({
  behaviors: [customFormControls],
  relations:{
    "./custom-form":{
      type:'ancestor',//关联的目标节点应为祖先节点
      linked: function (target) {
        console.log("custom-input-linked")
      }
    }
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
