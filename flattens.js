// The `flatten` function takes an array of elements and recursively flattens any nested arrays
function flatten(elements) {

  // Initialize an empty array to store the flattened values
  let result = [];

  // Loop through each element in the 'elements' array
  for (let value of elements) {
    
    // Check if the current element is an array
    if (Array.isArray(value)) {
      // If the element is an array, recursively flatten it and concatenate to the result
      result = result.concat(flatten(value));
    } else {
      // If the element is not an array, simply add it to the result
      result.push(value);
    }
  }

  // Return the flattened array
  return result;
}

// Export the `flatten` function to be used in other files/modules
module.exports = flatten;
