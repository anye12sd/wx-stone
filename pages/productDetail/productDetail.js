// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      info:"工地信息",
      time:"开工时间",
      material:"所用石材",
      add:"产地",
      intro:"石材介绍",
      feedback:"用户反馈"
    },
    msg:{
      "0": {
        "name": "比华利156号",
        "src": "156(1).jpg",
        "time": "2017年完工",
        "material": "莎安娜米黄",
        "materialE":"Royal Batticino",
        "add":"伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/156(1).jpg",
          "1": "http://mingheshiye.com/img/156(4).jpg",
          "2": "http://mingheshiye.com/img/156(5).jpg",
          "3": "http://mingheshiye.com/img/156(2).jpg",
          "4": "http://mingheshiye.com/img/156(3).jpg",
          "5": "http://mingheshiye.com/img/156(6).jpg"
        }
      },
      "1": {
        "name": "九唐22号",
        "src": "2.jpg",
        "time": "2016年完工",
        "material": "莎安娜米黄",
        "materialE": "Royal Batticino",
        "add": "伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/22(3).jpg",
          "1": "http://mingheshiye.com/img/22(1).jpg",
          "2": "http://mingheshiye.com/img/22(2).jpg",
          "3": "http://mingheshiye.com/img/22(4).jpg",
          "4": "http://mingheshiye.com/img/22(5).jpg"
        }
      },
      "2": {
        "name": "九唐65号",
        "src": "3.jpg",
        "time": "2017年完工",
        "material": "白玉兰",
        "materialE": "Aran White",
        "add": "土耳其",
        "introduce": "纹路:淡乱纹。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/65(2).jpg",
          "1": "http://mingheshiye.com/img/65(1).jpg",
          "2": "http://mingheshiye.com/img/65(3).jpg",
          "3": "http://mingheshiye.com/img/65(4).jpg",
          "4": "http://mingheshiye.com/img/65(5).jpg",
          "5": "http://mingheshiye.com/img/65(6).jpg"
        }
      },
      "3": {
        "name": "九唐23号",
        "src": "5.jpg",
        "time": "2016年完工",
        "material": "莎安娜米黄",
        "materialE": "Royal Batticino",
        "add": "伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/23(5).jpg",
          "1": "http://mingheshiye.com/img/23(3).jpg",
          "2": "http://mingheshiye.com/img/23(2).jpg",
          "3": "http://mingheshiye.com/img/23(4).jpg",
          "4": "http://mingheshiye.com/img/23(1).jpg"
        }
      },
      "4": {
        "name": "九唐86号",
        "src": "4.jpg",
        "time": "2017年完工",
        "material": "莎安娜米黄",
        "materialE": "Royal Batticino",
        "add": "伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/86(2).jpg",
          "1": "http://mingheshiye.com/img/86(5).jpg",
          "2": "http://mingheshiye.com/img/86(1).jpg",
          "3": "http://mingheshiye.com/img/86(3).jpg",
          "4": "http://mingheshiye.com/img/86(4).jpg",
          "5": "http://mingheshiye.com/img/86(6).jpg"
        }
      },
      "5": {
        "name": "香湖丹堤253号",
        "src": "6.jpg",
        "time": "2017年完工",
        "material": "莎安娜米黄",
        "materialE": "Royal Batticino",
        "add": "伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/253(1).jpg",
          "1": "http://mingheshiye.com/img/253(2).jpg",
          "2": "http://mingheshiye.com/img/253(3).jpg",
          "3": "http://mingheshiye.com/img/253(4).jpg",
          "4": "http://mingheshiye.com/img/253(5).jpg"
        }
      },
      "6": {
        "name": "比华利38号",
        "src": "7.jpg",
        "time": "2017年完工",
        "material": "白玉兰",
        "materialE": "Aran White",
        "add": "土耳其",
        "introduce": "纹路:淡乱纹。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/38(1).jpg",
          "1": "http://mingheshiye.com/img/38(2).jpg",
          "2": "http://mingheshiye.com/img/38(3).jpg",
          "3": "http://mingheshiye.com/img/38(4).jpg",
          "4": "http://mingheshiye.com/img/38(5).jpg"
        }
      },
      "7": {
        "name": "香湖丹堤212号",
        "src": "8.jpg",
        "time": "2017年完工",
        "material": "莎安娜米黄",
        "materialE": "Royal Batticino",
        "add": "伊朗",
        "introduce": "莎安娜米黄大理石的耐磨性能良好，不易老化，其使用寿命一般在50-80年左右。体积密度:2.73 g/cm3。吸水率 0.25%。抗压强度:132.8 Mpa。抗折强度:11.5Mpa。莫氏硬度:4.6。光泽度:89.2。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/212(1).jpg",
          "1": "http://mingheshiye.com/img/212(2).jpg",
          "2": "http://mingheshiye.com/img/212(3).jpg",
          "3": "http://mingheshiye.com/img/212(4).jpg",
          "4": "http://mingheshiye.com/img/212(5).jpg"
        }
      },
      "10086": {
        "name": "铭禾石业",
        "src": "gc(1).jpg",
        "add": "广东省云浮市云城区云城工业园区",
        "time": "4000平",
        "introduce": "我们专注于品牌设计与研究，设计总监来自于各4A广告公司有着10年的设计经验，在各行业有着丰富成熟的设计。",
        "feedbackImg": {
          "0": "http://mingheshiye.com/img/gc(16).jpg",
          "1": "http://mingheshiye.com/img/gc(5).jpg",
          "2": "http://mingheshiye.com/img/gc(1).jpg",
          "3": "http://mingheshiye.com/img/gc(2).jpg",
          "4": "http://mingheshiye.com/img/gc(3).jpg",
          "5": "http://mingheshiye.com/img/gc(4).jpg",
          "6": "http://mingheshiye.com/img/gc(7).jpg",
          "7": "http://mingheshiye.com/img/gc(8).jpg",
          "8": "http://mingheshiye.com/img/gc(9).jpg",
          "9": "http://mingheshiye.com/img/gc(10).jpg",
          "10": "http://mingheshiye.com/img/gc(11).jpg",
          "11": "http://mingheshiye.com/img/gc(14).jpg",
          "12": "http://mingheshiye.com/img/gc(15).jpg"
        }
      }
    }
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
    if (options.id == 10086){
      this.setData({
        info: {info:"工厂名称",add:"工厂地址",time:"工厂面积",intro:"工厂介绍",feedback:"工厂一览"}
      })
    }
    this.setData({
      msg:this.data.msg[options.id]
    })
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