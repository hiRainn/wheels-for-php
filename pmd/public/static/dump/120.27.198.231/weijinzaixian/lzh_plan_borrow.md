|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|cooper_id|int|NO|null|MUL|合作方ID|
|cooper_name|varchar|NO|''||合作方公司名称|
|borrow_uid|int|NO|null||借款人UID|
|borrower_name|varchar|NO|''||借款人姓名|
|plan_id|int|NO|0||理财计划ID|
|borrow_money|decimal|NO|null||借款金额|
|borrow_duration|smallint|NO|null||借款期限 天|
|repayment_type|tinyint|NO|1||还款类型 1一次还款 2分期还款|
|borrow_info|varchar|NO|''||标的介绍|
|borrow_status|tinyint|NO|1||标的状态 1已发布 2还款中 3还款完成|
|deadline|int|NO|0||到期时间|
|match_money|decimal|NO|0.00||匹配金额|
|match_time|int|NO|0||匹配时间|
|loan_money|decimal|NO|0.00||放款金额|
|loan_time|int|NO|0||放款时间|
|add_time|int|NO|null||添加时间|
|add_ip|varchar|NO|''||添加IP|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plan_borrow|id|PRIMARY|1|A(升序)|null|null||NO|100|BTREE|||
|lzh_plan_borrow|cooper_id|k_cooper_borrow_plan|1|A(升序)|null|null||YES|2|BTREE|||
|lzh_plan_borrow|borrow_uid|k_cooper_borrow_plan|2|A(升序)|null|null||YES|4|BTREE|||
|lzh_plan_borrow|plan_id|k_cooper_borrow_plan|3|A(升序)|null|null||YES|6|BTREE|||
