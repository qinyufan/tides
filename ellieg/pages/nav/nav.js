// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'homepage',
    paths:{
      'homepage':'/pages/index/index',
      'group':'/pages/friends/friends',
      'remind':'',
      'mine':''
    },
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#fff",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "",
      selectedIconPath: "",
      text: "首页"
    }, {
      pagePath: "/pages/friends/friends",
      iconPath: "",
      selectedIconPath: "",
      text: "朋友"
    }]
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

  },
  handleChange({detail}){
    console.log(detail)
    this.setData({
      current: detail.key
   });
   var url = this.data.paths[detail.key]
   console.log(url)
   wx.switchTab({url:url})
  },
})