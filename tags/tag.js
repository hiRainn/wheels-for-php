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
		this.tag_number = 0; //current tag numbers
		this.str_num = 0; 
		this.is_delete = 0;
		this.return_tag = []; //返回的words结果
		this.error = '';
		this.add_status = 1;
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
			input.bind('input onpropertychange',function(){
				_this.tag_name = input.val();
				if (_this.tag_name != '') {
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
			})
		

			$(TAG_CONFIG['input-id']+" ul").on("click","li",function(){
				var val = $(this).html(),strue = true;
				var html = '<span class="item"><b>'+val+'</b><i class="clear">&times;</i></span>';
				$(tags).find('.item').each(function(index,el){
					var v = $(this).find("b").html();
					if(val == v){
						strue = false;
					}
				});
				if(strue !== false){
					$(tags).append(html);			
				}else{
					var size = $(tags).find('.item').size();
					if(size == 5){
						alert("最多添加5条");
					}else{
						alert("已经添加了");
					}
				}
				$(this).parent("ul").html("").hide();
				$("#input").val('')
			})
		};

		//begin with creating a div and ul
		this.initDom = function() {
			$('#'+TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['tag-div-id'] +'"></div>');
			$('#'+TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['input-div-id'] +'"></div>');
			$('#'+TAG_CONFIG['input-id']).appendTo($('#'+TAG_CONFIG['input-div-id']));
			$('#'+TAG_CONFIG['input-id']).after('<ul id="' + TAG_CONFIG['ul-id'] +'"></ul>');
			$('#'+TAG_CONFIG['input-id']).after('<i style="color:red";></i>');
		}

		this.createLi = function(data) {
			if((data instanceof Array) !== true) {
				alert('数据返回格式错误!');
				return false;
			}

			for(var p in data) {
				$('#'+TAG_CONFIG['ul-id']).append('<li>' + data[p] + '</li>')
			}
		}

		this.setWord = function(word) {
			if(this.add_status == 1) {
				var word = word;
				try{
					html = `
						<span>
							<a href='#'>${word}</a>
							<i class='tag-clear'>&times;</i>
						<span>
					`;
				}catch (e) {
					html = '<span><a href="#">'+word+'</a><i class="tag-clear">&times;</i></span>';
				}
				$('#'+TAG_CONFIG['tag-div-id']).append(html)
				this.tag_number ++;
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
				$(this).addClass('on');
			})
			$('#'+TAG_CONFIG['ul-id']).on('mouseout','li',function(){
				$(this).removeClass('on');
			})
			$('#'+TAG_CONFIG['ul-id']).on('click','li',function(){
				_this.addTag($(this).html());
			})

		}

		this.deleteTag = function(){
			if(this.tag_number == TAG_CONFIG['max-tags']) {
				$('#'+TAG_CONFIG['input-id']).next('i').html('').hide();
			}
			$('#'+TAG_CONFIG['tag-div-id']).find('.'+TAG_CONFIG['tag-span-class-name']+':last').remove();
		}

		this.addTag = function(word){
			if(this.tag_number >= TAG_CONFIG['max-tags']) {
				$('#'+TAG_CONFIG['input-id']).next('i').html('最多只能添加'+TAG_CONFIG['max-tags']+'个标签!').show();
				this.add_status = 0;
			}
			this.setWord(word);
		}

	}();

	

})();
Tags.init();
