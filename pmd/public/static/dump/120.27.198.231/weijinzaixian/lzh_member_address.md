|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|mediumint|NO|null|PRI||
|uid|int|NO|null|MUL||
|name|varchar|NO|null|||
|main_phone|varchar|NO|null|||
|secondary_phone|varchar|NO|null|||
|address|varchar|NO|null|||
|post_code|varchar|NO|null|||
|address_type|tinyint|NO|0|||
|province|smallint|NO|null|||
|city|smallint|NO|null|||
|district|smallint|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_address|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_member_address|uid|uid|1|A(升序)|null|null||YES||BTREE|||
|lzh_member_address|address_type|uid|2|A(升序)|null|null||YES||BTREE|||
