# 小说阅读器使用文档

## 更新

### v0.0.8

1. 修复了外观设置保存不了的bug

### v0.0.7

1. 新增设置阅读页面颜色改变，只写了三个主题。

2. 本来这个版本要加入读取本地小说的功能，因为下个utools的api改变，所以等下个utools的新版本会加入

3. 由于utools下个版本时间未定，所以本插件的下个版本时间也未定，如果有重大bug的话我还会更新，不过不会加入新功能

### v0.0.6

1. 小说api重新设计，以备下次更新使用

2. 加入消息提醒的设置，在设置栏中选择

3. 每个页面右上角都加入设置和刷新按钮，以便卡死时刷新

4. 下次更新提示:下个版本我打算加一点新功能，比如切换样式和读取本地文件之类的，所以可能要一段时间才能更新了，不过如果这个版本出现大问题，可以在这个帖子里提出，我会更新小版本。

### v0.0.5

小说阅读页面优化

### v0.0.4

1. 搜索:目前可在所有页面输入字符，不过一旦输入一个字符会自动跳转至搜索页面，不需要按下回车。

2. 加入快捷键切换章节，默认不开启，搜索页面和书架页面右上角打开设置设置，默认切换按键是左右方向键对应上一章和下一章，可以再设置中更改。

3. 设置说明:设置快捷键时需要打开快捷键切换，自定义快捷键，需要鼠标点击输入框，在输入框被激活后直接在键盘上点击想要设置的快捷键，目前只支持一个键位，不能是组合键，输入框内的内容会随着你的设置而改变。输入框内的内容是键盘上的每个键对应的键盘名称，可以百度到对应的键是什么。

4. 设置保存:需要按保存才能将设置保存，直接退出是不会保存修改的设置，取消是取消还没保存的设置，如果已经保存了，取消只能回复到最后一次保存的设置。

5. 提醒优化:成功的提醒三秒后悔自动消失，失败的提醒会保留在那边。

### v0.02,v0.03

压缩体积,页面优化

## 搜索

在utools按下 **novel** 或者 **小说**

输入要搜索的书名，按下回车

就可以获取需要的小说，可以点入小说页面

## 加入书架

在小说页面，点击加入书架。

加入书架后，这本书的最后一次阅读都会被记录下来，使用了utools的数据库，你可以在多个设备中同步最后阅读记录。

如果你加入书架却没打开过，默认最后阅读章节是第一章。

## 书架使用

你可以在utools输入 **bookshelf** 或者 **书架**进入书架页面

在这个页面和书籍页面，你都可以管理书架内的书。

也可以快速进入保存在书架的书。

## 测试页面

注:普通用户可以忽略这个页面，这个页面可以用来爬虫检测，对小说阅读没有任何影响

这个页面是用来爬虫测试的，你可以在url栏输入网页的url地址

在选择器栏输入xpath选择器,点击获取就可以获取匹配的页面

xpath选择器是使用了[xpath](https://github.com/goto100/xpath#readme)包,网页获取使用了[axios](https://github.com/axios/axios),js转html树使用了[xmldom](https://www.npmjs.com/package/xmldom)

获取按钮的源代码如下

```js
this.axios.get(this.url).then(response => {
                    console.log(response.data);
                    let doc = new this.xmldom.DOMParser().parseFromString(response.data);
                    let nodes = this.xpath.select(this.select, doc);
                    this.html_list = [];
                    nodes.forEach(value => {
                        console.log(value.toString());
                        this.html_list.push(value.toString())
                    });
                    console.log(this.html_list.length);
                }).catch(error => {
                    console.log(error)
                })
```

用户输入的url和xpath选择方式绑定在呢this.url和this.select,axios,xmldom,xpath这三个包也绑定在this.axios,this.xmldom,this.xpath上

最后获取的this.html_list会被逐行渲染到页面上，在渲染的下面原始字符串也会显示

## 关于作者

我的个人博客[sushao'bolg](www.sushao.blog)

我的github[sushao](https://github.com/suxiaoshao)

这个插件的开源地址[utools-novel-reader](https://github.com/suxiaoshao/utools-novel-reader)

因为第一次写插件，使用了前端框架vue.js，vue-router和ui框架element-ui，目前我还在学习前端中，所以有任何bug或者问题都可以在我的这篇博客下留言:[【前端】utools小说阅读插件](https://www.sushao.top/blog/article/21)。

或者我的猿料页面下找我[sushao](https://yuanliao.info/u/32696)

## utools使用

可在这个页面下寻找[V0.8.9-beta 版本更新说明](https://yuanliao.info/d/1020)下载链接，这是utools的官方论坛

也可以在官网上下载使用[utools](https://www.u.tools/)

使用方式可以看这个文章[uTools | 时隔一年，uTools 这位 Spotlight 新秀现在变得怎么样了?](https://sspai.com/post/56739)或者在官方论坛查看：[猿料](https://yuanliao.info/)

## 插件下载

* utools插件中心搜索小说阅读
* 把[utools-novel-reader](https://github.com/suxiaoshao/utools-novel-reader)git clone下来，找到result文件夹,这个就是最终结果，通过[utools文档](https://www.u.tools/docs/guide/about-uTools.html)介绍的方法打包就可以使用了