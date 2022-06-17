function hasTargetSum(array, target) {

  for(let i = 0; i < array.length; i++){
     let number = target - array[i];

     for(let j = 0; j < array.length; j++) {

        if (array[j] === number && i != j) 

          return true
     }
        
   
  }
    return false

}
/* 
  The function will use quadratic time complexity since it is looping twice.
*/

/* 
  function
  for loop 1
  for loop 2
  equality operator
*/

/*
  To get two numbers within the array that add up to the target, I need to loop twice. The first loop will loop through the array and return a number. The second loop will be nested in the array and will return another number. the two numbers should be equal to target.
  [3,7] = 10
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

console.log(module.exports = hasTargetSum)
