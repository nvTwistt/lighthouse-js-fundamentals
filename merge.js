const merge = function(firstArray, secondArray){
  var unsortedList = []
  for (var fParts of firstArray){
    unsortedList.push(fParts);
  }
  for (var sParts of secondArray){
    unsortedList.push(sParts);
  }
  unsortedList.sort();
  return unsortedList;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);