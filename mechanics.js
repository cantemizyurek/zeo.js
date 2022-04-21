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
  