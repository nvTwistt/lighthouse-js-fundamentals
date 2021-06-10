const moves = ['north','north','west','west','north','east','north']
const finalPosition = function(moves){
    var xDirection = [];
    var yDirection = [];
    var finalCoordinates = [];
    var latitudeCounter = 0;
    var longitudeCounter = 0;
    for (const move of moves){
        console.log(move);
        if (move === 'north' || move === 'south'){
            yDirection.push(move);
        }
        else{
            xDirection.push(move);
        }
    }
    for (const latitude of yDirection){
        if(latitude === 'north'){
            latitudeCounter++;
        }
        else{
            latitudeCounter--;
        }
    }
    for (const longitude of xDirection){
        if(longitude === 'east'){
            longitudeCounter++;
        }
        else{
            longitudeCounter--;
        }
    }
    finalCoordinates.push(longitudeCounter);
    finalCoordinates.push(latitudeCounter);
    return finalCoordinates;
}
console.log(finalPosition(moves));
