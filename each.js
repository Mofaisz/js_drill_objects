// function for forEach
function each(elements, cb) {
  // iterating over the value of index
  for (let index = 0; index < elements.length; index++) {
    // calling a callback function
    cb(elements[index]);
  }
}

// Exports each(function) for further use
module.exports = each;
