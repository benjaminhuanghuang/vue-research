// push, shift, unshift, pop, reverse, sort, splice

let oldArrayMethods = Array.prototype;

// arrayMethods.__proto__ = oldArrayMethods
export const arrayMethods = object.create(oldArrayMethods);

const methods = ["push", "shift", "unshift", "pop", "sort", "splice", "reverse"];

methods.forEach((method) => {
  arrayMethods[method] = function (...args) {
    // original method
    const result = oldArrayMethods[method].apply(this, args);
    let inserted;

    switch(method){
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }

    if(inserted ){
      ob.observeArray(inserted);
    }

    return result;
  };


});
