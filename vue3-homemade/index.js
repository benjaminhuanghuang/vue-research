const {effect, reactive} = require('@vue/reactivity')

// 声明一个响应式对象
let a = reactive({
  value :1
});

let b;

effect(()=>{
  b = a.value + 10;
  console.log(b);   // effect() 执行时 会执行一次
})

// 响应式对象的值发生改变时再执行一次
a.value = 30;

