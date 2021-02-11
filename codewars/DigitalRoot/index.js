const logicFunction = (input) => {
  let split;
  let reduced;
  try {
    split = input.toString().split('');
    reduced = split.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return reduced;
  } catch (e) {
    console.error('Error:', e);
  }
};

const conditionalLogicFunction = (input) => {
  let split;
  let splitValue;
  let functionResult;
  try {
    split = input;
    splitValue = input.toString().split('').length;
    if (splitValue > 1) {
      console.log('23:', split);
      functionResult = logicFunction(split);
      return conditionalLogicFunction(functionResult);
    } else {
      console.log('27:', split);
      return split;
    }
  } catch (e) {
    console.error('Error:', e);
  }
};

console.log(conditionalLogicFunction(967));
