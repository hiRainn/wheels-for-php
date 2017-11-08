|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|user_name|varchar|NO|null|MUL|用户名(后期可作为昵称)|
|user_pass|char|NO|null||用户密码|
|user_type|tinyint|NO|1||用户类型 1默认 9公司员工（已废弃）|
|pin_pass|char|NO|null||支付密码|
|user_email|varchar|NO|''|MUL|邮箱|
|user_phone|varchar|NO|null||手机号|
|reg_time|int|NO|null||注册时间|
|reg_ip|varchar|NO|null||注册IP|
|user_leve|tinyint|NO|0||用户级别 0注册用户 1VIP用户(可借款)|
|time_limit|int|NO|0||VIP到期时间|
|credits|int|NO|0||经验值|
|scores|bigint|NO|0||积分|
|recommend_id|int|NO|null||推荐人ID|
|customer_id|int|NO|0||客服ID|
|customer_name|varchar|NO|''||客服昵称|
|province|int|NO|0||省|
|city|int|NO|0||市|
|area|int|NO|0||区|
|is_ban|int|NO|0||是否冻结0：否； 1：是|
|reward_money|decimal|NO|0.00||奖金总金额|
|expand_num|varchar|YES|null|UNI|推广号|
|delicated_customer|bigint|YES|null||???|
|socus|varchar|NO|''||貌似是渠道号|
|bind_uid|int|YES|null||绑定账户ID|
|login_time|int|NO|0||上次登录时间|
|is_borrow|int|YES|0||是否借款人 0不是 1是|
|is_zhuaqian|int|YES|0||???|
|is_jiangli|int|YES|0||???|
|is_work|tinyint|YES|0||来源标识 10三明学员 其他未知|
|is_recommend_reward|tinyint|NO|1||是否发放推荐奖励 1发放 2不发放|
|reg_way|char|NO|''||注册来源|
|login_token|char|YES|null||APP登录TOKEN|
|login_time_limit|int|NO|0||登录过期时间|
|partner|char|NO|''||来源商户|
|flag|varchar|NO|''||渠道2级标识|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_members|id|PRIMARY|1|A(升序)|null|null||NO|20820|BTREE|||
|lzh_members|expand_num|expandnumunique|1|A(升序)|null|null|YES|NO|20820|BTREE|||
|lzh_members|user_email|user_email|1|A(升序)|null|null||YES|10410|BTREE|||
|lzh_members|user_name|user_name|1|A(升序)|null|null||YES|20820|BTREE|||
