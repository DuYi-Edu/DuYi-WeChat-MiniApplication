var https = "https://hv.dingapp.com",//主域名

isSubscibe = '/api/wxUser/isSubscibe', //检查是否订阅

aps = '/api/adv/info',//广告接口

wxUser = '/api/wxUser/info',//获取微信用户信息

wxLogin = '/api/wxUser/login',//获取微信openid

wxformId = '/api/wxUser/subscibe',//收集formid

hotWord = '/api/hotWords/list',//热搜接口

videoList = '/api/video/list',//视频列表接口

listHot = '/api/video/listHot',//分析页面热点视频

videoShare = '/api/video/share',//分享视频

limit = '3',

videoPlay = '/api/video/play'; //统计播放次数

/**
 * 自定义request请求基类
 */
function ajax(Type,params,url,successData,errorData,completeData){
  var methonType = "application/json";
  //访问主域名
  var https = "https://hv.dingapp.com"

  if(Type ==="PUT"){
    var p = Object.keys(params).map(function(key){
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join("&");
    url += "?"+p;
    params = {}
  }
  if(Type === "POST"){
    methonType = 'application/x-www-form-urlencoded'
  }
  wx.request({
    url: https+url,
    method:Type,
    header:{
      'content-type': methonType,
    },
    data:params,
    success:(res)=>{
      successData(res)
    },
    err(res){
      if(errorData){
        errorData(res)
      }
    },
    complete(res){
      if(completeData){
        completeData(res)
      }
    }
  })
}


//导出模块
module.exports={
  ajax:ajax,
  aps:aps,
  wxUser:wxUser,
  wxLogin:wxLogin,
  wxformId:wxformId,
  hotWord:hotWord,
  videoList:videoList,
  listHot:listHot,
  videoPlay:videoPlay,
  videoShare:videoShare,
  isSubscibe:isSubscibe,
  limit:limit
}