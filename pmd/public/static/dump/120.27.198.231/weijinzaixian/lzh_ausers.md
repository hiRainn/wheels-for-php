|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|user_name|varchar|NO|null|UNI||
|user_pass|varchar|NO|null|||
|u_group_id|smallint|NO|0|||
|real_name|varchar|NO|匿名|||
|last_log_time|int|NO|0|||
|last_log_ip|varchar|NO|0|||
|is_ban|int|NO|0|||
|area_id|int|NO|0|||
|area_name|varchar|NO|''|||
|is_kf|int|NO|0|MUL||
|is_xs|int|NO|0|||
|qq|varchar|NO|''||管理员qq|
|phone|varchar|NO|''||客服电话|
|land_line|varchar|YES|''||座机|
|bind_user|varchar|NO|''|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_ausers|id|PRIMARY|1|A(升序)|null|null||NO|13|BTREE|||
|lzh_ausers|user_name|IDX_AUSER|1|A(升序)|null|null||NO|13|BTREE|||
|lzh_ausers|is_kf|is_kf|1|A(升序)|null|null||YES||BTREE|||
|lzh_ausers|area_id|is_kf|2|A(升序)|null|null||YES||BTREE|||
