const db = wx.cloud.database({
  env:'test-jj55w'
})
const studentsCollection = db.collection("students")

const _cmd = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 修改单条数据的数组记录
   */
  updateOneArray(){
    studentsCollection.doc("26b301645d3abe79031e9bcc2a8d2104").update({
      data:{
        'hobby.1':'dance'
      },
      success(res) {
        console.log(res)
      }, fail(res) {
        console.error
      }
    })
  },
  
  /**
   * 删除一条记录
   */
  deleteOne(){
    studentsCollection.doc("890198e15d3b07f903624a2d2dc3c173").remove({
      success:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 更新党员信息
   */
  updatePartyMember(){
    wx.cloud.callFunction({
      name: 'getrecord',
      data: {
        id:"26b301645d3abd02031d5a371b11c3d0"
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(console.error)
  },

  /**
   * 更新分数
   */
  updateScore(){
    studentsCollection.doc('26b301645d3abe79031e9bcc2a8d2104').update({
      data:{
        'score.english' : _cmd.inc(15)
      },success(res){
        console.log(res)
      },fail(res){
        console.error
      }
    })
  },

  /**
   * 查询大于等于19岁的学员信息
   */
  cloudFunlt19(){
    studentsCollection.where({
      age: _cmd.gte(19),
      'hobby':"sing"
    }).get()
      .then(res => { console.log(res) })
      .catch(console.error)
  },

  /**
   * 云函数的调用
   */
  cloudFun(){
    wx.cloud.callFunction({
      name: 'add',
      data:{
        a: 10,
        b: 20
      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(console.error)
  },

  /**
   * 条件带对象操作的单值查询
   */
  dbSelectWhereObj(){
    studentsCollection.where({
      age: 20,
      "score.math":80
    }).get()
      .then(res => { console.log(res) })
      .catch(console.error)
  },

  /**
   * 多数据的查询(匹配值)
   * 年龄为20岁的同学
   */
  dbSelectMulti(){
    studentsCollection.where({
      age: 20
    }).get()
    .then(res=>{console.log(res)})
    .catch(console.error)
  },

  /**
   * 查询数据（单条）
   */
  dbSelectOne(){
    //查询id为face13585d3abc58031f67ae350cf99e 的学员
    studentsCollection.doc('face13585d3abc58031f67ae350cf99e').get().then(res=>{
      console.log(res.data)
    })
  },

  /**
   * 数据录入操作
   */
  dbAdd(){
    let addData = {
      name: 'jack',
      age: 19,
      birthday: new Date('2001-4-2'),
      createTime: db.serverDate(),
      hobby:['tour','book'],
      isPartyMember: false,
      location: new db.Geo.Point(117,28)
    }
    studentsCollection.add({
      data: addData,
      success:console.log,
      fail:console.error
    })
  }
})