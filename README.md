# steamDataAPI
STEAM数据接口

## 首页轮播图接口

#### 接口地址：内网：<span>http://192.168.1.180:81/recommendGame</span> 公网：http://wangdawei.tech:81/recommendGame
#### 返回格式：<span>json</span>
#### 请求方式：<span>get http</span>
#### 请求示例：<span>http://192.168.1.180:81/recommendGame?callback=fn</span>
#### 请求示例：<span>http://wangdawei.tech:81/recommendGame?callback=fn</span>


### 请求参数说明：无


#### 返回参数说明：

<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>游戏名</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>游戏详情页的URL</td>
        </tr>
        <tr>
            <td>gameId</td>
            <td>int</td>
            <td>游戏ID,唯一</td>
        </tr>
        <tr>
            <td>isSale</td>
            <td>Boolean</td>
            <td>当前是否在打折</td>
        </tr>
        <tr>
            <td>discount</td>
            <td>Float</td>
            <td>折扣率；如0.2则为折扣百分之二十</td>
        </tr>
        <tr>
            <td>originPrice</td>
            <td>Int</td>
            <td>游戏原价</td>
        </tr>
        <tr>
            <td>price</td>
            <td>Int</td>
            <td>在售价；`在售价 = 游戏原价 * (1 - 折扣率)`; 如isSale为false则在售价等于原价</td>
        </tr>
        <tr>
            <td>imgUrl</td>
            <td>Array</td>
            <td>游戏截图URL列表</td>
        </tr>
        <tr>
            <td>platform</td>
            <td>Array</td>
            <td>可兼容平台</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Date</td>
            <td>发售日期</td>
        </tr>
        <tr>
            <td>evaluate</td>
            <td>Int</td>
            <td>口碑；1为“好评如潮”；2为"特别好评"；3为"多半好评"；4为"褒贬不一"；5为"多半差评"；6为"差评如潮"；7为"无评论</td>
        </tr>
        <tr>
            <td>evaluatingCount</td>
            <td>Int</td>
            <td>评测数</td>
        </tr>
        <tr>
            <td>label</td>
            <td>Array</td>
            <td>游戏特征标签</td>
        </tr>
    </tbody>
</table>


## 历史记录接口

#### 接口地址：内网：<span>http://192.168.1.180:81/history</span> 公网：http://wangdawei.tech:81/history
#### 返回格式：<span>json</span>
#### 请求方式：<span>get http</span>
#### 请求示例：<span>http://192.168.1.180:81/history?callback=fn&gameId=123456,234567</span>
#### 请求示例：<span>http://wangdawei.tech:81/history?callback=fn&gameId=123456,234567</span>


### 请求参数说明：无
#### gameId：<span>查询游戏的ID</span>


#### 返回参数说明：

<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>游戏名</td>
        </tr>
        <tr>
            <td>href</td>
            <td>String</td>
            <td>游戏详情页url</td>
        </tr>
    </tbody>
</table>

### 返回参数示例：
```
[
    {
        "name": "Human: Fall Flat",	/* 游戏名 */
        "url": "http://store.steampowered.com/app/123456/", /* 游戏详情页链接地址 */
    },
    {
        "name": "Arma3",	/* 游戏名 */
        "url": "http://store.steampowered.com/app/234567/", /* 游戏详情页链接地址 */
    }
]
```



## 新品与热门商品


#### 接口地址：内网：<span>http://192.168.1.180:81</span> 公网：http://wangdawei.tech:81/hot1
#### 返回格式：<span>json</span>
#### 请求方式：<span>get http</span>
#### 请求示例：<span>http://wangdawei.tech:81/hot1?callback=xxxxxx</span>


#### 请求参数说明：无


#### 返回参数说明：


<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>游戏名</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>游戏详情页的URL</td>
        </tr>
        <tr>
            <td>gameId</td>
            <td>int</td>
            <td>游戏ID,唯一</td>
        </tr>
        <tr>
            <td>isSale</td>
            <td>Boolean</td>
            <td>当前是否在打折</td>
        </tr>
        <tr>
            <td>discount</td>
            <td>Float</td>
            <td>折扣率；如0.2则为折扣百分之二十</td>
        </tr>
        <tr>
            <td>originPrice</td>
            <td>Int</td>
            <td>游戏原价</td>
        </tr>
        <tr>
            <td>price</td>
            <td>Int</td>
            <td>在售价；`在售价 = 游戏原价 * (1 - 折扣率)`; 如isSale为false则在售价等于原价</td>
        </tr>
        <tr>
            <td>imgUrl</td>
            <td>Array</td>
            <td>游戏截图URL列表</td>
        </tr>
        <tr>
            <td>platform</td>
            <td>Array</td>
            <td>可兼容平台</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Date</td>
            <td>发售日期(EN)；直接将英文展现到页面即可 </td>
        </tr>
        <tr>
            <td>evaluate</td>
            <td>Int</td>
            <td>口碑(EN)；直接将英文展现到页面即可</td>
        </tr>
        <tr>
            <td>evaluatingCount</td>
            <td>Int</td>
            <td>评测数</td>
        </tr>
        <tr>
            <td>label</td>
            <td>Array</td>
            <td>游戏特征标签</td>
        </tr>
    </tbody>
</table>

### 返回参数示例：
```
[
    {
        "name": "Euro Truck Simulator 2 - Going East!",     /* 游戏名 */
        "url": "https://store.steampowered.com/app/227310", /* 游戏详情页链接地址 */
        "gameId": 227310,   /* 游戏ID */
        "isSale": true,     /* 当前是否在打折 */
        "discount": 0.71,   /* 折扣率 */
        "originPrice": "48",/* 原价 */
        "price": "14",      /* 促销价 */
        "imgUrl": [
            "https://cdn.steamstatic.com.8686c.com/steam/apps/227310/capsule_616x353.jpg?t=1508922015",
            "https://cdn.steamstatic.com.8686c.com/steam/apps/227310/ss_8687fbe09735cdca182cf75323fbbeeaf786d134.600x338.jpg?t=1508922015",
            "https://cdn.steamstatic.com.8686c.com/steam/apps/227310/ss_00fcd4d26c836646153402aa31a69a9642bf29c0.600x338.jpg?t=1508922015",
            "https://cdn.steamstatic.com.8686c.com/steam/apps/227310/ss_78e5db1b8e1cff57b998eea15957e2258ab98d03.600x338.jpg?t=1508922015"
        ],/* 四张图片url*/ 
        "platform": [
            "Windows",
            "Mac OS",
            "Steam"
        ],/* 该游戏可运行的平台 */
        "date": "19 Sep, 2013",/* 游戏发行日期（此处为英文） */
        "evaluate": "Very Positive",/* 口碑（此处为英文） */ 
        "evaluatingCount": "21",/* 评测数 */
        "label": [
            "Simulation",
            "Driving",
            "Open World",
            "Multiplayer",
            "Realistic",
            "Indie",
            "Singleplayer",
            "Free to Play
