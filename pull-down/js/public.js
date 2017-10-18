$(function(){
	$(".footer .item").on("click",function(){
		$(".nav-wrapper").hide();
		var nav = $(this).find(".nav-wrapper");
		if(nav.length != 0){
			nav.show();
		}
	});
	$(".header,.container-wrapper").on("click",function(e){
		$(".nav-wrapper").hide();
	});
	try{
		var queWrapper= $(".que-wrapper");
		queWrapper.on("click", function(e){
			var que = $(this).find(".icon-question");
			if(que.length === 0) {
				toast($(this).data("tips"),{skin: "error",shade: false});
			} else {
				toast($(this).find(".icon-question").data("tips"),{skin: "error",shade: false});
			}
			return false;
		});
	} catch(e){
//	    console.log("没有使用layer");
	}
})


/*
 * 弹出提示框 zjb
 * 暂时只有成功提示
 * icon=0是对号，1是X,2是！,不写icon参数则没有icon
 * msg是需要弹出的文字
 * time是自动结束事件时间，0的话意味着立即结束
 * fun是回调函数
 */
function toast(content,options){
	var defaults = {icon: 9, time: 2, shade: true, shadeClose: true, skin: 'msg'};
	$.extend(true, defaults, options);
	if(defaults.icon !== 9) {
		var icons = ['icon-zhengque','icon-cuowu'],type = true;//0是对号icon，1是X
		defaults.content = "<div class='toast-icon'><i class='iconfont " + icons[defaults.icon] + "'></i></div><div class='toast-text'>" + content + "</div>"
		defaults.skin = "div";
	} else {
		defaults.content = content;
	}
	layer.open(defaults);
}

/*
 * 弹出loading提示框 zjb
 * 默认content为加载中
 * 再次输入该方法会关闭loading层
 * 如：
 * loading() 弹出loading()层
 * 要弄的事情完毕后再次输入loading()，会关闭之前的loading()层
 */
var layerIndex = -1;
function loading(content){
	if(layerIndex !== -1) {
		layer.close(layerIndex)
		layerIndex = -1;
		return false;
	}
	if(typeof(content)=="undefined"){
		content = '加载中';		
	}
	var defaults = {time: false, shade: true, shadeClose: false, skin: 'loading'};
	defaults.content = "<div class='toast-icon'><i class='icon-loading icon-rotating'></i></div><div class='toast-text'>" + content + "</div>"
	defaults.skin = "div";
	layerIndex = layer.open(defaults);
}
/*这里是发送验证码的计时器*/
function sendTimeCode(event,callback,before){
	var count = 60;
	var time = count;
	var timer;
	var callback = callback;
	var send_code = document.querySelector(event);
	if(send_code == null) return false;
	send_code.addEventListener("click", function() {
		if($(send_code).is(".disabled")) return false;
		//before是前置方法，假如返回true则不会继续
		if(before){
			if(before())return false;
		}
//		if(!/^1\d{10}$/.test($("[name='tel']").val())) return toast(2,"请输入正确的手机号码",1000);
		timeContuller();
		//这里是发送验证码
		callback();
	});
	var timeContuller = function(){
		$(send_code).addClass("disabled");
		send_code.innerHTML = time-- + "s后可重发";
		timer = setInterval(function() {
			$(send_code).addClass("disabled");
			send_code.innerHTML = time-- + "s后可重发";
			if(time == -1) {
				clearInterval(timer);
				time = count;
				$(send_code).removeClass("disabled");
				send_code.innerHTML = "重新发送短信";
			}
		},1000);
	};
}
