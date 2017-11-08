|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|null|MUL|UID|
|user_name|varchar|NO|null||用户名|
|user_phone|char|NO|null||用户手机号|
|reg_time|int|NO|null||注册时间戳|
|reg_days|tinyint|NO|null||注册天数|
|recommend_id|int|NO|null||推荐人UID|
|capital|decimal|NO|null||投资本金|
|rebate_money|decimal|NO|null||返佣金额|
|is_rebate|tinyint|NO|2||是否返佣 1已返佣 2未返佣|
|add_time|int|NO|0||添加时间|
|rebate_time|int|NO|0||返佣时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_promote_rebate|id|PRIMARY|1|A(升序)|null|null||NO|19|BTREE|||
|lzh_promote_rebate|uid|k_uid_recommend_uid|1|A(升序)|null|null||YES|19|BTREE|||
|lzh_promote_rebate|recommend_id|k_uid_recommend_uid|2|A(升序)|null|null||YES|19|BTREE|||
