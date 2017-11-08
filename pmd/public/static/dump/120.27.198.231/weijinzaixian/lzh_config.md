|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|配置ID|
|name|varchar|NO|''|UNI|配置名称|
|type|tinyint|NO|0|MUL|配置类型|
|title|varchar|NO|''||配置说明|
|group|tinyint|NO|0|MUL|配置分组|
|extra|varchar|NO|''||配置值|
|remark|varchar|NO|null||配置说明|
|create_time|int|NO|0||创建时间|
|update_time|int|NO|0||更新时间|
|status|tinyint|NO|0||状态|
|value|text|NO|null||配置值|
|sort|smallint|NO|0||排序|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_config|id|PRIMARY|1|A(升序)|null|null||NO|10|BTREE|||
|lzh_config|name|uk_name|1|A(升序)|null|null||NO|10|BTREE|||
|lzh_config|type|type|1|A(升序)|null|null||YES|2|BTREE|||
|lzh_config|group|group|1|A(升序)|null|null||YES|2|BTREE|||
