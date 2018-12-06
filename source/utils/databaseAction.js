/**
 * 数据库操作js
 */


/*数据库初始化 jian-test */
function initdb(dbEnvirment){
  const db = wx.cloud.database({
    env:dbEnvirment
  });
  return db;
}

/*获取数据库文档 */
function getCollection(db,collectionName){
  return db.collection(collectionName);
}

function addData(myCollection,myData){
  debugger;
  myCollection.add({
    data: {
      username:myData.username,
      password:myData.password
    },
    success: function (res) {
      console.log(res)
    },
    fail : function(err){
      debugger;
        console.log(err);
    }
  })
}

module.exports.initdb = initdb;
module.exports.getCollection = getCollection;
module.exports.addData = addData
