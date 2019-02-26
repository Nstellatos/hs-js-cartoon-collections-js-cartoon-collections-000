function dwarfRollCall(dwarves) {
  var newStr = "";
 	for(var i = 0; i < dwarves.length; i++) {
 			newStr += (i+1 + ". " + dwarves[i] + " ");
 	}
 	return newStr;
}

function summonCaptainPlanet(planeteerCalls){
  var newArr = [];
  for (var i=0; i<planeteerCalls.length; i++){
    newArr.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newArr;
}

function longPlaneteerCalls(words) {
  for (var i=0; i <words.length; i++){
    if (words[i].length > 4){
      return true;
    }
    else {
      return false;
    }
    }
  }

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i=0; i<foods.length; i++){
    for (var c=0; c<cheese.length; c++){
      if (foods[i] === cheese[c]){
        return cheese[c];
      } else {
        return 'no cheese!';
      }
    }
  }

}
