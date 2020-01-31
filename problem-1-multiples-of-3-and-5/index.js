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

//const below = 1000;
//const start = new Date();
//console.log(`Sum of Multiples of 3 and 5 below ${below}: ${sumMultiplesOfThreeAndFive(below)}`);
//const end = new Date();
//console.log(`Time to run: ${Math.abs(end - start) / 1000} milliseconds`);
