|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|status|tinyint|NO|0||投资状态 |
|borrow_id|int|NO|null|MUL|标的ID|
|investor_uid|int|NO|null|MUL|投资人ID|
|borrow_uid|int|NO|null||借款人ID|
|investor_capital|decimal|NO|null||投资本金|
|investor_interest|decimal|NO|null||投资利息|
|deposit_fee|decimal|YES|null||借款人保证金|
|receive_capital|decimal|NO|0.00||待收本金|
|receive_interest|decimal|NO|0.00||待收利息|
|substitute_money|decimal|NO|0.00||网站代还金额|
|expired_money|decimal|NO|0.00||逾期金额|
|invest_fee|decimal|NO|0.00||利息管理费|
|paid_fee|decimal|NO|0.00||本金管理费|
|add_time|int|NO|0||投资时间|
|deadline|int|NO|0||到期时间|
|is_auto|tinyint|NO|0||是否自动投标|
|reward_money|decimal|NO|0.00||奖励金额|
|auto_no|bigint|NO|0||自动投标编号|
|way|tinyint|NO|1||投资来源 1PC 2手机端|
|card_id|int|NO|0||红包ID|
|invest_days|smallint|NO|0||投资期限(标的剩余期限)|
|year_rate_money|decimal|NO|0.00||年化投资额|
|freeze_request_no|varchar|YES|null|UNI|预处理流水号|
|request_no|varchar|YES|null||订单流水号|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_borrow_investor|id|PRIMARY|1|A(升序)|null|null||NO|61380|BTREE|||
|lzh_borrow_investor|freeze_request_no|uk_freeze_request_no|1|A(升序)|null|null|YES|NO|2|BTREE|||
|lzh_borrow_investor|investor_uid|investor_uid|1|A(升序)|null|null||YES|12276|BTREE|||
|lzh_borrow_investor|status|investor_uid|2|A(升序)|null|null||YES|12276|BTREE|||
|lzh_borrow_investor|borrow_id|borrow_id|1|A(升序)|null|null||YES|5580|BTREE|||
|lzh_borrow_investor|investor_uid|borrow_id|2|A(升序)|null|null||YES|61380|BTREE|||
|lzh_borrow_investor|status|borrow_id|3|A(升序)|null|null||YES|61380|BTREE|||
