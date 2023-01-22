
console.log('hello world!')
let arr1 = [2,1,3,4,5,];
let arr2 = [4,1,16,25,9];

function isSquare(arr1,arr2){
    for(items of arr1){
      let  square = false;
      for(let i=0;i<=arr2.length;i++){
          if(items*items===arr2[i]){
              square=true;
          }else if(i===arr2.length-1){
          if(!square){
            return false;
          }
        }
      }
      
    }
    return true;

}
console.log(isSquare(arr1,arr2));