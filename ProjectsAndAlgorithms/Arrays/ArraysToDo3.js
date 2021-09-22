// #1
//#take out remove function
function removeNegatives(arr) {
    for (var x = 0; x < arr.length; x++ ) {
        if (arr[x] < 0) {
            arr[x].remove
        }
    }
    return arr
}
console.log(removeNegatives([56,56,-3,-3,-90,34,12]))