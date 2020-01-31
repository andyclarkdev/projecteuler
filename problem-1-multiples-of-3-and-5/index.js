function sumMultiplesOfThreeAndFive(below, sum, counter) {
  if (counter >= below) {
    return sum;
  }
  
  // set the counter and sum if not supplied
  counter = counter > 0 ? counter : 0;
  sum  = sum > 0 ? sum : 0;
  
  const isMultiple = counter % 3 === 0 || counter % 5 === 0;
  sum = sum + (isMultiple ? counter : 0);
  
  return sumMultiplesOfThreeAndFive(below, sum, counter + 1);
}

function sumBelow() {
  const below = document.getElementById('below').value;
  const start = new Date();
  
  const sum = sumMultiplesOfThreeAndFive(below);
  
  const end = new Date();
  const diff = Math.abs(end - start) / 1000;
  
  document.getElementById('answer').innerHTML = sum;
  document.getElementById('timeToRun').innerHTML = diff;
}
