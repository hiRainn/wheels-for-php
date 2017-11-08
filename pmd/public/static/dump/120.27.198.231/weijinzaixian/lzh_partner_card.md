|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|card_id|char|YES|null|UNI|不重复ID|
|goods_id|tinyint|NO|0||商品ID  1黄瓜、2-1斤小龙虾、3-2斤小龙虾、4-5斤小龙虾 |
|goods_name|char|NO|''||对应商品名称|
|use_time|int|NO|0||使用时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_partner_card|id|PRIMARY|1|A(升序)|null|null||NO|13536|BTREE|||
|lzh_partner_card|card_id|uk_card_id|1|A(升序)|null|null|YES|NO|13536|BTREE|||
