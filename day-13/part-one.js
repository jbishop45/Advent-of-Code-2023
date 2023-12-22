const {input} = require('./input');


function transpose(array) {
      return array.reduce((prev, next) => next.map((item, i) =>
          (prev[i] || []).concat(next[i])
      ), []);
  }

console.log(input.length)
console.log(input[0].length)
console.log(transpose([input]).length)
console.log(transpose([input])[0].length)
//console.log(output);