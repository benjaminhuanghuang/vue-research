


Create Vnode -> Render Vnode -> Create DOM

Vnode is javascript object.


vue2
```
  import Vue from 'vue'
  import App from './App'


  const app = new Vue({
    render: h => h(App)
  })

  app.$mount('#app')
```


vue 3
```
  import {create App} from 'vue'
  import App from './App'

  const app = createApp(App)

  app.mount('#app')
```