|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|mediumint|NO|null|PRI|规则id,自增主键|
|module|varchar|NO|null|MUL|规则所属module|
|type|tinyint|NO|1||1-url;2-主菜单|
|name|char|NO|''||规则唯一英文标识|
|title|char|NO|''||规则中文描述|
|status|tinyint|NO|1||是否有效(0:无效,1:有效)|
|condition|varchar|NO|''||规则附加条件|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_auth_rule|id|PRIMARY|1|A(升序)|null|null||NO|147|BTREE|||
|lzh_auth_rule|module|module|1|A(升序)|null|null||YES||BTREE|||
|lzh_auth_rule|status|module|2|A(升序)|null|null||YES||BTREE|||
|lzh_auth_rule|type|module|3|A(升序)|null|null||YES||BTREE|||
