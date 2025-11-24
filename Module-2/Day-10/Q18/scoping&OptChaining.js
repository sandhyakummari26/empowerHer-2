// a) Output and explanation
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); 
console.log(x);

// b) Optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 

// c) Example: runtime error prevented
const obj = {};
console.log(obj.a?.b?.c); 