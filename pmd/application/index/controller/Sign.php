<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;
use app\index\controller\MyConst;

class Sign extends Controller
{

	public function _initialize()
	{
		if(!in_array('PDO', get_loaded_extensions())){
    		exit('必须安装PDO扩展');
    	}
	}
	
	/**
	* 登录
	*/
    public function login()
    {
    	if(session(MyConst::SESSION)){
    		$this->redirect('index/index');
    	}
       return $this->fetch();
    }

    /**
	* 登出
	*/
    public function logout()
    {
    	session(MyConst::SESSION,null);
    	$this->redirect('sign/login');
    }

    /**
	* 查询登录接口
	*/
	public function log_in(Request $request)
	{
		if(!$request->isAjax()) {
			return json(['code'=> -1, 'msg'=> '非法请求']);
		}
		$hostname = $request->post('hostname','127.0.0.1');
		$username = $request->post('username','root');
		$password = $request->post('password','root');
		$hostport = $request->post('hostport','3306');
		config('database.hostname', $hostname);
		config('database.username', $username);
		config('database.password', $password);
		config('database.hostport', $hostport);
		try{
			$databases = Db::query("show databases");
			$data = [
				'hostname' => $hostname,
				'username' => $username,
				'password' => $password,
				'hostport' => $hostport
			];
			session(MyConst::SESSION, $data);
			cache(MyConst::SESSION, 1, MyConst::LOG_TIME);
			return json(['code'=>0, 'message' => 'login success!']);

		}catch(\PDOException $e) {
			return json(['code'=>-1, 'msg'=>'登录失败！']);
		}
	}
}
