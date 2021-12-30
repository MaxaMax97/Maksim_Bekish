function valid5(value) {
  return value.length >= 5;
}

 
function valid1cifra(value) {
  return /\d/.test(value);
}

function valid1bukva(value) {
   return value.match(/[a-z]/i);
 }