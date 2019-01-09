# NodeJs RBAC权限管理(Web)
> React+Antd构建权限管理系统

演示地址 [http://koa2manager.undeadfrost.cn/admin/login](http://koa2manager.undeadfrost.cn/admin/login)
账号 admin 密码 123456

此项目需要服务端支持 > [https://github.com/undeadfrost/koa2-manager-server](https://github.com/undeadfrost/koa2-manager-server)

## 项目简介
基于React实现前后端分离权限管理系统。实现基础RBAC权限管理，具有登录拦截、路由权限校验、页面级别权限管理、接口请求校验等功能。可作为基础管理二次开发。

## 项目运行
#### 建议使用NodeJs v8.13.0(LTS)，项目需要配合后端进行运行，可通过修改项目src/config/dev.js中baseUrl更改服务端地址。线上测试地址 [http://koa2manager.service.undeadfrost.cn](http://koa2manager.service.undeadfrost.cn)
```
git clone https://github.com/undeadfrost/koa2-manager-web.git

cd koa2-manager-web

npm install OR yarn install
```

### 启动开发服务器
```angular2
npm run start OR yarn start
访问 http://loaclhost:3000/admin/login
```

### 编译打包
```angular2
npm run build OR yarn build
生成文件在根目录下build文件夹
```

#### 注意：默认使用react-router history路由，线上需要配置Nginx，参考[history路由Nginx配置](https://undeadfrost.github.io/2018/12/04/history%E8%B7%AF%E7%94%B1Nginx%E9%85%8D%E7%BD%AE/)，或更改为hash路由，修改src/index.js
```angular2
import {BrowserRouter} from 'react-router-dom' 改为 import {HashRouter} from 'react-router-dom'

<BrowserRouter><App/></BrowserRouter> 改为 <HashRouter><App/></HashRouter>
```
