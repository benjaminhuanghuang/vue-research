import {observe} from './observer'

export function initState(vm) {
  const opts = vm.$options;

  if (opts.props) {
    initProps(vm);
  }
  if (opts.methods) {
    initMethod(vm);
  }
  if (opts.data) {
    initData(vm);
  }

  if (opts.computed) {
    initComputed(vm);
  }

  if(opts.watch){
    initWatch(wm);
  }
}


function initProps(vm){

}

function initMethod(vm){
  
}
function initData(vm){
  console.log('initData', vm.$options.data)
  data = typeof data === 'function' ? data.call(vm) : data
  vm._data = data;

  // 数据劫持，以实现数据改变通知页面刷新
  // Object.definePrpperty()
  observe(data);
}

function initComputed(vm){
  
}
function initWatch(vm){
  
}

