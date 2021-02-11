//Explain:
//Why we are getting NaN for total. can we fix that?
//After your fix do you get same number in both total, if yes: And how can we fix that.

class Print {
  constructor(num1, num2) {
    this.number1 = num1;

    this.number2 = num2;
  }

  set Number1(num) {
    this.number1 = num;
  }

  set Number2(num) {
    this.number2 = num;
  }

  get Number1() {
    return this.number1;
  }

  get Number2() {
    return this.number2;
  }

  total() {
    setTimeout(function () {
      const sum = this.Number1 + this.Number2;
      console.log(`Total: ${sum}`);
      return sum;
    }, 2000);
  }
}

const printObj = new Print(3, 4);
printObj.total();
printObj.Number1 = 20;
printObj.Number2 = 10;
printObj.total();

/*
Javascript is singled-threaded, but the browser is not. The browser has at least three threads: Javascript engine thread, UI thread, and timing thread, where the timing of setTimeout and setInterval are done by the timing thread.

When calling setTimeout or setInterval, a timer thread in the browser starts counting down and when time up puts the callback function in javascript thread's execution stack. The callback function is not executed before other functions above it in the stack finishes. So if there are other time-consuming functions being executed when time up, the callback of setTimeout will not finish in time.
*/
