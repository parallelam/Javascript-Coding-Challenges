const inputOne = ['ahffaksfajeeubsne', 'jefaa'];
// expected output: aksfaje
const inputTwo = ['aaffhkksemckelloe', 'fhea'];
// expected output: affhkkse
const inputThree = ["aabdccdbcacd", "aad"]
// expected output: aabd

function MinWindowSubstring(strArr) {
  let paramN;
  let paramK;
  try {
    paramN = strArr[0];
    paramK = strArr[1];
  } catch (e) {
    console.error(`Error with function MinWindowSubstring: ${JSON.stringify(e, null, 2)}`);
  }
  // code goes here
  return strArr;
}
