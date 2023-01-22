let arr =[1,2,3,4,5,6,7,8,9,10,2,5,3,4];


function largestSum(arr,num){
    let maxsum=0;
for(let i=0;i<=arr.length-num+1;i++){
  let temp=0;
   for(let j=0;j<=num;j++){
       temp +=arr[i+j];
   }
   if(temp>maxsum){
    maxsum=temp;
}
}
return maxsum;

}

console.log(largestSum(arr,4));