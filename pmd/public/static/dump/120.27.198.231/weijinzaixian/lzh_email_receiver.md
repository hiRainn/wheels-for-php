|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|uid|bigint|NO|null|||
|email_id|bigint|NO|null|MUL|邮件ID|
|receiver|varchar|NO|null||邮件接收者|
|receiver_type|varchar|NO|null||接收者类型，to，cc，bc|
|sent_time|datetime|YES|null|MUL|邮件发送时间|
|failed_count|int|NO|0||失败次数|
|last_failed_time|datetime|YES|null||上次失败时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_email_receiver|id|PRIMARY|1|A(升序)|null|null||NO|643319|BTREE|||
|lzh_email_receiver|email_id|email_receiver_emailid|1|A(升序)|null|null||YES|128663|BTREE|||
|lzh_email_receiver|sent_time|email_receiver_sent_time|1|A(升序)|null|null|YES|YES|2|BTREE|||
