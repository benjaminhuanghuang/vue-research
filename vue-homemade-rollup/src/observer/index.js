// data hijack, refresh when data is changed
// ES5 Object.deineProperty(), add get()/set()
import { isObject } from "./util";
import {arrayMethods} from './array.js'

class Observer {
  constructor(value) {
    value.__ob__ = this;
    //避免递归
    Object.defineProperty(value, '__ob__', {
      enumerable:false,
      configurable: false,
      value: this
    })

    if (Array.isArray(value)) {
      // hijack itmes in array
      this.observeArray(value);

    } else {
      this.walk(value);
    }
  }

  observeArray(value) {
    for(let i =0;i < value.length; i++){
      observe(value[i])
    }
  }

  walk(data) {
    let keys = Object.keys(data);

    for (let key of keys) {
      let value = data[key];
      //
      defineReactive(data, key, value);
    }
  }
}


function defineReactive(data, key, value) {
  observe(value);

  Object.defineProperty(data, key, {
    get() {
      // --
      return value;
    },
    set(newVal) {
      if (newVal === value) {
        return;
      }
      // --
      observe(newVal);
      value = newVal;
    },
  });
}

export function observe(data) {
  if (!isObject(data)) {
    return;
  }

  return new Observer(data);
}
