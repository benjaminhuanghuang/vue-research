import vnode from './vnode'
import createElement  from './createElement'
import patchVnode from './patchVnode'


/*
  Diff algorithm
*/
export default function patch (oldVnode, newVnode) {
  // if old node is DOM-node, convert it to V-node
  if(oldVnode.sel === '' || oldVnode.sel === undefined){
    // selector, data, children, text, elm
    oldVnode = vnode(oldVnode.tagName.toLowerCase, {}, [], undefined,  oldVnode)
  }

  // is oldVnode is the same node of newVnode
  if (oldVnode.key === newVnode && oldVnode.sel === newVnode.sel){
    patchVnode(oldVnode, newVnode);
  }
  else {
    // different, remove old one and instert new one
    const newDOM = createElement(newVnode, oldVnode.elm)
    // insert newDOM before oldDOM
    if(oldVnode.elm.parentNode && newDOM){
      oldVnode.elm.parentNode.insertBefore(newDOM, oldVnode.elm);
    }
    // remove old DOM
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}