// 0.44 seconds
const array = require("./array");

// 0.828 seconds
const arrayFilter = function () {
  const newArr = array.filter((element) => element * 2);
};

// 0.574 seconds
const arrayForEach = function () {
  const newArr = array.forEach((element) => element * 2);
};

// 0.542 seconds
const arrayMap = function () {
  const newArr = array.map((element) => element * 2);
};

// 0.858 seconds
const arrayFor = function () {
  const newArray = [];
  for (let i = 0; i <= array.length; i++) {
    newArray.push(array[i] * 2);
  }
};

// 2.91 seconds
const arrayForIn = function () {
  const newArray = [];
  for (let element in array) {
    newArray.push(element);
  }
};

// 0.833 seconds
const arrayForOf = function () {
  const newArray = [];
  for (let element of array) {
    newArray.push(element);
  }
};

// arrayMap();
// arrayForEach();
// arrayFilter();
// arrayFor();
// arrayForIn();
// arrayForOf();
