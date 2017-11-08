|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|uid|int|NO|null|PRI||
|phone_status|tinyint|NO|0|||
|id_status|tinyint|NO|0||0:未上传1:验证通过2:等待验证|
|email_status|tinyint|NO|1|||
|account_status|tinyint|NO|0||是否开通银行存管账户 1已开通 0未开通|
|auto_invest_status|tinyint|NO|0||自动投标授权 0未授权 1已授权|
|safequestion_status|tinyint|NO|0|||
|video_status|tinyint|NO|0|||
|face_status|tinyint|NO|0|||



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_members_status_copy|uid|PRIMARY|1|A(升序)|null|null||NO|21362|BTREE|||
