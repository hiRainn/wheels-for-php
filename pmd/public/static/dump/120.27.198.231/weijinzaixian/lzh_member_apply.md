|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL||
|add_time|int|NO|null|||
|add_ip|varchar|NO|null|||
|apply_status|tinyint|NO|0|||
|credit_money|decimal|NO|null|||
|deal_user|int|NO|null|||
|deal_time|int|NO|null|||
|deal_info|varchar|NO|null|||
|apply_type|tinyint|NO|null|||
|apply_money|decimal|NO|null|||
|apply_info|varchar|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_apply|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_member_apply|uid|uid|1|A(升序)|null|null||YES||BTREE|||
|lzh_member_apply|id|uid|2|A(升序)|null|null||YES||BTREE|||
