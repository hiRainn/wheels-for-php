<?php
namespace app\index\controller;
use app\index\controller\MyConst;
use think\Controller;
use think\Db;

class Base extends Controller
{

	protected $database;
	/**
	* 判断登录
	*/
    public function _initialize()
    {
        parent::_initialize();
    	if(!in_array('PDO', get_loaded_extensions())){
    		exit('必须安装PDO扩展');
    	}
        header('Access-Control-Allow-Origin:htts://Access-Control-Allow-Origin;');

    	if(!session(MyConst::SESSION)) {
    		$this->redirect('index/sign/login');
    	}
    	if(!cache(MyConst::SESSION)) {
    		session(MyConst::SESSION, null);
    		$this->error('操作超时，请重新登录！',url('index/sign/login'));
    	}
    	$this->configDb();
    }

    public function empty()
    {
    	$this->redirect('/');
    }

    /**
	* 动态配置数据库刷新活跃时间
	*/
    private function configDb()
    {
    	cache(MyConst::SESSION, 1, MyConst::LOG_TIME);
    	$db_config = session(MyConst::SESSION);
    	foreach($db_config as $k => $v) {
    		config('database.' . $k, $v);
    	} 

    	if($database = request()->param('database','','htmlspecialchars')) {
    		config('database.database',$database);
    		try{
    			$databases = Db::query("show databases");
		    	foreach($databases as $v) {
		    		if(in_array($v['Database'], ['information_schema', 'performance_schema', 'mysql'])) {
		    			continue;
		    		}
		    		$data[] = $v['Database'];
		    	}
    			$this->database = $database;
    		}catch(\PDOException $e){
    			$this->error('数据库不存在','index/index/index');
    		}
    	}
    	$this->assign([
    		'database'=>!empty($this->database)?$this->database:'',
    		'databases' => !empty($data)?$data:''
    	]);
    }

    /**
    * 处理数据
    */
    protected function parseData($key,&$data)
    {
    	$tmp = [];
    	foreach($data as $v){
    		$tmp[] = $v[$key];
    	}
    	$data = $tmp;
    }

    /**
    * 输出验证码 img标签的src直接指向地址
    */
    public function verify($id = 1)
    {
        $verify = new \org\Verify(array('length' => 4));
        $verify->entry($id);
    }

    /**
    * 验证码验证
    */
     public function checkVerify($code ,$time = 1800, $id = 1, $seKey = 'ThinkPHP.CN')
   {
       $key = substr(md5($seKey), 5, 8);
       $str = substr(md5($seKey), 8, 10);
       $key = md5($key . $str).$id;

       $code = strtoupper($code);
       $code_key = substr(md5($seKey), 5, 8);
       $code_str = substr(md5($code), 8, 10);
       $code = md5($code_key . $code_str);

       $secode = session($key);
       if($secode['verify_time'] + $time < time()){
           return ['code'=>0,'msg'=>'验证码超时'];
       }
       if($secode['verify_code'] != $code) {
           return ['code'=>0,'msg'=>'验证码错误'];
       }
       return ['code'=>1,'msg'=>'success'];

   }
}
