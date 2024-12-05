let reduce = require("../reduce.js");
const items = [1,2,3,4,5,5];
// Doing multiplication to check call back
const result=reduce(items,((accumulator,currentValue) => {
    return accumulator+currentValue;
}),10);

console.log(result)