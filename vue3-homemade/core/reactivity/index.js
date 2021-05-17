/*
  响应式库： 收集依赖，触发依赖


*/

class Dep {
  constructor() {
    this.effect = new Set();
  }

  depend() {

    this.effect.add(eect)
  }

  notice() {}
}
const deep = new Dep()

function effectWatch(effect) {
  // 收集依赖

}
