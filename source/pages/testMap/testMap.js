// pages/testMap/testMap.js
Page({
  data: {
    longitude:"",
    latitude:"",
    scale:16,
    mapData:[
      {
        buttonClass:"button1",
        bindtap:"getCenterLocation",
        name:"获取位置"
      },{
        buttonClass: "button2",
        bindtap: "moveToLocation",
        name: "移动位置"
      },{
        buttonClass: "button3",
        bindtap: "translateMarker",
        name: "移动标注"
      },{
        buttonClass: "button4",
        bindtap: "includePoints",
        name: "缩放"
      }, {
        buttonClass: "button5",
        bindtap: "includePoints",
        name: "放大"
      }
    ]
  },
  onLoad: function (options) {
    this.data.mapContext = wx.createMapContext("myMap");
    this.moveToLocation();//移动到定位地点
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        _this.data.latitude = res.latitude;
        _this.data.longitude = res.longitude;
        //_this.data.mapContext = wx.createMapContext("myMap");
      }
    });
    
  },
  getCenterLocation: function () {
    this.data.mapContext.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.data.mapContext.moveToLocation()
  },
  translateMarker: function () {
    this.data.mapContext.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    debugger;
    this.data.scale++;
  }
})