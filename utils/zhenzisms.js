var client = {};
client.init = function (apiUrl, appId, appSecret){
  this.apiUrl = apiUrl;
  this.appId = appId;
  this.appSecret = appSecret;
}
client.send = function (callback, number_, message, messageId){
  if (typeof (messageId) == "undefined") {
    messageId = '';
  }
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/send.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret,
      message: message,
      number: number_,
      messageId: messageId
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}
client.balance = function (callback) {
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/balance.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}
client.findSmsByMessageId = function (callback, messageId) {
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/findSmsByMessageId.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret,
      messageId: messageId
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}

module.exports = {
  client: client
}
