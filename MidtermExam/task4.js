const memo = {};
function power(base, exp) {
    //Code Here
  let power = 1;
  for (let i = 0; i < exp; i++) {
    power *= base;
  }
  return power;
}
let base = 2;
let exp = 5;
let result = power(base, exp);

//Test Code
console.log(power(2,5));
console.log(power(2, -2));