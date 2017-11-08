|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|cid|int|NO|null|MUL|合作方ID|
|type|tinyint|NO|null||资金流水类型 12345678|
|affect_money|decimal|NO|0.00||影响金额|
|account_money|decimal|NO|0.00||账户余额|
|freeze_money|decimal|NO|0.00||冻结金额|
|info|varchar|NO|''||备注信息|
|add_time|int|NO|null||添加时间|
|add_ip|varchar|NO|''||添加IP|
|target_id|int|NO|0||对象ID|
|target_name|varchar|NO|''||对象名称|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_cooper_money_log|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_cooper_money_log|cid|cid_type|1|A(升序)|null|null||YES|0|BTREE|||
|lzh_cooper_money_log|type|cid_type|2|A(升序)|null|null||YES|0|BTREE|||
