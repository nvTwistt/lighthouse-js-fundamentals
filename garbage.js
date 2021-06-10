const smartGarbage = function (trash, bins) {
  var currentNum = bins[trash];
  var update = currentNum+1;
  bins[trash] = update;
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));