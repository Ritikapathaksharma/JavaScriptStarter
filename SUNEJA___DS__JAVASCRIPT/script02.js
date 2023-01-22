console.log('hello world;');

let str1 = 'hello';
let str2 = 'ellho';

function isX(str1,str2){
    if(!str1.length==str2.length){
        return false;
    }
let counter= {};
for(letter of str1){
counter[letter]=(counter[letter] ||0)+1;
   
}
for(letter of str2){
    if(!counter[letter]){
        return false;
    }
    counter[letter]=(counter[letter] ||0)-1;
}
return true;
}
console.log(isX(str1,str2));
