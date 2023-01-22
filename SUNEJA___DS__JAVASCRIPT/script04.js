console.log("hello world!");
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8];

function isUnicque(arr) {
  let UnicqueArr = [...arr];

  let i = 0;

  // for(let items of arr){

  //         if(!UnicqueArr.includes(items)){
  //             UnicqueArr.push(items);

  //         if(!(UnicqueArr.indexOf(items)!==-1){
  //              UnicqueArr.push(items);
  //         for(let i=0;i>=UnicqueArr.length;i++){
  //             if(!(items==UnicqueArr[i])){
  //                 UnicqueArr.push(items);
  //             }

  //         }

  for (let j = 1; j < UnicqueArr.length; j++) {
    //  console.log(UnicqueArr[i]);
    //  console.log('vs');
    //  console.log(UnicqueArr[j]);
    //  console.log('Next!')
    if (UnicqueArr[i] !== UnicqueArr[j]) {
      i++;
      UnicqueArr[i] = UnicqueArr[j];
    }
  }

  return i + 1;
}

console.log(isUnicque(arr));
