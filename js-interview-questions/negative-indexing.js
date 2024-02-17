const arr = [1, 2, 3, 4, 5, 6];

const wrap = function (arr) {
  return new Proxy(arr, {
    get(target, property) {
      let index = Number(property);
      if (index < 0) {
        index += target.length;
      }
      return target[index];
    },
    set(target, property, value) {
      let index = Number(property);
      if (index < 0) {
        index += target.length;
        if (index < 0) {
          throw Error("Index out of bounds");
        }
      }
      target[index] = value;
    },
  });
};

const newArr = wrap(arr);
newArr[-1] = 8;
console.log(newArr[-1]);
