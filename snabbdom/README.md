# Virtual DOM and Diff

V-DOM is a javascript object
```
{
  selector: 'div'
  data : {
    class: { box: true}
  },
  children:[
    {
      selector: 'h3',
      data: {},
      text: 'hello'
    },
    {
      selector: 'ul',
      data: {},
      children: [
        {selector: 'li', data:{}, text: 'text 1'}
      ]
    }
  ]
}
```


## snabbdom
Vue 借鉴了 snabbdom
1. generate V-DOM (h function)
```
  h('a', {props:{}}, 'text')
```
2. diff

3. V-DOM to DOM (diff function)



## Setup
```
  npm i -D snabbdom
  npm i -D webpaack@5 wepack-cli@3 webpack-dev-servre@3
```
