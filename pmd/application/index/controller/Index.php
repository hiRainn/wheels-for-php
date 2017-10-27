<?php
namespace app\index\controller;
use think\Db;

class Index extends Base
{
    public function index()
    {
    	$databases = Db::query("show databases");
    	foreach($databases as $v) {
    		if(in_array($v['Database'], ['information_schema', 'performance_schema', 'mysql'])) {
    			continue;
    		}
    		$data[] = $v['Database'];
    	}
    	dump($data);
    	return $this->fetch();
    }
}
