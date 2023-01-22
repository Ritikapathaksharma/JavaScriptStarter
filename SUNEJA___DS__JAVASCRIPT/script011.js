console.log('hello world!');

let arr = [1,2,3,4,5,6,7,8,9,10];

function isOdd(arr) {
let oddArr  =[];
function helperOdd(arr){
    if(arr.length===0){
       
        return;
    }else if(arr[0]%2!==0){
        oddArr.push(arr[0]);
       
    }
    helperOdd(arr.slice(1));
   
}
helperOdd(arr);
return oddArr;
}
console.log(isOdd(arr));