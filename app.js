//app.js
App({
  onLaunch() {
    // 引入 SDK
    require('./sdk-v1.0.10')
    // 初始化 SDK
    let clientId = '93c67ebe8e82a7df4017'
    wx.BaaS.init(clientId)

  }
})