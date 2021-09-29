// #1
function removeNegatives(arr) {
    for (var x = 0, i = 0, z = arr.length; x < z; x++  ) {
        if (arr[x] >= 0) {
            arr[i++] = arr[x]
        }
    }
    arr.length = i
    return arr
}
console.log(removeNegatives([56,22,-3,-36,-90,34,12]))

// #2 
function secondToLast(arr) {
    for (var x = 0; x < arr.length; x++  ) {
        if (arr[x] != String ) {
            arr[x++] = arr[x]
        }
    }
    return arr
}
console.log(secondToLast([42,true,4,"Kate",7]))
