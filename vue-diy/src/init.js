
import {initState} from './state'
import {compileToFunction} from './compiler'
/*
  Add prototype method _init to Vue
*/
export function initMixin(Vue){
  Vue.prototype._init = function(potions){
    // data hijack
    const vm = this;
    vm.$options = options;

    initState(vm);

    // if user pass in el, mount the dom
    if(vm.$options.el){
      vm.$mount(vm.$options.el);
    }
  }

  Vue.prototype.$mount = function (el){
    const vm = this;
    const coptions = vm.$options;

    el = document.querySelector(el);
    // is there a render metod, is there a template
    if(!option.render){
      // compile the template
      let template = options.template;
      if(!template && el){
        // use div
        template = el.outerHTML;
      }
      console.log(template);
      // convert template to render() method;
      const render = compileToFunction(template);

    }
  }
}

