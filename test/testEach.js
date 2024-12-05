const each =require("../each.js");
const items = [1, 2, 3, 4, 5, 5];

//Calling each function and defining a callBack function
each(items, ((value) => {
    console.log(value)
}))