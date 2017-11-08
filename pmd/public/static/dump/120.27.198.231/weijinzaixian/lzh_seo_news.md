|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|????id|
|plat_id|smallint|NO|0|MUL|ƽ̨id|
|title|varchar|NO|''||???ű??|
|keywords|varchar|NO|''|||
|info|varchar|NO|''||ժҪ|
|thumb|varchar|NO|''||????ͼ|
|cate_id|smallint|NO|0|MUL|???|
|pic_id|bigint|NO|0||ͼƬ????id|
|content|text|YES|null||???|
|author|varchar|NO|''||???|
|source|varchar|NO|''||??Դ|
|page_view|int|NO|0||?ܵ?????|
|recommend|tinyint|NO|0||?Ƿ??Ƽ???1-?Ƽ?|
|status|smallint|NO|0|MUL|????״̬??0-??????1-ɾ??|
|recommend_time|int|YES|0|||
|add_time|int|NO|0||????ʱ?|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_news|id|PRIMARY|1|A(升序)|null|null||NO|58|BTREE|||
|lzh_seo_news|plat_id|plat_id|1|A(升序)|null|null||NO|58|BTREE|||
|lzh_seo_news|title|plat_id|2|A(升序)|null|null||NO|58|BTREE|||
|lzh_seo_news|status|status|1|A(升序)|null|null||YES|4|BTREE|||
|lzh_seo_news|cate_id|cate_id|1|A(升序)|null|null||YES|19|BTREE|||
