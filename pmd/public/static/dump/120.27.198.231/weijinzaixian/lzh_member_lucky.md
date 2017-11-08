|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|UNI||
|reward_money|decimal|NO|null|||
|reward_times|int|NO|null|||
|aid|int|NO|null|MUL||
|status|tinyint|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_lucky|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_member_lucky|uid|IDX_MEMBER_LUCKY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_member_lucky|aid|IDX_MEMBER_LUCKY_AID|1|A(升序)|null|null||YES|0|BTREE|||
