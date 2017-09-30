<?php  
/**
* Analogue api of get tags
* variables can be accepted there are a,ab,ad,ae,abc,ade,b,ba,bb,bd,bbc,bac,bde
* @author heihei <wr_sorarara@yahoo.co.jp>
* @version 0.1 
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
//The method is the same as in the config.js
// if($_GET['tag_name'] == 's') {
// 	echo json_encode(['code'=>0,'msg'=>1,'data'=>['a','b','c']]);
// }else{
// 	echo json_encode(['code'=>0,'msg'=>1,'data'=>['aa','bb','cc']]);
// }


if($_SERVER['REQUEST_METHOD'] === 'GET') {
	$word = $_GET['tag_name'];
	if(isset($lib[$word])) {
		echo json_encode(['code' => 0, 'msg' => 'OK', 'data' => $lib[$word]]);
	}
	else {
		echo json_encode(['code' => 1, 'msg' => 'empty', 'data' => null]);
	}
}
else {
	echo json_encode(['code' => -1, 'msg' => 'error', 'data' => null]);
}
?>