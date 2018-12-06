// pages/test/test.js
Page({
  data: {
    testPages:[
      {
        id:"testIndex",
        name:"首页",
        path:"/pages/testIndex/testIndex"
      },{
        id: "testMessage",
        name: "信息",
        path: "/pages/testMessage/testMessage"
      },{
        id: "testMember",
        name: "用户",
        path: "/pages/testMember/testMember"
      }
    ]
  },
  onLoad: function (options) {

  },
  testClick: function(event){
      console.log(event.target.dataset.path);//跳转路径
    wx.navigateTo({
      url: event.target.dataset.path
    })
  }
})