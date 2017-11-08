|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|name|varchar|NO|null||商户名称|
|pass|char|NO|null||商户密码|
|pid|char|NO|''|MUL|商户ID|
|params|varchar|NO|''||备用参数|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_partner|id|PRIMARY|1|A(升序)|null|null||NO|6|BTREE|||
|lzh_partner|pid|k_pid|1|A(升序)|null|null||YES|6|BTREE|||
