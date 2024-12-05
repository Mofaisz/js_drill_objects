function find(elements, cb) {
    // Loop through each element in the elements array
    for (let index = 0; index < elements.length; index++) {
        
        // Check if the current element satisfies the condition defined in the callback function (cb)
        if (cb(elements[index])) {
            // If a match is found, return the element and its index as a string
            return `${elements[index]}, index ${index}`;
        }
    }
    // If no match is found, return 'undefined'
    return undefined;
}

// Export the `find` function to be used in other files/modules
module.exports = find;
