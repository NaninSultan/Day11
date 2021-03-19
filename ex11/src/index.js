function splitArrayInGroups(arr, n) {
    var result = [];
    while (arr.length > n) {
        result.push(arr.splice(0, n))
    }
    if (arr.length)
        result.push(arr);

    return result;
}
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
module,exports = splitArrayInGroups;
