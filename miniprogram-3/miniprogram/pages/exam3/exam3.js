// pages/exam3/exam3.js
Page({
  data: { },
  callFunction(){
    // 功能调用云函数
    wx.cloud.callFunction({
      name:"sumj",//云函数名臣
      data:{i:8,j:9}
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err);
    })
  },
  call3:function(){
    wx.cloud.callFunction({
      name:"indexOff",//函数名
      data:{str:"东哥是个好小伙子"}
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
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