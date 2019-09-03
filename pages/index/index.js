let phone = ''
let name = ''
let psw = ''
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isZhuce:true
  },

  /**
   * 登录
   */
  login(){
    //获取用户数据(全局变量中有)
    //判别
    if(phone === "" || phone.length < 11){
      wx.showToast({
        title: '手机号未填或错误',
        icon: 'none'
      })
      return
    }
    if(psw === ""){
      wx.showToast({
        title: '密码未填写',
        icon: 'none'
      })
      return
    }

    //向服务器数据库进行查找
    //把数据库数据获取后进行比较(数据库能获取值代表正确)
    db.collection('shujuku5').where({
      phone,
      psw
    }).get({
      success(res){
        if(res.data.length){
          //提示成功
          wx.showToast({
            title: '登录成功',
            icon:'none',
            duration: 1000
          })
          //成功->缓存->跳转页面
          let regInfo = {
            phone,
            name:res.data[0].name,
            id:res.data[0]._id
          }
          wx.setStorage({
            key: 'regInfo',
            data: regInfo,
          })
          setTimeout(()=>{
            //跳转
            wx.redirectTo({
              url: '/pages/userCenter/userCenter',
            })
          },1000)
        }else{
          //电话或密码错误
          //不成功->提示
          wx.showToast({
            title: '用户名或密码错误',
            icon:'none'
          })
        }
      },
      fail(res){
        console.error('fail',res)
      }
    })
    
    
   
  },

  validate(){
    if(name === ''){
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
      return 0
    }
    if(phone === '' || phone.length <11){
      wx.showToast({
        title: '手机号未填或填写错误',
        icon: 'none'
      })
      return 0
    }
    if(psw === '' || psw.length < 3){
      wx.showToast({
        title: '密码未填或填写错误',
        icon:'none'
      })
      return 0
    }
    return 1
  },

  /**
   * 注册
   */
  reg(){
    let that = this
    //获取用户的输入（变量获取）

    //判断输入合法性
    if(!this.validate()){
      return
    }

    //判断手机号是否已经存在
    db.collection('shujuku5').where({
      phone
    }).get({
      success(res){
        if(res.data.length){
          //已经存在，不能继续注册
          wx.showToast({
            title: '手机号已经存在',
            icon:'none'
          })
        }else{
          that.zhuce()
        }
      }
    })
    return
    //注册信息入云数据库

    //提示完成后的跳转
  },

  zhuce:function(){
    let that = this
    db.collection("shujuku5").add({
      data: {
        name,
        phone,
        psw
      },
      success(res) {
        console.log('提交成功', res)
        //提示用户
        wx.showToast({
          title: '注册成功',
          icon:'none',
        })
        //跳转登录界面
        that.setData({
          isZhuce:false
        })
      }
    })
  },

  /**
   * 获取用户电话
   */
  getphone(e){
    phone = e.detail.value
  },

  /**
   * 获取用户密码
   */
  getpsw(e){
    psw = e.detail.value
  },

  /**
   * 获取用户名
   */
  getname(e){
    name = e.detail.value 
  },

  /**
   * 显示注册页面
   */
  showZhuce(){
    this.setData({
      isZhuce:false
    })
  },

  /**
   * 显示登录页面
   */
  showDenglu(){
    this.setData({
      isZhuce: true
    })
  }

})