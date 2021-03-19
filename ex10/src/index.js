
function mySplice(arr1, arr2, n) {
    var myArray = arr2.slice();
    arr1.reverse();
    myArray.splice(n, 0, ...arr1);
  return myArray;
}
console.log(mySplice([1,2,3], [4,5], 2));
module.exports = mySplice;