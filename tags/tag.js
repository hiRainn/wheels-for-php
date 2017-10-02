var Tags;
(function(){
	if(typeof $ == 'undefined' || typeof jQuery == 'undefined') {
		console.error('该Tag插件依赖jquery，请先引入jquery');
		return false;
	}
	if(typeof TAG_CONFIG == 'undefined') {
		console.error('请先引入tags.config.js');
		return false;
	}

	//实例化
	Tags = new function(){
		this.tag_name = ''; //标签输入框中的内容
		this.tag_array = []; //当前标签
		this.tag_number = 0; //标签数
		this.return_tag = []; //返回的words结果
		this.error = '';   //错误信息
		this.add_status = 1;  //添加状态 默认可添加
		this.del_status = 0; //删除状态 默认不可删除
		this.submit = 1;  //表单提交状态，默认可提交
		this.fillter = 0; //过滤状态
		this.li_pos = null; //上下选词li位置

		//配置函数
		this.config = function(attr='',set = '') {
			if(typeof TAG_CONFIG[attr] == 'undefined') {
				this.error ='配置属性不存在';
				return this.error;
			}
			if(attr == '' && set == '') {
				return TAG_CONFIG;
			}
			if(typeof set != 'string'){
				this.error = '设置内容格式错误';
				return this.error;
			}
			if(typeof attr == 'string') {
				set == '' || (TAG_CONFIG[attr] = set);
				return TAG_CONFIG[attr];
			}
			else if(typeof attr == 'object' && attr instanceof Array != true){
				for(var p in attr) {
					TAG_CONFIG[p] = attr[p]
				}
				return true;
			}
			
		};
		//初始化
		this.init = function(id = '',data = []){
			if(id !== '') {
				if(typeof id !== 'string' ) {
					this.error = 'id类型错误';
					return this.error;
				}
				if(typeof $('#'+id)[0] === 'undefined'){
					this.error = '不存在该id对应的dom';
					return this.error;
				}
				this.config('input-id',id);
			}
			if(typeof TAG_CONFIG['max-tags'] !== 'number'){
				this.error = '最大标签数格式错误';
				return this.error
			}
			this.initDom();
			var input = $('#'+TAG_CONFIG['input-id']);
			if(TAG_CONFIG['max-tags'] !== 0) {
				input.attr('placeholder','最多输入'+ TAG_CONFIG['max-tags'] +'个标签');
			}
			else {
				input.attr('placeholder','请输入标签');
			}
			if(data !== [] ) {
				if(data instanceof Array !== true) {
					this.error = 'error init data type';
					return this.error;
				}
				if(data.length > TAG_CONFIG['max-tags'] && TAG_CONFIG['max-tags'] !== 0) {
					this.error = '初始化数组超过最大标签数';
					return this.error;
				}
				for(var p in data){
					this.tag_name = data[p];
					this.addTag(data[p]);
				}
			}
	
			var _this = this;

			this.bindFunc();
			input.bind('input onpropertychange',function(e){
				//监控input框实时变化
				if ($('#'+TAG_CONFIG['input-id']).next('i').prop('hidden') == false ){
					$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
				}
				_this.tag_name = input.val();

				if (_this.tag_name != '') {
					if(TAG_CONFIG['fillter']) {
						var status = _this.fillter();
						if(!status) return false;
					}

					_this.del_status = 0;
					$.ajax({
						url : TAG_CONFIG['tag-api'],
						type : TAG_CONFIG['ajax-type'],
						async : true,
						data : {tag_name : _this.tag_name},
						dataType : 'json',
						beforeSend : function() {
							_this.return_tag = [];
							_this.li_pos=null;
							_this.ulHide();
						},
						success : function (res) {
							if(res.code != 0) {
								alert(res.msg)
								return false;
							}
							if(res.data == null) {
								return false;
							}
							for(var p in res.data) {
								if(_this.return_tag.length == TAG_CONFIG['max-select']) {
									break;
								}
								_this.return_tag.push(res.data[p])
							}

							_this.createLi(res.data)
							_this.ulShow();
						},
						error : function () {
							alert('ajax请求错误');
							_this.error = 'ajax请求错误';
							return _this.error;
						}
					})
				}
				else {
					_this.ulHide();
					_this.del_status = 1;
				}
			})

			//增加标签，按逗号，回车，鼠标点击li时可添加标签，按上下键可选中li中已存在标签
			input.on('keydown',function(e){
				var e = e || window.event;
				//enter is 13 and , is 188
				if(e.keyCode == 13 || e.keyCode == 188) {
					if(_this.tag_name != false) {
						_this.addTag(_this.tag_name);
					}
					return false; //prevent form submit
				}
				
				//backspace is 8
				if(e.keyCode == 8) {
					if(_this.del_status == 1) {
						_this.deleteTag();
					}
				}
				//up
				if(e.keyCode == 38) {
					if(_this.return_tag.length === 0) {
						return false;
					}
					var that;
					if(_this.li_pos === null) {
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.return_tag.length -1);
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos = _this.return_tag.length - 1;
					}
					else if(_this.li_pos === 0){
						$('#'+TAG_CONFIG['ul-id']).find('li').eq(0).removeClass(TAG_CONFIG['li-class-name']).css('background','none');
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.return_tag.length -1);
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos = _this.return_tag.length - 1;
					}
					else {
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.li_pos - 1);
						$('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.li_pos).removeClass(TAG_CONFIG['li-class-name']).css('background','none');
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos --;
					}
					$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
					_this.tag_name = that.html();
				}
				//down
				if(e.keyCode == 40) {
					if(_this.return_tag.length === 0) {
						return false;
					}	
					var that;
					if(_this.li_pos === null) {
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(0);
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos = 0;
					}
					else if(_this.li_pos === (_this.return_tag.length - 1)){
						$('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.return_tag.length - 1).removeClass(TAG_CONFIG['li-class-name']).css('background','none');
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(0);
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos = 0;
					}
					else {
						that = $('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.li_pos + 1);
						$('#'+TAG_CONFIG['ul-id']).find('li').eq(_this.li_pos).removeClass(TAG_CONFIG['li-class-name']).css('background','none');
						that.css('background','#CDC9C9').addClass(TAG_CONFIG['li-class-name']);
						$('#'+TAG_CONFIG['input-id']).val(that.html());
						_this.li_pos++;
					}
					$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
					_this.tag_name = that.html();
				}

				if(_this.tag_name.length == TAG_CONFIG['max-tag-length']) {
					console.log(_this.tag_name.length +'-'+ TAG_CONFIG['max-tag-length']);
					return false;
				}

				//严格过滤模式，禁止字符无法输入，如@、￥,在配置文件中可添加
				if(TAG_CONFIG['strict-fillter']) {
					var status = 0;
					try{
						if($.inArray(e.key,TAG_CONFIG['dis-allow-char']) != -1) {
							status = 1;
						}
					} catch(exception) {
						for(var p in TAG_CONFIG['dis-allow-char']) {
							if (e.key == TAG_CONFIG['dis-allow-char'][p]) {
								status = 1;
								break;
							}
						}
					}
					if(status) {
						return false;
					}
				}
			})
		
		};

		//舒适化dom
		this.initDom = function() {
			$('#'+TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['tag-div-id'] +'"></div>');
			$('#'+TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['input-div-id'] +'"></div>');
			$('#'+TAG_CONFIG['tag-div-id']).css('display','inline-flex');
			$('#'+TAG_CONFIG['tag-div-id']).css('padding','5px');
			$('#'+TAG_CONFIG['input-div-id']).css('display','inline-block');
			$('#'+TAG_CONFIG['input-id']).appendTo($('#'+TAG_CONFIG['input-div-id']));
			$('#'+TAG_CONFIG['input-id']).attr('autocomplete','off');
			$('#'+TAG_CONFIG['input-id']).after('<ul id="' + TAG_CONFIG['ul-id'] +'"></ul>');
			$('#'+TAG_CONFIG['ul-id']).css('position','absolute');
			$('#'+TAG_CONFIG['ul-id']).css('padding','0px');
			$('#'+TAG_CONFIG['ul-id']).css('border','1px solid #eee');
			$('#'+TAG_CONFIG['input-id']).after('<i style="color:red";></i>');
		}

		//创建li
		this.createLi = function(data) {
			if((data instanceof Array) !== true) {
				this.error = '数据返回格式错误!';
				return false;
			}
			for(var p in data) {
				if(p == TAG_CONFIG['max-select']) {
					return false;
				}
				$('#'+TAG_CONFIG['ul-id']).append('<li style="list-style-type:none;width:'+ $('#'+TAG_CONFIG['input-id']).css('width') + '">' + data[p] + '</li>')
			}
		}

		//设置标签span
		this.setWord = function(word) {
			if(this.add_status == 1) {
				var word = word;
				var span_class = TAG_CONFIG['tag-span-class-name'];
				span_style = "cursor:pointer;border:1px solid "+ TAG_CONFIG['span-border-color'] +";padding:2px 9px;display:inline-block;border-radius:6px;background-color:" + TAG_CONFIG['span-color'] +";font-family:"+TAG_CONFIG['tag-font']+';margin:1px;'
				try{
					html = `
						<span class="${span_class}" style="${span_style}">
							<font style="text-decoration:none;">${word}</font>
							<i class='tag-clear'>&times;</i>
						<span>
					`;
				}catch (e) {
					html = '<span class="'+ span_class +'"  style="' + span_style +'"><font>'+word+'</font><i class="tag-clear">&times;</i></span>';
				}
				$('#'+TAG_CONFIG['tag-div-id']).append(html)
				this.tag_number ++;
				this.tag_array.push(word);
				this.ulHide();
				$('#'+TAG_CONFIG['input-id']).val('');
				if(TAG_CONFIG['max-tags'] !== 0){
					$('#'+TAG_CONFIG['input-id']).attr('placeholder','还可以添加' + (parseInt(TAG_CONFIG['max-tags']) - this.tag_number) + '个标签');
				}
				if($('#'+TAG_CONFIG['input-id']).next('i').html('')!=false)
				$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
				this.tag_name = '';
				this.del_status = 1;
				this.li_pos = null;
			}
			else {
				return false;
			}
			
		}

		//隐藏ul
		this.ulHide = function(){
			$('#'+TAG_CONFIG['ul-id']).hide();
			$('#'+TAG_CONFIG['ul-id']).html('');
			this.return_tag = [];
		}

		//显示ul
		this.ulShow = function(){
			if(this.return_tag != false) {
				$('#'+TAG_CONFIG['ul-id']).show();
			}
		}

		//绑定监听事件
		this.bindFunc = function() {
			//edit class of li
			var _this = this;
			$('#'+TAG_CONFIG['ul-id']).on('mouseover','li',function(){
				if(!$(this).hasClass(TAG_CONFIG['li-class-name'])) {
					$(this).css('background','#eee');
				}	
			})
			$('#'+TAG_CONFIG['ul-id']).on('mouseout','li',function(){
				if(!$(this).hasClass(TAG_CONFIG['li-class-name'])) {
					$(this).css('background','#fff');
				}	
			})
			$('#'+TAG_CONFIG['ul-id']).on('click','li',function(){
				_this.addTag($(this).html());
			})

			//remove tags
			$('#'+TAG_CONFIG['tag-div-id']).on('click','span i', function(){
				$(this).parent('span').remove();
				$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
				var value = $(this).prev('font').html();
				$.each(_this.tag_array, function(index, item) {
					if(item == value){
						_this.tag_array.splice(index,1);
					}
				})
				_this.tag_number --;
				_this.add_status = 1;
				if(TAG_CONFIG['max-tags'] !== 0){
					$('#'+TAG_CONFIG['input-id']).attr('placeholder','还可以添加' + (parseInt(TAG_CONFIG['max-tags']) - _this.tag_number) + '个标签');	
				}
			})

			//mouseover span
			$('#'+TAG_CONFIG['tag-div-id']).on('mouseover','.'+TAG_CONFIG['tag-span-class-name'],function(){
				$(this).css('background',TAG_CONFIG['span-mouse-over-color']);
			})
			$('#'+TAG_CONFIG['tag-div-id']).on('mouseout','.'+TAG_CONFIG['tag-span-class-name'],function(){
				$(this).css('background',TAG_CONFIG['span-color']);
			})

			//onsubmit
			$('#'+TAG_CONFIG['input-id']).parents('form').on('submit',function(){
				if(_this.submit == 0) {
					alert('请勿重复提交表单！')
					return false;
				}
				$('#'+TAG_CONFIG['input-id']).attr('name','');
				var input = document.createElement('input');
				$(input).prop('hidden',true);
				$(input).attr('name',TAG_CONFIG['input-name']);
				// $(input).val(_this.tag_array.join(TAG_CONFIG['tag-join']));
				$(input).attr('value',_this.tag_array.join(TAG_CONFIG['tag-join']));
				$(this).append($(input));
				_this.submit = 0;
				this.submit();
				// return false;
			})
		}

		//删除标签
		this.deleteTag = function(){
			if(this.tag_number == 0) {
				return false;
			}
			if(this.del_status == 1) {
				if(this.tag_number == TAG_CONFIG['max-tags']) {
					$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
				}
				$('#'+TAG_CONFIG['tag-div-id']).find('.'+TAG_CONFIG['tag-span-class-name']+':last').remove();
				this.tag_array.pop();
				this.add_status = 1;
				this.tag_number --;
				$('#'+TAG_CONFIG['input-id']).attr('placeholder','还可以添加' + (parseInt(TAG_CONFIG['max-tags']) - this.tag_number) + '个标签');
			}
		}

		//增加标签
		this.addTag = function(word){
			if(this.tag_number >= TAG_CONFIG['max-tags'] && TAG_CONFIG['max-tags'] !== 0) {
				$('#'+TAG_CONFIG['input-id']).next('i').html('最多只能添加'+TAG_CONFIG['max-tags']+'个标签!').show();
				this.add_status = 0;
				return false;
			}
			var status = 0;
			try{
				if($.inArray(word,this.tag_array) != -1) {
					status = 1;
				}
			} catch(e) {

				for(var p in this.tag_array) {
					if(word == this.tag_array[p]) {
						status = 1;
						break;
					}
				}
			}
			if(status == 1) {
				$('#'+TAG_CONFIG['input-id']).next('i').html('该标签已经存在').show();
				return false;
			}
			this.setWord(word);
		}

		//过滤操作
		this.fillter = function() {
			var rule = this.config('allow-rule');
			if(!rule.test(this.tag_name)) {
				this.error = TAG_CONFIG['error-msg'];
				$('#'+TAG_CONFIG['input-id']).next('i').html(this.error).show();
				this.ulHide();
				this.li_pos = null;
				return false;
			}
			else{
				this.error = ''
				$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
			}
			return true;
		}

	}();

	//监控Tags对象error属性
	Object.defineProperties(Tags,{
		_error:{
			value:'',
			writable : true,
		},
		error:{
			set:function(value){
				this._error = value;
				!value || console.error(this._error);  //error不为空的时候打印错误信息
			},
			get:function(){
				return this._error;
			}
		}
	})
})();


