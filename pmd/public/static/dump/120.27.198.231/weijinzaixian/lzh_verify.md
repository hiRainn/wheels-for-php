|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|code|varchar|NO|null|||
|send_time|int|NO|null|||
|expired_time|int|NO|0||过期时间|
|ukey|bigint|NO|null|MUL||
|type|tinyint|NO|null||1:邮件激活验证|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_verify|id|PRIMARY|1|A(升序)|null|null||NO|113|BTREE|||
|lzh_verify|ukey|code|1|A(升序)|null|null||YES|56|BTREE|||
|lzh_verify|type|code|2|A(升序)|null|null||YES|56|BTREE|||
|lzh_verify|send_time|code|3|A(升序)|null|null||YES|113|BTREE|||
|lzh_verify|code|code|4|A(升序)|null|null||YES|113|BTREE|||
