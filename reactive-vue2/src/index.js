import observe from "./observe.js";

var obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 10,
  c: {
    d: {
      e: {
        f: 6666,
      },
    },
  },
  g:[1,2,3]
};

observe(obj);


obj.a.m =10;
console.log(obj.c.d.e.f);


obj.g.push(6);