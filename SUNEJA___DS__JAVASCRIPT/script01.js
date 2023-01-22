console.log('hello world!');

const arr01 = [-1,-5,5,6,-7,-9,-10];


function isSumSubArray(arr){
let cursum = 0;
let maxsum = 0;
let curArr = [];
let maxArr;
for(let i=0; i<arr.length; i++){
    cursum = cursum+arr[i];
    curArr.push(arr[i]);
    if(cursum>maxsum){
    maxsum=cursum;
    maxArr = [...curArr];
     
    }
    if(cursum<0){
        cursum=0;
      curArr = [];
    }
 
}

return [maxsum,maxArr];
}
console.log(isSumSubArray(arr01));

