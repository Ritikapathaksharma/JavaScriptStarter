console.log("hello world!");
let user = [
  { userName: "sunejaajay", email: "s@d541 " },
  { userName: "vbn", email: "s@d=54---1 " },
  { userName: "kjhgfd", email: "s@d=541" },
];

function isExist(arr, name01) {
  for (let item of arr) {
    if (item.userName === name01) {
      return true;
    }
  }
  return false;
}
console.log(isExist(user, "vbn01"));
