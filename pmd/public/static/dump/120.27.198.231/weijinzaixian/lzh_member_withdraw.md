|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|uid|int|NO|null|MUL|关联UID|
|withdraw_money|decimal|NO|null||提现金额|
|account_money|decimal|NO|0.00||账户余额|
|withdraw_status|tinyint|NO|null||提现状态 1申请通过 2审核通过，已提现 3审核不通过，已返还 4用户主动撤销|
|withdraw_fee|decimal|NO|0.00||提现手续费|
|add_time|int|NO|null||申请提现时间|
|add_ip|varchar|NO|null||申请者IP地址|
|deal_time|int|NO|0||审核时间|
|deal_user|varchar|NO|''||审核人|
|deal_info|varchar|NO|''||审核备注信息|
|order_sn|varchar|YES|null|UNI|提现流水号|
|result|varchar|NO|''||异步通知结果|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_member_withdraw|id|PRIMARY|1|A(升序)|null|null||NO|19158|BTREE|||
|lzh_member_withdraw|order_sn|uk_order_sn|1|A(升序)|null|null|YES|NO|2|BTREE|||
|lzh_member_withdraw|uid|uid|1|A(升序)|null|null||YES|19158|BTREE|||
|lzh_member_withdraw|withdraw_status|uid|2|A(升序)|null|null||YES|19158|BTREE|||
|lzh_member_withdraw|add_time|uid|3|A(升序)|null|null||YES|19158|BTREE|||
