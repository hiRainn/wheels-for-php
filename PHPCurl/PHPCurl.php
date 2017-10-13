<?php
/**
* @package PHPCurl
* @author heihei <wr_sorarara@yahoo.cp.jp>
* @version 1.0 
*/

class PHPCurl
{
	//curl_init的句柄
	protected $handle;
	//批处理
	protected $multi = false;
	//批处理时的句柄
	protected $multi_handle;
	//是否是SSL请求
	protected $is_ssl = false;
	//header
	protected $header = [];
	//返回结果是否执行
	protected $exec = false;
	//请求地址
	protected $url = null;
	//文件资源
	protected $file;
	//请求方式
	protected $method = 'GET';
	//set_options参数
	protected $options = [];
	//允许访问的method
	protected $allow_method = ['GET', 'POST', "PATCH", 'PUT'];
	//单例实例化参数
	protected static $instance = null;

	private function __construct(string $url, string $method = 'GET', Array $options = [])
	{
		//定义错误处理
		set_exception_handler([$this,'CurlException']);
		if(get_extension_funcs('curl') === false ){
			$this->error = '未安装curl扩展';
		}
		if(phpversion() < '7'){
			$this->error = '本插件基于php7编写!';
		}
		$method = strtoupper($method);
		$this->url = $url;
		$this->method = in_array($method, $this->allow_method)?$method:null;
		$this->options = $options;
	}

	//出现错误的时候抛出异常
	public function __set(string $param, $value)
	{
		if($param === 'error') {
			$this->error = $value;
			throw new Exception($this->error, 1);
		}
	}

	//析构方法，脚本中止的时候销毁资源
	public function __destruct() 
	{
		self::$instance = null;
	}

	static function instance(string $url):self
	{
		if(self::$instance === null) {
			self::$instance = new self($url);
		}
		return self::$instance;
	}

	protected function method(string $method):self
	{
		$method = strtoupper($method);
		if(!in_array($method, $this->allow_method)) 
		{
			$this->error = '请求方法错误';
		}
		$this->method = $method;
		return $this;
	}

	protected function header($key,string $value = ''):self
	{
		if($key == false) {
			$this->error = 'header 参数不能为空值';
		}
		if(gettype($key) === 'string') 1;
	}

	protected function multi(bollean $bool):self
	{
		$this->multi = $bool;
		return $this;
	}

	protected function exec(bollean $bool):self 
	{
		$this->exec = $bool;
		return $this;
	}

	protected function file():self
	{
		return $this;
	}

	protected function run()
	{

		if($this->multi) {
			curl_multi_close($this->multi_handle);
		}
		else {
			curl_close($this->handle);
		}
	}

	public function CurlException($exception)
	{
		echo $exception->getMessage();
	}
}

$a = PHPCurl::instance('www.baidu.com');


?>
