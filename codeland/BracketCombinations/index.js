function BracketCombinations(num) {
  const addParens = (left, right) => {
    let total = 0;
    if (left === 0 && right === 0) {
      return 1;
    }
    if (left > 0) {
      total += addParens(left - 1, right);
    }
    if (right > left) {
      total += addParens(left, right - 1);
    }
    return total;
  };

  return addParens(num, num);
}
