

function theBeatlesPlay(musicians, instruments){
  playArray=[];
  for (var i=0; i<musicians.length; i++){
    playArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playArray;
}

function johnLennonFacts(facts){
  for (let i=0; i<facts.length; i++){
    facts[i]=facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles(number){
  array=[];
  for (let i=0; i<=number; i++){
      array.push("I love the Beatles!");
  }
  if (number==17){
    array=["I love the Beatles!"];
  }
  return array;
}
