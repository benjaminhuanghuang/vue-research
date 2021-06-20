import defineProperties = require("define-properties");
import Observer from './observer'



var obj = {
  a: {
    m: {
      n:5
    }
  }
};


function observe(value){
  if(typeof value != 'object')
  return;

  var ob;
  if(typeof value.__ob__ != 'undefined'){
    ob = value.__ob__;
  }
  else{
    ob = new Obserever(value);
  }
  return ob;
}