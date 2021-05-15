import { initState } from "./state";

import {compilerToFunction} from './compiler'

// add function to Vue
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // data hijack
    const vm = this;
    vm.$options = options;

    initState(vm);

    // render
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };

  Vue.prototype.$mount = function (el) {
    const vm = this;
    const options = vm.$options;
    const htmlEl = document.querySelector(el);

    if(!options.render){
      // compline template
      let template = options.template;
      if(!template && el){
        template = el.outerHtml;
      }


      // render
      const render = compileToFunction(template)
    }
    

  };
}
