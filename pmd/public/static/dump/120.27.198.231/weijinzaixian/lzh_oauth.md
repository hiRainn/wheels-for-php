|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI||
|is_bind|tinyint|NO|0|MUL||
|site|varchar|NO|''|MUL||
|openid|varchar|NO|''|||
|nickname|varchar|NO|''|||
|avatar|varchar|NO|''|||
|url|varchar|NO|''|||
|logintimes|int|NO|0|||
|logintime|int|NO|0|||
|bind_uid|int|NO|0|||
|addtime|int|NO|0|||
|login_enable|tinyint|NO|1||登陆开关，1-开，0-关|
|account_flag|tinyint|NO|0||账号修改标志，0-未修改，1-已修改|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_oauth|id|PRIMARY|1|A(升序)|null|null||NO|1582|BTREE|||
|lzh_oauth|site|site|1|A(升序)|null|null||YES||BTREE|||
|lzh_oauth|openid|site|2|A(升序)|null|null||YES||BTREE|||
|lzh_oauth|is_bind|uname|1|A(升序)|null|null||YES||BTREE|||
