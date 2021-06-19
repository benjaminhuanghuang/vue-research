/*


*/

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
      let un =0;   // un-processed node
      // old vnode has children. This is the most complex case
      for(let i=0;i< newVnode.appendChild.length;i++){
        let ch = newVnode.children[i];
        let isExist = false;
        for( let j =0; j < oldVnode.children.length ;j ++){
          if(oldVnode.children[j].sel === ch.sel && oldVnode.children[j].key === ch.key)
          {
            isExist = true;
          }
        }
        if(!isExist){
          let dom = createElement(ch);
          ch.elm = dom;
          if(un< oldVnode.children.length){
            oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm);
          }
          else{
            oldVnode.elm.appendChild(dom);
          }

        }
        else{
          un++;
        }
      }
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
