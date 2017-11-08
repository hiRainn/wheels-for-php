|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL|用户UID|
|invest_id|int|NO|null||投资ID|
|match_money|decimal|NO|0.00||本次匹配金额|
|borrow_id|int|NO|null||匹配到标的ID|
|borrow_uid|int|NO|null||匹配的借款人UID|
|add_time|int|NO|null||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plan_invest_borrow|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
|lzh_plan_invest_borrow|uid|k_uid_invest_borrow|1|A(升序)|null|null||YES|0|BTREE|||
|lzh_plan_invest_borrow|invest_id|k_uid_invest_borrow|2|A(升序)|null|null||YES|0|BTREE|||
|lzh_plan_invest_borrow|borrow_id|k_uid_invest_borrow|3|A(升序)|null|null||YES|0|BTREE|||
