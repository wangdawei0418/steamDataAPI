const https = require("https");
const cheerio = require("cheerio");
const fs = require("fs")
// 起始的id爬取起点
var n = 227900;	
function fn(){
	n+=10;
	https.get('https://store.steampowered.com/app/' + n,function(req,res){
		var html = "";
		req.on('data',function(data){
			html += data;
		});
		req.on('end',()=>{
			if(!html){
				console.log(`id:${n}无游戏数据`)
			}
			else{
				// 根据html数据生成cherrio对象
				var $ = cheerio.load(html);
				// 游戏名
				var name = $(".apphub_AppName").html();
				// 根据游戏名判断该页面是否存在游戏数据
				// 不存在则进入下一次递归操作
				if(!name){
					fn();
					return;
				}

				// 游戏发行日期
				var date = $(".date").html();

				// 无折扣
				if(!$(".game_area_purchase_game").eq(0).find(".discount_pct").text()){
					// 原始价格
					var originPrice = $(".game_purchase_price").eq(0).text().replace(/[^0-9]/ig,"");
					// 最终价格
					var price = originPrice;
					// 折扣
					var discount = 0;
				}
				// 有折扣
				else{
					// 原始价格
					var originPrice = $(".discount_original_price").eq(0).text().replace(/[^0-9]/ig,"");
					// 最终价格
					var price = $(".discount_final_price").eq(0).text().replace(/[^0-9]/ig,"");
					// 折扣
					var discount = parseInt($(".discount_pct").eq(0).text().replace("-","").replace("%",""))/100 || 0
				}
				// 评测数
				var evaluatingCount = $(".user_reviews_summary_row").find("span").eq(1).text().replace(/[^0-9]/ig,"");
				// 评测结果
				var evaluate = $(".user_reviews_summary_row").find("span").eq(0).text();
				// 是否打折
				var isSale = discount ? true : false;
				// 兼容平台
				var platform = [];
				if($(".platform_img win")){
					platform.push("Windows")
				}
				if($(".platform_img mac")){
					platform.push("Mac OS")
				}
				if($(".platform_img linux")){
					platform.push("Steam")
				}
				// 游戏截图
				var imgUrl = [];
				imgUrl[0] = $('.game_header_image_ctn img').attr("src").replace("header.jpg","capsule_616x353.jpg")
				for(var m = 1; m < 4;m++){
					if(!$(".highlight_strip_screenshot img").eq(m).attr("src")){
						break;
					}
					imgUrl.push($(".highlight_strip_screenshot img").eq(m).attr("src").replace("116x65","600x338"))
				}
				// 生成标签
				var tags = []
				var tagDom = $(".glance_tags.popular_tags a");
				for(var t = 0; t < tagDom.length;t++){
					tags.push(tagDom.eq(t).text().replace(/\t/g,"").replace(/[\r\n]/g, ""))
				}
				// 读取数据并解析为JSON对象
				var data = fs.readFileSync("data.json",'utf-8');
				var fileData = JSON.parse(data);

				// 生成新的一条数据Object
				var newData = {
			        "name":name,
			        "url":`https://store.steampowered.com/app/${n}`,
			        "gameId":n,
			        "isSale":isSale,
			        "discount":discount,
			        "originPrice":originPrice,
			        "price":price,
			        "imgUrl": imgUrl,
			        "platform":platform,
			        "date":date,
			        "evaluate":evaluate,
			        "evaluatingCount":evaluatingCount,
			        "label": tags
			    }
			    //将数据插入到数组并写入到文件内
			    fileData.push(newData)
			    fs.writeFileSync("data.json",JSON.stringify(fileData))
			    // console信息
			    console.log(`游戏id：${n}数据写入完成`)
			}
			// 执行完数据事物后进入下一次递归
			fn();
		})
	});
}
fn();
