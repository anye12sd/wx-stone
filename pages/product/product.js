// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[
      {
         name:"比华利156号",
         src:"http://mingheshiye.com/img/156(1).jpg",
         material: "莎安娜米黄",
         materialE: "Royal Batticino"
      },
      {
        name: "九唐22号",
        src: "http://mingheshiye.com/img/2.jpg",
        material: "莎安娜米黄",
        materialE: "Royal Batticino"
      },
      {
        name: "九唐65号",
        src: "http://mingheshiye.com/img/3.jpg",
        material: "白玉兰",
        materialE: "Aran White"
      },
      {
        name: "九唐23号",
        src: "http://mingheshiye.com/img/5.jpg",
        material: "莎安娜米黄",
        materialE: "Royal Batticino"
      },
      {
        name: "九唐86号",
        src: "http://mingheshiye.com/img/4.jpg",
        material: "莎安娜米黄",
        materialE: "Royal Batticino"
      },
      {
        name: "香湖丹堤253号",
        src: "http://mingheshiye.com/img/6.jpg",
        material: "莎安娜米黄",
        materialE: "Royal Batticino"
      },
      {
        name: "比华利38号",
        src: "http://mingheshiye.com/img/7.jpg",
        material: "白玉兰",
        materialE: "Aran White"
      },
      {
        name: "香湖丹堤212号",
        src: "http://mingheshiye.com/img/8.jpg",
        material: "莎安娜米黄",
        materialE:"Royal Batticino"
      }
    ],
    imgUrls: [
      'http://mingheshiye.com/img/guntu1.jpg',
      'http://mingheshiye.com/img/guntu2.jpg',
      'http://mingheshiye.com/img/guntu3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
  },
  toUrl:function(event){
    var p = event.currentTarget.id;
    console.log(p)
    wx.navigateTo({
      url: '/pages/productDetail/productDetail?id='+p
    });
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