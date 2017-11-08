|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL|投资人UID|
|plan_id|int|NO|null|MUL|计划ID|
|capital|decimal|NO|0.00||投资金额|
|interest|decimal|NO|0.00||投资利息|
|status|tinyint|NO|0||投资状态 0失败 1成功  2流标 3还款中 4已还款|
|receive_capital|decimal|NO|0.00||已回收本金|
|receive_interest|decimal|NO|0.00||已回收本金|
|way|tinyint|NO|1||投资来源 1PC 2手机端 3Android 4ios|
|add_time|int|NO|0||投资时间|
|deadline|int|NO|0||预期还款时间|
|sort_order|tinyint|NO|0||期数|
|total|tinyint|NO|0||总期数|
|repayment_time|int|NO|0||实际还款时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plan_invest|id|PRIMARY|1|A(升序)|null|null||NO|8|BTREE|||
|lzh_plan_invest|uid|k_uid_status|1|A(升序)|null|null||YES|8|BTREE|||
|lzh_plan_invest|status|k_uid_status|2|A(升序)|null|null||YES|8|BTREE|||
|lzh_plan_invest|plan_id|k_uid_plan_borrow_status|1|A(升序)|null|null||YES|4|BTREE|||
|lzh_plan_invest|status|k_uid_plan_borrow_status|2|A(升序)|null|null||YES|4|BTREE|||
