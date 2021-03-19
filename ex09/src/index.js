var myArray = [null, NaN, 1, 2, undefined];
function myBouncer(arr) {
    return arr.filter(value => !!value);
}
console.log(myBouncer(myArray));
module.exports = myBouncer;