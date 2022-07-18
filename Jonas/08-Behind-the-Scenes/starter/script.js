'use strict';

const addExpr = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(1, 2));
