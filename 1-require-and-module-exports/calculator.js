console.log("Welcome to calculator.js!");

module.exports.add = function(numArray) {
  let sum = 0;
  for (let index = 0; index < numArray.length; index++) {
    sum += numArray[index];
  }

  return sum;
};
