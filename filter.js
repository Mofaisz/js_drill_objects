function filter(elements, cb) { 
  // Initialize an empty array result
  const result = [];
  for (let index = 0; index < elements.length; index++) {
        
    // Check if the current element satisfies the condition defined in the callback function
    if (cb(elements[index])) {
      result.push(elements[index]);
    }
  }
  return result;
}

// Exports for further use
module.exports = filter;
