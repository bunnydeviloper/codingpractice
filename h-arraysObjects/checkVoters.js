// write a simple function to check if voter already voted
// if voted => kick out, else, let vote

let voted = {};

function checkVoter(name) {
  if (voted[name]) console.log("You already voted!");
  else voted[name] = true;
}

checkVoter('Bianca');
console.log('add Bianca: ', voted);
checkVoter('Jayden');
console.log('add Jayden: ', voted);
checkVoter('Bianca'); // should print 'You already voted!'

