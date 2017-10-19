$(function(){
	$(document).pjax('a','#container');
	//进度条
	$(document).on('pjax:start', NProgress.start).on('pjax:end', NProgress.done);
})