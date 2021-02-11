const wordOne = 'Hello world, mother and father';
const wordTwo = 'Derp';
const wordThree = 'I love dogs';

function LongestWord(sen) {
  let splitArrayComma;
  let postRegexArray;
  let postSortArray;
  try {
    postRegexArray = [];
    splitArrayComma = sen.toLowerCase().split(' ');
    splitArrayComma.forEach((element) => {
      return postRegexArray.push(element.replace(/\W/g, ''));
    });
    console.log(`postRegexArray value: ${JSON.stringify(postRegexArray, null, 2)}`);
    postSortArray = postRegexArray.sort((a, b) => {
      return b.length - a.length;
    });

    console.log(`postSortArray value: ${JSON.stringify(postSortArray, null, 2)}`);
    console.log(`Longest Word: ${JSON.stringify(postSortArray[0], null, 2)}`);
    return postSortArray[0];
  } catch (e) {
    console.error(`Error with function LongestWord: ${e}`);
  }
}

LongestWord(wordOne);
LongestWord(wordTwo);
LongestWord(wordThree);
