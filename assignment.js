// https://github.com/rkrana78/assignment-js



//total cost of hotel

function hotelCost(day) {
    var totalFare = 0;
    if (day <= 10){
        totalFare = day * 100;
    } else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalFare = firstPart + secondPart;   
    } else {
        var firstPart = 10 * 100;
        var secondPart  = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalFare = firstPart + secondPart + thirdPart;
    } if ( day >= 0) {
        return totalFare;
    } else {
        return "sorry! guest information is not found";
    }
}

var totalDays = hotelCost(15);
console.log(totalDays);


//kiloMeter to meter

function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    if ( kilo > 0){
      return meter;
    }else {
      return "distance can not be negetive";
    }
}

var path = kilometerToMeter(9.85629);
console.log(path);


// budget for gadgets

function budgetCalculator(watch, phone, laptop){
    var totalCost = 0;
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}

var budget = budgetCalculator(10, 3, 2);
console.log(budget);


// Find the longest name among the friends

function megaFriend(names){
  var longestName = names[0];
  for (var i = 0; i < names.length; i++) {
      var element = names[i].length;
    if (element > longestName.length) {
      longestName = names[i];
    }
  } 
  return longestName;
}
