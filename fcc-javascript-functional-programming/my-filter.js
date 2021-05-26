var array = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  this.forEach(el => callback(el) === true ?  newArray.push(el): -1)
  return newArray;
};

let newArray = array.myFilter(item => item % 2 === 1)

console.log(newArray)
