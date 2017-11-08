|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|pay_id|int|NO|null||所属支付通道|
|bank_name|varchar|NO|''||银行名称 |
|bank_code|char|NO|''||银行代码|
|bank_num|char|NO|''||银行代码（支付方自定义）|
|card_limit|varchar|NO|''||银行卡限额信息|
|single_money_limit|mediumint|NO|0||单笔限额|
|day_money_limit|mediumint|NO|0||当日限额|
|month_money_limit|mediumint|NO|0||当月限额|
|is_limit|tinyint|NO|1||是否维护中 1开放中 2维护中|
|is_agree|tinyint|NO|1||是否支持 1支持 2不支持|
|add_time|int|NO|0||添加时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_pay_bank|id|PRIMARY|1|A(升序)|null|null||NO|33|BTREE|||
|lzh_pay_bank|id|K_id_pay_id|1|A(升序)|null|null||YES|33|BTREE|||
|lzh_pay_bank|pay_id|K_id_pay_id|2|A(升序)|null|null||YES|33|BTREE|||
|lzh_pay_bank|is_limit|K_id_pay_id|3|A(升序)|null|null||YES|33|BTREE|||
