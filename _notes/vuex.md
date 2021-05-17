## without Vuex
- parent to sub
v-bind


- sub to parent
v-on


- sibling using EventBus
$on(receiver), $emit(sender)


## Vuex
提供一个global store，实现组件全局状态管理

存储在Vuex中的data都是响应式的，可以实时与页面同步

只有组件间需要共享的数据才要存储到vuex中，组件的私有数据存储在 data中

## Nuxt + Vuex
Nuxt.js 内置引用了 vuex 模块，所以不需要额外安装。 Nuxt.js 会找到应用根目录下的 store 目录，如果该目录存在，它将做以下的事情
- 引用 vuex 模块
- 将 vuex 模块 加到 vendors 构建配置中去
- 设置 Vue 根实例的 store 配置项

Nuxt.js支持两种store的使用方式
- 普通方式: store/index.js, 返回一个vuex.sotre实例
- 模块方式: store目录下的所有.js文件会被转换成为状态树指定命名的子模块 （index 是根模块）


##
install
```
  npm i -D vuex
```

Import
```
  import Vuex from 'vuex'

  Vue.use(Vuex)
```

Create store
```
  const store = new Vuex.Store({
    // state is the global data package
    state:{
      count: 0
    }
  })
```

Add store to vue instance
```
  new Vue(
    {
      el: '#app',
      router,
      store
    }
  )
```


```
```