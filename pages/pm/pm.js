//pm.js
var app = getApp()
Page({
  data: {
    tableID: 1020,
    pmID: '599d86deff650c2f1484c769',
    content:"朋辈导师，也就是Peer Mentor 是由学长学姐自愿报名并经过筛选之后帮助下一届的新生适应学校生活的一群志愿者，每一个系的新生将会根据数量被随机分为几个组，每一个组会有1——2名朋辈导师，我们也因此亲切地称呼他们为“组爸组妈”。但是尽管大家会被分为几个组，每个组有不同的组爸组妈，但是整个系的组爸组妈也是所有人的组爸组妈，在接下来的一年中，他们会尽力解答你们的问题，给你们在学习生活中提出好的建议，也会组织你们参与MCP活动，带你们浪……让你们很快地融入到UIC这个大家庭当中~"
  },

  onLoad() {
    // wx.showLoading({
    //   title: '加载中',
    //   duration: 500
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 500)
    //this.fetchPM()
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
  // fetchPM() {
  //   let that = this
  //   let tableID = this.data.tableID
  //   let recordID = this.data.pmID
  //   let objects = {
  //     tableID,
  //     recordID
  //   }

  //   wx.BaaS.getRecordList(objects).then((res) => {
  //     that.setData({
  //       pm: res.data.objects[0]
  //     })
  //   }, (err) => {
  //     console.dir(err)
  //   })
  // }



})
