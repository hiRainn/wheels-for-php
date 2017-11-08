|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|code|varchar|NO|''|UNI|编号|
|title|varchar|NO|''||标题|
|summary|varchar|NO|''||简介|
|detail|varchar|NO|''||说明|
|type|tinyint|NO|0||商品类型 1 红包 2 加息券|
|money|decimal|NO|0.00||兑换商品价值或加息利率|
|scores|int|NO|0||兑换所需积分|
|money_limit|decimal|NO|0.00||使用金额限制|
|stock|int|YES|0||物品库存|
|effective|int|NO|0||有效期天数|
|sort|int|NO|0||排列顺序|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_scores_goods|id|PRIMARY|1|A(升序)|null|null||NO|6|BTREE|||
|lzh_scores_goods|code|k_code|1|A(升序)|null|null||NO|6|BTREE|||
