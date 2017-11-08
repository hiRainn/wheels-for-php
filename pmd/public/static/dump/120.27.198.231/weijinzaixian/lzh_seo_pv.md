|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|????id|
|view_type|tinyint|NO|0|MUL|????????1-????ƽ̨Ƶ????2-??Ѷ?࣬3-?ٿ|
|ip|char|NO|''||ip??ַ|
|url|varchar|NO|''||???????|
|view_at|int|NO|0|MUL|????ʱ?|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_pv|id|PRIMARY|1|A(升序)|null|null||NO|31453|BTREE|||
|lzh_seo_pv|view_type|type|1|A(升序)|null|null||YES|10|BTREE|||
|lzh_seo_pv|view_at|at|1|A(升序)|null|null||YES|31453|BTREE|||
