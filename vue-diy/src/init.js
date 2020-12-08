
import {initState} from './state'

/*
  Add prototype method to Vue
*/
export function initMixin(Vue){
  Vue.prototype._init = function(potions){
    // data hijack
    const vm = this;
    vm.$options = options;

    initState(vm);
  }
}

