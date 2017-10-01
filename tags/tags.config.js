(function(){
	window.TAG_CONFIG = {
		'input-id' : 'input',			  //id of input
		'ul-id' : 'tag_ul',				  //id of ul
		'tag-div-id' : 'tag-content',     //id of div which 
		'input-div-id' : 'tag_input',     
		'input-name':  'tags',
		'tag-join': '-',
		'tag-api':'./ajax.php',    		 //url of api
		'max-tags': 5,				     //max number of tags
		'max-select' : 5,			     //max number of li
		'max-tag-length': 20,            //
		'ajax-type' : 'GET',             //ajax method
		'li-class-name': 'tag-on',
		'tag-span-class-name': 'tag-items',
		'strict-fillter': true,
		'fillter' : true,
		'span-border-color': '#98FB98',
		'span-color':'#FFF',
		'span-mouse-over-color' : '#98FB98',
		'tag-font':'sans-serif',
		'allow-rule': /^[\w\.]{1,20}$/,
		'error-msg': 'dis-allow-rule',
		'dis-allow-char': ['.','Process','+','=','(',')','*','&','%',' ','，','。'],
	}
})()