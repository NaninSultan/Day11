var myArray = [
    [2],
    [5,6,7],
    [8,9]
];
function multiplyArrayFunction(myArray) {
    var myArray = [...myArray];
    var arr = [];
    var sum = 0;
    var product = 1;
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[i].length; j++) {
            sum += myArray[i][j];
            product *= myArray[i][j];
        }
    }
    arr.push(product, sum);
    return arr;
}
console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;