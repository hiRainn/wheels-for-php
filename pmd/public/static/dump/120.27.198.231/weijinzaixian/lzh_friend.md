|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|link_txt|varchar|NO|null|||
|link_href|varchar|NO|null|||
|link_img|varchar|NO| |||
|link_order|int|NO|0|||
|link_type|int|NO|1||1友情链接 2合作伙伴|
|is_show|int|NO|1|||
|game_id|int|NO|0|MUL||
|game_name|char|NO|''|||
|link_img_id|int|NO|0|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_friend|id|PRIMARY|1|A(升序)|null|null||NO|6|BTREE|||
|lzh_friend|game_id|game_id|1|A(升序)|null|null||YES||BTREE|||
