const stringOne = '(coder)(byte))';
const stringTwo = '(c(oder)) b(yte)';
const stringThree = 'the color re(d))()(()';

function BracketMatcher(str) {
  let leftie = '(';
  let rightie = ')';
  let spliced;
  let filteredLeft;
  let filteredRight;
  try {
    spliced = str.split('');
    console.log(`spliced value line 12: ${JSON.stringify(spliced)}`);
    filteredLeft = spliced.filter((value) => value == leftie);
    console.log(`filteredLeft value line 14: ${filteredLeft.length}`);
    filteredRight = spliced.filter((value) => value == rightie);
    console.log(`filteredRight value line 16: ${filteredRight.length}`);
    filteredLeft.length == filteredRight.length ? console.log('1') : console.log('0');
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}
BracketMatcher(stringOne);
BracketMatcher(stringTwo);
BracketMatcher(stringThree);
