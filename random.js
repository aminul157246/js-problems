// Returns a random number:
console.log(Math.random()); 


// Returns a random integer from 0 to 9:
console.log(Math.ceil(Math.random() * 10));


// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);


// This JavaScript function always returns a random number between min (included) and max (excluded):
function getWithoutMax(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  console.log(getWithoutMax(1,6));   // not print 6 but 1



//   This JavaScript function always returns a random number between min and max (both included):
function getWithMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getWithMax(1,6));  // print 6 also 1 