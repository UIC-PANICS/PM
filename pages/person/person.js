let app = getApp()
const wxParser = require('../../wxParser/index');
Page({
  data: {
    tableID: 812,
    pmID: "",
    thumb: "",
    thumbJudge: "false",
  },


  onLoad: function (option) {
    var postID = option.id;
    this.setData({
      pmID: postID
    })
    this.fetchPM()
    this.thumbJudge()
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
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

  fetchJie() {
    let that = this;
    let html = this.data.jie;
    console.log(html)
    wxParser.parse({
      bind: 'richText',
      html: html,
      target: that,
      enablePreviewImage: false, // 禁用图片预览功能
      tapLink: (url) => { // 点击超链接时的回调函数
        // url 就是 HTML 富文本中 a 标签的 href 属性值
        // 这里可以自定义点击事件逻辑，比如页面跳转
        wx.navigateTo({
          url
        });
      }
    });
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
        pm: res.data.objects[0],
        jie: res.data.objects[0].jie,
        thumb: res.data.objects[0].thumb
      })
      this.fetchJie()
    }, (err) => {
      console.dir(err)
    })
  },

  thumb: function (event) {
    let that = this
    let thumbJudge = this.data.thumbJudge
    var thumbNumber = event.currentTarget.dataset.number;
    this.setData({
      thumb: thumbNumber
    })
    thumbNumber = thumbNumber + 1
    if (thumbJudge == "false") {
      this.setData({
        thumb: thumbNumber
      })
      this.thumbUp()
      wx.showToast({
        title: '点赞成功',
        icon: 'success',
        duration: 2000
      })
      wx.setStorage({
        key: this.data.pmID,
        data: "true"
      })
      this.thumbJudge()
    }
    else {
      wx.showModal({
        title: '提示',
        content: '你已经点过赞了',
        cancelText: '取消点赞',
        confirmText: '知道了',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            that.thumbMinus()
            console.log('用户点击取消')
          }
        }
      })

    }
  },
  thumbMinus() {
    var thumbNumber = this.data.thumb;
    thumbNumber = thumbNumber - 1
    this.setData({
      thumb: thumbNumber
    })
    this.thumbUp()
    wx.showToast({
      title: '已取消点赞',
      icon: 'success',
      duration: 2000
    })
    wx.setStorage({
      key: this.data.pmID,
      data: "false"
    })
    this.thumbJudge()
  },

  thumbUp() {
    let that = this
    let tableID = this.data.tableID
    let recordID = this.data.pmID
    let thumb = this.data.thumb
    let data = {
      thumb: thumb
    }
    let objects = {
      tableID,
      recordID,
      data
    }
    wx.BaaS.updateRecord(objects).then((res) => {
      this.fetchPM()
    }, (err) => {
      console.dir(err)
    });
  },

  thumbJudge() {
    let that = this
    wx.getStorage({
      key: this.data.pmID,
      success: function (res) {
        that.setData({
          thumbJudge: res.data
        })
      },
      /*fail: function (res) {
          that.setData({
              thumbJudge: "false"
          })
      }*/
    })
  }

})