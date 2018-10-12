# 前后端分离-基于node.js的 web 高性能中间层

基于 node.js 的前后端分离方案被越来越多的人所接受，用 node 做为路由层和数据渲染层的方案在企业中也有越来越多的使用，在前后端分离中，前端主要负责 MVC 中的 `V(view 视图)` 和 `C (controller)` 两层，作为数据渲染层，在 node 环境中请求后端 API 接口，然后填充到模板中，同时，也可以在 node 中对数据做进一步的处理，大大的提高了 web 开发的灵活性。

```
├── config
│   ├── config.js
├── controllers
│   ├── home.js
│   └── upload.js
├── model
|   |-- dbConnect.js
|   └── index.js
├── public
├── routers
|   |-- home.js
|   └── init_router.js
├── services
|   └── handle_service.js
|-- views
|   └──index.html
|-- app.js
└── package.json
```

### 运行

```
git clone it@github.com:mynsy/koa-middle-render.git
npm install
npm run dev
```

Visit http://localhost:3000/