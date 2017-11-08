|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|pa_id|int|NO|0|MUL|商户ID|
|name|varchar|NO|''||广告名称|
|flag|char|NO|''||广告标识|
|pid|char|NO|''||渠道标识|
|info|varchar|NO|''||备注信息|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_partner_link|id|PRIMARY|1|A(升序)|null|null||NO|3|BTREE|||
|lzh_partner_link|pa_id|k_pa_id_flag_pid|1|A(升序)|null|null||YES|3|BTREE|||
|lzh_partner_link|flag|k_pa_id_flag_pid|2|A(升序)|null|null||YES|3|BTREE|||
|lzh_partner_link|pid|k_pa_id_flag_pid|3|A(升序)|null|null||YES|3|BTREE|||
