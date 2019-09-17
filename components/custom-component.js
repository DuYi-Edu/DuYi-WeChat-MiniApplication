// components/custom-component.js
Component({
  //生命周期（钩子函数）
  attached:function(){
    this.setData({
      num1:10,
      num2:20,
      /*
      "student":{
        name:"alice",
        age:23
      },
      */
      //"student.age":19,
      //"studentsAge[0]" : 28
    })
  },
  //监听器(一旦有setData的操作就会调用)
  observers:{
    "**":function(){
      //每次setData触发的时候都会有这个变化
      console.log("现在正在调用监听器")
    },

    'num1,num2':function(numA,numB){
      //监控num1和num2的变化，完成以下代码
      this.setData({
        //num1:500,
        //num2:600
        sum: numB
      })
    },
    'student.**':function(myName){
      console.log(myName)
      console.log(myName.age)
      this.setData({
        //"student.name":"welcome "+ myName
        myName: "welcome " + myName
      })
    },
    'studentsAge.**':function(arr0){
      console.log(arr0)
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
    num1:10,
    num2:20,
    sum:30,
    student:{
      name:"tom",
      age:20
    },
    studentsAge:[20,25,23]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
