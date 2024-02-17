const input = {
  a: 1,
  b: "hello",
  c: {
    d: "bye",
    e: 2,
    f: {
      g: "hola",
      h: {
        i: "amigo",
      },
    },
  },
};

// Output
// {
//     a: 1,
//     b: 'hello',
//     'c.d': 'bye',
//     'c.e': 2,
//     'c.f.g': 'hola',
//     'c.f.h.i': 'amigo'
//   }

function flatten(obj, prefix = "") {
  let result = {};
  prefix = prefix ? prefix + "." : "";
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result = { ...result, ...flatten(obj[key], prefix + key) };
    } else {
      result[prefix + key] = obj[key];
    }
  }
  return result;
}

console.log(flatten(input));
