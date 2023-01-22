const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 10, 11];
function index(arr, num) {
  let min = 0;
  let max = Math.floor(arr.length - 1);
  while (min <= max) {
    let minIndex = Math.floor((min + max) / 2);
    if (arr[minIndex] < num) {
      min = minIndex +   1;
    } else if (arr[minIndex] > num) {
      max = minIndex - 1;
    } else {
      return minIndex;
    }
  }
}

console.log(index(arr, 11));
