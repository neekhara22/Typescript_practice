var sport = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for(let i=0;i<sport.length;i++){
    console.log(sport[i]);
}
*/
//use of simplified for loop
for (var _i = 0, sport_1 = sport; _i < sport_1.length; _i++) {
  var tempSport = sport_1[_i];
  if (tempSport == "Cricket") {
    console.log(tempSport + " << My favourite!!");
  } else {
    console.log(tempSport);
  }
}
