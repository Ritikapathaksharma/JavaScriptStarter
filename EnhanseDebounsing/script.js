// console.log("hello world!");
// let timeout;
// function debounce(func, delay) {
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.call(this, ...args);
//     }, delay);
//   };
// }

function leadingDebouncing(func, dealy){
  let timeoutId = null;
  return function (...arg){
   
    if(timeoutId===null){
      func.call(this,...arg);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() =>{
     timeoutId=null;
    },dealy)
  };
}

//trailling debounching

// let inputEvent = document.getElementById("myInput");
// function findSuggestions(e) {
//   console.log("find sugggestion for  " + e.target.value);
// }

// const cdecoratorFun = debounce(findSuggestions, 300);

// inputEvent.addEventListener("input", cdecoratorFun);

let clickEvent = () => {
  console.log("hello world!");
  console.log(Math.random());
};

let myButton = document.getElementById("myButton");
myButton.addEventListener("click", leadingDebouncing(clickEvent, 600));































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
