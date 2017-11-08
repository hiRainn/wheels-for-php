|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
|id|smallint|NO|null|PRI|ƽ̨id|
|name|varchar|NO|''|MUL|ƽ̨???|
|area_id|smallint|NO|0|MUL|????id|
|legal|varchar|NO|''||???˴??|
|up_time|int|NO|0||????ʱ?|
|status|smallint|NO|0||0-??????1ɾ??|
|company|varchar|NO|''||??????˾|
|reg_capital|char|NO|''||ע???ʽ????ַ???ʽ????(?г???Ҫ?|
|introduce|varchar|YES|null||ƽ̨???|
|service_phone|char|NO|''||?????绰|
|land_phone|char|NO|''||??˾????|
|email|varchar|NO|''||???????|
|fax|char|NO|''||???|
|service_qq|char|NO|''||?ͷ?qq|
|zip_code|char|NO|''||?ʱ|
|plat_address|varchar|NO|''||ƽ̨??ַ|
|plat_web|varchar|NO|''||ƽ̨??ַ|



|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
|lzh_seo_plat|id|PRIMARY|1|A(升序)|null|null||NO|35|BTREE|||
|lzh_seo_plat|name|plat_name|1|A(升序)|null|null||NO|35|BTREE|||
|lzh_seo_plat|status|plat_name|2|A(升序)|null|null||NO|35|BTREE|||
|lzh_seo_plat|area_id|area|1|A(升序)|null|null||YES|35|BTREE|||
