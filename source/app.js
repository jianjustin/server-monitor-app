//app.js
App({
  /*小程序初始化 */
  onLaunch: function () {
    wx.cloud.init();
    /*初始化数据库能力 */
    var databaseAction = require('utils/databaseAction.js');
    var db = databaseAction.initdb("jian-te-c2ecf6");
    this.globalData.db = db;
  },
  globalData: {
    userInfo: null
  }
})