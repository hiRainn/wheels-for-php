|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|0||用户ID|
|money|decimal|NO|0.00||投资金额|
|investor_interest|decimal|NO|0.00||投资利息|
|recommend_money|decimal|NO|0.00||返佣金额|
|partner|char|NO|''||来源商户|
|flag|varchar|NO|''||渠道2级标识|
|preiod|tinyint|NO|0||期数|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_remoney|id|PRIMARY|1|A(升序)|null|null||NO|17|BTREE|||
