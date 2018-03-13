var http = require("http");          
var url = require('url');           
var fs = require('fs');
var count = 983;
http.createServer(function(request,response){
	response.writeHead(200,{"contest-type":"text/plan"})
	var params = url.parse(request.url, true).query;
	var callback = params.callback;

	fs.readFile('gameList.json', (err, data) => {
		response.end(callback + "(" + data + ")");
		console.log(++count + "次请求处理成功，请求参数：" + JSON.stringify(params));
		console.log("--------------------------------------------------------");
	})
}).listen(81)
