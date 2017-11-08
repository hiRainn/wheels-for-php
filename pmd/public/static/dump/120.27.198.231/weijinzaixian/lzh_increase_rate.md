|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|ID|
|uid|varchar|YES|''||uid集合|
|title|varchar|YES|''||标题|
|increase_rate|decimal|YES|0.00||加息幅度|
|start_time|int|YES|0||开始时间|
|expired_time|int|YES|0||过期时间|
|time_limit|int|YES|0||使用时间限制 天|
|money_limit|decimal|YES|0.00||使用金额限制  最低投资金额|
|increase_day|int|YES|0||加息天数|
|use_platform|tinyint|YES|0||适用平台 0 all 1app 2 pc 3 h5|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_increase_rate|id|PRIMARY|1|A(升序)|null|null||NO|151|BTREE|||
