|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|title|varchar|NO|null|MUL|标题|
|keywords|varchar|NO|''||关键字|
|info|varchar|NO|''||描述|
|limit|char|NO|''|MUL|期数|
|url|varchar|NO|''||URL地址|
|add_time|int|NO|0||添加时间|
|update_time|int|NO|0||更新时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_report|id|PRIMARY|1|A(升序)|null|null||NO|20|BTREE|||
|lzh_report|limit|k_limit|1|A(升序)|null|null||YES||BTREE|||
|lzh_report|title|k_title|1|A(升序)|null|null||YES||BTREE|||
