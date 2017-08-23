//pm.js
var app = getApp()
Page({
  data: {
    tableID: 1020,
    pmID: '599d86deff650c2f1484c769'
  },

  onLoad() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
    this.fetchPM()
  },
  
  fetchPM() {
    let that = this
    let tableID = this.data.tableID
    let recordID = this.data.pmID
    let objects = {
      tableID,
      recordID
    }

    wx.BaaS.getRecordList(objects).then((res) => {
      that.setData({
        pm: res.data.objects[0]
      })
    }, (err) => {
      console.dir(err)
    })
  }



})
