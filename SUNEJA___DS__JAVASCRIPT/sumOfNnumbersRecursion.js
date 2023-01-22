var recursion = {
  sumOfNumbers(n) {
    if (n === 1) {
      return n;
    }

    return (n+recursion.sumOfNumbers(n-1));
  },
  power(a,b){
      if(b===0){return 1}
      return (a*recursion.power(a,b-1));
  },
  howManyWaysInMatrix(m,n){

console.log("qwerfghj")
      if(m==1||n==1){
          return 1;
      }
      
      return (recursion.howManyWaysInMatrix(m,n-1)+recursion.howManyWaysInMatrix(m-1,n));
  },
  deathGame(player,rule){
      if(player==1){
          return 0;
      }
      return (recursion.deathGame(player-1,rule)+rule)%player;
  }
};

// console.log("Sum of n numbers   "+recursion.sumOfNumbers(5));
// console.log("power   "+recursion.power(2,5));
// console.log("howManyWaysInMatri  "+ recursion.howManyWaysInMatrix(3,9));
console.log("howManyWaysInMatri  "+ recursion.deathGame(5,3));

// var argument1 = {
//     myvar : "12",
//     mymethod : function() { return something; }
// }

// console.log(argument1.mymethod());

// let myObj = {
//   myMethod(params) {
//     return params + 1;
//   },
//   myOtherMethod(params) {
//     return params + 2;
//   },
//   nestedObj: {
//     myNestedMethod(params) {
//       return params + 3;
//     },
//   },
// };

// console.log(myObj.myMethod(2));
