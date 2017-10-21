
#### nprogress
pjax请求进度条，使用方法
```Javascript
$(document).on('pjax:start', NProgress.start).on('pjax:end', NProgress.done);
```


#### 几个需要注意的地方

1 默认timeout 时间为650ms，当超时没有拿到返回结果时，该xhr会被canceled
2 xhr返回的html中包含绑定pjax的标签，应当绑定事件到container的父元素上，否则返回的html不会绑定pjax事件
3 返回的html中如果被绑定了其他js，那么应将绑定的js代码置于container中，否则无法执行(或写于pjax执行完毕之后的回调函数中)