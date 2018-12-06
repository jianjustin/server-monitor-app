var databaseAction = require('../../utils/databaseAction.js');
Page({

  data: {
    username:"",
    password:"",
  },
  userLogin : function(event){
    console.log("username="+this.data.username);
    console.log("password=" + this.data.password);
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  /*用户注册函数 */
  userRegister: function (event) {
    const db = getApp().globalData.db;
    const memberUser = databaseAction.getCollection(db,"member-user");
    const memberUserData = {};
    memberUserData.username = this.data.username;
    memberUserData.password = this.data.password;
    databaseAction.addData(memberUser, memberUserData);
  },
  getUserName : function(event){
    this.setData({
      username:event.detail.value
    });
  },
  getPassword: function (event) {
    this.setData({
      password: event.detail.value
    });
  }

})