console.log("hello woeld!");

let str = "redivider";

function isPlindrome(str) {
  left = 0;
  right = str.length - 1;
  while (right > left) {
    if (str[left] !== str[right]) {
      return false;
      
    }
    left++;
    right--;
   
  }
  return true;
}

console.log(isPlindrome(str));
