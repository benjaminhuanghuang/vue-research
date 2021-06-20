import createElement from "./createElement";
import patchVnode from "./patchVnode";

function checkSameVnode(a, b) {
  return a.sel === b.sel && a.key === b.key;
}

export default function updateChidren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let newEndIdx = newCh.length - 1;

  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (checkSameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    }else if (checkSameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      parentElm.insertBefore(oldStartVnode, oldEndVnde.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    else if (checkSameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[--newStartIdx];
    }
    else{
      //
    }
  }

  //
  if(newStartIdx <= newEndIds){
    // there are some new node un-processed
    const before = newCh[newEndIdx+1] == null ? null: newCh[newEndIdx +1].elm;
    for(let i = newStartIdx; i <= newEndIdx ; i++){
      parentElm.insertBefore(createElement(newCh[i]), before);
    }
  }
  else if(oldStartIdx <= oldEndIdx){
    for(let i = oldStartIdx; i <= oldEndIdx ; i++){
      parentElm.removeChild(oldCh[i].elm);
    }
  }

}
