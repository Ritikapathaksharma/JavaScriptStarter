console.log('hello world');
num=4;
function findIthBit(n,i){
let mask=n<<i;
console.log(mask);
let res=n&(mask);
console.log(res);
if(res===0){
return true;
}else{
    return false;
}
}

console.log(findIthBit(num,2));