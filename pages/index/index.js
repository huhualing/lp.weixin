
var swiperListurl = "http://loneplant-1253848906.cosgz.myqcloud.com/lp.json";
// 声明变量，保存swiper列表所需数据的路径
var app = getApp()
Page({
  data: {
    ads:[],
    duration: 2000,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    titleName:"近期热门"
  },
  onLoad: function () {
    // 先开始loading加载提示
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var num = 0;
    // 使用wx中提供的request这个方法去实现数据的下载
    var that = this;
    // swiperList
    wx.request({
      url: swiperListurl,
      method: "GET",
      success: function (res) {
         console.log(res);
        // 在这个方法中去设置loading提示消失
        wx.hideLoading();
        that.setData({
          ads: res.data.ads,
        })
      }
    })
    // themePav
   
    // choiceList
    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
    //   success: function (res) {
    //     console.log(res);
    //     that.setData({
    //       choiceList: res.data.data.dataList
    //     });
    //   }
    // })
  }
})
