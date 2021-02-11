const inputOne = 5;
const inputTwo = 10;

// Recursive:
function FirstFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}
console.log(`inputOne output: ${FirstFactorial(inputOne)}`);

// Iterative:
function FactorialFactoring(num) {
  let rval = 1;
  for (var i = 2; i <= num; i++) {
    rval = rval * i;
  }
  return rval;
}
console.log(`inputTwo output: ${FactorialFactoring(inputTwo)}`);
