function validFiveDigit(value) {
  if (
    (valid = value.length >= 5 && /\d/.test(value) && value.match(/[a-z]/i))
  ) {
    return valid;
  }
}

//function validOneDigit(value) {
//  return /\d/.test(value);
//}

//function validOneLetter(value) {
//  return value.match(/[a-z]/i);
//}
