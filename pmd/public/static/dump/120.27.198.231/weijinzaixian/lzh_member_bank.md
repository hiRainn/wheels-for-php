|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|cid|int|NO|null|PRI||
|uid|int|NO|null|MUL|用户UID|
|bank_user|varchar|NO|''||姓名|
|bank_phone|char|NO|''||银行预留手机号|
|bank_name|varchar|NO|''||银行名称|
|bank_code|char|NO|''||银行编码|
|card_id|varchar|NO|''||银行卡号|
|province|varchar|NO|''||省|
|city|varchar|NO|''||市|
|district|varchar|NO|''||区|
|card_address|varchar|NO|''||支行地址|
|create_time|int|YES|0||添加时间|
|is_ok|int|NO|1||是否可更改银行卡 1不可更改 2 可更改 3审核信息中|
|bind_id|char|NO|''||绑卡ID|
|bf_bind_id|char|NO|''||宝付绑卡ID|
|trans_id|char|YES|null|UNI|商户订单号|
|bind_result|varchar|NO|''||绑卡json结果集|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_bank|cid|PRIMARY|1|A(升序)|null|null||NO|7468|BTREE|||
|lzh_member_bank|trans_id|uk_trans_id|1|A(升序)|null|null|YES|NO|106|BTREE|||
|lzh_member_bank|uid|k_uid|1|A(升序)|null|null||YES|7468|BTREE|||
