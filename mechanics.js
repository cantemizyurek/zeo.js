//This is a function that makes you to add delay to your callback function
function createDelay(callback, delay) {
  let isRunned = false;

  function run() {
    if (!isRunned) {
      callback();
      setTimeout(function () {
        isRunned = false;
      }, delay);
      isRunned = true;
    }
  }

  return run;
}

//This is a function that you can only run your callback function once
function once(callback) {
  let runned = false;

  function run() {
    if (!runned) {
      callback();
    }
  }

  return run;
}

//This is a function that you can only run your callback function multiple times unitl given amount hits 0 and you can initilize num to reload in x amount ms
function reloadable(callback, amount, delay) {
  let num = amount;

  function run() {
    if (num <= 0) {
      if (delay || delay === 0) {
        setTimeout(() => {
          num = amount;
        }, delay);
      } else {
        num = amount;
      }
    } else {
      callback(num);
    }
    num--;
  }

  return run;
}

//This is a helper function that returns an array value and next time it called it will return next array value in the passed array until it reaches the end of the array then it will return to the beginning of the array
function loopableArray(arr) {
  let i = 0;

  function run() {
    if (i >= arr.length - 1) {
      const val = arr[i];
      i = 0;
      return val;
    }
    return arr[i++];
  }

  return run;
}
