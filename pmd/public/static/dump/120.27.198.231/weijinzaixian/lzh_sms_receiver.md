|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|sms_log_id|bigint|NO|null|MUL||
|phone_number|varchar|NO|null|MUL||
|uid|varchar|YES|null||会员ID|
|sms_status|char|NO|0||短信状态，0-待发送，1-成功发送，2-处理失败|
|error_code|varchar|YES|null|||
|error_info|varchar|YES|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_sms_receiver|id|PRIMARY|1|A(升序)|null|null||NO|107315|BTREE|||
|lzh_sms_receiver|sms_log_id|IDX_SMS_LOG|1|A(升序)|null|null||YES|107315|BTREE|||
|lzh_sms_receiver|phone_number|IDX_PHONE_NUMBER|1|A(升序)|null|null||YES|21463|BTREE|||
|lzh_sms_receiver|sms_log_id|IDX_SMS_LOG_STATUS|1|A(升序)|null|null||YES|107315|BTREE|||
|lzh_sms_receiver|sms_status|IDX_SMS_LOG_STATUS|2|A(升序)|null|null||YES|107315|BTREE|||
|lzh_sms_receiver|sms_log_id|IDX_SMS_LOG_PHONE|1|A(升序)|null|null||YES|53657|BTREE|||
|lzh_sms_receiver|phone_number|IDX_SMS_LOG_PHONE|2|A(升序)|null|null||YES|107315|BTREE|||
