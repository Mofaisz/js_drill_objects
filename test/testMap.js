const map = require("../map.js");
const items = [1, 2, 3, 4, 5, 5];

const result = [];
//calling map(function) after importing and a callback function
map(items, (value) => {
  result.push(value);
  if (result.length === items.length) {
    console.log(result);
  }
});
