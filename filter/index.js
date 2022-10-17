const persons = [
  { name: 'Kevin', age: 35 },
  { name: 'Marcus', age: 28 },
  { name: 'Guillermo', age: 37 },
  { name: 'Lisa', age: 25 },
  { name: 'Josh', age: 24 },
  { name: 'Soubhik', age: 29 },
];

function selectPerson(person) {
  return person.age < 30;
}

// Polyfill of Filter
Array.prototype.polyFilter = function (logic) {
  const output = [];

  for(let i = 0; i < this.length; i++) {
    if(logic(this[i])) {
      output.push(this[i]);
    }
  }

  return output;
}

const res = persons.polyFilter(selectPerson);

console.log(res);
