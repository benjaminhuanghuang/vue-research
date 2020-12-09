/*
  Vue 接口
*/
import {initMixin} from './init'

function  Vue(options){
  console.log(options)
}


initMixin(Vue);

export default Vue;