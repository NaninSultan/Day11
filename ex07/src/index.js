var arr1 = [
    [13,27,18,26],
    [4,5,1,3],
    [32,35,37,39],
    [1000,1001,857,1]
];
var arr2 = [
    [4,9,1,3],
    [13,35,18,26],
    [32,35,97,39],
    [1000000,1001,857,1]
];
var arr3 = [
    [17,23,25,12],
    [25,7,34,48],
    [4,10,18,21],
    [72,3,17,10]
];
function largestNumberFromArr(arr) {
    var maxNumArray = [];
    var myArray = [...arr];
    for (var i = 0; i < myArray.length; i++) {
            maxNumArray.push(Math.max(...myArray[i]));

        }
        return maxNumArray;
    }
console.log(largestNumberFromArr(arr1));
module.exports = largestNumberFromArr;