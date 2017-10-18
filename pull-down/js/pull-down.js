$(function(){
		var page = 1;
		//父级框体
		var scroll = $(".container-wrapper");
		checkScroll(scroll.scrollTop(),scroll.height(),scroll[0].scrollHeight);
		//下拉加载
		scroll.on("scroll",function(){
			checkScroll($(this).scrollTop(),$(this).height(),$(this)[0].scrollHeight);
		});
		
		//判断是否需要ajax数据
		var isRun = false;
		
		function checkScroll(scrollTop,clientHeight,scrollHeight){
			if(isRun) return "已经在加载数据";
			if(scrollTop + clientHeight + 100 > scrollHeight) {
				//关闭拿ajax数据入口
				isRun = true;
				//进行ajax拿数据
				// page += 1;
				
				//ajax实例
				// $.post('<?php echo Yii::app()->urlManager->createUrl('Index/index');?>/page/'+page,{'request':'wap'},function(data){
					// data = eval('('+ data +')');
					// if(data.length > 0){
						// var html = '';
						// $.each(data,function(k,v){
							// html += '<a class="box-cells box-flex-wrapper" href="<?php echo Yii::app()->urlManager->createUrl('News/index');?>/id/'+ v.id +'">';
							// html += '<div class="box-cell flex0">'+ v.time +'</div>';
							// html += '<div class="box-cell flex1 content">'+ v.title +'</div>';
							// html += '<div class="box-cell flex0 box-right-icon"><i class="icon-right-jiantou"></i></div>';
							// html += '</a>';
						// });
						// $("#news").append(html);
						
						/* ajax完成 允许再次拿ajax数据 */
						// isRun = false;
						// checkScroll(scroll.scrollTop(),scroll.height(),scroll[0].scrollHeight);
					// }else{
						// toast('所有新闻已读取完毕');
						// isRun = true;
					// }
				// });
				
				//测试的代码
				var html = '<a class="box-cells box-flex-wrapper" href="news.html"><div class="box-cell flex0">2017-09-09</div><div class="box-cell flex1 content">团队PK业绩第三周排名前十名 名次 会员姓名 会员编号 直属理事 直属总监 第一名 冯巧玲 209160 张雪东 张国武 第二名 崔艳秀 217447 刘连忠 董贺亮 第三名 杜成莲 208585 杜红英 唐大阳 第四名 孙茂广 224623 葛丽丽 张国武 第五名 杜广远 220790 李德光 李德光 第六名 戴长勇 210085 任宏宇 任宏宇 第七名 马蕾 288875 张艳文 张艳文 第八名 李铁练 230304 任宏宇 任宏宇 第九名 许春梅 273409 王小丫 王小丫 第十名 孙海艳 215</div><div class="box-cell flex0 box-right-icon"><i class="icon-right-jiantou"></i></div></a><a class="box-cells box-flex-wrapper" href="javascript:void(0)"><div class="box-cell flex0">2017-09-09</div><div class="box-cell flex1 content">团队PK业绩第三周排名前十名 名次 会员姓名 会员编号 直属理事 直属总监 第一名 冯巧玲 209160 张雪东 张国武 第二名 崔艳秀 217447 刘连忠 董贺亮 第三名 杜成莲 208585 杜红英 唐大阳 第四名 孙茂广 224623 葛丽丽 张国武 第五名 杜广远 220790 李德光 李德光 第六名 戴长勇 210085 任宏宇 任宏宇 第七名 马蕾 288875 张艳文 张艳文 第八名 李铁练 230304 任宏宇 任宏宇 第九名 许春梅 273409 王小丫 王小丫 第十名 孙海艳 215</div><div class="box-cell flex0 box-right-icon"><i class="icon-right-jiantou"></i></div></a>';
				$("#news").append(html);
				//测试代码end
				
				
				//ajax完成 允许再次拿ajax数据
				isRun = false;
				checkScroll(scroll.scrollTop(),scroll.height(),scroll[0].scrollHeight);
			}
		}
});