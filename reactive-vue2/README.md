

Vue 非侵入式 noninvasive
```
  this.a ++
```

React 侵入式
```
  this.setState({
    a: this.state.a + 1
  })
```


Vue 实现原理: 数据劫持/数据代理
```
  Object.definProperty()
```