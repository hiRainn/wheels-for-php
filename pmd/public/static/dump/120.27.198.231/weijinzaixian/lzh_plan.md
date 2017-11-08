|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|name|varchar|NO|''||本期理财计划名称|
|type|tinyint|NO|1|MUL|产品类型 1 7天 2 14天 3 21天|
|money|decimal|NO|0.00||融资总额|
|has_money|decimal|NO|0.00||已融资金额|
|last_money|decimal|NO|0.00||剩余融资金额|
|year_rate|decimal|NO|0.00||年化率|
|duration|smallint|NO|0||期限 天|
|repayment_type|tinyint|NO|1||还款方式 1一次性还本付息|
|invest_min|decimal|NO|0.00||最小投资金额|
|invest_max|decimal|NO|0.00||最大投资金额|
|invest_counts|smallint|NO|0||投资次数|
|info|varchar|NO|''||产品描述|
|status|tinyint|NO|0||状态 0未发布 1投资中 2流标 3满标复审 4还款中 5还款完成|
|collect_day|tinyint|NO|0||融资期限|
|collect_time|int|NO|0||融资到期时间戳|
|is_collect|tinyint|NO|2||是否完成匹配 1是 2否|
|collect_money|decimal|NO|0.00||总计标的金额|
|add_time|int|NO|0||添加时间|
|full_time|int|NO|0||满标时间|
|loan_time|int|NO|0||放款时间|
|deadline|int|NO|0||还款时间|
|provider|varchar|NO|''||产品提供者|
|provider_id|int|NO|0||产品提供者ID|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_plan|id|PRIMARY|1|A(升序)|null|null||NO|3|BTREE|||
|lzh_plan|type|k_type|1|A(升序)|null|null||YES|3|BTREE|||
