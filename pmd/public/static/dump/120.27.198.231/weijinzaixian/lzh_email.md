|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|title|varchar|NO|null||邮件标题|
|content|text|NO|null||邮件内容|
|email_type|varchar|NO|null||邮件类型|
|sender|varchar|NO|null||邮件发送者|
|create_time|datetime|NO|null||创建时间|
|create_uid|bigint|YES|null||创建人，为空指系统创建|
|borrow_id|bigint|YES|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_email|id|PRIMARY|1|A(升序)|null|null||NO|24219|BTREE|||
