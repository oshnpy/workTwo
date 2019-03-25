var express = require('express');
var router = express.Router();
var mongodb = require("mongodb-curd");
var dbThing = "things";
var dbColl = "list";
var dbWord = "wordlist";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//查找商品
router.get("/findThing", function(req, res, next) {
        var params = req.query;
        var id = params.id ? { _id: params.id } : {};
        mongodb.find(dbThing, dbColl, id, function(result) {
            if (result.length > 0) {
                res.send({ code: 0, data: result })
            } else {
                res.send({ code: 1, msg: "查询失败" })
            }
        })
    })
    //添加评论
router.post("/addWord", function(req, res, next) {
        var params = req.body;
        var content = params.content;
        var ids = params.ids;
        mongodb.insert(dbThing, dbWord, { content: content, ids: ids }, function(result) {
            if (result) {
                res.send({ code: 0, msg: "添加成功" })
            } else {
                res.send({ code: 1, msg: "添加失败" })
            }
        })
    })
    //查找评论
router.post("/findWord", function(req, res, next) {
    var params = req.body;
    var ids = params.ids;
    console.log(ids);
    mongodb.find(dbThing, dbWord, { ids: ids }, function(result) {
        if (result.length > 0) {
            res.send({ code: 0, data: result })
        } else {
            res.send({ code: 1, msg: "查找失败" })
        }
    })
})
module.exports = router;