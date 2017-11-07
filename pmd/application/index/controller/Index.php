<?php
namespace app\index\controller;
use think\Db;

class Index extends Base
{
    /**
    * 主页
    */
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
            'info' => '',
            'databases' => $data
        ]);
    	return $this->fetch();
    }

    /**
    * 表
    */
    public function tables()
    {
        try{
            $field = 'TABLE_NAME as name,TABLE_TYPE as type,ENGINE as engine,CREATE_TIME as create_at,UPDATE_TIME as update_at,TABLE_COMMENT as comment,Table_rows as rows,Row_format as format,Index_length,Check_time,Data_length,Auto_increment,Data_free,Table_collation,Create_options';
            $tables = Db::Query("select {$field} from information_schema.tables where table_schema = '{$this->database}'");
        }catch(\PDOException $e){   
            $this->error('数据库不存在',url('index/index/index'));
        }
        cache('table',$tables);
        $this->assign([
            'tablename' => $this->database,
            'tables'=>$tables,
            'info' => $this->database,
        ]);
        return $this->fetch();
    }

    /**
    * 表详情
    */
    public function detail()
    {
        $table = request()->param('table');
        try{
            $field ='COLUMN_NAME as col_name,COLUMN_DEFAULT as default_data,DATA_TYPE as data_type,IS_NULLABLE as is_null,COLUMN_COMMENT as col_comment,COLUMN_KEY as index_key';
            $detail = Db::query("select {$field} from INFORMATION_SCHEMA.Columns where table_name='{$table}' and table_schema= '{$this->database}'");
            
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
                'info' => $this->database. '-' .request()->param('table'),
                'list' => $this->findPreAndNext($table),
                'tablename' => $table,
                'detail' => $detail,
                'index' => !empty($index)?$index:[],
                'database'=>$this->database
            ]);
        return $this->fetch();
    }

    /**
    * 查找上下表
    */
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

    /**
    * 导出
    */
    public function dump()
    {
        set_time_limit(0);
        $type = request()->param('type','markdown','htmlspecialchars');
        $info = request()->param('info','','htmlspecialchars');
        if(!in_array($type,['markdown','excel']) || $info == false) {
            return '非法请求';
        }
        $dt = explode('-',$info);
        $d = $dt[0];
        $t = isset($dt[1])?$dt[1]:'';
        config('database.database',$d);
        if(count($dt) === 1) {
            try{
                Db::query("show databases");
            }catch(\PDOException $e){
                return '参数错误';
            }
        }
        elseif (count($dt) === 2) {
            try{
                Db::query("show databases");
                Db::query("desc $t");
            }catch(\PDOException $e){
                return '参数错误';
            }
        }
        else {
            return '非法请求';
        }

        if($this->FileExists($d,$t,$type)) {
            $this->redirect();  //跳转文件地址
        }
        else {
            // header('Content-Type: text/event-stream'); // 以事件流的形式告知浏览器进行显示
            header('Cache-Control: no-cache');         // 告知浏览器不进行缓存
            header('X-Accel-Buffering: no');           // 关闭加速缓冲
            set_time_limit(0);
            echo '正在生成文件中，成功后将自动下载，请等待。。。';
            ob_flush();
            flush();
            sleep(5);
            return "<script>location.href='/static/images/favicon.ico'</script>";
        }
        $this->makeDownFile($t,$type,$d);
        exit;
       
        
        echo 'over';
    }

    protected function makeDownFile($database, $type = 'markdown',$table = '')
    {
        if($type == 'markdown') {

        }
        elseif($type == 'excel') {

        }
    }

    protected function FileExists($database, $type = 'markdown',$table = '')
    {
        $data = session(MyConst::SESSION);
        $hostname = $data['hostname'];
        if($table === '') {
            return is_file(DUMP_PATH . $hostname . DS . $type . DS . $database . '.rar');
        }
        else {
            return is_file(DUMP_PATH . $hostname . DS . $type . DS . $database . DS . $table . '.md');
        }
    }
}
