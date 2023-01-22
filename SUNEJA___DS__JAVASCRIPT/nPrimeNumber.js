console.log('hello world!');

let nPrimeNumber= (n) =>{

let array = Array(n);
array.fill(true,0,n);
array[0]=false;
array[1]=false;
for(i=2;i*i<=n;i++){
    console.log(i+ "                                      outeer loop");
    for(j=2*i;j<=n;j+=i){
        console.log(j+ "      inner loop");
        array[j]=false;
    }
}
return array;
}
let res=nPrimeNumber(100);
// for(let i=0;i<=res.length;i++){
//     console.log(res[i]+"    is   "+i);
// }

