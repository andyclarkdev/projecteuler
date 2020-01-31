function sumMultiplesOfThreeAndFive(below, sum, counter) {
  if (counter >= below) {
    return sum;
  }
  
  // set the sum and counter if not supplied
  sum  = sum > 0 ? sum : 0;
  counter = counter > 0 ? counter : 0;
  
  const isMultiple = counter % 3 === 0 || counter % 5 === 0;
  
  return sumMultiplesOfThreeAndFive(below, sum + (isMultiple ? counter : 0), counter + 1);
}

function sumBelow() {
  let below = document.getElementById('below').value + 0;
  below = below > 0 ? below : 0;
  
  const start = new Date();
  
  const sum = sumMultiplesOfThreeAndFive(below);
  
  const end = new Date();
  const diff = Math.abs(end - start) / 1000;
  
  document.getElementById('answer').innerHTML = sum;
  document.getElementById('timeToRun').innerHTML = diff;
}
