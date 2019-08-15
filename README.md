
项目涉及到的大概知识：  
* `vue 3.x`最新脚手架使用
* `webstorm`使用小技巧
* `webpack`配置优化
* `vue`通用组件封装
* `vw`移动端适配及踩坑实践
* `jsDOC`来为工具函数编写注释  
* `mockjs`进行数据模拟  
* 打包部署到`github page`  

## 快速启动
通过如下命令我们可以快速将项目运行，打包和发布：  
```npm
git clone git@github.com:wangkaiwd/xiaomi-shop.git
cd xiaomi-shop
# 启动项目
npm run start
# 打包项目
npm run build
# 分析项目打包文件
npm run build:analysis
# 部署到github page
npm run deploy
```
├─ .browserslistrc
├─ .env.analysis                              // vue cli环境变量文件
├─ .gitignore
├─ README.md
├─ babel.config.js
├─ deploy.sh                                  // 项目部署脚本
├─ package.json
├─ postcss.config.js
├─ public
│    ├─ favicon.ico
│    ├─ img
│    │    └─ icons
│    ├─ index.html
│    ├─ manifest.json
│    └─ robots.txt
├─ screenshots                                // 项目截图
│    ├─ calc-scss.png
│    ├─ icon-font-link.png
│    └─ icon-font-prefix.png
├─ src
│    ├─ MiApp.vue
│    ├─ api                                   // 接口api
│    │    └─ index.js
│    ├─ assets                                // 静态资源
│    │    ├─ img
│    │    └─ styles
│    ├─ components                            // 通用组件
│    │    ├─ dialog
│    │    ├─ footerNav
│    │    ├─ guessLove
│    │    ├─ icon
│    │    ├─ layout
│    │    ├─ number
│    │    ├─ popup
│    │    ├─ skeleton
│    │    ├─ toast
│    │    └─ topHeader
│    ├─ config                                // 项目配置项
│    │    └─ navConfig.js
│    ├─ helpers                               // 帮助函数
│    │    ├─ autoRegister.js
│    │    ├─ dom
│    │    ├─ globalPlugin.js
│    │    ├─ pxToVw.js
│    │    ├─ regConfig.js
│    │    ├─ routeNavigation.js
│    │    └─ validator.js
│    ├─ http                                  // axios相关封装
│    │    ├─ axiosConfig.js
│    │    └─ request.js
│    ├─ main.js                               // 入口文件
│    ├─ registerServiceWorker.js
│    ├─ router                                // 路由配置
│    │    ├─ lazyLoading.js
│    │    └─ router.js
│    ├─ store                                 // vuex
│    │    └─ store.js
│    └─ views                                 // 项目页面
│           ├─ category
│           ├─ detail
│           ├─ example
│           ├─ home
│           ├─ homeCategory
│           ├─ login
│           ├─ mine
│           ├─ search
│           └─ shopCart
├─ vue.config.js                              // webpack配置
└─ yarn.lock
