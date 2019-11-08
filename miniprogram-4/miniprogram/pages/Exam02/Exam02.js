// pages/Exam02/Exam02.js
// 创建云数据库对象
const db=wx.cloud.database();
// 
Page({

  /**
   * 页面的初始数据
   */
  data: {
 list:[]
  },
  upload:function(){
    // 功能互相嵌套
    // 1choose选中一张图片original原始compressed压缩的
    // sizeType:“原始”、“压缩”,
    // sourceType: “专辑”、“相机”,
    
    wx.chooseImage({
      count:1,//数量1
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:(res)=>{
     // 2上传一张图片
      console.log(res.tempFilPaths);
    
    var file=res.tempFilePaths[0];
    var newFile=new Date().getTime()+".jpg"
    // 上传
    wx.cloud.uploadFile({
      cloudPath:newFile,//上传的新文件名
      filePath:file,//选中的图片
      success:(res)=>{
        console.log(res.fileID)//上传成功
           // 3将上传图片fileID保存在集合中  web1906-photo
           //  获取当前上传图片
            var id=res.fileID;
            db.collection("web1906_photo")//集合名
            .add({
              data:{
                path:id//上图片路径
              }
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
      }
    })
      }
    })
  
  },
  show:function(){
    // 功能查询集合web1906_photo记录保存data中
    db.collection("web1906_photo")
    .get()
    .then(res=>{ 
     var rows= res.data; 
     console.log(rows) //查询结果 保存
      this.setData({
        list:rows
      })
    })
    .catch(err=>{console.log(err)});
  },
  onLoad:function(){},
    //  功能一，选中一张图片
    // 选中几张count:9默认
    // 类型orinal/compressed原图压缩图
    // 来源album/camera相册相机
    // 选中成功res.tempFilePaths选中图片路径
 
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