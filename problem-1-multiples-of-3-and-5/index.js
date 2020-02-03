// need noprotect to prevent 'too much recursion' or 'possible infinite loop' errors/warnings
// noprotect

function recursiveSum(below, sum, counter) {
  if (counter >= below) {
    return sum;
  }
  
  // set the sum and counter if not supplied
  sum  = sum > 0 ? sum : 0;
  counter = counter > 0 ? counter : 0;
  
  const isMultiple = counter % 3 === 0 || counter % 5 === 0;
  
  return recursiveSum(below, sum + (isMultiple ? counter : 0), counter + 1);
}


function loopSum(below) {
  //const arr = [];
  
  //for (let counter = 1; counter < below; counter++) {
    //if (counter % 3 === 0 || counter % 5 === 0) {
      //arr.push(counter);
    //}
  //}
  
  //return arr.reduce((a,b) => a + b, 0);
  let sum = 0;
  
  for (let counter = 1; counter < below; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum = sum + counter;
    }
  }
  
  return sum;
}

function sum1() {
  const below = document.getElementById('below1').value;
  const start = new Date();
  
  const sum = recursiveSum(below, 0 , 1);
  
  const end = new Date();
  const diff = Math.abs(end - start) / 1000;
  
  document.getElementById('answer1').innerHTML = sum;
  document.getElementById('timeToRun1').innerHTML = diff;
}

function sum2() {
  const below = document.getElementById('below2').value;
  const start = new Date();
  
  const sum = loopSum(below);
  
  const end = new Date();
  const diff = Math.abs(end - start) / 1000;
  
  document.getElementById('answer2').innerHTML = sum;
  document.getElementById('timeToRun2').innerHTML = diff;
}

