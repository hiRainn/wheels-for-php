|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|????id|
|plat_id|smallint|NO|0|MUL|ƽ̨id|
|senior_name|varchar|NO|''||?߹?????|
|senior_position|varchar|NO|''||?߹?ְλ|
|senior_introduce|text|YES|null||?߹ܽ??|
|pic_id|bigint|NO|0||ͼƬ????id|
|status|tinyint|NO|0||״̬0-??????1-ɾ??|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_senior|id|PRIMARY|1|A(升序)|null|null||NO|8|BTREE|||
|lzh_seo_senior|plat_id|plat_id|1|A(升序)|null|null||NO|8|BTREE|||
|lzh_seo_senior|senior_name|plat_id|2|A(升序)|null|null||NO|8|BTREE|||
