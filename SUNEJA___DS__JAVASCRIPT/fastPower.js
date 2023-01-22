console.log("hello world");

function fastPower(a,b){
let res=1;
let i = 1;
    while(b>0){
      console.log("this is loop number   "  + i);
   
      if((b&1)!=0){
         res = res*a;
         console.log("if else condition true and b is odd and res is  "+  res + "   and b   " + b + "   and a    " + a );
        
      } 
      a=a*a;
      console.log("after loop number  "+ i + "  a*a is   "+ a);
      b=b>>1;
      console.log("after loop number  "+ i + "  b/2 is   "+ b);

      console.log("after loop number  "+  i  + "  and res is    " + res + "  and b   " + b + "  and a  " + a );
      i++;
    }
return res;
}

console.log(fastPower(5,8));
console.log("hello world");