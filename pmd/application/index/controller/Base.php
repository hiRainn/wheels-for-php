<?php
namespace app\index\controller;
use app\index\controller\MyConst;
use think\Controller;

class Base extends Controller
{

	/**
	* 判断登录
	*/
    public function _initialize()
    {
    	if(!session(MyConst::SESSION)) {
    		$this->redirect('index/sign/login');
    	}
    	if(!cache(MyConst::SESSION)) {
    		session(null, MyConst::SESSION);
    		$this->error('操作超时，请重新登录！',url('index/sign/login'));
    	}

    	$this->configDb();
    }

    /**
	* 动态配置数据库刷新活跃时间
	*/
    public function configDb()
    {
    	cache(MyConst::SESSION, 1, MyConst::LOG_TIME);
    	$db_config = session(MyConst::SESSION);
    	foreach($db_config as $k => $v) {
    		config('database.' . $k, $v);
    	} 
    }
}
