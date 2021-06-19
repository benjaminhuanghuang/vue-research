import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const container = document.getElementById('container');


const myVode1 = h('h1', {}, 'Hello');

// add vnode to DOM tree (first name)
patch(container, myVode1);

