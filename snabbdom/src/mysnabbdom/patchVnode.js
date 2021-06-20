/*


*/
import createElement from './createElement'
import updateChidren from './updateChilren';


export default function patchVnode(oldVnode , newVnode) {
  // same object in memory
  if (oldVnode === newVode) return;

  // new vnode has text
  if (newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length === 0)) {
    if (newVnode.text !== oldVnode.text) {
      // will replace the children and text in the old Vnode
      oldVnode.elm.innerText = newVnode.text;
    }
  }
  // new vnode has children
  else {
    if (oldVnode.children != undefined && oldVnode.children.length > 0) {
      //---------------------------------------------------------
      // old vnode has children. This is the most complex case
      //---------------------------------------------------------
      updateChidren(oldVnode.elm, oldVnode.children, newVnodel.children);
      
    } else {
      // old vnode does not have chidren
      oldVnode.elm.innerHTML = "";
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children);
        oldVnode.elm.appendChild(dom);
      }
    }
  }
}
