// index.js
var app = getApp()
Page({
  data: {
    tableID: 812,
    Limit: 28,
  },

  onLoad: function (options) {

  },

  onShow: function (options) {
    //this.fetchRandomPM()
    this.setData({
      random: Math.round(Math.random() * 27)
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  // fetchRandomPM() {
  //   let that = this
  //   let limit = this.data.Limit
  //   let tableID = this.data.tableID
  //   let i = Math.round(Math.random() * 27 );
  //   let objects = {
  //     tableID,
  //     limit
  //   }

  //   wx.BaaS.getRecordList(objects).then((res) => {
  //     that.setData({
  //       random: res.data.objects[i].id
  //     })
  //   }, (err) => {
  //     console.dir(err)
  //   });
  // },

  randomPM: function (event) {
    var postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../person/person?id=" + postId
    })
  },

  viewPMList: function (event) {
    wx.navigateTo({
      url: "../list/list"
    })

  },
  viewPM: function (event) {
    wx.navigateTo({
      url: "../pm/pm"
    })

  }
})