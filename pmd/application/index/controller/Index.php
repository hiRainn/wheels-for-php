<?php
namespace app\index\controller;
use think\Db;

class Index extends Base
{
    protected $zipType = '.zip';
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
        ini_set('zlib.output_compression', 'Off');
        $table = request()->param('table','','htmlspecialchars');
        if($table !== '') {
            try{ 
                Db::query("desc $table");
            }catch(\think\Exception $e){
                return $this->error('参数错误');
            }
        }
        
        if($table === '') {
            $path = "/static/dump/{$this->hostname}/{$this->database}".$this->zipType;
        }
        else {
            $path = "/static/dump/{$this->hostname}/{$this->database}/$table" . '.md';
        }

        if($this->FileExists($table)) {
            return "<script>location.href='$path';</script>";
        }
  
        header('Cache-Control: no-cache');         // 告知浏览器不进行缓存
        header("Content-type:text/html;charset=utf-8");
        header('X-Accel-Buffering: no');           // 关闭加速缓冲
        set_time_limit(0);
        echo '暂不支持Windows环境下整库打包下载，整库的数据字典文件会在对应的/static/dump/hostname/database下，表集合文件为index.md，单表导出则自动下载';
        echo '<br>';
        echo '正在生成文件中，请等待。。。';
        ob_flush();
        flush();
        $this->makeDownFile($table);
        echo '<br>';
        echo "完成文件生成!";
        return "<script>location.href='$path';</script>";
    }

    protected function makeDownFile($table = '')
    {
        if($table === '') {
            $this->makeDatabaseMd();
        }
        else{
            $this->makeTableMd($table);
        }
    }

    protected function makeTableMd($table)
    {
        if($this->FileExists($table)) {
            return true;
        }

        $field ='COLUMN_NAME as col_name,COLUMN_DEFAULT as default_data,DATA_TYPE as data_type,IS_NULLABLE as is_null,COLUMN_COMMENT as col_comment,COLUMN_KEY as index_key';
        $detail = Db::query("select {$field} from INFORMATION_SCHEMA.Columns where table_name='{$table}' and table_schema= '{$this->database}'");
        
        $index = Db::query("SHOW index FROM {$table}");
        foreach ($detail as $k1 => $v1) {
            if($v1['default_data'] === NULL){
                $detail[$k1]['default_data'] = 'null';
            }
            elseif($v1['default_data'] === '') {
                $detail[$k1]['default_data'] = "''";
            }
        }
        foreach($index as $k2 => $v2) {
            $index[$k2]['Collation'] = ($v2['Collation'] == 'A')?'A(升序)':'无分序';
            $index[$k2]['Non_unique'] = ($v2['Non_unique'] == 0)?'NO':'YES';
            $index[$k2]['Sub_part'] = !empty($v2['Sub_part'])?$v2['Sub_part']:'null';
            $index[$k2]['Packed'] = !empty($v2['Packed'])?$v2['Packed']:'null';
        } 
        // 生成字段信息
        $column =<<<COL
|字段名|数据类型|是否null|默认值|索引|注释|
|------|--------|--------|------|----|----|
COL;
        $column .= PHP_EOL;
        //生成索引信息
        $ind =<<<IND
|表名|列名|索引名称|索引序列号|分序|索引长度|压缩方式|是否null|是否重复|唯一值数目估计值|索引方法|列中描述索引信息|索引注释|
|----|----|--------|----------|----|--------|--------|--------|--------|----------------|--------|----------------|--------|
IND;
        $ind .= PHP_EOL;

        $handle = fopen(DUMP_PATH . $this->hostname . DS . $this->database . DS . $table . '.md', 'w');
        foreach($detail as $v) {
            $column .= "|{$v['col_name']}|{$v['data_type']}|{$v['is_null']}|{$v['default_data']}|{$v['index_key']}|{$v['col_comment']}|";
            $column .= PHP_EOL;
        }
        fwrite($handle, $column);
        fwrite($handle, PHP_EOL . PHP_EOL . PHP_EOL );
        foreach($index as $v) {
            $ind .= "|{$v['Table']}|{$v['Column_name']}|{$v['Key_name']}|{$v['Seq_in_index']}|{$v['Collation']}|{$v['Sub_part']}|{$v['Packed']}|{$v['Null']}|{$v['Non_unique']}|{$v['Cardinality']}|{$v['Index_type']}|{$v['Comment']}|{$v['Index_comment']}|";
            $ind .= PHP_EOL;
        }
        fwrite($handle, $ind);
        fclose($handle);
    }

    protected function makeDatabaseMd()
    {
        if($this->FileExists()) {
            return true;
        }
        $data =<<<DAT
|表名|表类型|行格式|数据量(行)|数据长度|索引长度|空间碎片|自增主键但前值|检查时间|更新时间|创建时间|引擎|字符校验编码|创建选项|注释|
|----|------|------|----------|--------|--------|--------|--------------|--------|--------|--------|----|------------|--------|----|
DAT;
        $field = 'TABLE_NAME as name,TABLE_TYPE as type,ENGINE as engine,CREATE_TIME as create_at,UPDATE_TIME as update_at,TABLE_COMMENT as comment,Table_rows as rows,Row_format as format,Index_length,Check_time,Data_length,Auto_increment,Data_free,Table_collation,Create_options';
        $tables = Db::Query("select {$field} from information_schema.tables where table_schema = '{$this->database}'");
        $data .= PHP_EOL;
        foreach($tables as $v){
            $data .="|{$v['name']}|{$v['type']}|{$v['format']}|{$v['rows']}|{$v['Data_length']}|{$v['Index_length']}|{$v['Data_free']}|{$v['Auto_increment']}|{$v['Check_time']}|{$v['update_at']}|{$v['create_at']}|{$v['engine']}|{$v['Table_collation']}|{$v['Create_options']}|{$v['comment']}|";
            $data .= PHP_EOL;
            $this->makeTableMd($v['name']);
        }
        unset($tables);
        $handle = fopen(DUMP_PATH . $this->hostname . DS . $this->database . DS . 'index.md', 'w');
        fwrite($handle,$data);
        fclose($handle);
        unset($handle);
    }

    protected function FileExists($table = '')
    {
        if(!is_dir(DUMP_PATH . $this->hostname . DS . $this->database)) {
            mkdir(DUMP_PATH . $this->hostname . DS . $this->database, 0777, true);
            return false;
        }
        if($table === '') {
            return is_file(DUMP_PATH . $this->hostname . DS . $this->database . $this->zipType);
        }
        else {
            return is_file(DUMP_PATH . $this->hostname . DS . $this->database . DS . $table . '.md');
        }
    }

    protected function tarFile()
    {
        $path = DUMP_PATH . $this->hostname;
        $tar = $this->database . $this->zipType;
        //windows
        if(in_array(PHP_OS, ['WINNT','WIN32','Windows'])) {
            return false;
        }
        //macOs
        elseif (PHP_OS === 'Darwin') {        
            exec("cd $path");
            exec("tar -cvf $tar {$this->database}");
            return true;
        }
        //Linux&Unix
        else {
            exec("cd $path");
            exec("tar -cvf $tar {$this->database}");
            return true;
        }
    }
}
