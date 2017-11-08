|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|0||关联UID|
|type|tinyint|NO|1||卡券类型 1现金红包 2加息卡 3456789待定|
|title|varchar|NO|''||标题|
|money|decimal|NO|0.00||金额 或 利率|
|status|tinyint|NO|2||红包状态 1已使用 2未使用 3已过期|
|expired_time|int|NO|0||过期时间天数|
|time_limit|tinyint|NO|0||使用时间限制 天|
|money_limit|decimal|NO|0.00||使用金额限制  最低投资金额|
|add_time|int|NO|0||添加时间|
|use_time|int|NO|0||使用时间|
|invest_id|int|NO|0||投资ID|
|borrow_id|int|NO|0||标的ID|
|increase_day|int|NO|0||加息的天数 （类型为加息券时）|
|increase_id|int|YES|null||加息券id 用于统计|
|is_exchange|tinyint|NO|0||是否为积分兑换的卡券|
|use_platform|tinyint|NO|0||使用平台 0 所有 1 app 2 pc 3 h5|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_card|id|PRIMARY|1|A(升序)|null|null||NO|129307|BTREE|||
|lzh_member_card|id|k_uid_id_xxx|1|A(升序)|null|null||YES|129307|BTREE|||
|lzh_member_card|uid|k_uid_id_xxx|2|A(升序)|null|null||YES|129307|BTREE|||
|lzh_member_card|type|k_uid_id_xxx|3|A(升序)|null|null||YES|129307|BTREE|||
|lzh_member_card|status|k_uid_id_xxx|4|A(升序)|null|null||YES|129307|BTREE|||
