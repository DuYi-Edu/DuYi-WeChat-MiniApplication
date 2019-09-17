// components/custom-components.js
var myBehavior = require("my-behavior")

Component({
  behaviors: [myBehavior],
  // 生命周期
  created:function(){
    console.log("custom-components-create")
  },
  attached:function(){
    console.log("custom-components-attached")
  },
  detached:function(){
    console.log("custom-components-detached")
  },

  lifetimes:{
    created: function () {
      console.log("lifetimes-custom-components-create")
    },
    attached: function () {
      console.log("lifetimes-custom-components-attached")
    },
    detached: function () {
      console.log("lifetimes-custom-components-detached")
    },
    error:function(e){
      console.log(e)
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
