console.log('hello world!');

let arr =[8,6,5,3,4];


function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let cur = arr[i];
       let j=i-1;
        while(i>=0 && arr[j]>cur){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=cur;
    }
    return arr;
}
console.log(insertion(arr));