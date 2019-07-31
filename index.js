// add solution here
function theBeatlesPlay(muscians, instruments){
  var ar = [];
  for (var i = 0; i < muscians.length; i++){
    ar[i] = muscians[i] + " plays " + instruments[i];
  }
  return ar;
  }