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

//This is a function that you can only run your callback function multiple times unitl given amount hits 0 and you can initilize num to reload in x amount ms and you can run your onReload function when x amount ms pases;
function reloadable(callback, onReload, amount, delay) {
  let num = amount;
  let ondelay = false;

  function run() {
    num--;

    if (num <= 0) {
      if (delay || delay === 0) {
        if (!ondelay) {
          ondelay = true;
          callback(num);
          setTimeout(() => {
            num = amount;
            onReload(num);
            ondelay = false;
          }, delay);
        }
      } else {
        callback(num);
        onReload(num);
        num = amount;
      }
    } else {
      callback(num);
    }
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

//This is a function that you can pass a callback function that will be called if conditionToRun is true every x loopDuration and you can cancel the loop by giving an endIntervalCondition
function effect(callback, conditionToRun, loopDuration, endIntervalCondition) {
  let runs = 0;

  function run() {
    const interval = setInterval(() => {
      if (conditionToRun(runs)) {
        runs++;
        callback(runs);
      }

      if (endIntervalCondition(runs)) {
        clearInterval(interval);
      }
    }, loopDuration);
  }

  return run;
}
