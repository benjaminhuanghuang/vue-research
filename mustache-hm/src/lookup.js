
/*
  handle data[a.b.c]
*/
export default lookup(dataObj, keyName) {
  let temp = dataObj;

  if(keyName.indexOf('.') != -1 && keyName !== '.'){
    let keys = keyName.split('.');
    let temp = dataObj;
    for(let i =0 ;i < keys.length; i++){
      temp = temp[keys[i]];
    }
    return temp;
  }

  return dataObj[keyName];
}