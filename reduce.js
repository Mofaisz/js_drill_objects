function reduce(elements, cb, startingValue) {
  /*
    if the starting value is provided accumulator will be starting value
    otherwise it would be first element ofarray 
     */
  let accumulator = startingValue != undefined ? startingValue : elements[0];

  // Iterate over the elements
  for (let index = 0; index < elements.length; index++) {
    //updating accumulator everytimes when callbacks get called
    accumulator = cb(accumulator, elements[index]);
  }
  //return the final value of accumulator
  return accumulator;
}

module.exports = reduce;
