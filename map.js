// The `map` function iterates over an array of elements and applies a callback function (cb) to each element
function map(elements, cb) {
  
  // Loop through each element in the 'elements' array using its index
  for (let index = 0; index < elements.length; index++) {
    
    // Apply the callback function to the current element
    cb(elements[index]);
  }
}

// Export the `map` function to further used
module.exports = map;
