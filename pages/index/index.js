//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    product: [
      {
        name: "比华利156号",
        src: "http://mingheshiye.com/img/156(1).jpg",
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
        materialE: "Royal Batticino"
      }
    ],
    imgUrls:[
      'http://mingheshiye.com/img/ABUIABACGAAgtPfy1AUo-Ii_KjDABzjCAw.jpg',
      'http://mingheshiye.com/img/65bb23d72c47fc5a9b16d2efac9c37c4.jpg',
      'http://mingheshiye.com/img/d1388fb97cd5d2970b918cd582fa32a6.jpg'
    ],
    currentSwiper:0,
    autoplay: true,
    interval: 4000,
    duration: 1000,
  },
  toUrl: function (event) {
    var p = event.currentTarget.id;
    console.log(p)
    wx.navigateTo({
      url: '/pages/productDetail/productDetail?id=' + p
    });
  },
  swiperChange:function(e){
    this.setData({
      currentSwiper:e.detail.current
    })
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '13813813813',
    })
  },
  //事件处理函数,
  onLoad: function () {
    console.log(1)
    // wx.redirectTo({
    //   url: '/pages/contract/contract',
    // });
  }
})
