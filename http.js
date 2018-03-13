var http = require("http");          
var url = require('url');           
var fs = require('fs');
var count = 1635;	//统计接口请求次数
http.createServer(function(request,response){
	response.writeHead(200,{"contest-type":"text/plan"})
	var params = url.parse(request.url, true).query;
	var callback = params.callback;
	var FgameId = params.gameId;
	fs.readFile('gameList.json', (err, data) => {
		// 根据前端是否传入gameId参数判定接口类型
		
		// 1.首页轮播图接口
		if(!FgameId){
			response.end(callback + "(" + data + ")");
		}

		// 2.cookie历史记录接口
		else{
			var result = [];	// 数据中间层
			var data = JSON.parse(data); // Buffer缓冲 => JSON
			var gameId = FgameId.split(","); // Array
			var index = 0;		//数据gameId Array下标

			// 根据gameId索引枚举数据
			for(let index = 0; index < gameId.length;index++){
				// 穷举
				for(var i in data){
					if(data[i].gameId == gameId[index]){
						result.push(data[i])	//结果累加
						break	// 单一结果寻找完毕即阻止循环
					}
				}
			}
			data = JSON.stringify(result);	//JSON => String
		}

		// 响应前端jsonp请求
		response.end(callback + "(" + data + ")");	

		//command line 端信息
		console.log(++count + "次请求处理成功，请求参数：" + JSON.stringify(params));
		console.log("--------------------------------------------------------");
	})
}).listen(81)
