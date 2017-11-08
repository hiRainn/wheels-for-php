|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|0|MUL|用户UID|
|level|tinyint|NO|0||商品级别1,2,3,4|
|affect_money|int|NO|0||影响金额|
|target_id|char|NO|0||关联ID|
|target_type|tinyint|NO|0||对象类型 1虾券 2红包 3电影票|
|goods_name|varchar|NO|''||商品名称|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_cash_log|id|PRIMARY|1|A(升序)|null|null||NO|50|BTREE|||
|lzh_member_cash_log|uid|k_uid|1|A(升序)|null|null||YES|50|BTREE|||
