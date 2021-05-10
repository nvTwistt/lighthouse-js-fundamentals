const howManyHundreds = function(load){
    var divisor = 100;
    var divide = load/divisor;
    var modulo = load%divisor;
    var pallets = 0;
    if (load >= 0 && load <= 99){
        pallets = 0;
        return pallets;
    }
    else{
        if (modulo !== 0){
            var divString = divide.toString();
            var splitString = divString.split(".");
            pallets = splitString[0];
        }
        else{
            pallets = divide;
        }
        return pallets;
    }
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
