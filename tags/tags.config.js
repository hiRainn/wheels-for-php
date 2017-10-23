(function(){
	window.TAG_CONFIG = {
		'input-id' : 'input',			    //输入标签的id
		'ul-id' : 'tag_ul',				    //下拉ul的id
		'tag-div-id' : 'tag-content',       //放tag-span的div的id
		'input-div-id' : 'tag_input',       //放输入标签的input与ul的div的id，如无id冲突无需更改
		'input-name':  'tags',			    //提交时后台接收参数时的name值
		'tag-join': '-',				    //tags的分隔符，默认 A-B-C
		'tag-api':'./ajax.php',    		    //获取已存在标签地址
		'max-tags': 5,				        //最大标签数，当为0时无限制
		'max-select' : 5,			        //li中最多显示几个备选词
		'max-tag-length': 20,               //单个标签长度限制
		'ajax-type' : 'GET',                //xhr请求方式
		'li-class-name': 'tag-on',          //li类名称，绑定事件所用
		'tag-span-class-name': 'tag-items', //放标签的span类名，绑定事件所用
		'strict-fillter': false,             //严格过滤模式，开启则禁止规则符号输入
		'fillter' : true,                   //正则过滤模式
		'span-border-color': '#98FB98',     //标签边框颜色
		'span-color':'#FFF',                //标签颜色
		'span-mouse-over-color' : '#98FB98',//标签鼠标选中时的颜色
		'tag-font':'sans-serif',            //标签字体
		'allow-rule': /^[\w\.\u4e00-\u9fa5]{1,20}$/,      //正则过滤规则
		'error-msg': 'dis-allow-rule',      //过滤模式错误信息
		'dis-allow-char': ['.','Process','+','=','(',')','*','&','%',' ','，','。',],  //禁止输入字符(字符，不是汉字)
	}
})()