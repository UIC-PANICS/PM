//list.js
var app = getApp()
Page({
  data: {
    tableID: 812,
    Limit: 28,
    pm: [],
    ph: []
  },
  onLoad() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    this.fetchPMList()

  },
  fetchPMList() {
    let that = this
    let limit = this.data.Limit
    let tableID = this.data.tableID
    let objects = {
      tableID,
      limit
    }

    wx.BaaS.getRecordList(objects).then((res) => {
      that.setData({
        pm: res.data.objects
      })
      wx.setStorage({
        key: 'PMList',
        data: res.data.objects,
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }, (err) => {
      console.dir(err)
    });
  },
  viewPerson: function (event) {
    var postId = event.currentTarget.dataset.id;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "../person/person?id=" + postId
    })


  }

})
