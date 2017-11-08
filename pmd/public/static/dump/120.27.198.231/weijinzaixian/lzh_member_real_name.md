|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|null|MUL|UID|
|real_name|char|NO|''||真实姓名|
|idcard|char|NO|''||身份证号|
|result|varchar|NO|''||验证后结果 json|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_real_name|id|PRIMARY|1|A(升序)|null|null||NO|50|BTREE|||
|lzh_member_real_name|uid|uid|1|A(升序)|null|null||YES|25|BTREE|||
