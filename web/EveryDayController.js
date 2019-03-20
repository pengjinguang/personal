var everyDayDao = require("../dao/EveryDayDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var path = new Map();

//添加数据
function editEveryDay(request, response) {
    request.on("data", function (data) {
        // console.log(data.toString().trim());
        everyDayDao.insertEveryDay(data.toString().trim(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        })
    })
}
path.set("/editEveryDay", editEveryDay);
//查询数据
function queryEveryDay(request, response) {
   everyDayDao.queryEveryDay(function (result) {
       response.writeHead(200);
       response.write(respUtil.writeResult("success", "添加成功", result));
       response.end();
   })
}
path.set("/queryEveryDay", queryEveryDay);


module.exports.path = path;