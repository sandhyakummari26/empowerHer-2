function multiply(a, b) {
  return a * b;
}
const multiplyArrow = (a = 1, b = 1) => a * b;
console.log(multiplyArrow(3, 4)); 
console.log(multiplyArrow());    
