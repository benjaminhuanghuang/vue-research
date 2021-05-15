import {observe} from './observer/index'

export function initState(vm){
  const opts = vm.$options;

  if(opts.props){
    initProps(vm);
  }
  
  if(opts.methods){
    initMethod(vm);
  }

  if(opts.data){
    initData(vm);
  }
  
  if(opts.computed){
    initComputed(vm);
  }

  if(opts.watch){
    initWatch(vm);
  }

}


function initProps(){
  
}

function initMethod(){

}

function initData(){
  let data = vm.$option.data;

  data = vm._data = typeof data==='function' ? data.call(vm) : data;

  // data hijack, refresh when data is changed
  // ES5 Object.deineProperty(), add get()/set()
  observe(data);

}

function initComputed(){

}

function initWatch(){

}