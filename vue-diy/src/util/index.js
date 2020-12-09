export function isObject(data) {
  return typeof data === "object" && data !== null;
}

// 定义一个不可枚举的属性, 避免无限次observe
export function def(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: false,
    confugurable: false,
    value: val,
  });
}
