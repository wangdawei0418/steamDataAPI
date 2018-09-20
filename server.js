const e = require("express");
const fs = require("fs");
const express = e();
const port = 81; //服务端口
var count = 0; //接口请求计数器

//	返回热门随机游戏通用事务函数
function sendRandomData(response,callback){
	fs.readFile("data/data.json",(error,data)=>{
		var data = JSON.parse(data);
		var l = data.length;
		var result = [];
		for(var i = 0; i < 10;i++){
			var r = parseInt(Math.random() * l);
			result.push(data[r]);
		}
		response.end(`${callback}(${JSON.stringify(result)})`);
		successMsg()
	})
}
//	控制台提醒
function successMsg(){
	console.log(`port:${port}第${++count}次请求处理完成`)
}

//首页轮播图
express.get("/recommendGame",(request,response)=>{
	var callback = request.query.callback;
	fs.readFile("data/recommendGame.json",(error,data)=>{
		response.end(`${callback}(${data})`);
		successMsg()
	})
})

// 新品与热门商品
express.get("/hot1",(request,response)=>{
	sendRandomData(response,request.query.callback)
})
// 热销商品
express.get("/hot2",(request,response)=>{
	sendRandomData(response,request.query.callback)
})
// 热门即将推出
express.get("/hot3",(request,response)=>{
	sendRandomData(response,request.query.callback)
})
// 打折游戏接口
express.get("/onSale",(request,response)=>{
	fs.readFile("data/data.json",(error,data)=>{
		var data = JSON.parse(data);
		var l = data.length;
		var result = [];
		for(var i = 0; i < 10;i++){
			var r = parseInt(Math.random() * l);
			if(data[r].isSale){
				result.push(data[r]);
			}
			else{
				i--;
			}
		}
		response.end(`${response,request.query.callback}(${JSON.stringify(result)})`);
	})
})

express.listen(port);
console.log(`server is running at ${port}`)
