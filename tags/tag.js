var Tags;
(function(){
	if(typeof $ == 'undefined' || typeof jQuery == 'undefined') {
		alert('this tag tool based on jquery, require jquery first');
	}
	if(typeof TAG_CONFIG == 'undefined') {
		alter('require tag.config.js');
	}
	
	Tags = new function(){
		this.tag_name = ''; //content of input
		this.tag_array = [];
		this.tag_number = 0; //current tag numbers
		this.str_num = 0; 
		this.return_tag = []; //返回的words结果
		this.error = '';
		this.add_status = 1;
		this.del_status = 0;
		this.submit = 1;
		this.fillter = 0;
		this.config = function(attr='',set = '') {
			if(typeof TAG_CONFIG[attr] == 'undefined') {
				return false;
			}
			if(attr == '') {
				return TAG_CONFIG;
			}
			set == '' || (TAG_CONFIG[attr] = set);
			return TAG_CONFIG[attr];
		};
		//初始化
		this.init = function(){
			this.initDom();
			var input = $('#'+TAG_CONFIG['input-id']);
			input.attr('placeholder','最多输入'+ TAG_CONFIG['max-tags'] +'个标签');

			//×取消
			input.on("click","i.clear",function(e){
				$(this).parents(".item").remove();
				this.tag_number --;
				var e = (e) ? e : window.event;

			})
			this.tag_name = input.val();
			var _this = this;

			this.bindFunc();
			input.bind('input onpropertychange',function(e){
				var e = e || window.event;
				if ($('#'+TAG_CONFIG['input-id']).next('i').prop('hidden') == false ){
					$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
				}
				_this.tag_name = input.val();
				if (_this.tag_name != '') {

					if(TAG_CONFIG['fillter']) {
						_this.fillter(_this.tag_name);
					}

					_this.del_status = 0;
					$.ajax({
						url : TAG_CONFIG['tag-api'],
						type : TAG_CONFIG['ajax-type'],
						async : true,
						data : {tag_name : _this.tag_name},
						dataType : 'json',
						beforeSend : function() {
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
								if(_this.return_tag.length > TAG_CONFIG['max-select']) {
									break;
								}
								_this.return_tag.push(res.data[p])
							}

							_this.createLi(res.data)
							_this.ulShow();
						},
						error : function () {
							alert('system error,try again letter');
						}
					})
				}
				else {
					_this.ulHide();
					_this.del_status = 1;
				}
			})
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

				if(TAG_CONFIG['strict-fillter']) {
					var status = 0;
					try{
						if($.inArray(e.key,TAG_CONFIG['dis-allow-char']) != -1) {
							status = 1;
						}
					} catch(e) {
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

		//begin with creating a div and ul
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

		this.createLi = function(data) {
			if((data instanceof Array) !== true) {
				alert('数据返回格式错误!');
				return false;
			}
			for(var p in data) {
				if(p == TAG_CONFIG['max-select']) {
					return false;
				}
				$('#'+TAG_CONFIG['ul-id']).append('<li style="list-style-type:none;width:'+ $('#'+TAG_CONFIG['input-id']).css('width') + '">' + data[p] + '</li>')
			}
		}

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
				$('#'+TAG_CONFIG['input-id']).attr('placeholder','还可以添加' + (parseInt(TAG_CONFIG['max-tags']) - this.tag_number) + '个标签');
				this.tag_name = '';
				this.del_status = 1;
			}
			else {
				return false;
			}
			
		}

		this.ulHide = function(){
			$('#'+TAG_CONFIG['ul-id']).hide();
			$('#'+TAG_CONFIG['ul-id']).html('');
			this.return_tag = [];
		}

		this.ulShow = function(){
			if(this.return_tag != false) {
				$('#'+TAG_CONFIG['ul-id']).show();
			}
		}

		this.bindFunc = function() {
			//edit class of li
			var _this = this;
			$('#'+TAG_CONFIG['ul-id']).on('mouseover','li',function(){
				$(this).css('background','#eee');
			})
			$('#'+TAG_CONFIG['ul-id']).on('mouseout','li',function(){
				$(this).css('background','#fff');
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
				$('#'+TAG_CONFIG['input-id']).attr('placeholder','还可以添加' + (parseInt(TAG_CONFIG['max-tags']) - _this.tag_number) + '个标签');
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
				$('#'+TAG_CONFIG['input-id']).val('');
				var input = document.createElement('input');
				$(input).prop('hidden',true);
				$(input).attr('name',TAG_CONFIG['input-name']);
				// $(input).val(_this.tag_array.join(TAG_CONFIG['tag-join']));
				$(input).attr('value','asdfsf');
				$(this).append($(input));
				_this.submit = 0;
				// this.submit();
				return false;
			})
		}

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

		this.addTag = function(word){
			if(this.tag_number >= TAG_CONFIG['max-tags']) {
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

		this.fillter = function() {
			//fillter
		}
	}();
})();

