import vnode from "./vnode.js";
/*
  Create V-node
*/
export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error("need 3 arguments.");
  }

  if (typeof c === "string" || typeof c === "number") {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = [];
    for (let i = 0; i < c.length; i++) {
      //c[i] should be an object
      if (!(typeof c[i] === "object" && c[i].hasOwnProperty("sel"))) {
        throw new Error("element in c should be h()");
      }
      children.push(c[i]);
    }
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
    let children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("c is wrong");
  }
}
