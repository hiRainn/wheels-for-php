|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|tid|int|NO|null|PRI||
|invest_uname|varchar|YES|null|||
|borrow_id|int|NO|null|||
|borrow_uid|int|NO|null|||
|invest_uid|int|NO|null|||
|invest_money|decimal|NO|null|||
|invest_interest|decimal|NO|null|||
|rep_time|int|NO|null|||
|invest_time|int|NO|null|||
|is_re|int|NO|0|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_redpaper_invest|tid|PRIMARY|1|A(升序)|null|null||NO|3892|BTREE|||
