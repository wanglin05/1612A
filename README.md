## 项目介绍
星巴克人员加班/休假的流程

## 技术栈

gulp + require + vue + vuex + ajax + sass + flex 

## 项目运行
```
npm install
npm run dev
npm run build
npm run build --report
npm run unit
npm run e2e
npm test
```

## 目录结构
```
vue-dome1
    ——build  //项目构建(webpack)相关代码
    ——config  //配置目录的包括端口号等
    ——node_modules //npm 加载的项目依赖模块
    ——src //这里是我们要开发的目录，基本上要做的事情都在这个目录里
        ——api // 放置项目中的api数据
        ——assets //放置一些图片，如logo等
        ——components //目录里面放了一个组件文件
        ——fonts //放置icon图标的文件夹
        ——router // 项目的路由文件夹
        ——static // 放置项目的scss样式（fonts文件夹也可以放在里面）
        ——views //项目的页面排版、逻辑
            ——detail // 项目的详情页
            ——home // 项目的首页
                ——components //项目首页拆分的组件
                ——index.vue //项目的大体结构
            ——login //项目的登录页面（如果未登录会直接跳到本页面）
        ——App.vue //项目入口文件 (可以直接将组件写这里，而不使用 components 目录)
        ——main.js //项目的核心文件
    ——static //静态资源目录，如图片、字体等
    ——test //初始测试目录，可删除
    ——.开头的文件  //这些是一些配置文件，包括语法配置，git配置等
    ——index.html // 首页入口文件
    ——package.json //项目配置文件

```



