console.log("hello world!");
let arr = [1,2,6,3,3,5,6,4,5];
let i = 0;
let j = 1;
myNewList=[];

function isShorted(arr) {
  for(let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function shorted(arr) {
  if(isShorted(arr)) {
    myNewList=arr;
    return;
  } else if(arr[i] <= arr[j]) {
    i++;
    j++;
    shorted(arr);
  } else {
    [arr[i], arr[j]] =[arr[j], arr[i]];
    i = 0;
    j = 1;
    shorted(arr);
  }

}
shorted(arr);
console.log(myNewList);
