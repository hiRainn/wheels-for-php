|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|times|char|NO|''||期限|
|new_reg|int|NO|null||新增注册人数|
|invest_counts|int|NO|0||投资次数|
|invest_money|decimal|NO|0.00||投资金额|
|year_rate_invest_money|decimal|NO|0.00||年华投资额|
|avg_invest_money|decimal|NO|0.00||平均投资金额|
|invest_money_increase|decimal|NO|0.00||投资环比增长|
|new_invest|int|NO|0||首次投资人数|
|new_invest_one|int|NO|0||首次投资人数|
|new_invest_money|decimal|NO|0.00||首次投资金额|
|recharge_money|decimal|NO|0.00||充值金额|
|recharge_failure_rate|decimal|NO|0.00||充值失败率|
|apply_withdraw_money|decimal|NO|0.00||申请提现金额|
|deal_withdraw_money|decimal|NO|0.00||审核提现金额|
|lift_diff|decimal|NO|0.00||充值提现差|
|collect_money|decimal|NO|0.00||待还金额|
|borrow_money|decimal|NO|0.00||发标金额|
|guard_money|decimal|NO|0.00||站岗金额|
|received_money|decimal|NO|0.00||待收金额|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_data_month_detail|id|PRIMARY|1|A(升序)|null|null||NO|0|BTREE|||
