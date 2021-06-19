import { init, classModule, propsModule, styleModule, eventListenersModule, h } from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);
// get V-DOM
const myVnode1 = h('a', {props:{href: 'www.google.com'}}, 'Google')

const myVnode2 = h('div', {class: {box: true}}, 'I am a div')

const myVnode3 = h('ul', [
  h('li', 'Apple'),
  h('li', 'Haha'),
  h('li', 'Peach'),
  

])

const container = document.getElementById("container");

patch(container, myVnode1);