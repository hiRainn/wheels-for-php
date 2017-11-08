|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|uid|bigint|NO|null|PRI||
|usr_id|varchar|NO|null||用户号|
|usr_cust_id|varchar|NO|null|UNI|用户客户号|
|add_time|int|NO|null||开户时间|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_members_pnr|uid|PRIMARY|1|A(升序)|null|null||NO|1301|BTREE|||
|lzh_members_pnr|usr_cust_id|IDX_MEMBER_PNR_CUST|1|A(升序)|null|null||NO|1301|BTREE|||
