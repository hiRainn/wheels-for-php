|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|uid|int|NO|null|PRI||
|bank_num|varchar|YES|null|||
|bank_province|varchar|YES|null|||
|bank_city|varchar|YES|null|||
|bank_address|varchar|YES|null|||
|bank_name|varchar|YES|null|||
|open_acctid|varchar|YES|null||汇付天下绑卡账号|
|open_bankid|varchar|YES|null||汇付天下绑卡银行|
|add_time|int|NO|null|||
|add_ip|varchar|NO|null|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_banks|uid|PRIMARY|1|A(升序)|null|null||NO|811|BTREE|||
