
function mySplice(arr1, arr2, n) {
    arr1.reverse();
    arr2.splice(n, 0, ...arr1);
  return arr2;
}
console.log(mySplice(["b", "c"], ["a", "d"], 1));
module.exports = mySplice;