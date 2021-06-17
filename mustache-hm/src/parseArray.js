import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(token, data) {
  var v = lookup(data, token[1]);
  var resultStr = "";

  // loop the data 
  for (let i = 0; i < v.length; i++) {
    resultStr += renderTemplate(token[2], {
      
      v[i]}
      );
  }
  return resultStr;
}
