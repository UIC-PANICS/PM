//list.js
var app = getApp()
var postsData = require('../../data/data.js')
Page({
  data: {
    tableID: 812,
    Limit: 28,
    ph: []
  },
  onLoad() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
    this.setData({
      pm: postsData.postList
    });
    //this.fetchPMList()

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来看看',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  // fetchPMList() {
  //   let that = this
  //   let limit = this.data.Limit
  //   let tableID = this.data.tableID
  //   let objects = {
  //     tableID,
  //     limit
  //   }

  //   wx.BaaS.getRecordList(objects).then((res) => {
  //     that.setData({
  //       pm: res.data.objects
  //     })
  //     wx.setStorage({
  //       key: 'PMList',
  //       data: res.data.objects,
  //       success: function (res) {
  //         // success
  //       },
  //       fail: function () {
  //         // fail
  //       },
  //       complete: function () {
  //         // complete
  //       }
  //     })
  //   }, (err) => {
  //     console.dir(err)
  //   });
  // },
  viewPerson: function (event) {
    var postId = event.currentTarget.dataset.id;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "../person/person?id=" + postId
    })


  }

})
