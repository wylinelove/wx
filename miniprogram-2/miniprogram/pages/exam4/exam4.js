// pages/exam4/exam4.js
// 功能：添加一条记录向web1906
// 1创建一个数据库对象cloud:云
const db=wx.cloud.database();
// 2创建函数向集合中添加一条记录
  
Page({
  //  * 页面的初始数据

  data: {
    },
    add:function(){
    //  检查集合名称是否web1906
    db.collection("wen1906")//集合
    .add({
      data:{
        name:"james",
        age:27,
        sal:11112
      }
    })
    .then(res=>{
      console.log(res)//成功
    })
    .catch(err=>{
      console.log(err)//失败
    })
    // 指定集合名称web1906
    // 添加一条记录
    // 添加成功回调函数
    // 添加失败回调函数
    },
  handle1: function () {
    // 功能：保留跳转exam5
    // exam4留在内存不删除/在加载exam5在内存
    wx.navigateTo({
      url: '/pages/exam5/exam5?id=19'
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