// This function would trigger after time delay
function getData(value) {
  console.log('Got data with value: ', value); //this `value` coming from onkeyup event
}

function polyDebounce(fun, delay) {
  let timer = null;

  return function(...args) { // this `args` pass as getData(..) arguments
    const that = this;
    
    clearTimeout(timer); // clear timer on keystroke within `delay`
    
    timer = setTimeout(() => {
      fun.apply(that, args);
    }, delay);
  }
}

const onKeyUp = polyDebounce(getData, 3000);
