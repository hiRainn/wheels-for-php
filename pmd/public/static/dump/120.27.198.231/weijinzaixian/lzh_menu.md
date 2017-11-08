|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|文档ID|
|title|varchar|NO|''||标题|
|type|varchar|NO|admin||菜单类别（admin后台，user会员中心）|
|icon|varchar|NO|''||分类图标|
|pid|int|NO|0|MUL|上级分类ID|
|sort|int|NO|0||排序（同级有效）|
|url|char|NO|''||链接地址|
|hide|tinyint|NO|0||是否隐藏|
|tip|varchar|NO|''||提示|
|group|varchar|YES|''||分组|
|is_dev|tinyint|NO|0||是否仅开发者模式可见|
|status|tinyint|NO|0||状态|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_menu|id|PRIMARY|1|A(升序)|null|null||NO|150|BTREE|||
|lzh_menu|pid|pid|1|A(升序)|null|null||YES|37|BTREE|||
