var myNestedArray = [["Toblerone", 5], ["Milka", 3]];
function myNestedFunction(arr) {
    var nestedArray = [...arr];
    return nestedArray;

}
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;