import { observe } from "./observe";


export default function defineReactive(data, key, val) {
  if (arguments.length == 2) {
    val = data[key];
  }
  let childob = observe(val);

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get(){
      return val;
    },
    set(newValue){
      if(val === newValue){
        return;
      }
      val = newValue;
      childob = observe(newValue);
    }
  })
}
