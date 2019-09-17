// components/Dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'标题'
    },

    content:{
      type:String,
      value:'弹窗内容'
    },

    cancelText:{
      type:String,
      value:'取消'
    },

    confirmText:{
      type:String,
      value:'确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /*
    title:"title",
    content:"content",
    cancelText:"cancelText",
    confirmText:"confirmText"
    */
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示页面（修改isShow)
    showDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },

   //隐藏组件
    hideDialog(){
      this.setData({
        isShow: false
      })
    },

    _cancelEvent(){
      //console.log("cancel")
      //this.showDialog()
      //触发回调
      this.triggerEvent("cancelEvent")
    },

    _confirmEvent(){
      //console.log('event')
      //this.showDialog()
      this.triggerEvent("confirmEvent")
    }
  }
})
