import {def} from './utils'

const methodsNeedChange= [
  'push',
  'pop',
  'shift',
  'unshit',
  'splice',
  'sort',
  'reverse',
]


const arrayPrototype = Array.prototype;

// use Array.prototype as prototype
export const arrayMeethods = Object.create(arrayPrototype);

methodsNeedChange.forEach((methodName)=>{
  const original = arrayPrototype[methodName];

  def(arrayMeethods, methodName, function(this){
    //
    const ob = this.__ob__;
    let inserted =[]
    switch(methodName) {
      case 'push':
        case 'unshift':
          interted  = arguments;
          break;
          case 'splice':
            inserted = arguments.splice(2);
    }
    if(inserted){
      ob.observeArray(inserted);
    }
    original.apply(this, arguments);
  },false)
}) 
