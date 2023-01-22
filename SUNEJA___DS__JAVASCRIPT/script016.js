console.log("hello world!");

function largestCh(string) {
  let map = {};
  let max=0;
  let char;
  for (let letter of string) {
    map[letter] = (map[letter] || 0) + 1;
  }
  for(let key in map){
      if(map[key]>max){
      max=map[key];
       char = key;
      }
  }
  console.log(map);
  return [max,char];
}

console.log(largestCh("hello world"));
