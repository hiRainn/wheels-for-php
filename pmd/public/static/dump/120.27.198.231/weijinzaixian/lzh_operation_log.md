|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|record_id|bigint|YES|null|MUL|日志关联的记录ID|
|log_content|text|NO|null||日志内容|
|log_table|varchar|NO|null|MUL|日志关联的table|
|log_type|varchar|NO|SYSTEM||日志类型：MANUAL-人工日志，SYSTEM-系统日志|
|operation_type|varchar|NO|null||操作类型|
|user_type|varchar|NO|ADMIN||创建日志的用户类型：ADMIN-后台操作人员，MEMBER-会员|
|create_time|datetime|NO|null||创建时间|
|create_userid|bigint|YES|null||创建人|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_operation_log|id|PRIMARY|1|A(升序)|null|null||NO|8914|BTREE|||
|lzh_operation_log|log_table|idx_manual_log_tab|1|A(升序)|null|null||YES|8|BTREE|||
|lzh_operation_log|record_id|idx_manual_log_record|1|A(升序)|null|null|YES|YES|8914|BTREE|||
