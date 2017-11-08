|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|int|NO|null|PRI|主键ID|
|location|tinyint|NO|0|MUL|导航显示位置 0顶部导航 1底部导航 2会员中心导航|
|pid|int|NO|0|MUL|上级频道ID|
|title|char|NO|null||频道标题|
|seo_title|varchar|NO|''||SEO标题|
|seo_keywords|varchar|NO|''||SEO关键字|
|seo_info|varchar|NO|''||SEO描述|
|url|char|NO|''||频道连接|
|sort|int|NO|0||导航排序 小-大|
|create_time|int|NO|0||创建时间|
|update_time|int|NO|0||更新时间|
|status|tinyint|NO|1||状态 1显示 2不显示|
|target|tinyint|NO|2||新窗口打开|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_channel|id|PRIMARY|1|A(升序)|null|null||NO|14|BTREE|||
|lzh_channel|pid|pid|1|A(升序)|null|null||YES||BTREE|||
|lzh_channel|location|k_location|1|A(升序)|null|null||YES||BTREE|||
