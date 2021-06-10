const lastIndexOf = function(inputArray, value){
  var x = 0;
  var index = 0;
  var lastIndex = 0;
  var flag = false;
  for(x = 0; x <= inputArray.length - 1; x++){
    if (inputArray[x] === value){
      index = x;
      flag = true;
    }
    if (index >= lastIndex){
      lastIndex = index;
    }
  }
  return (flag === false ? -1 : lastIndex);
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);