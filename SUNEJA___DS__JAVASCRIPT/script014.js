console.log('hello world!');

let arr01 = [0,52,45,23,65,7];


function short(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1; j<arr.length;j++){
          if(arr[j]<arr[min]){
              min=j;
          }
        }
        if(min!==i){
            temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    console.log(arr);
    return arr;

}

console.log(short(arr01));