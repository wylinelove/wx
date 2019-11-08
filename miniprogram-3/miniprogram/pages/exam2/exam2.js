// pages/exam2/exam2.js
// 1创建数据库对象
const db=wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[]//保存查询的结果数据
  },
  // 2添加函数add1
   add:function(){
    //  创建集合1905
    db.collection("web1905")
    .add({
      data:{
        uname:"tom",
        job:"manger",
        sal:100
      }
    })
    .then(res=>{
      console.log(res);
    })
    .catch(res=>{
      console.log(err);
    })
   },
  //  3添加函数add2
   add1:function(){
     db.collection("web1905")
     .add({
       data:{
         uname:"wxy",
         job:"hr",
         sal:5
       }
     })
     .then(res=>{
       console.log(res);
     })
     .catch(err=>{
       console.log(err);
     })
   },
  //  4.sel查询所欲雇员记录
   find:function(){
     db.collection("web1905")
     .get()
       .then(res => {
        //  console.log(res.data);
        this.setData({
          list:res.data//属性云数据库内容
        })
       })
       .catch(err => {
         console.log(err);
       })
   },
  //  5添加del函数，删除指定雇员记录
  del:function(event){
    // db.collection("web1905")
    // 5.1获取xml参数id
    var id=event.target.dataset.id;
    // console.log(id);
    // 5.2依据id删除记录
  db.collection("web1905")
    .doc(id)
    .remove()
    .then(res => {
      this.find();
     })
       .catch(err => {
        console.log(err);
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