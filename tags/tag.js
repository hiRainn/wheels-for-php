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
			if(typeof TAG_CONFIG[attr] == 'undefined') {
				return false;
			}
			if(attr == '') {
				return TAG_CONFIG;
			}
			if(set != '') {
				TAG_CONFIG[attr] = set;
			}
			return TAG_CONFIG[attr];
		};
		//初始化
		this.init = function(){
			var _this = $(TAG_CONFIG[input-id]);
			_this.attr('placeholder','最多输入'+TAG_CONFIG['max-tags']+'个标签');

			//×取消
			_this.on("click","i.clear",function(e){
				$(this).parents(".item").remove();
				this.tag_number --;
				var e = (e) ? e : window.event;

			})
			_this.on('keyup',function(){
				
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

		this.clear = function(){
			
		}
	}();

	

})()
