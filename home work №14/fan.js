function validFiveDigit(value) {
  return value.length >= 5;
}

function validOneDigit(value) {
  return /\d/.test(value);
}

function validOneLetter(value) {
  return value.match(/[a-z]/i);
}
