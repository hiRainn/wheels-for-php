|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键|
|action_id|int|NO|0|MUL|行为id|
|user_id|int|NO|0|MUL|执行用户id|
|action_ip|char|NO|null|MUL|执行行为者ip|
|model|varchar|NO|''||触发行为的表|
|record_id|int|NO|0||触发行为的数据id|
|remark|varchar|NO|''||日志备注|
|status|tinyint|NO|1||状态|
|create_time|int|NO|0||执行行为的时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_action_log|id|PRIMARY|1|A(升序)|null|null||NO|452|BTREE|||
|lzh_action_log|action_ip|action_ip_ix|1|A(升序)|null|null||YES||BTREE|||
|lzh_action_log|action_id|action_id_ix|1|A(升序)|null|null||YES||BTREE|||
|lzh_action_log|user_id|user_id_ix|1|A(升序)|null|null||YES||BTREE|||
