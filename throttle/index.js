// Implementation of throttle with `setTimeOut`
const throttle_one = function (fn, limit) {
  let flag = true;
  let context = this;
  
  return function(...args) {
    if(flag) {
      fn().apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  }
}

// Implementation of throttle without `setTimeOut`
const throttle_two = function(fn, limit) {
  let prev = 0; //initialize with zero
  let context = this;

  return function(...args) {
    let now = new Date().getTime();

    if((now - prev) > limit) {
      prev = new Date().getTime(); // reset the prev function call time
      return fn.apply(context, args);
    }
  }
}

function display() {
  console.log('Button Clicked');
}

const btnElement = document.getElementById('button');

btnElement.addEventListener('click', throttle_two(display, 3000));
