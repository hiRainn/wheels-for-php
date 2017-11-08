|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|uid|int|NO|null|PRI|用户id|
|group_id|mediumint|NO|null|PRI|用户组id|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_auth_group_access|uid|uid_group_id|1|A(升序)|null|null||NO||BTREE|||
|lzh_auth_group_access|group_id|uid_group_id|2|A(升序)|null|null||NO|1|BTREE|||
|lzh_auth_group_access|uid|uid|1|A(升序)|null|null||YES|1|BTREE|||
|lzh_auth_group_access|group_id|group_id|1|A(升序)|null|null||YES|1|BTREE|||
