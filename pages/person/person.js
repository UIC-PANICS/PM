let app = getApp()
let wxParser = require('../../wxParser/index');
Page({
    data: {
        pp: [],
        richTextID: 1460
    },
    onReady() {
        this.getPerson()
        let that = this
        let html = `<div style="color: #f00;">hello, wxParser!</div>`;

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
    getPerson() {
        let that = this
        let richTextID = this.data.richTextID
        let objects = {
            richTextID
        }
        wx.BaaS.getContent(objects).then((res) => {
            that.setData({
                pp: res.data.objects
            })
            // success
        }, (err) => {
            // err
        });

    }
})