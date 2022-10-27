const radius = [5, 3, 2, 8]; // Array Class object

function square(number) {
  return number * number;
}

Array.prototype.polyMap = function (fn) {
  const output = [];

  for(let i = 0; i < this.length; i++) {
    output.push(fn(this[i]));
  }

  return output;
}

const res = radius.polyMap(square);

console.log(res);

