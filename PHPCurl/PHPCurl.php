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
		$this->handle = curl_init();
	}

	//出现错误的时候抛出异常
	public function __set(string $param, $value)
	{
		//定义错误处理
		set_exception_handler([$this,'CurlException']);
		if($param === 'error') {
			$this->error = $value;
			throw new Exception($this->error, 1);
		}
	}

	//析构方法，脚本中止的时候销毁资源
	public function __destruct() 
	{
		if($this->multi) {
			curl_multi_close($this->multi_handle);
		}
		else {
			curl_close($this->handle);
		}
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

	public function header(array $options):self
	{
		if($options == false) {
			$this->error = 'header 参数不能为空值';
		}
		$this->options = $options;
		return $this;
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

	public function setUrl(string $url):self
	{
		$this->url = $url;
		return $this;
	}

	public function run()
	{
		if($this->multi) {
			
		}
		else {
			curl_setopt($this->handle, CURLOPT_URL, $this->url);
			curl_setopt($this->handle, CURLOPT_HEADER, $this->options);
			if($this->exec === false) {
				curl_setopt($this->handle,CURLOPT_RETURNTRANSFER,1);
			}
			return curl_exec($this->handle);
		}
	}

	public function CurlException($exception)
	{
		echo $exception->getMessage();
	}
}

$book = "http://www.qu.la/book/2610/";
$first = '1436234.html';
$preg = '/<a id="pager_next" href=\"(.*?)\".*?>(.*?)<\/a>/i';
$preg1 = "/<h1>(.*?)<\/h1>/i";

$headers[] = 'X-Apple-Tz: 0';
$headers[] = 'X-Apple-Store-Front: 143444,12';
$headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
$headers[] = 'Accept-Encoding: gzip, deflate';
$headers[] = 'Accept-Language: en-US,en;q=0.5';
$headers[] = 'Cache-Control: no-cache';
$headers[] = 'Content-Type: application/x-www-form-urlencoded; charset=utf-8';
$headers[] = 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0';
$headers[] = 'X-MicrosoftAjax: Delta=true';
$a = PHPCurl::instance($book . $first)->header($headers);
do{
	$text = $a->run();
	echo $text;
	preg_match($preg, $text, $match);
	preg_match($preg1, $text, $matc);
	print_r( $match);
	echo PHP_EOL;
	$a->setUrl($book.$match[1]);
}while($match != false)



?>
