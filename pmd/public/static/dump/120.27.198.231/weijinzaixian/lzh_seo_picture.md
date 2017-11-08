|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI|????|
|plat_id|smallint|NO|0|MUL|ƽ̨id|
|pic_type|tinyint|NO|0||ͼƬ???ͣ?1-ƽ̨????ͼƬ??2-ƽ̨?߹?ͼƬ??3-????ͼƬ??4-ƽ̨logo|
|path|varchar|NO|''||????·??|
|add_time|int|NO|0||????ʱ?|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_picture|id|PRIMARY|1|A(升序)|null|null||NO|104|BTREE|||
|lzh_seo_picture|plat_id|plat_pic|1|A(升序)|null|null||YES|52|BTREE|||
|lzh_seo_picture|pic_type|plat_pic|2|A(升序)|null|null||YES|104|BTREE|||
