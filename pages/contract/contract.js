// pages/contract/contract.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://mingheshiye.com/img/guntu4.jpg',
      'http://mingheshiye.com/img/guntu5.jpg',
      'http://mingheshiye.com/img/guntu6.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    markers: [{
      iconPath: "../asscts/location2.png",
      id: 0,
      latitude: 29.8388989480,
      longitude: 121.5951001012,
      width: 40,
      height: 40
    }],
  },
  markertap(e) {
    wx.openLocation({
      latitude: 29.8388989480,
      longitude: 121.5948021412,
      scale: 17,
      name: '红星美凯龙',
      address: '浙江省宁波市鄞州区环城南路东段1728号红星美凯龙二楼B-8032'
    })  
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