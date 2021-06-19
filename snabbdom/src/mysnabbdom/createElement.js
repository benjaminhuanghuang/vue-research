/*
  convert V-node to DOM
*/
export default function createElement (vnode) {
  let domNode = document.createElement(vnode.sel);

  if (vnode.text != "" && (vnode.children === undefined || vnode.children.length === 0)) {
    // text, no children
    domNode.innerText = vnode.text;
  
  } else if (Array.isArray(vnode.children && vnode.children.length > 0)) {
    // children
    for (let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i];
      let chDOM = createElement(ch);
      domNode.appendChiild(chDOM);
    }
  }
  vnode.elm = domNode;
  return vnode.elm;
}
