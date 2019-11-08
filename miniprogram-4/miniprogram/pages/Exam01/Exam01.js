// pages/Exam01/Exam01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handle2:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        //选中成功回调函数
        console.log(res.tempFilePaths)
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + ".jpg",
          filePath: res.tempFilePaths[0],
          success: (res => {
            console.log(res.fileID)
          })
        })
      },
    })
    //  功能二:将选中图片上传服务云存储
   
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