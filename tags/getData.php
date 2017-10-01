<?php 
//这里的方式是demo.html中的form表单提交方式，key值是tags.config.js中设置的input-name
$data = $_POST['tags'];

// '-'是tags.config.js中设置的tag-join
$data = explode('-', $data);  

//data操作
var_export($data);
?>