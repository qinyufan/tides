// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
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
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
     
     
      this.setData({
        selected: data.index
      })
      console.log(data.index,this.data.selected)

      setTimeout(()=>{
        wx.switchTab({url})
      },100)
    }
  }
})
