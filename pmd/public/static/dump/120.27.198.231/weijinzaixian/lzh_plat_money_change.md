|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|times|char|NO|''||每两小时统计一次|
|money_collect|decimal|NO|0.00||账户表待收总额|
|account_money|decimal|NO|0.00||账户表总余额|
|money_freeze|decimal|NO|0.00||账户表冻结总额|
|total_arrears|decimal|NO|0.00||平台总欠款|
|now_withdraw_money|decimal|NO|0.00||当前申请提现总额|
|recover_money|decimal|NO|0.00||未收回欠款|
|total_collect|decimal|NO|0.00||待收表-总待收金额|
|total_capital|decimal|NO|0.00||待收表-本金总额|
|total_interest|decimal|NO|0.00||待收表-利息总额|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plat_money_change|id|PRIMARY|1|A(升序)|null|null||NO|11|BTREE|||
