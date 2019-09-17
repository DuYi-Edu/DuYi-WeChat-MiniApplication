// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA:String
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
    onTap:function(){
      //只触发page2
      //this.triggerEvent("customevent")
      //依次触发(只会触发引用位置的上下层关系)
      //this.triggerEvent("customevent",{},{bubbles:true})
      //依次触发（按层叠的调用）
      this.triggerEvent("customevent",{},{
        bubbles:true,
        composed:true
      })
    },

    sendData:function(){
      //子组件传递给父组件的参数
      var myEventDetail = {
        name:"tom"
      }
      //如果有冒泡，处理方式
      var myEventOption={

      }
      //触发回调
      this.triggerEvent("myevent",myEventDetail,myEventOption)
    },

    innerFun:function(){
      console.log("子组件的方法")
    }
  }
})
