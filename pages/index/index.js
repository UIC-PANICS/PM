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
    this.fetchRandomPM()
  },
  fetchRandomPM() {
    let that = this
    let limit = this.data.Limit
    let tableID = this.data.tableID
    let i = Math.round(Math.random() * 27 );
    let objects = {
      tableID,
      limit
    }

    wx.BaaS.getRecordList(objects).then((res) => {
      that.setData({
        random: res.data.objects[i].id
      })
    }, (err) => {
      console.dir(err)
    });
  },
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