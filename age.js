const ageCalculator = function(name,yearOfBirth,currentYear){
  var age = currentYear - yearOfBirth;
  var finalString = name + " is " + age + " years old.";
  return finalString;
}
console.log(ageCalculator("Miranda",1983,2015));
console.log(ageCalculator("Matt",1988,2015));