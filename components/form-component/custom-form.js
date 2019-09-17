var customFromControls = require("./custom-form-controls")
Component({
  relations:{
    "customFormControls":{
      type:"descendant",//关联的目标节点应为子孙节点
      target: customFromControls,
      linked:function(target){
        console.log("custom-form-linked")
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
