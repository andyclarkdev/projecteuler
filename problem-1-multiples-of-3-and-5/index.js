function sumBelow(below, sum, counter) {
  if (counter >= below) return sum;
  
  const isMultiple = counter % 3 === 0 || counter % 5 === 0;
  
  sum = sum + (isMultiple || 0);
  
  return sumBelow(below, sum, counter++);
}
