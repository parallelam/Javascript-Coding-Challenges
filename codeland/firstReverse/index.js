const stringOne = 'coderbyte';
const stringTwo = 'I Love Code';

function FirstReverse(str) {
  let reversedStringArray;
  let reversedJoin;
  try {
    reversedStringArray = str.split('').reverse();
    console.log(`reversedStringArray value: ${JSON.stringify(reversedStringArray, null, 2)}`);
    reversedJoin = reversedStringArray.join('');
    console.log(`reversedJoin value: ${JSON.stringify(reversedJoin, null, 2)}`);
    return reversedJoin;
  } catch (e) {
    console.error(`Error with function FirstReverse: ${e}`);
  }
}

FirstReverse(stringOne);
FirstReverse(stringTwo);
