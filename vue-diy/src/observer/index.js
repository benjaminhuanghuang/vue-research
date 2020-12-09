import { isObject, def } from "../util";
import { arrayMethods } from "./array";
/*
  重新定义data中的属性
  Objct.defineProperty 不兼容ie8
*/
export function observe(data) {
  if (!isObject(data)) {
    return;
  }

  return new Observer(data);
}

class Observer {
  constructor(val) {
    // val.__obj__ = this;  // add __obj__, 以便使用this上的方法
    // 为了防止无限次observe， 需要walk around
    def(val, "__obj__", this);
    if (Array.isArray(val)) {
      val.__proto__ = arrayMethods;
      this.observeArray(val);
    } else {
      this.walk(val);
    }
  }

  observeArray(val) {
    for (let i = 0; i < val.length; i++) {
      observe[val[i]];
    }
  }
  // add get/set method
  walk(data) {
    let keys = Object.keys(data);
    for (let key in keys) {
      defineReactive(data, key, data[key]);
    }
  }
}

function defineReactive(data, key, value) {
  observe(value);

  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal === value) return;
      //
      console.log("value change");
      value = newVal;
    },
  });
}
