// pages/exam1/exam1.js
const db=wx.cloud.database();
Page({
data:{},
// 2添加一个函数add     添加数据
add:function(){
  db.collection("web1906a")
  .add({
    data:{
      uname:"tom",
      upwd:"123",
      sal:1000,
      age:19
    }
  })
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
},
// 3添加一个函数update  更新数据
update:function(){},
  onLoad: function (options){},
  /**
   * 页面的初始数据
   */
  data: {

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