#### 标签插件

##### 作者 - heihei <wr_sorarara@yahoo.co.jp>   QQ: 8540325

##### 简单使用
只需一个简单的input框，即可使用。
各种配置项说明在tags.config.js中已经指出，使用前先引入tags.config.js,再引入tag.js,执行代码

```Javascript
Tags.init(id);
```

当input框中的placeholder出现变化时，则代表引入成功!

##### 说明
[引入错误](#error)

[dom结构](#tree)

[配置初始化](#config)

[input初始化](#init)

[增加标签](#add)

[删除标签](#delete)

[提交表单](#submit)

<h5 id="error">引入错误</h5>
当tag.js使用使用错误的时候，会将错误信息打印到控制台，配合调试信息进行调试。

![error png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/error.png)

<h5 id='tree'>dom结构</h5>
init后会执行initDom操作，会生成特别的dom结构，模式为:

```HTML
<div>
  <span>
    <font></font>
    <i></i>
  </span>
</div>
<div>
  <input />  
  <i></i>
  <ul>
    <li></li>
  </ul>
</div>
```

<h5 id='config'>配置初始化</h5>
在成功引入tag.js之后，既可以在tags.config.js中修改配置内容，也可以在执行Tags.init()之前执行Tags.config(attr='',set='')进行手动配置更改。

```
Tags.config('input-id','myTags');  //修改input-id
Tags.config({
    'max-tags':0,   //设置不限tag数
    'ajax-api': 'api.php', //设置tag返回地址
});
```

<h5 id="init">input初始化</h5>
Tags.init()带有2个参数，第一个是dom的id，必须是string类型，当dom不存在时控制台会提示错误；第二个参数默认值为[],类型必须为Array,且当配置max-tags不为0时，该数组的长度必须小于max-tags。

![init_1 png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/init_1.png)

![init_2 png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/init_2.png)

<h5 id="add">增加标签</h5>
按逗号与回车会添加新的标签，当标签已存在或者已经达到最大标签数时，会提示错误信息。

![exists png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/exists.png)

![overstep png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/overstep.png)

当输入值返回有存在信息时，按↑与↓时可以选择已存在的标签，同时点击鼠标选择内容也可以选择标签

![up png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/up_down.png)

![mouse png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/mouse.png)

<h5 id="delete">删除标签</h5>
当鼠标移动到tag上时，tag的颜色会进行改变，这些颜色包括tags的字体都可以在config中进行设置，当input框中不存在内容时，按退格时可以删除最新的一个标签，或者当点击tags上面的&times;时，也可以删除当前标签。

![delete png](https://github.com/hiRainn/wheels-for-php/raw/master/tags/md_images/delete.png)

<h5 id="submit">提交表单</h5>
提交时，标签会按照config中的input-name的设置讲tags按照设置分割更字符，如默认配置的tag-join为'-'，按照上图所以提交的form表单tags内容为'标签1-标签2-abc'。