|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|????|
|img_url|varchar|NO|''||ͼƬ???|
|position|tinyint|NO|0||????λ?|
|ad_href|varchar|NO|/uc/sign/register||??תλ?|
|sort|smallint|NO|0||???????|
|partner|varchar|NO|''||????pid|
|flag|varchar|NO|''||??????????ʶ|
|status|tinyint|NO|0||״̬??1-ɾ????0-????|
|add_time|int|NO|0|MUL|????ʱ?|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_ad|id|PRIMARY|1|A(升序)|null|null||NO|4|BTREE|||
|lzh_seo_ad|add_time|sort_key|1|A(升序)|null|null||YES|4|BTREE|||
