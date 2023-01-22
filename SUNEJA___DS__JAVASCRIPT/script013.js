console.log("hello world!");

let arr01 = [8,1,2,4,3,5,6,7];

function sort(arr) {


  for (let i = arr.length; i > 0; i--) {
    let isSwapped;
console.log(i);
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped=true;
      }
      
    }
    if(!isSwapped){
        break;
    }
  }
  return arr;
}
console.log(sort(arr01));
