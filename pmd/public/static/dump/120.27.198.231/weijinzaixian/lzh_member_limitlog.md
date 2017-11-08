|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL||
|type|tinyint|NO|null|||
|credit_limit|float|NO|null|||
|borrow_vouch_limit|float|NO|null|||
|invest_vouch_limit|float|NO|null|||
|info|varchar|NO|null|||
|add_time|int|NO|null|||
|add_ip|varchar|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_limitlog|id|PRIMARY|1|A(升序)|null|null||NO|31|BTREE|||
|lzh_member_limitlog|uid|uid|1|A(升序)|null|null||YES|31|BTREE|||
|lzh_member_limitlog|type|uid|2|A(升序)|null|null||YES|31|BTREE|||
|lzh_member_limitlog|id|uid|3|A(升序)|null|null||YES|31|BTREE|||
