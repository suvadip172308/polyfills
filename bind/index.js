const person = {
  firstName: 'Suvadip',
  lastName: 'Ghosh',
};

const printName = function(hometown, state) {
  console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ',' + state);
}

// Polyfill of "bind"
Function.prototype.polyBind = function(...args) { // can take multiple arguments
  let that = this;  /** As outer `this` is not available in inner fn */
  let params = args.slice(1); // as first args is always context

  return function(...args2) { // final calling function can take multiple argumants
    that.apply(args[0], [...params, ...args2]);
  }
}

let printPersonName = printName.polyBind(person, 'Chinsurah');
printPersonName('West Bengal');
