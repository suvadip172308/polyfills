const persons = [
  { name: 'Kevin', age: 35 },
  { name: 'Marcus', age: 28 },
  { name: 'Guillermo', age: 37 },
  { name: 'Lisa', age: 25 },
  { name: 'Josh', age: 24 },
  { name: 'Soubhik', age: 29 },
];

// Polyfill for REDUCE
Array.prototype.polyReduce = function (logic, initialValue) {
  let acc = initialValue;

  for(let i = 0; i < this.length; i++) {
    if(acc !== undefined) {
      acc = logic(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }

  return acc;
}

function sum(acc, curr) {
  if(curr.age < 30) {
    acc.push(curr.name);
  }

  return acc;
}

// This reduce call would act like a `filter`
const res = persons.polyReduce(sum, []);

console.log(res);

