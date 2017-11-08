|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|title|varchar|NO|null|||
|art_info|varchar|NO|null|||
|art_keyword|varchar|NO|null|||
|art_content|text|NO|null|||
|art_writer|varchar|NO|null|||
|art_time|int|NO|0|||
|type_id|smallint|NO|null|MUL||
|art_url|varchar|NO|null|||
|art_img|varchar|NO|null|||
|art_userid|smallint|NO|null|||
|sort_order|int|NO|null|||
|art_click|int|NO|0|||
|art_set|int|NO|0|||
|art_attr|tinyint|NO|0|||
|is_app|tinyint|NO|0||是否APP 0否 1是|
|art_img_id|int|NO|0||图片id|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_article|id|PRIMARY|1|A(升序)|null|null||NO|1056|BTREE|||
|lzh_article|type_id|type_id|1|A(升序)|null|null||YES|25|BTREE|||
