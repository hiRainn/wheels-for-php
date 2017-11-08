|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|null||用户UID |
|year_rate|decimal|NO|0.00||年化率|
|capital|decimal|NO|0.00||投资本金|
|interest|decimal|NO|0.00||投资利息|
|status|int|NO|2||回款状态： 1已回款 2未回款|
|add_time|int|NO|0||投资时间|
|end_time|int|NO|0||回款时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_exp_invest|id|PRIMARY|1|A(升序)|null|null||NO|94|BTREE|||
|lzh_exp_invest|id|k_id_uid|1|A(升序)|null|null||YES|94|BTREE|||
|lzh_exp_invest|uid|k_id_uid|2|A(升序)|null|null||YES|94|BTREE|||
