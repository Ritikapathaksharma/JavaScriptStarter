console.log('hello world!');

const arr =[-5,-4,-3,0,2,3];
function isSum(arr){


// for (let index01 = 0; index01 < arr.length; index01++) {
//     let element = arr[index01];
//     for(let index02 = 1;index02<arr.length;index02++){
//      if((element+arr[index02])==0){
//          return[element,arr[index02]];
         
//      }
//     }
    
// }
let left = 0;
let right = arr.length-1;

while(left<right){
   sum=arr[left]+arr[right];
   console.log(arr[left],arr[right],sum);
   
    if(sum===0){
        return [arr[right],arr[left]];
    }else if(sum>0){
        right--;
    }else{
        left++;
    }
}

}
const result = isSum(arr);
console.log(result);