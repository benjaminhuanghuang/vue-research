const {effect, reactive} = require('@vue/reactivity')

// 声明一个响应式对象
let a = reactive({
  value :1
});

let b;

effect(()=>{
  b = a.value + 10;
  console.log(b);
})
a.value = 30;

