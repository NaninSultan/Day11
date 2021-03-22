var arr1 = [
    [13,27,18,26],
    [4,5,1,3],
    [32,35,37,39],
    [1000,1001,857,1]
];
function largestNumFromArr(arr) {
    var maxNumArray = [];
    var myArray = [...arr];
    for (var i = 0; i < myArray.length; i++) {
            maxNumArray.push(Math.max(...myArray[i]));

        }
        return maxNumArray;
    }
console.log(largestNumFromArr(arr1));
module.exports = largestNumFromArr;