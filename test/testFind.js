const find = require("../find.js");
const items = [1,2,3,4,5,5];

const result=find(items,((value) => {
    return value%5==0
}))
console.log(result);