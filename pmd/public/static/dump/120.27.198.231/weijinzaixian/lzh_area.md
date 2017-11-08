|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI||
|reid|smallint|NO|0|MUL||
|name|varchar|NO|''|||
|sort_order|smallint|NO|0|||
|is_open|tinyint|NO|0|MUL||
|domain|varchar|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_area|id|PRIMARY|1|A(升序)|null|null||NO|3412|BTREE|||
|lzh_area|reid|parent_id|1|A(升序)|null|null||YES|262|BTREE|||
|lzh_area|sort_order|parent_id|2|A(升序)|null|null||YES|262|BTREE|||
|lzh_area|is_open|is_open|1|A(升序)|null|null||YES|68|BTREE|||
|lzh_area|domain|is_open|2|A(升序)|null|null||YES|136|BTREE|||
|lzh_area|sort_order|is_open|3|A(升序)|null|null||YES|200|BTREE|||
