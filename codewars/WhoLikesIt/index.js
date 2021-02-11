function likes(names) {
  let totalNames;
  let stringReturn;
  try {
    totalNames = names.length.toString();
    if (totalNames === '0') {
      stringReturn = 'no one likes this';
    }
    if (totalNames === '1') {
      stringReturn = `${names[0]} likes this`;
    }
    if (totalNames === '2') {
      stringReturn = `${names[0]} and ${names[1]} like this`;
    }
    if (totalNames === '3') {
      stringReturn = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    if (parseInt(totalNames) >= 4) {
      stringReturn = `${names[0]}, ${names[1]} and ${parseInt(totalNames) - 2} others like this`;
    }
    return stringReturn;
  } catch (e) {
    console.error('Error:', e);
  }
}

var likesArrayEmpty = [];
var likesArrayOne = ['Peter'];
var likesArrayTwo = ['Jacob', 'Alex'];
var likesArrayThree = ['Max', 'John', 'Mark'];
var likesArrayFour = ['Alex', 'Jacob', 'Mark', 'Max'];

console.log(likes(likesArrayEmpty));
console.log(likes(likesArrayOne));
console.log(likes(likesArrayTwo));
console.log(likes(likesArrayThree));
console.log(likes(likesArrayFour));
