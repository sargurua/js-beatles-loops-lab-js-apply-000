// add solution here
function theBeatlesPlay(muscians, instruments){
  var ar = [];
  for (var i = 0; i < muscians.length; i++)
    ar[i] = muscians[i] + " plays " + instruments[i];
  return ar;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++)
    facts[i] += "!!!";
  return facts;
}
  
function iLoveTheBeatles(num){
  ar = [];
  do{
    ar.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return ar;
}