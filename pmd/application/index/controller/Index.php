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
            'databases' => $data
        ]);
    	return $this->fetch();
    }

    public function tables()
    {
        try{
            $field = 'TABLE_NAME as name,TABLE_TYPE as type,ENGINE as engine,CREATE_TIME as create_at,UPDATE_TIME as update_at,TABLE_COMMENT as comment';
            $tables = Db::Query("select {$field} from information_schema.tables where table_schema = '{$this->database}'");
        }catch(\PDOException $e){   
            $this->error('数据库不存在',url('index/index/index'));
        }
        cache('table',$tables);
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
            
            $index = Db::query("SHOW index FROM {$table}");
            foreach ($detail as $key => $value) {
                if($value['default_data'] === NULL){
                    $detail[$key]['default_data'] = 'null';
                }
                elseif($value['default_data'] === '') {
                    $detail[$key]['default_data'] = "''";
                }
            }
            foreach($index as &$v) {
                $v['Collation'] = ($v['Collation'] == 'A')?'A(升序)':'无分序';
                $v['Non_unique'] = ($v['Non_unique'] == 0)?'NO':'YES';
            } 
        }catch(\PDOException $e){
            exit('表不存在');
        }
        $this->assign([
                'list' => $this->findPreAndNext($table),
                'tablename' => $table,
                'detail' => $detail,
                'index' => !empty($index)?$index:[],
                'database'=>$this->database
            ]);
        return $this->fetch();
    }

    public function findPreAndNext($tablename)
    {
        if(!$tables = cache('table')){
            try{
                $field = 'TABLE_NAME as name,TABLE_TYPE as type,ENGINE as engine,CREATE_TIME as create_at,UPDATE_TIME as update_at,TABLE_COMMENT as comment';
                $tables = Db::Query("select {$field} from information_schema.tables where table_schema = '{$this->database}'");
            }catch(\PDOException $e){   
                $this->error('数据库不存在',url('index/index/index'));
            }
            cache('table',$tables);
        }
        $list = [];
        foreach($tables as $k => $v) {
            if($v['name'] == $tablename) {
                $list[] = $v['name'];
                if($k != 0) {
                    $list['pre'] = $tables[$k - 1]['name'];
                }
                if($k != count($tables) -1 ) {
                    $list['next'] = $tables[$k + 1]['name'];
                }  
                break;
            }
           
        }
        return $list;
    }

    public function dumpIntoMDOneTable()
    {
        
    }
}
