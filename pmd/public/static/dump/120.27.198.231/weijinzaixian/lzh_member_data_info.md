|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL||
|data_url|varchar|NO|null|||
|type|smallint|NO|null|||
|status|tinyint|NO|null|||
|add_time|int|NO|null|||
|data_name|varchar|NO|null|||
|size|int|NO|null|||
|ext|varchar|NO|null|||
|deal_info|varchar|NO|null|||
|deal_credits|smallint|NO|null|||
|deal_user|int|NO|null|||
|deal_time|int|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_data_info|id|PRIMARY|1|A(升序)|null|null||NO|10|BTREE|||
|lzh_member_data_info|uid|uid|1|A(升序)|null|null||YES||BTREE|||
|lzh_member_data_info|type|uid|2|A(升序)|null|null||YES||BTREE|||
|lzh_member_data_info|status|uid|3|A(升序)|null|null||YES||BTREE|||
