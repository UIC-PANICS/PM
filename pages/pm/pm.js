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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '朋辈导师',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
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
