|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|0|MUL|接收UID|
|title|varchar|NO|null||标题|
|msg|varchar|NO|null||站内信内容|
|send_time|int|NO|0||发送时间|
|status|tinyint|NO|0||状态 0未读 1已读|
|mass_id|varchar|NO|0||群发信息|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_inner_msg|id|PRIMARY|1|A(升序)|null|null||NO|154494|BTREE|||
|lzh_inner_msg|uid|uid|1|A(升序)|null|null||YES|9655|BTREE|||
|lzh_inner_msg|id|uid|2|A(升序)|null|null||YES|154494|BTREE|||
|lzh_inner_msg|status|uid|3|A(升序)|null|null||YES|154494|BTREE|||
