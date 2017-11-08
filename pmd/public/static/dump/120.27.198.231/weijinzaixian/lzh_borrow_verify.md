|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|borrow_id|int|NO|null|PRI||
|deal_user|mediumint|NO|0||初审用户ID|
|deal_time|int|NO|0||初审时间|
|deal_info|varchar|NO|''||初审备注|
|deal_time_2|int|NO|0||复审时间|
|deal_user_2|mediumint|NO|0||复审用户ID|
|deal_info_2|varchar|NO|''||复审备注信息|
|deal_status|tinyint|NO|0||初审状态|
|deal_status_2|tinyint|NO|0||复审状态|
|deal_result|varchar|NO|''||初审+发布结果集|
|deal_result_2|varchar|NO|''||复审结果集|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_borrow_verify|borrow_id|PRIMARY|1|A(升序)|null|null||NO|2974|BTREE|||
|lzh_borrow_verify|borrow_id|borrow_id|1|A(升序)|null|null||YES|2974|BTREE|||
