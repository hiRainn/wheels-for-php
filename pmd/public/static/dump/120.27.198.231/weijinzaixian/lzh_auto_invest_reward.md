|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|0|||
|user_name|char|NO|''||用户名|
|user_phone|char|NO|''||手机号|
|is_rebate|tinyint|NO|2||是否返息 1已返息 2未返息|
|capital|decimal|NO|0.00|||
|interest|decimal|NO|0.00||利息|
|year_rate_money|decimal|NO|0.00||年华投资额|
|rebate_rate|decimal|NO|0.00||返利利率|
|rebate|decimal|NO|0.00||利息总额|
|add_time|int|NO|0|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_auto_invest_reward|id|PRIMARY|1|A(升序)|null|null||NO|3|BTREE|||
