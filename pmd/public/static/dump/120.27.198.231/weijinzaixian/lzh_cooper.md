|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|phone|char|NO|null|UNI|手机号|
|passwd|char|NO|null||密码|
|cname|varchar|NO|null||公司名称|
|client_id|varchar|YES|null|UNI|商户唯一标识|
|real_name|varchar|NO|''||真实姓名|
|last_login_time|int|NO|0||上次登录时间|
|last_login_ip|char|NO|''||登录IP|
|is_ban|int|NO|0||状态： 0启用 1禁用|
|reg_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_cooper|id|PRIMARY|1|A(升序)|null|null||NO|2|BTREE|||
|lzh_cooper|phone|UK_phone|1|A(升序)|null|null||NO|2|BTREE|||
|lzh_cooper|client_id|uk_client_id|1|A(升序)|null|null|YES|NO|2|BTREE|||
