// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    // add string to empty array
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  // return array of new strings
  return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while(i < facts.length) {
    newFacts = facts.push(facts[i] + '!!!');
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}