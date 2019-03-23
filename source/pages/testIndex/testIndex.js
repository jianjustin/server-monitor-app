
Page({
  data: {
    _this_id:1,
    _this_id_moveable:true,
    startpoint:[0,0],
    endpoint:[0,0],
    /*轮播数据集 */
    swigerData:[
      {
        id:1,
        name:"running",
        chineseName:"跑步",
        status:"true",
        iconName:"icon-paobu",
        swigerText1:"累计跑步(公里)",
        swigerText2: "0.0",
        swigerText3: "大卡-- 配速--",
        swigerText4: "目标500步",
        path: "/pages/testMap/testMap"
      },{
        id: 2,
        name: "walking",
        chineseName: "健走",
        status: "false",
        iconName: "icon-zoulu",
        swigerText1: "今日步数",
        swigerText2: "2694",
        swigerText3: "大卡-- 配速--",
        swigerText4: "目标1.0公里",
        path: "/pages/testMap/testMap"
      },{
        id: 3,
        name: "bycling",
        chineseName: "骑行",
        status: "false",
        iconName: "icon-qihang",
        swigerText1: "累计骑行(公里)",
        swigerText2: "0.0",
        swigerText3: "大卡-- 配速--",
        swigerText4: "目标1.0公里",
        path: "/pages/testMap/testMap"
      },{
        id: 0,
        name: "fitness",
        chineseName: "健身",
        status: "false",
        iconName: "icon-jianshen",
        swigerText1: "累计健身(分钟)",
        swigerText2: "0",
        swigerText3: "大卡--",
        swigerText4: "目标5分钟",
        path: "/pages/testMap/testMap"
      }
    ]
  },
  
  myTouchStart: function (event) {/*点击开始 */
    console.log(event);
    this.data.startpoint[0] = event.touches[0].pageX;
    this.data.startpoint[1] = event.touches[0].pageY;
  },
  myTouchEnd: function (event) {/*点击结束 */
    console.log(event);
    console.log(this.data);
    this.data._this_id_moveable = true;
   
  },
  myTouchMove: function (event) {/*点击移动 */
    console.log(event);
    //装载终点坐标
    this.data.endpoint[0] = event.touches[0].pageX;
    this.data.endpoint[1] = event.touches[0].pageY;
    //判断左移还是右移TODO
    this.resetStyle();
    if (!this.data._this_id_moveable)return;
    this.data.swigerData[this.data._this_id].status = "true";
    this.data._this_id_moveable = false;
    this.data._this_id = this.data.swigerData[this.data._this_id].id;
    this.setData({
      swigerData: this.data.swigerData
    })
  },
  resetStyle: function (event){
    for (var i = 0; i < this.data.swigerData.length; i++){
      this.data.swigerData[i].status = "false";
    }
  },
  testClick: function(event){
    wx.navigateTo({
      url: event.target.dataset.path
    })
  }
})