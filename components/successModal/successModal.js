// components/successModal/successModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalHidden:{
     type:Boolean,
     value:true 
    },
    modalIcon:{
      type:String,
      value: '',
    },
    modalTitle:{
      type:String,
      value:''
    },
    modalDesc:{
      type:String,
      value:''
    }
  
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
    //点击modal，隐藏现在的显示
    modal_click_Hidden:function(){
      this.setData({
        modalHidden:false
      })
    }
  }
})
