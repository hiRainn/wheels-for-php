|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|uid|int|NO|null||用户ID|
|s_uid|int|NO|0||卡券来源uid， 0=投资获取 |
|phone|char|NO|null||用户手机号|
|card_id|char|NO|null||卡券ID|
|card_goods_id|int|NO|0||卡券对应商品ID|
|card_goods_name|char|NO|''||卡券对应商品|
|expired_time_limit|int|NO|0||卡券过期时间 默认两月过期|
|borrow_id|int|NO|0||标的ID|
|invest_id|int|NO|0||投资ID|
|invest_money|decimal|NO|0.00||投资金额|
|status|tinyint|NO|2||使用状态 1已使用 2未使用 3已过期|
|add_time|int|NO|0||添加时间|
|use_time|int|NO|0||使用时间|
|deal_uid|int|NO|0||审核人|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_partner_user_card2|id|PRIMARY|1|A(升序)|null|null||NO|83|BTREE|||
