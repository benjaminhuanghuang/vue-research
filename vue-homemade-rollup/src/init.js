import {initState} from './state'

// add function to Vue
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // data hijack
    const vm = this;
    vm.$options = options;


    initState(vm);

  };
}
