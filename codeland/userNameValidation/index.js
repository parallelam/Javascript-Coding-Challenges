const userNameOne = 'chadLey_yodawg_420_XX_sephiroth_XX';
const userNameTwo = 'u__hello_world123';
const userNameThree = 'aa_';
const userNameFour = '_aa_';
const invalidUserNameChar = '_aa_*';

function noEndingUnderscores(str) {
  let someRegEx;
  try {
    someRegEx = /[^_]$/;
    if (!someRegEx.test(str)) {
      console.log(`Invalid string ${JSON.stringify(str)} contains underscore character at line end.`);
      return false;
    }
    console.log(`Valid string match at function noEndingUnderscores: ${JSON.stringify(str)}`);
    return true;
  } catch (e) {
    console.error(`Error with function noEndingUnderscores: ${JSON.stringify(e)}`);
  }
}

function checkIfOnlyLetNumUs(str) {
  let someRegEx;
  try {
    someRegEx = /^\w+$/;
    if (!someRegEx.test(str)) {
      console.log(`Invalid string ${JSON.stringify(str)} contains prohibited characters.`);
      return false;
    }
    console.log(`Valid string match at function checkIfOnlyLetNumUs: ${JSON.stringify(str)}`);
    return true;
  } catch (e) {
    console.error(`Error with function checkIfOnlyLetNumUs: ${JSON.stringify(e)}`);
  }
}

function checkUserNameLength(str) {
  let length;
  try {
    length = str.split('');
    if (length.length >= 4 && length.length <= 25) {
      console.log(`Valid user name length at function checkUserNameLength: ${JSON.stringify(length.length)}`);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(`Error with function checkUserNameLength: ${JSON.stringify(e)}`);
  }
}

function checkFirstChar(str) {
  let firstChar;
  let parseIntOutput;
  let isNanOutput;
  try {
    firstChar = str.charAt(0);
    parseIntOutput = parseInt(firstChar);
    isNanOutput = isNaN(firstChar);
    if (isNanOutput == true && firstChar.match(/[a-z]/i)) {
      console.log(`Valid first character at function checkFirstChar: ${JSON.stringify(firstChar)}`);
      return true;
    } else {
      console.log(`Invalid first character:${JSON.stringify(firstChar)}`);
      return false;
    }
  } catch (e) {
    console.error(`Error with function checkFirstChar: ${JSON.stringify(e)}`);
  }
}

function CodelandUsernameValidation(str) {
  let firstCharChecker;
  let userNameLengthChecker;
  let letterNumberUsChecker;
  let usEndingChecker;
  try {
    firstCharChecker = checkFirstChar(str);
    userNameLengthChecker = checkUserNameLength(str);
    letterNumberUsChecker = checkIfOnlyLetNumUs(str);
    usEndingChecker = noEndingUnderscores(str);
    if (
      firstCharChecker == true &&
      userNameLengthChecker == true &&
      letterNumberUsChecker == true &&
      usEndingChecker == true
    ) {
      console.log(`Output true at function CodelandUsernameValidation: ${JSON.stringify(str)}`);
      return true;
    } else {
      console.log(`Output false at function CodelandUsernameValidation: ${JSON.stringify(str)}`);
      return false;
    }
  } catch (e) {
    console.error(`Error with fnction CodelandUsernameValidation: ${JSON.stringify(e)}`);
  }
}

CodelandUsernameValidation(userNameTwo);
