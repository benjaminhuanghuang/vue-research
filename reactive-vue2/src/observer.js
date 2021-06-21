import utils, { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMeethods } from "./array";

export default class Observer {
  constructor(value) {
    def(value, "__ob__", this, false);

    if (Array.isArray(value)) {
      // Equal to value.__props__ = arrayMeethods
      Object.setPrototypeOf(value, arrayMeethods)
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(val) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }

  observeArray(arr){
    for(let i =0 ;i < arr.length; i++){
      
    }
  }
}
