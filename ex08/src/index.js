var arr1 = ["Noel", "Ole"];
function myMutation(arr) {
    var myArray1 = arr[0].toLowerCase().split("");
    var myArray2 = arr[1].toLowerCase().split("");
    var count = 0;
    for (var i = 0; i < myArray2.length; i++) {
        if (myArray1.indexOf(myArray2[i]) > -1) {
            count++;
        }
    }
    if (count == myArray2.length) {
        return true
    }
    else { 
        return false; 
    }
}
console.log(myMutation(arr1));
module.exports = myMutation;