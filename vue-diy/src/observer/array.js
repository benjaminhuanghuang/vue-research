let oldArrayMethods = Array.prototype;

// arrayMethods.__proto__ = oldArrayMethods
export const arrayMethod = Object.create(oldArrayMethods);

const methods = ["push", "shift", "unshift", "pop", "sort", "splice", "reverse"];

methods.forEach((method)=>{
  arrayMethod[method] = function(...args) {
    //  调用原生Array method
    const result = oldArrayMethods[method].apply(this, args);
    
    let inserted ; 
    
    switch(method){
      case 'push':
      case 'unshift':
        insterd  = args;
        break
      case 'splice':
        inserted = args.slice(2);
      default:
        break;
    }
    if(inserted){
      // 继续observe 新增 object
      ob.observeArray(inserted);
    }

    return result;
  }
})