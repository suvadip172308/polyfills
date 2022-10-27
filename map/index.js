const radius = [5, 3, 2, 8];

function area(radius) {
  return Math.PI * radius * radius;
}

Array.prototype.calculate = function (logic) {
  const output = [];

  for(let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
}


const res = radius.calculate(area);

console.log(res);