|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|type|tinyint|NO|0||变更类型 0未知  1收入 2支出 |
|affect_money|float|NO|0.00||影响金额|
|account_money|float|NO|0.00||账户余额|
|freeze_money|float|NO|0.00||冻结金额|
|info|varchar|NO|''||备注信息|
|add_time|int|NO|0||添加时间|
|add_ip|varchar|NO|''||IP|
|target_id|int|NO|0||对象ID|
|target_name|varchar|NO|''||对象名称|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plat_money_log|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
