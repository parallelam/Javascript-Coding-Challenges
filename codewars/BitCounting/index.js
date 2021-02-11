function doStuff(num) {
  var values = num
    .toString(2)
    .split('')
    .filter((values) => values == '1');

  console.log('values:', values.length);
  return values.length;
}

const five = 5;

doStuff(five);
