
## Reference
https://cn.vuejs.org/v2/guide/reactivity.html


Vue 采用数据劫持结合发布者-订阅者模式的方式来实现数据的响应式，通过Object.defineProperty(点我查看该属性)来劫持数据的setter，getter，在数据变动时发布消息给订阅者，订阅者收到消息后进行相应的处理。

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。
