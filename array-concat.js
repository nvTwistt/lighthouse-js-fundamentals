const concat = function(firstArray, secondArray){
  var fArrayLen = firstArray.length
  var sArrayLen = secondArray.length
  if (fArrayLen === 0 && sArrayLen > 0){
    return secondArray;
  }
  else if (sArrayLen === 0 && fArrayLen > 0){
    return firstArray;
  }
  else if (sArrayLen === 0 && fArrayLen === 0){
    return [];
  }
  else{
    for (items of secondArray){
      firstArray.push(items);
    }
    return firstArray;
  }
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);