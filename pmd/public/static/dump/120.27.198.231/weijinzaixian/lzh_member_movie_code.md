|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|0||用户UID|
|level|tinyint|NO|1||档位类型 1一档 2二档 3三档 456789|
|code|char|YES|null|UNI|电影票兑换码|
|add_time|int|NO|0||使用时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_movie_code|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_member_movie_code|code|uk_code|1|A(升序)|null|null|YES|NO|0|BTREE|||
