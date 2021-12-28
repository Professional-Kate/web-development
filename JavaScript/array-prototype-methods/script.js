// 0.44 seconds
const array = require("./array");

// 0.802 seconds
const arrayFilter = function () {
  array.filter((element) => element * 2);
};

// 0.561 seconds
const arrayForEach = function () {
  array.forEach((element) => element * 2);
};

// 0.568 seconds
const arrayMap = function () {
  array.map((element) => element * 2);
};

// 0.444 seconds
const arrayFor = function () {
  for (let i = 0; i <= array.length; i++) {}
};

// 2.658 seconds
const arrayForIn = function () {
  for (let element in array) {
  }
};

// 0.537 seconds
const arrayForOf = function () {
  for (let element of array) {
  }
};

// 0.441 seconds
const arrayWhile = function () {
  let length = array.length;

  while (length--) {}
};

arrayMap();
// arrayForEach();
// arrayFilter();
// arrayFor();
// arrayForIn();
// arrayForOf();
// arrayWhile();
