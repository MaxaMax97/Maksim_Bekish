String.prototype.getVowels = function fun() {
  array = [];
  let count = 0;
  const glasn = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  for (let char of this.toLowerCase()) {
    if (glasn.includes(char)) {
      arr = array.push(char);
      count += 1;
    }
  }
  return count;
};