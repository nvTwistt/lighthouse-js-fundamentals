const range = function(start, end, step){
  var rangeList = [];
  if (start === undefined || end === undefined || step === undefined || step <= 0 || start > end){
    rangeList = [];
    return rangeList;
  }
  else{
    for (start; start <= end; start += step){
      rangeList.push(start);
    }
    return rangeList;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));