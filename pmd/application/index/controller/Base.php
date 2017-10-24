<?php  
namespace app\index\controller;
use think\Controller;
use think\Session;

class Base extends Controller
{
	public function _initialize()
	{
		if(!Session::has('db')) {
			$this->redirect('index/sign/login');
		}
	}
}

?>