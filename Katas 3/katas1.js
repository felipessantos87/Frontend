function oneThroughFive(){
  let oneThroug = [];
  for (let counter = 1; counter <= 20; counter++) {
  oneThroug.push(counter) }
  return oneThroug;
  }
  console.log(oneThroughFive());
  
  function evensToTwenty(){
  let evensTo = [];
  for(let counter = 1; counter <=20; counter++){
  if(counter <=20 && counter % 2 == 0){
  evensTo.push(counter)}
  }
  return evensTo;
  }
  console.log(evensToTwenty());
  
  function oddsToTwrnty(){
  let oddsTo = [];
  for(let counter = 1; counter <=20; counter++){
  if(counter <=20 && counter % 2 != 0){
  oddsTo .push(counter)}
  }
  return oddsTo;
  }
  console.log(oddsToTwrnty());
  
  function multiplesOfFive(){
  let multiples = [];
  for (let counter = 5; counter <= 100; counter++) {
  if(counter <=100 && counter % 5 == 0){
  multiples.push(counter)}
  }
  return multiples;
  }
  console.log(multiplesOfFive());
  
  function squareNumbers(){
  let square = [];
  for(let i = 1; i<=100; i++){
  if(i*i <=100){
  let square2 = i*i
  square.push(square2)}
  }
  return square;    
  }
  console.log(squareNumbers());
  
  function countingBackwards(){
  let counting = [];
  for(let i = 20; i>=1; i--){
  counting.push(i)
  }
  return counting;
  }
  console.log(countingBackwards());
      
  function evenNumbersBackwards(){
  let evenNumber = [];
  for(let i = 20; i>=1; i--){
  if(i>=1 && i % 2 == 0){
  evenNumber.push(i)}
  }
  return evenNumber;
  }
  console.log(evenNumbersBackwards());
  
  function oddNumbersBackwards(){
  let oddNumber = [];
  for(let i = 20; i>=1; i--){
  if(i>=1 && i % 2 != 0){
  oddNumber.push(i)}
  }
  return oddNumber;
  }
  console.log(oddNumbersBackwards());
  
  function multplesOfFiveBackwards(){
  let multiplesOff = [];
  for (let counter = 100; counter >= 5; counter--) {
  if(counter >=5 && counter % 5 == 0){
  multiplesOff.push(counter)}
  }
  return multiplesOff;
  }
  console.log(multplesOfFiveBackwards());
  
  function squareNumbersBackwards(){
  let squareArr = [];
  for(let i = 10; i>=1; i--){
  if(i >= 1 && i*i >=1){
  let squareArr2 = i*i
  squareArr.push(squareArr2)}
  }
  return squareArr;  
  }
  console.log(squareNumbersBackwards());