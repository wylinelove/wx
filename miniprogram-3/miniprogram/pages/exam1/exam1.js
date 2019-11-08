// pages/exam4/exam4.js
// 功能：添加一条记录向web1906
// 1创建一个数据库对象cloud:云
const db = wx.cloud.database();
// 2创建函数向集合中添加一条记录

Page({
  //  * 页面的初始数据

  data: {
  },
  add: function () {
    //  检查集合名称是否web1906
    db.collection("wen1906")//集合
      .add({
        data: {
          name: "tom",
          age: 19,
          sal: 1000
        }
      })
      .then(res => {
        console.log(res)//成功
      })
      .catch(err => {
        console.log(err)//失败
      })
    // 指定集合名称web1906
    // 添加一条记录
    // 添加成功回调函数
    // 添加失败回调函数
  },
  update: function () {
  //  f19964bd-42ad-4008-842f-6f34e7558df7
  db.collection("wen1906")
    .doc("57964ec45dad1b1a011f382066ec4456")//更新条件——id
   .update({
    data:{
     name:"tom"
    }
  })
    .then(res => {
      console.log(res)//成功
    })
    .catch(err => {
      console.log(err)//失败
    })
  },
 del:function () {
    //  f19964bd-42ad-4008-842f-6f34e7558df7
    db.collection("wen1906")
      .doc("57964ec45dad1b1a011f382066ec4456")//更新条件——id
      .remove(
        //  data: {
        //   upwd: "123"
        // }
      )
      .then(res => {
        console.log(res)//成功
      })
      .catch(err => {
        console.log(err)//失败
      })
  },
  find:function(){
    // 查询所有
    db.collection("wen1906")
    .get()
    .then(res=>{
      console.log(res);
    })
    .catch(res=>{
      console.log(err);
    })
  },
  find2:function(){
    // 查询满足条件的记录
    db.collection("wen1906")
    .where({//条件
      name:"jerry"//相等条件

    })
    .get()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(err);
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