<?php  
/**
* 模拟标签内容获取接口
* @author heihei <wr_sorarara@yahoo.co.jp>
* @version 1.0 
*/

$lib = [
	'a'   => ['a','ab','abc','adc','ade'],
	'ab'  => ['ab','abc'],
	'abc' => ['abc','ade'],
	'ade' => ['ade'],
	'ad'  => ['adc','ade'],
	'ae'  => ['aec'],
	'b'   => ['b','ba','bbc','bac','bde'],
	'ba'  => ['ba','bac'],
	'bac' => ['bac'],
	'bb'  => ['bbc'],
	'bbc' => ['bbc'],
	'bd'  => ['bde'],
	'bde' => ['bde'],
];
$return = [];

// fillter
//接受方式为tags.config.js中的ajax-type，默认为GET

if($_SERVER['REQUEST_METHOD'] === 'GET') {
	$word = $_GET['tag_name'];
	if(isset($lib[$word])) {
		echo json_encode(['code' => 0, 'msg' => 'OK', 'data' => $lib[$word]]);
	}
	else {
		echo json_encode(['code' => 0, 'msg' => 'empty', 'data' => null]);
	}
}
else {
	echo json_encode(['code' => -1, 'msg' => 'error', 'data' => null]);
}
?>