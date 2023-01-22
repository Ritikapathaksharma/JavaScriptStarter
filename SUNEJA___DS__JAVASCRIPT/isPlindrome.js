console.log('hello world!');


let isPlindrome=(str,l,r)=>{
    if(l>=r){
        return true;
    }
    if(str[l]!==str[r]){
        return false;
    }
    return isPlindrome(str,l+r,l-r);
}


console.log(isPlindrome("abb",0,3));