|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|uid|bigint|NO|null||会员ID|
|borrow_id|bigint|YES|null||借款ID|
|cmd_id|varchar|NO|null||交易类型|
|mer_order_id|varchar|NO|null|UNI|商户订单号|
|pnr_order_id|varchar|YES|null|UNI|PNR订单号|
|freeze_order_id|varchar|YES|null||冻结标识号|
|status|tinyint|NO|0||处理状态,0-待处理，1-成功处理，2-成功后续处理|
|rel_tab|varchar|YES|null||关联table|
|rel_id|bigint|YES|null||关联ID，如投标关联lzh_borrow_investor|
|add_time|int|NO|null||添加时间|
|add_ip|varchar|YES|null||添加IP|
|modify_time|int|YES|null||修改时间|
|req_json|varchar|YES|null||请求json|
|res_json|varchar|YES|null||响应json|
|transfer_type|varchar|YES|null||转账类型：1-投标奖励转账，2-邀请奖励转账|
|sort_order|tinyint|NO|1||还款期数|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_trade_pnr|id|PRIMARY|1|A(升序)|null|null||NO|266976|BTREE|||
|lzh_trade_pnr|mer_order_id|IDX_TRADE_PNR_MER|1|A(升序)|null|null||NO|266976|BTREE|||
|lzh_trade_pnr|pnr_order_id|IDX_TRADE_PNR|1|A(升序)|null|null|YES|NO|66744|BTREE|||
