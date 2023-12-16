const person = {
  firstName: 'Suvadip',
  lastName: 'Ghosh',
};

const printName = function(hometown, state) {
  console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ',' + state);
}

// Polyfill of "apply"

Function.prototype.myApply = function(context, args) {
  currentContext  = context || globalThis;  // take provided context else glabal context
  let randomProp = Math.random();   // create a random number as prop

  /** Check the random prop is already exist in current context object */
  while(currentContext[randomProp] !== undefined) { 
    randomProp = Math.random();
  }

  currentContext[randomProp] = this;  // store 'this' to the randomProp

  const result = currentContext[randomProp](...args); // call all other parameters on current context

  delete currentContext[randomProp]; //delete the random prop created by us

  return result;
}

printName.apply(person, ['chinsurah', 'west bengal']);

printName.myApply(person, ['chinsurah', 'west bengal']);