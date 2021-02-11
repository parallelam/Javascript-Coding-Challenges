//Given two strings, return true if they are anagrams of one another
var firstWord = 'Mary';
var secondWord = 'Army';

if (isAnagram(firstWord, secondWord)) {
  console.log('Yay! They are anagrams of each other');
} else {
  console.log('Boo! They are not anagrams');
}

function isAnagram(first, second) {
  let firstly;
  let secondly;
  try {
    firstly = first.toLowerCase().split('').sort().join();
    secondly = second.toLowerCase().split('').sort().join();
    if (firstly == secondly) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(`Error with function isAnagram: ${e}`);
  }
}
