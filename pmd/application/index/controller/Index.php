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
    	$this->assign([
            'data' => $data
        ]);
    	return $this->fetch();
    }

    public function tables()
    {
        try{
            $field = 'TABLE_NAME as name,TABLE_TYPE as type,ENGINE as engine,CREATE_TIME as create_at,UPDATE_TIME as update_at,TABLE_COMMENT as comment';
            $tables = Db::Query("select {$field} from information_schema.tables where table_schema = '{$this->database}'");
        }catch(\PDOException $e)
        {   
            Db::getLastSql();
        }
        $this->assign([
            'tables'=>$tables
        ]);
        return $this->fetch();
    }

    public function detail()
    {
        $table = request()->param('table');
        try{
            $field ='COLUMN_NAME as col_name,COLUMN_DEFAULT as default_data,DATA_TYPE as data_type,IS_NULLABLE as is_null,COLUMN_COMMENT as col_comment,COLUMN_KEY as index_key';
            $detail = Db::query("select {$field} from INFORMATION_SCHEMA.Columns where table_name='{$table}'");
           
        }catch(\PDOException $e){
            exit('表不存在');
        }
        $this->assign([
                'detail' => $detail
            ]);
        return $this->fetch();
    }
}
