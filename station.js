const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
var valid = [];
const chooseStations = function (stations) {
  for(var i = 0; i <= stations.length-1; i++){
    var curr_array = stations[i];
      for(var x = 0; x <= curr_array.length-1; x++){
        if(x==1 && curr_array[1] >= 20){
          if(curr_array[2] === "school" || curr_array[2] === "community centre"){
            valid.push(curr_array[0].toString());
          }
        }
      }
    }
  return valid;
}
chooseStations(stations);
console.log(valid);


function chooseStations(stations){
    const valid = [];
    for (const station of stations){
      const capacity = station[1];
      if (capacity >= 20){
        const type = station[2];
        if (type === "school" || type === "community centre"){
          valid.push(stations[0].toString());
        }
      }
    }
    return valid;
  }