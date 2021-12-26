function valid5sim(value) {
  return inputLogin.value.length >= 5;
}
function valid5simpassword(value) {
   return inputPassword.value.length >= 5;
 }
 
function valid1cifra(value) {
  return /\d/.test(inputPassword.value);
}

function valid1bukva(value) {
   return inputPassword.value.match(/[a-z]/i);
 }