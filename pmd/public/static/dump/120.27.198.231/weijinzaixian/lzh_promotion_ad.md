|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|ID|
|partner|varchar|NO|''||合作方|
|mac|varchar|NO|''|MUL|设备标识|
|ifa|varchar|NO|''|MUL|设备标识|
|callback_url|varchar|NO|''||效果回调地址|
|create_time|int|NO|0||新增时间|
|ip|varchar|NO|''||ip|
|result|varchar|NO|''|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_promotion_ad|id|PRIMARY|1|A(升序)|null|null||NO|11|BTREE|||
|lzh_promotion_ad|mac|k_mac|1|A(升序)|null|null||YES|11|BTREE|||
|lzh_promotion_ad|ifa|k_ifa|1|A(升序)|null|null||YES|11|BTREE|||
