// components/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached: function(options) {
      // 在组件实例进入页面节点树时执行
      console.log(options);
      let self = this
      wx.getSystemInfoAsync({
        success(res){
            self.setData({
              conh:res.windowHeight
            })          
        }
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    conh:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
