const filter = require("../filter.js");
const items = [1,2,3,4,5,5];

const res=filter(items,((values)=>{
    return values%2==0;
}))
console.log(res)