## angularjs结合ionic框架制作的图书展示小demo

### 安装
```
$ npm install
运行
$ gulp browser
或者
http://localhost:8081进入主页面
```

###简述
```
这是使用angularjs结合ionic框架做的一个图书展示小demo
    第一次上传
    已经完成左侧导航栏,图书分类,单击后可以查看该分类的图书信息,路由端口是本地数据库.
```



### index.html
```
主页面,展示页面效果.
```

### main.js
```
主入口文件,路由都往这边走
```

### gulpfile.js
```
gulp前端自动化构建工具文件,暂时只使用了自动刷新功能
```

### dist文件夹
```
所有源代码文件都存放在这个文件夹
```

### dist>controllers
```
里面存放着所有控制器文件
```

### dist>lib
```
里面存放着css和js插件
```

### dist>services
```
里面存放着所有api(服务方法)文件
```

### dist>tpl
```
里面存放着所有html模板文件
```