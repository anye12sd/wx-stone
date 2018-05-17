// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    factory: [
      {
        name: "工厂",
        src: "http://mingheshiye.com/outlink/AFAIABACGAAgk66g1wUo7uPN-AMwgAo4wAc.jpg",
      },
      {
        name: "先进的机器",
        src: "http://mingheshiye.com/outlink/AFAIABACGAAgm66g1wUottK7AzDfBTjUBw.jpg",
      },
      {
        name: "专业的技术",
        src: "http://mingheshiye.com/outlink/AFAIABACGAAgra6g1wUo6JXC1AMw3wU41Ac.jpg",
      },
      {
        name: "数百平的排版区域",
        src: "http://mingheshiye.com/outlink/AFAIABACGAAgta6g1wUo6r3tzAQw3wU43wU.jpg",
      }
    ]
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13813813813',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})