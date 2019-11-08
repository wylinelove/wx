// pages/exam2/exam2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"东哥家二宝",
    num1:19,
    list:[{id:1,name:"华哥",age:25},
         { id: 2, name: "东哥",age:23},
         { id: 3, name: "然哥",age:26}]
  },
  handle1:function(){console.log(123)},
  handle2:function(){console.log(456)},
// onLoad:当前组件创建成功立即触发事件
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload:"+111)
  //  1获取msg
 var m=this.data.msg;
 console.log(m)
  //  2修改msg
  this.setData({
    msg:"东哥很高兴"
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
     console.log("show:"+222)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
     console.log("hide"+333)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 console.log("unload"+555)
  },
   handle3:function(){
    //  功能跳转到exam3组件 
    // 跳转：删除跳转 将exam2组件销毁跳转exam3
    // 小程序限制 如果exam3定义tabbar 不能跳转
    wx.redirectTo({
      url:'/pages/exam4/exam4',
    })
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