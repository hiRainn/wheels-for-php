var Tags;
(function(){
	if(typeof $ == 'undefined' || typeof jQuery == 'undefined') {
		alert('this tag tool based on jquery, require jquery first！');
		return false;
	}
	if(typeof TAG_CONFIG == 'undefined') {
		alert('require tag.config.js1');
		return false;
	}
	
	Tags = new function(){
		this.config = function(attr='',set = '') {
			this.tag_name = ''; //content of input
			this.tag_number = 0; //current tag numbers
			this.str_num = 0; 
			this.is_delete = 0;
			this.return_tag = []; //返回的words结果
			if(typeof TAG_CONFIG[attr] == 'undefined') {
				return false;
			}
			if(attr == '') {
				return TAG_CONFIG;
			}
			set == '' || TAG_CONFIG[attr] = set;
			return TAG_CONFIG[attr];
		};
		//初始化
		this.init = function(){
			this.setCss();
			var _this = $(TAG_CONFIG['input-id']);
			_this.attr('placeholder','最多输入'+TAG_CONFIG['max-tags']+'个标签');

			//×取消
			_this.on("click","i.clear",function(e){
				$(this).parents(".item").remove();
				this.tag_number --;
				var e = (e) ? e : window.event;

			})
			_this.on('keyup',function(){
				this.tag_name = _this.val();
				if (this.tag_name != '') {
					$.ajax({
						url : TAG_CONFIG['tag-api'],
						type : TAG_CONFIG['ajax-type'],
						async : true,
						data : {tag_name : this.tag_name},
						dateType : 'json',
						beforeSend : function() {
							this.ulHide();
						},
						success : function (res) {
							if(res.code != 0) {
								alert(res.msg);
								return false;
							}
							for(var p in res.data) {
								if(this.return_tag.length > TAG_CONFIG['max-select']) {
									break;
								}
								this.return_tag.push(res.data[p])
							}
							this.ulShow();
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
			$(TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['tag-div-id'] +'"></div>');
			$(TAG_CONFIG['input-id']).before('<div id="' + TAG_CONFIG['input-div-id'] +'"></div>');
			$(TAG_CONFIG['input-id']).appendTo($(TAG_CONFIG['input-div-id']));
			$(TAG_CONFIG['input-id']).after('<ul id="' + TAG_CONFIG['ul-id'] +'"></ul>');

			//init css
			this.setCss();
		}

		this.createLi = function() {
			for(var p in this.return_tag) {
				$(TAG_CONFIG['ul-id']).append('<li>' + this.return_tag[p] + '</li>')
			}
		}

		this.ulHide = function(){
			$(TAG_CONFIG['ul-id']).hide();
			$(TAG_CONFIG['ul-id']).val('');
			this.return_tag = [];
		}

		this.ulShow = function(){
			if(this.return_tag != false) {
				this.createLi();
				$(TAG_CONFIG['ul-id']).show();
			}
		}

		this.setWord = function (word) {
			var html = `
				<a href='#'>
					<b>`+ word +`</b>
					<i>&times;</i>
				</a>
			`
			$(TAG_CONFIG['tag-div-id']).append(html)
			this.tag_number ++;
		}

		this.bindFunc = function() {
			
		}

		this.setCss = function () {

		}
	}();

	

})()
