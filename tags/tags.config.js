(function(){
	window.TAG_CONFIG = {
		'input-id' : 'input',
		'ul-id' : 'tag_ul',
		'tag-div-id' : 'tag-content',     //存放tags的id
		'input-div-id' : 'input1',
		'input-name':  'tags',
		'tag-join': '-',
		'tag-api':'./demo.php',    //api获取地址
		'max-tags': 5,				//最多选择几个标签
		'max-select' : 5,			//最多几个候选词
		'ajax-type' : 'GET',      //请求方式
		'li-class-name': 'tag-on',
		'tag-span-class-name': 'tag-items',
		'strict-fillter': true,
		'fillter' : true,
		'span-border-color': '#98FB98',
		'span-color':'#FFF',
		'span-mouse-over-color' : '#98FB98',
		'tag-font':'sans-serif',
		'allow-char': '',
		'dis-allow-char': ['.','Process','+','=','(',')','*','&','%',' ','，','。'],
	}
})()