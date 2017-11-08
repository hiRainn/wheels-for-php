|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|????id|
|title|varchar|NO|null|MUL|?ٿƱ??|
|content|varchar|YES|null||?ٿ????|
|add_time|int|NO|0||?ٿ????|
|parent_id|smallint|NO|0|MUL|??id|
|status|tinyint|NO|0||״̬??0-??????1-ɾ??|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_baike|id|PRIMARY|1|A(升序)|null|null||NO|36|BTREE|||
|lzh_seo_baike|parent_id|class|1|A(升序)|null|null||YES|12|BTREE|||
|lzh_seo_baike|title|title|1|A(升序)|null|null||YES|36|BTREE|||
