//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tableID: 812,
    Limit: 28,
    pm: [],
    ph: []
  },
  onLoad() {
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
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }, (err) => {
      console.dir(err)
    });
  },
  /*viewPerson: function () {
    wx.navigateTo({
      url: '../person/person'
    })


  }*/

})
