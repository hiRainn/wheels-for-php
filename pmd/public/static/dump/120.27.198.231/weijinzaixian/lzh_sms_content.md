|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|bigint|NO|null|PRI||
|sms_content|varchar|NO|null|||
|borrow_id|bigint|YES|null|||
|sms_type|varchar|NO|null||短信类型,CHECK_CODE:校验码,NEW_BORROW:新标提醒|
|create_time|datetime|NO|null|||
|create_user|bigint|NO|null|||
|deal_flag|char|NO|0||处理状态，0-待处理，1-已处理|
|deal_user|bigint|YES|null|||
|deal_time|datetime|YES|null|||
|site_content|varchar|YES|null||作为网站首页新标预告字段|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_sms_content|id|PRIMARY|1|A(升序)|null|null||NO|31222|BTREE|||
