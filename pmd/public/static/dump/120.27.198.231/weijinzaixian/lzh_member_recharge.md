|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null|MUL||
|nid|char|NO|null|||
|money|decimal|NO|null|||
|fee|decimal|NO|null|||
|pay_code|char|NO|''||支付通道|
|way|varchar|NO|null|||
|bank|varchar|YES|null|||
|use_account|tinyint|NO|0||使用三方平台账户|
|status|tinyint|NO|0|||
|add_time|int|NO|null|||
|add_ip|varchar|NO|null|||
|tran_id|varchar|NO|null|MUL||
|off_bank|varchar|NO|''|||
|off_way|varchar|NO|''|||
|deal_user|varchar|NO|''|||
|deal_uid|int|NO|0|||
|mer_order_num|varchar|YES|null|UNI||
|pay_msg|varchar|NO|''||本次充值错误信息|
|pay_result|text|YES|null||支付平台返回的付款结果|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_recharge|id|PRIMARY|1|A(升序)|null|null||NO|100873|BTREE|||
|lzh_member_recharge|mer_order_num|IDX_PAY_MER_ORDER_NUM|1|A(升序)|null|null|YES|NO|33624|BTREE|||
|lzh_member_recharge|uid|uid|1|A(升序)|null|null||YES|11208|BTREE|||
|lzh_member_recharge|status|uid|2|A(升序)|null|null||YES|12609|BTREE|||
|lzh_member_recharge|nid|uid|3|A(升序)|null|null||YES|100873|BTREE|||
|lzh_member_recharge|id|uid|4|A(升序)|null|null||YES|100873|BTREE|||
|lzh_member_recharge|uid|uid_2|1|A(升序)|null|null||YES|11208|BTREE|||
|lzh_member_recharge|money|uid_2|2|A(升序)|null|null||YES|100873|BTREE|||
|lzh_member_recharge|add_time|uid_2|3|A(升序)|null|null||YES|100873|BTREE|||
|lzh_member_recharge|tran_id|uk_trans_id|1|A(升序)|null|null||YES|100873|BTREE|||
