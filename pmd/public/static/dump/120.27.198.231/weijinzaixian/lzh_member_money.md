|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|uid|int|NO|null|PRI||
|money_freeze|decimal|NO|0.00||冻结金额|
|money_collect|decimal|NO|0.00||待收金额|
|account_money|decimal|NO|0.00||可用余额|
|credit_limit|decimal|NO|0.00|||
|credit_cuse|decimal|NO|0.00|||
|borrow_vouch_limit|decimal|NO|0.00|||
|borrow_vouch_cuse|decimal|NO|0.00|||
|invest_vouch_limit|decimal|NO|0.00|||
|invest_vouch_cuse|decimal|NO|0.00|||
|exp_money|decimal|NO|0.00||体验金|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_money|uid|PRIMARY|1|A(升序)|null|null||NO|20955|BTREE|||
