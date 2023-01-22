console.log("hello world!");
let timeout;
function debounce(func, delay) {
    return function (...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func.call(this, ...args);
      }, delay);
    };
  }
  
  
  

let inputEvent = document.getElementById("myInput");
function findSuggestions(e) {
  console.log("find sugggestion for  " + e.target.value);
}



const cdecoratorFun = debounce(findSuggestions, 300);

inputEvent.addEventListener("input", cdecoratorFun);





























/*decorator 
function decorator(func){
    console.log('hi you called me');
    return function(...arg){
        func.call(this,...arg);
    }
    
}

function func(n){
    console.log("hello world! "+ n);
    return n;
}
// console.log(func(6));

let decoratorFunc = decorator(func);
decoratorFunc("harshitSIR"); */
