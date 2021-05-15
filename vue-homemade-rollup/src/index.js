import {initMixin} from './init'


/*
  homdmade vue
*/
function Vue(options){
  console.log(options)

  this._init(options)


}


initMixin(Vue);   // add _init() method


export default Vue; 