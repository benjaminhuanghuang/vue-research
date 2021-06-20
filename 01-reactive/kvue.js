// new KVue()


class KVue {

  constructor (options) {
    this.$options = options;


    this.$data = options.data;

    this.observe(this.$data);
  }


  observe(value) {
    if(!value || typeof value != 'object'){
      return;
    }
    Object.keys
  }
}