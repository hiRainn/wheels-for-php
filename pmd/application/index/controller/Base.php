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
    			$this->error('数据库不存在','index/index');
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
}
