|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|ID|
|client_type|tinyint|NO|1||客户端类型 1 IOS 2 android 3 其他|
|v_code|varchar|NO|''||版本编号|
|v_name|varchar|NO|''|MUL|版本名称|
|v_desc|varchar|NO|''||版本更新日志|
|is_upgrade|tinyint|NO|0||强制更新 0否 1是|
|create_time|int|NO|0||时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_app_version|id|PRIMARY|1|A(升序)|null|null||NO|4|BTREE|||
|lzh_app_version|v_name|k_v_name|1|A(升序)|null|null||YES|4|BTREE|||
