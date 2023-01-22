console.log('hello world!');


let  powerSubsetOfString=(str,i,cur)=>{
    if(i===str.length){
        console.log(cur);
        return;
    }

powerSubsetOfString(str,i+1,cur+str[i]);
powerSubsetOfString(str,i+1,cur);
}
let cur="";

console.log(powerSubsetOfString("abc",0,cur));


