<?php
class demo
{
	protected $isPjax;

	public function __construct()
	{
		$this->isPjax = array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX'] == true;
	}

	public function demo()
	{
		$p = isset($_GET['page'])?$_GET['page']:1;
		//模拟数据
		switch($p){
			case 1:$data = [['name'=>'张三1','age'=>'18','job'=>'PHP'],['name'=>'张三1','age'=>'18','job'=>'PHP'],['name'=>'张三1','age'=>'18','job'=>'PHP']]; break;
			case 2:$data = [['name'=>'张三2','age'=>'18','job'=>'PHP'],['name'=>'张三2','age'=>'18','job'=>'PHP'],['name'=>'张三2','age'=>'18','job'=>'PHP']]; break;
			case 3:$data = [['name'=>'张三3','age'=>'18','job'=>'PHP'],['name'=>'张三3','age'=>'18','job'=>'PHP'],['name'=>'张三3','age'=>'18','job'=>'PHP']]; break;
		}
		$page = [1,2,3];
		$e = ['data'=>$data,'p'=>$p,'page'=>$page];
		$this->view($e);
	}

	public function view($data)
	{
		extract($data);
		if(!$this->isPjax){
			include './view/header.html';
		}
		include './view/body.html';
		if(!$this->isPjax){
			include './view/footer.html';
		}
		
	}
}

$demo = new demo();
$demo->demo();


?>